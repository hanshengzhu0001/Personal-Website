'use client';

/**
 * Lumenarium feature block.
 *
 * Images are hot-linked from the Lumenarium GitHub Pages site rather than copied
 * into public/. The eight comparison shots total roughly 18 MB; vendoring them
 * would bloat this repository and every Vercel deployment for assets that are
 * already served publicly. A plain <img> is used instead of next/image so no
 * remotePatterns entry is needed in next.config.js.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const ASSETS = 'https://hanshengzhu0001.github.io/Lumenarium/assets';

const METRICS = [
  {
    value: '3.51\u00d7',
    label: 'faster final-stage optimization',
    note: '677.8 s \u2192 192.9 s per scene',
    accent: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    value: '+7.52 pp',
    label: 'physical realizability gain',
    note: '54.58% \u2192 62.10% macro',
    accent: 'text-blue-600 dark:text-blue-400',
  },
  {
    value: '13.83 min',
    label: 'measured single-image \u2192 scene',
    note: 'down from \u224823.8 min',
    accent: 'text-amber-500 dark:text-amber-400',
  },
];

const LIVING_ROOM = [
  { src: `${ASSETS}/comparison_livingroom_input.png`, caption: 'Input photo' },
  { src: `${ASSETS}/comparison_livingroom_v1.png`, caption: 'Baseline V1' },
  { src: `${ASSETS}/comparison_livingroom_v3.png`, caption: 'Support-aware V3' },
  { src: `${ASSETS}/comparison_livingroom_v5.png`, caption: 'Lumenarium V5' },
];

const OFFICE = [
  { src: `${ASSETS}/comparison_office_input.png`, caption: 'Input photo' },
  { src: `${ASSETS}/comparison_office_v1.png`, caption: 'Baseline V1' },
  { src: `${ASSETS}/comparison_office_v3.png`, caption: 'Support-aware V3' },
  { src: `${ASSETS}/comparison_office_v5.png`, caption: 'Lumenarium V5' },
];

const LINKS = [
  { href: 'https://hanshengzhu0001.github.io/Lumenarium/', label: 'Project page', primary: true },
  { href: 'https://embedding.lightart.qq.com/', label: 'Try the hosted system', primary: true },
  { href: 'https://www.bilibili.com/video/BV1tpbD6hERB/', label: 'Demo video', primary: false },
  { href: 'https://github.com/hanshengzhu0001/Lumenarium', label: 'GitHub', primary: false },
];

const CONTRIBUTIONS = [
  {
    tag: 'SceneLM',
    title: 'Optimize only what is implicated',
    body:
      'Support, collision, plane and semantic constraints are compiled into explicit factors. '
      + 'Instead of annealing the whole room for 5,000 steps, the solver updates only the objects '
      + 'and degrees of freedom touched by violated relations, then eliminates safe leaf variables exactly.',
    ring: 'border-emerald-400/60 dark:border-emerald-400/40',
  },
  {
    tag: 'SceneProof',
    title: 'A proposal is not a commit',
    body:
      'Every candidate edit must carry mesh-collision, contact, centre-of-mass and family-level '
      + 'non-regression evidence before it is accepted. Failed candidates restore the previous state, '
      + 'and missing evidence is reported as unresolved rather than as silent success.',
    ring: 'border-blue-400/60 dark:border-blue-400/40',
  },
];

function Strip({
  heading,
  shots,
}: {
  heading: string;
  shots: { src: string; caption: string }[];
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="text-lg font-semibold">{heading}</h4>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Input &rarr; V1 &rarr; V3 &rarr; V5
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {shots.map((shot) => (
          <figure key={shot.src} className="m-0">
            <img
              src={shot.src}
              alt={`${heading} \u2014 ${shot.caption}`}
              loading="lazy"
              className="w-full h-40 md:h-44 object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            />
            <figcaption className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const LumenariumFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/40">
                NeurIPS
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                First-author paper in preparation
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Tencent Lightspeed Studios &middot; Summer 2026
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              Lumenarium
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-4">
              One indoor photo &rarr; an editable, physically verified 3D scene
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
              Generative 3D scene systems are good at producing rooms that look right and bad at
              producing rooms an artist can actually open in Blender or Unreal. Lumenarium attacks
              that gap directly: it makes the final optimization stage relation-scoped instead of a
              blind global search, and it refuses to commit any geometric edit that cannot present
              physical evidence for itself.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className={`text-3xl font-bold mb-1 ${m.accent}`}>{m.value}</div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {m.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{m.note}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-10">
              <h3 className="text-xl font-semibold mb-1">Demo</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Single image in, editable scene out, running on the hosted dual-GPU service.
              </p>
              <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1tpbD6hERB&autoplay=0&high_quality=1&danmaku=0"
                  title="Lumenarium demo video"
                  loading="lazy"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                If the embedded player is blocked in your region, open it on{' '}
                <a
                  href="https://www.bilibili.com/video/BV1tpbD6hERB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bilibili
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-10">
              <h3 className="text-xl font-semibold mb-1">Same input, four generations of the system</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                V3 recovers the most objects; V5 produces the most physically usable scene. These are
                renders of the generated scenes, not ground truth.
              </p>
              <Strip heading="Living room" shots={LIVING_ROOM} />
              <Strip heading="Office" shots={OFFICE} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {CONTRIBUTIONS.map((c) => (
                <div
                  key={c.tag}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 ${c.ring} border border-gray-100 dark:border-gray-700`}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    {c.tag}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{c.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{c.body}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
              <h3 className="text-xl font-semibold mb-4">What I built</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    Support-aware reconstruction
                  </span>{' '}
                  &mdash; purely geometric stacking detection and parent verification that correct the
                  vision-language model when it mislabels which object holds up which.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    SceneLM and SceneProof
                  </span>{' '}
                  &mdash; the relation-scoped optimizer and the proof-carrying repair layer, including
                  a matrix-free second-order solver with exact elimination of safe leaf variables.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    Evaluation that declines to guess
                  </span>{' '}
                  &mdash; quantities the pipeline cannot observe are reported as abstentions rather than
                  scored as zeros, and the collision score is published as a lower bound.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    Dual-GPU deployment
                  </span>{' '}
                  &mdash; an end-to-end service with atomic job claiming, crash recovery, frozen-cache
                  reuse and Fast / Medium / Best profiles for technical artists.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    l.primary
                      ? 'inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors'
                      : 'inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors'
                  }
                >
                  {l.label}
                </a>
              ))}
              <span className="inline-flex items-center rounded-lg border border-dashed border-gray-300 dark:border-gray-600 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Paper &middot; coming soon
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Built on the vision-guided reconstruction foundation, asset library and scene-layout
              representation introduced by Imaginarium.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LumenariumFeature;
