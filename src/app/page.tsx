"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import CosmicBackground from '../../personal-website/src/components/CosmicBackground';
import PhotoGallery from '../../personal-website/src/components/PhotoGallery';
import { AnimatedSection } from '../../personal-website/src/components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CosmicBackground />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <AnimatedSection>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Hansheng Zhu
            </motion.h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              AI Engineer & Researcher at UPenn
            </motion.p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <a href="mailto:hanszhu@seas.upenn.edu" className="flex items-center space-x-2 hover:text-blue-600">
                <EnvelopeIcon className="h-5 w-5" />
                <span>hanszhu@seas.upenn.edu</span>
              </a>
              <a href="tel:+14458005280" className="flex items-center space-x-2 hover:text-blue-600">
                <PhoneIcon className="h-5 w-5" />
                <span>(445) 800-5280</span>
              </a>
              <a href="https://github.com/hanshengzhu0001" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-600">
                <GlobeAltIcon className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://huggingface.co/hanszhu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-yellow-500">
                <img src="/huggingface.svg" alt="Hugging Face" className="h-5 w-5" />
                <span>Hugging Face</span>
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      {/* Insert PhotoGallery before the research section */}
      <PhotoGallery />
    </main>
  );
} 