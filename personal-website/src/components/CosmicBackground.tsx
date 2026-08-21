'use client';

/**
 * Drifting starfield, drawn only in dark mode and painted strictly behind
 * content.
 *
 * Why it sits on a negative layer instead of z-0: a fixed element with
 * `z-index: 0` is still a *positioned* element, and positioned elements paint
 * after the in-flow content of their siblings. The canvas therefore used to
 * draw its stars on top of every section's text, which is what made the effect
 * read as "covering the writing". A negative layer is the only placement where
 * a full-screen overlay can stay decorative rather than intrusive.
 *
 * Why the page background had to become transparent: a negative z-index paints
 * above the root element's background but below the background of every
 * block-level descendant, so an opaque `body` gradient would hide the canvas
 * completely. The gradient now lives on `html` and the hero keeps a translucent
 * surface, so the starfield shows through exactly where it is wanted and is
 * fully occluded everywhere text is dense.
 *
 * Why the canvas is sized by devicePixelRatio: the backing store used to be
 * allocated in CSS pixels and then stretched to physical pixels, so on a 4K or
 * Retina panel every sub-pixel star was resampled into a soft blob. Allocating
 * dpr-scaled pixels and scaling the context keeps small stars crisp at any
 * display density. The ratio is capped at 2 because beyond that the extra
 * backing store costs fill rate without a visible gain.
 *
 * Why the star count is derived from viewport area: a fixed count is dense on a
 * laptop and sparse on a 32-inch monitor. Deriving it from area holds perceived
 * density roughly constant across displays, and the clamp keeps both extremes
 * bounded.
 *
 * Why clearRect replaced the old trail fill: the previous loop painted
 * rgba(0, 0, 0, 0.1) over the full canvas every frame and never cleared it, so
 * the accumulated alpha converged towards opaque black and produced a permanent
 * grey haze. Clearing each frame keeps the canvas transparent except for the
 * stars.
 */

import React, { useEffect, useRef } from 'react';

const STARS_PER_MEGAPIXEL = 90;
const MIN_STARS = 90;
const MAX_STARS = 420;
const MAX_PIXEL_RATIO = 2;

type Star = { x: number; y: number; size: number; speed: number; alpha: number };

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frame = 0;
    let stars: Star[] = [];
    let cssWidth = 0;
    let cssHeight = 0;

    const setCanvasSize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
      cssWidth = window.innerWidth;
      cssHeight = window.innerHeight;
      canvas.width = Math.round(cssWidth * ratio);
      canvas.height = Math.round(cssHeight * ratio);
      // All drawing below is expressed in CSS pixels; the transform maps them
      // onto the higher-resolution backing store.
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const seedStars = () => {
      const megapixels = (cssWidth * cssHeight) / 1_000_000;
      const count = Math.round(
        Math.min(MAX_STARS, Math.max(MIN_STARS, megapixels * STARS_PER_MEGAPIXEL)),
      );
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * cssWidth,
        y: Math.random() * cssHeight,
        size: Math.random() * 1.1 + 0.35,
        speed: Math.random() * 0.32 + 0.05,
        alpha: Math.random() * 0.5 + 0.25,
      }));
    };

    const paint = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);
      for (const star of stars) {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      for (const star of stars) {
        star.y += star.speed;
        if (star.y > cssHeight) {
          star.y = 0;
          star.x = Math.random() * cssWidth;
        }
      }
      paint();
      frame = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      ctx.clearRect(0, 0, cssWidth, cssHeight);
    };

    const start = () => {
      stop();
      if (!darkQuery.matches) return;
      setCanvasSize();
      seedStars();
      if (motionQuery.matches) {
        paint();
        return;
      }
      frame = requestAnimationFrame(animate);
    };

    const onResize = () => {
      if (!darkQuery.matches) return;
      setCanvasSize();
      seedStars();
      if (motionQuery.matches) paint();
    };

    start();
    window.addEventListener('resize', onResize);
    darkQuery.addEventListener('change', start);
    motionQuery.addEventListener('change', start);

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      darkQuery.removeEventListener('change', start);
      motionQuery.removeEventListener('change', start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 hidden dark:block"
      style={{ opacity: 0.45 }}
    />
  );
};

export default CosmicBackground;
