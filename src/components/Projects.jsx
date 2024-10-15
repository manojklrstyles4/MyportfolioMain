import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../App.css';

const projects = [
  {
    title: "Next-Gen AI Platform Blockchain ",
    description: "A robust AI-driven solution transforming industries with real-time decision-making.",
    details: "Tech Stack: React, TensorFlow, Node.js | Solved: Automated decision-making at scale.",
    image: "/api/placeholder/400/300",
    category: "AI",
  },
  {
    title: "Virtual Reality Real Estate",
    description: "Immersive VR experience revolutionizing property browsing and interaction.",
    details: "Tech Stack: Unity, Three.js, React | Solved: Enabled remote virtual tours for real estate.",
    image: "/api/placeholder/400/300",
    category: "VR",
  },
  {
    title: "Blockchain Crypto Wallet",
    description: "A decentralized and secure wallet solution for managing multi-currency crypto assets.",
    details: "Tech Stack: React, Solidity, Ethereum | Solved: Simplified decentralized crypto management.",
    image: "/api/placeholder/400/300",
    category: "Blockchain",
  },
  {
    title: "E-Commerce Platform with AI",
    description: "A full-stack e-commerce platform leveraging AI for personalized shopping experiences.",
    details: "Tech Stack: React, Node.js, MongoDB, AI/ML | Solved: Personalized recommendations and fraud detection.",
    image: "/api/placeholder/400/300",
    category: "E-Commerce",
  },
  {
    title: "Healthcare Data Analytics",
    description: "A platform providing insights from healthcare data to improve patient outcomes.",
    details: "Tech Stack: Python, React, D3.js | Solved: Extracted valuable insights from large medical datasets.",
    image: "/api/placeholder/400/300",
    category: "Healthcare",
  },
  {
    title: "Smart City Infrastructure",
    description: "IoT-powered solution for efficient urban resource management and sustainability.",
    details: "Tech Stack: IoT, React, Node.js, MongoDB | Solved: Optimized city resources and reduced environmental impact.",
    image: "/api/placeholder/400/300",
    category: "IoT",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Exceptional Projects Showcase
      </motion.h2>

      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={item}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(0, 200, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <motion.div
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{project.title}</h3>
                </motion.div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;