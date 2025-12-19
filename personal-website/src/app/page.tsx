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
                <p className="text-gray-600 dark:text-gray-300">
                  For CVPR 2026, shipped a Flask REST service combining Swin and SAM 2 for segmentation/element detection in scientific figures; implemented request validation and indexed schemas with connection pooling in Supabase MySQL for high resiliency.
                </p>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Software Development Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Astoria AI | Jan 2025 - May 2025</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Built an full-stack AI app (career Q&amp;A) by LoRA-fine-tuning GPT-4-distilled weights into Mistral-7B transformer on Azure. Leveraged the Dedalus Labs Gateway to host MCP server and route queries to Claude evaluator for benchmarking. Delivered a customer-facing Streamlit frontend, used Langfuse for observability and Jenkins CI/CD for reliability in production, balanced ACC with generalization.
                </p>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Deep Learning Research Intern</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Thomas Jefferson University Hospital | Oct 2024 - May 2025</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Engineered a production-oriented, frame-processing pipeline for a cerebral DSA classifier (47 runs), including frame resampling and U-Net fine-tuning, with strict schema validation and audit logging for clinical compliance; delivered ~92.5% accuracy.
                </p>
              </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">ACEIB Educational Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Full-Stack EdTech, TypeScript/Vuetify, REST API, MongoDB, Matching Algorithm</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Prob: Optimizing admissions and mentorship pairings for efficiency &amp; outcomes. Sol: Built a full-stack platform (REST API, MongoDB) featuring a weighted multi-attribute matching algorithm, conflict mediation, real-time chat, and a streak calendar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <img src="/demos/aceib-educational-platform/demo 1.png" alt="ACEIB Educational Platform Demo 1" className="rounded-lg shadow-md" />
                  <img src="/demos/aceib-educational-platform/demo 2.png" alt="ACEIB Educational Platform Demo 2" className="rounded-lg shadow-md" />
                  <img src="/demos/aceib-educational-platform/demo 3.png" alt="ACEIB Educational Platform Demo 3" className="rounded-lg shadow-md" />
                  <img src="/demos/aceib-educational-platform/demo 4.png" alt="ACEIB Educational Platform Demo 4" className="rounded-lg shadow-md" />
                </div>
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
              <p className="text-gray-600 dark:text-gray-300 mb-4">PyTorch, Matryoshka Diffusion Model, CoreFlow, Sklearn, Distributed and Parallel System</p>
              <p className="text-gray-600 dark:text-gray-300">
                Prob: parallel text-to-image training on Apple silicon → Sol: integrated ml_mdm with config registries for device placement; packaged inference (Flask) on AWS Kubernetes (Horizontal Autoscaling), achieving p95&lt;80s @1024×1024/30 on CPU.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img src="/demos/diffusion-gen-studio/gif1-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 1" className="rounded-lg shadow-md" />
              <img src="/demos/diffusion-gen-studio/gif2-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 2" className="rounded-lg shadow-md" />
              <img src="/demos/diffusion-gen-studio/gif3-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 3" className="rounded-lg shadow-md" />
              <img src="/demos/diffusion-gen-studio/gif4-ezgif.com-video-to-gif-converter.gif" alt="DiffusionArt Gen Studio Demo 4" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* SciChartVision */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/SciChartVision" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SciChartVision</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Computer Vision, Linux Shell Script, REST APIs, MySQL, Git, HF Inference Endpoint, TCP/IP, 3D Generation</p>
              <p className="text-gray-600 dark:text-gray-300">
                Integrated Cascade R-CNN baseline with Swin Transformer backbone and window-size–aligned resolution crops, using SLURM-scheduled training, improved mAP@0.75 IoU from 0.31 → 0.581 (1.87×) on small/dense elements in scientific figures. Problem: system reliability &amp; testing rigor → Sol: Automated deployment via Jenkins CI/CD to a Dockerized HF Space.
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
              <h3 className="text-xl font-semibold mb-2">MATLAB RAG Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">LangChain, ChromaDB, BGE Embeddings, CodeLlama, Ollama, RAG, Information Retrieval</p>
              <p className="text-gray-600 dark:text-gray-300">
                Problem: Difficulty in learning 12,000+ MATLAB docs for .m programming → Sol: Built RAG pipeline with custom BGE embeddings, hybrid retrieval (dense + sparse), and CodeLlama integration; implemented batch processing for 170K+ chunks; deployed GPU-accelerated Flask API achieving sub-5-second query responses with semantic search accuracy.
              </p>
              <div className="mt-4">
                <img src="/demos/matlab-rag-assistant/demo 1.png" alt="MATLAB RAG Assistant Demo" className="rounded-lg shadow-md" />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                <a href="https://github.com/hanshengzhu0001/Ethereum_Wallet_Java" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ethereum Wallet in Java</a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Crypto Transaction, TCP/IP, PostgreSQL, Java, Linux, Infura, JavaFX</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built a secure Spring Boot backend for wallet creation/import and crypto transactions (ETH/ERC-20) on Sepolia testnet. Applied OOD principles and JUnit testing; integrated Web3j + Infura RPC for reliable blockchain communication. Ensured transaction integrity via Keccak256 hashing &amp; ABI encoding, managing nonce &amp; gas for secure signing and transfers.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Banking System Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">C++, Financial Market Data, gRPC Microservices, PostgreSQL, Ensemble ML, A/B Testing</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built a distributed, TCP/IP client-server system (transfer, merges, payments) with lock-free queues and concurrency control. Set up PostgreSQL persistence, AI fraud detection, and CI pipelines (YAML) for resiliency &amp; efficiency under high throughput.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <img src="/demos/banking-system/demo 1.png" alt="Banking System Demo 1" className="rounded-lg shadow-md" />
                <img src="/demos/banking-system/demo 2.png" alt="Banking System Demo 2" className="rounded-lg shadow-md" />
              </div>
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
              <h3 className="text-xl font-semibold mb-2">Autonomous Robot with CV-assisted Localization</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Reinforcement Learning (PPO), Arduino C++, OpenMV, Kalman Filter</p>
              <p className="text-gray-600 dark:text-gray-300">
                Built 6-DoF pose estimation and correction system; enhanced RRT path planning with a Proximal Policy Optimization agent for dynamic obstacle avoidance; reduced odometry drift by 5.5x by fusing wheel odometry with AprilTag vision.
              </p>
              <div className="mt-4">
                <img src="/demos/romi-robot/trajectory.png" alt="Autonomous Robot Trajectory Demo" className="rounded-lg shadow-md" />
              </div>
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