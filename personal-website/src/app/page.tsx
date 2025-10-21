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
              className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              AI Engineer & Researcher at UPenn
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 space-y-2"
            >
              <p>
                <a href="https://pennclubs.com/club/aipenn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">President of AI@Penn</a>
              </p>
              <p>
                <a href="https://ai-analytics.wharton.upenn.edu/about/student-advisory-board/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Member of the Wharton AI Student Advisory Board</a>
              </p>
              <p>
                <a href="https://enchord.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">President of Penn Enchord Acappella</a>
              </p>
            </motion.div>
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
              <a href="https://www.linkedin.com/in/hansheng-zhu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-600">
                <GlobeAltIcon className="h-5 w-5" />
                <span>LinkedIn</span>
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
                <p className="text-gray-600 dark:text-gray-300 mb-2">Aug 2023 - May 2027</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Candidate for Bachelor of Engineering in Computer Science</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Autonomous Robotics, Machine Learning, Signal Processing, Scalable Cloud Computing, Data Structures, 
                    AI Theory, Algorithms, Stochastic Processes, OOP, Computer Vision, NLP, Linear Algebra, 
                    Optimization, Computer Systems (C/C++/C#)
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Campus Involvement:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI@Penn (President), Wharton AI Advisory Board, Penn Enchord Acappella (President)
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
                <h3 className="text-xl font-semibold mb-2">Penn Summer AI Lab Backend Engineer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">University of Pennsylvania | May 2025 - Aug 2025</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Shipped a stateless Flask REST service for element detection in scientific figures with request validation and auth; persisted to Supabase MySQL using indexed schemas and connection pooling for high resiliency</li>
                  <li>Integrated Swin Transformer + R-CNN for enhanced detection capabilities</li>
                </ul>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Software Development Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Astoria AI | Jan 2025 - May 2025</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Built an end-to-end full-stack AI app (career QA) by LoRA-fine-tuning GPT-4-distilled weights into Mistral-7B on AzureML vGPU nodes, regularized to balance accuracy and generalization</li>
                  <li>Delivered responses via a Streamlit frontend using Langfuse and a Chain-of-Reasoning MCP for structuring prompts and evaluation, driving model performance to SOTA and ensuring reproducibility</li>
                </ul>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Deep Learning Research Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Thomas Jefferson University Hospital | Oct 2024 - May 2025</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Engineered a modular frame-processing pipeline for a cerebral DSA classifier (47 runs), including frame resampling and U-Net fine-tuning, with strict schema validation and audit logging for clinical compliance</li>
                  <li>Delivered ~92.5% accuracy in medical image analysis</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      {/* Clubs & Organizations Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Clubs & Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://pennclubs.com/club/aipenn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AI@Penn</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">President</p>
              <p className="text-gray-600 dark:text-gray-300">
                Premier AI student organization at Penn, backed by the Raj and Neera Singh AI Program and the Wharton AI & Analytics Initiative. Dedicated to developing industry-level applications, research and incubating startups in Machine Learning, NLP, and Computer Vision.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://ai-analytics.wharton.upenn.edu/about/student-advisory-board/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wharton AI Advisory Board</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Student Advisory Board Member</p>
              <p className="text-gray-600 dark:text-gray-300">
                Part of a diverse cohort of undergraduate and graduate students who take on leadership roles within their respective student clubs, gathering student feedback and fostering engagement in AI and analytics opportunities.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://enchord.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Penn Enchord Acappella</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">President</p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading Penn's premier co-ed a cappella group, organizing performances, managing logistics, and fostering musical excellence within the university community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Projects</h2>
          
          {/* Top 2 Projects - Featured */}
          {/* DiffusionArt Gen Studio */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/diffusion_gen_studio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DiffusionArt Gen Studio</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Cloud, PyTorch, Agile, GenAI, CoreFlow, Sklearn, Distributed and Parallel System, Scalability</p>
              <p className="text-gray-600 dark:text-gray-300">
                Problem: device-aware multi-GPU text-to-image training in Python → Sol: integrated ml_mdm with torchrun (DDP) + config registries for device placement; orchestrated CoreFlow pipelines; packaged diffusion inference (Flask) on AWS Kubernetes (Horizontal Pod Autoscaling) and served a resilient REST endpoint behind AWS ALB, achieving p95 &lt; 5s @1024×1024/30.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img src="/demos/diffusion-gen-studio/gif1-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 1" className="rounded-lg shadow-md" />
              <img src="/demos/diffusion-gen-studio/gif2-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 2" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* SciChartVision */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/SciChartVision" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SciChartVision</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Computer Vision, RESTful APIs, MySQL, Git, HF Inference Endpoints, TCP/IP, 3D Generation, Linux, CI/CD</p>
              <p className="text-gray-600 dark:text-gray-300">
                Modified a Cascade R-CNN baseline by adding a Swin Transformer backbone and window-size–aligned resolution crops, improving mAP@0.75 IoU from 0.031 → 0.581 (~18.7×) on small/dense elements in scientific figures. Problem: need of Text-to-3D editing → Sol: trained on Objaverse using SLURM-scheduled parallel jobs on Linux nodes. Problem: system reliability & testing rigor → Sol: automated CI/CD and an A/B test harness on a Dockerized HF Space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img src="/demos/scichartvision/demo 1.gif" alt="SciChartVision Demo 1" className="rounded-lg shadow-md" />
              <img src="/demos/scichartvision/demo 2.gif" alt="SciChartVision Demo 2" className="rounded-lg shadow-md" />
              <img src="/demos/scichartvision/demo 3.gif" alt="SciChartVision Demo 3" className="rounded-lg shadow-md" />
              <img src="/demos/scichartvision/demo 4.gif" alt="SciChartVision Demo 4" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/Ethereum_Wallet_Java" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ethereum Wallet in Java</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">PostgreSQL, Java, Linux, Spring Boot, Infura, JavaFX, TCP/IP</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built Spring Boot backend for wallet creation/import and ETH/ERC-20 transfers; deployed on Linux with PostgreSQL. Applied JUnit testing & OOD principles; integrated Web3j + Infura, using Keccak256 hashing & ABI calls for integrity.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Banking System Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">C++, Algorithms, Data Structures, Concurrency, CI/CD, Resiliency, Low-Latency Systems</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built a distributed, TCP/IP client-server system (transfer, merges, payments) with lock-free queues and concurrency control. Added test automation, observability, and CI pipelines (YAML) for resiliency and low-latency under high throughput.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Linked TED Talk Portal</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Java, Apache Spark (RDD), AWS S3, Node.js, Pug/Bootstrap, DynamoDB</p>
              <p className="text-gray-600 dark:text-gray-300">
                Problem: Slow, single-node CSV ingest → Sol: Spark-ranked pipeline with parallel DynamoDB writes for fast lookups. Problem: Weak discovery context → Sol: Joined talks with a Twitter follower graph to add power related-talk navigation.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/cuda-ray-tracer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CUDA Ray Tracer</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">CUDA 12, C++, CMake, Nsight Systems/Compute, Thrust, Git, Linux, AWS g4dn/g5, RTX 4090</p>
              <p className="text-gray-600 dark:text-gray-300">
                Path tracer with SoA, multi-bounce BSDFs, progressive sampling, and Russian-roulette. Result: ~350 MRays/s @1080p. Problem: warp divergence & stalls. Sol: tuned 16×16 kernels, loop unroll, and early termination. Verified with Nsight.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Romi Robot Autonomous Control</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">MATLAB, Simulink, Copilot, Kinematics, Sensor Fusion, Arduino, Model-based Design</p>
              <p className="text-gray-600 dark:text-gray-300">
                Engineered trajectory control (Bezier, pure pursuit) and obstacle avoidance with ODE kinematics + PID in Simulink; deployed to Arduino. Built a test harness with unit tests for code robustness; ran SIL/HIL sims; Git-validated.
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