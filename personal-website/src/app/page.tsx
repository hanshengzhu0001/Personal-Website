"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import CosmicBackground from '../components/CosmicBackground';
import PhotoGallery from '../components/PhotoGallery';
import { AnimatedSection } from '../components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CosmicBackground />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <AnimatedSection>
            <img src="/profile_pic.jpeg" alt="Profile" className="mx-auto rounded-full w-40 h-40 object-cover mb-6 shadow-lg" />
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

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">University of Pennsylvania</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">School of Engineering and Applied Sciences</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Rising Junior • GPA: 3.78</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Candidate for Bachelor of Engineering in Artificial Intelligence
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Machine Learning, Signal Processing, Data Structures and Algorithms, Stochastic Processes, 
                    Artificial Intelligence, Machine Perception, Neural Networks, Brain Computer Interface, OOP
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Penn Summer AI Lab Research Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">University of Pennsylvania | May 2025 - Present</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Worked with Professor Chris Callison-Burch on designing and training a scientific chart detection model that leverages a Swin Transformer backbone with Mask R-CNN for small, dense data points and 21 other chart elements.</li>
                  <li>Deployed a Dense Captioning application on Supabase that lets users select detected elements during voiceover - boosting grounding and visual understanding.</li>
                </ul>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Software Development Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Astoria AI • Jan 2025 - Present</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Designed and optimized LLM-as-a-Judge evaluation pipeline for conversational AI</li>
                  <li>Built scalable frontend modules for talent management platform</li>
                </ul>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Deep Learning Research Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Thomas Jefferson University Hospital • Oct 2024 - Present</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Performed image segmentation on digital subtraction angiograms through neural networks</li>
                  <li>Implemented vision transformer to predict risk of capillary abnormalities</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Alziaid iOS App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Swift, React</p>
                <p className="text-gray-600 dark:text-gray-300">
                Led team of 4 to build a patient monitoring app with real-time health alerts; deployed for 100+ beta users.
                </p>
              </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">MedScanner</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">React, AWS, BioBERT</p>
                <p className="text-gray-600 dark:text-gray-300">
                Full-stack app for drug dosage search and assistance; optimized AWS Lambda functions to handle 500+ daily queries.
                </p>
              </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Plant Disease Detection</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">PyTorch, ResNet</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Trained CNN model for leaf image classification (95% accuracy); can be integrated into open-source agriculture toolkit.
                </p>
              </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Finger Movement Prediction</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Python, CuML, scikit-learn</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed a multiscale high-γ/β feature extraction pipeline with GPU-accelerated Random Forests.
                </p>
              </div>
          </div>
          {/* SciChartVision Project - Individual Section */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/SciChartVision" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SciChartVision</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">AI/ML, VLM, Computer Vision, REST API, SQL, Git, HF Model Inference Endpoints Management</p>
              <p className="text-gray-600 dark:text-gray-300">
                A Dense Captioning platform on Supabase that lets users select and annotate detected chart elements on scientific figures. Built a scientific chart detection model leveraging a Swin Transformer backbone with Mask R-CNN for small, dense data points and 21 other chart elements. <br/>
                <span className="font-medium">Deployed application enables element selection during voiceover, boosting grounding and visual understanding.</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img src="/demo 1.gif" alt="SciChartVision Demo 1" className="rounded-lg shadow-md" />
              <img src="/demo 2.gif" alt="SciChartVision Demo 2" className="rounded-lg shadow-md" />
              <img src="/demo 3.gif" alt="SciChartVision Demo 3" className="rounded-lg shadow-md" />
              <img src="/demo 4.gif" alt="SciChartVision Demo 4" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* Astoria Career App Project - New Card */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Astoria Career App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Python, AzureML, Node.js, TypeScript, Docker, RESTful APIs, CI/CD</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built a career Q&A and mock-interview platform on Kaggle data by LoRA‑finetuning GPT‑4‑distilled weights into Mistral‑7B on Azure ML. Refined responses with Langfuse structured prompts and delivered a Streamlit frontend.
              </p>
            </div>
            <div className="w-full aspect-video mb-10">
              <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/P_kau83ANCE" title="Astoria Career App Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          {/* Plant Disease Detection Project - New Card */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Plant Disease Detection</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">PyTorch, ResNet</p>
              <p className="text-gray-600 dark:text-gray-300">
                Trained CNN model for leaf image classification (95% accuracy); can be integrated into open-source agriculture toolkit.
              </p>
            </div>
          </div>

          {/* Finger Movement Prediction Project - New Card */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Finger Movement Prediction</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Python, CuML, scikit-learn</p>
              <p className="text-gray-600 dark:text-gray-300">
                Developed a multiscale high-γ/β feature extraction pipeline with GPU-accelerated Random Forests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Research</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <p className="text-gray-600 dark:text-gray-300">
                Working with Professor Chris Callison-Burch on building on MOLMO - a family of open state-of-the-art multimodal AI models - 
                applying dense audio captioning and combining ViT-based image encoding with LLM-based decoding.
                </p>
              </div>
          </div>
        </div>
      </section>
      {/* Insert PhotoGallery before the research section */}
      <PhotoGallery />
    </main>
  );
}