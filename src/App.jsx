import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Zap, Globe, TrendingUp, ChevronRight, ArrowRight } from 'lucide-react';
import './App.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Dynamic Cursor Glow */}
      <motion.div 
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <div className="ambient-glow"></div>
      <div className="noise-overlay"></div>

      {/* Navigation */}
      <nav className="navbar container">
        <div className="logo">GEO<span className="logo-accent">.</span></div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>
        <button className="nav-cta">Early Access</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="container hero-content"
          style={{ y: yHero, opacity: opacityHero }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="badge">
            <span className="pulse-dot"></span>
            Launching Soon
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="hero-title">
            The Future of <br/>
            <span className="text-gradient">Client Acquisition.</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="hero-subtitle">
            AI-powered systems, automation, and growth strategies designed to scale modern businesses.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="hero-ctas">
            <button className="btn-primary">
              Get Early Access <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Book a Discovery Call
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="social-proof container">
        <p className="trust-text">Trusted by ambitious brands and fast-growing startups</p>
        <div className="logo-ticker">
          <div className="placeholder-logo">Acme Corp</div>
          <div className="placeholder-logo">GlobalTech</div>
          <div className="placeholder-logo">Quantum</div>
          <div className="placeholder-logo">Nexus</div>
          <div className="placeholder-logo">Zephyr</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="about-content"
        >
          <h2 className="section-title">Intelligent Scaling</h2>
          <p className="about-copy">
            We build intelligent systems that help brands generate leads, automate operations, and scale faster using cutting-edge AI workflows. 
            We do not just run ads; we engineer growth engines.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section container">
        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div variants={fadeUpVariant} className="service-card">
            <div className="card-icon-wrapper">
              <Bot size={24} className="card-icon" />
            </div>
            <h3 className="card-title">AI Automation</h3>
            <p className="card-desc">Custom workflows and agents that handle repetitive tasks, freeing your team to focus on high-leverage work.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="service-card">
            <div className="card-icon-wrapper">
              <Zap size={24} className="card-icon" />
            </div>
            <h3 className="card-title">Lead Generation</h3>
            <p className="card-desc">Data-driven outbound systems that systematically identify, enrich, and convert your ideal prospects.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="service-card">
            <div className="card-icon-wrapper">
              <Globe size={24} className="card-icon" />
            </div>
            <h3 className="card-title">Web Systems</h3>
            <p className="card-desc">High-converting landing pages and robust web applications designed for performance and scale.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUpVariant} className="service-card">
            <div className="card-icon-wrapper">
              <TrendingUp size={24} className="card-icon" />
            </div>
            <h3 className="card-title">Growth Strategy</h3>
            <p className="card-desc">Comprehensive go-to-market strategies blending AI tools, content velocity, and technical SEO.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Email Capture Section */}
      <section className="cta-section container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-glow"></div>
          <h2>Ready to revolutionize your workflow?</h2>
          <p>Be the first to know when we launch our full suite of services.</p>
          
          <form className="email-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your work email" required />
            <button type="submit" className="btn-primary">
              Notify Me
            </button>
          </form>
          <p className="small-trust-text">Join 500+ founders on the waitlist.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">GEO<span className="logo-accent">.</span></div>
            <p className="footer-desc">Next-generation growth agency.</p>
          </div>
          <div className="footer-links">
            <div className="link-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-col">
              <h4>Social</h4>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 GEO Agency. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
