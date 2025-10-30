import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaLock, FaRocket, FaRobot, FaArrowRight, FaBookOpen, FaCode, FaPlay, FaClock, FaUsers, FaChartLine, FaBolt, FaMicrosoft, FaCloud, FaShieldAlt, FaNewspaper, FaServer, FaShareAlt, FaBrain } from 'react-icons/fa';
import React, { useEffect, useState, useRef } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.animatedBackground}></div>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.primaryCta)}
            to="/docs/intro">
            Get Started with AVA <FaBolt className={styles.ctaIcon} />
          </Link>
          <Link
            className={clsx("button button--outline button--secondary button--lg", styles.secondaryCta)}
            to="/docs/intro">
            <FaPlay className={styles.ctaIcon} /> Watch Demo
          </Link>
        </div>
        <div className={styles.quickLinks}>
          <Link to="/docs/intro" className={styles.quickLink}>
            <FaBookOpen className={styles.quickLinkIcon} />
            <span>Documentation</span>
          </Link>
          <Link to="/docs/getting-started/quickstart" className={styles.quickLink}>
            <FaRocket className={styles.quickLinkIcon} />
            <span>Quick Start</span>
          </Link>
          <Link to="/docs/api" className={styles.quickLink}>
            <FaCode className={styles.quickLinkIcon} />
            <span>API Reference</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observers = [];
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, el.dataset.animate]));
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="AVA - Your AI-Powered Enterprise Assistant. ChatGPT-style AI, automated tasks, and knowledge search - all within your secure corporate environment.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        <section className={styles.statsSection} data-animate="stats">
          <div className="container">
            <h2 className="text--center margin-bottom--lg">Trusted by Enterprises Worldwide</h2>
            <div className={styles.statsGrid}>
              <div className={clsx(styles.statCard, visibleSections.has('stats') && styles.fadeInUp)}>
                <FaUsers className={styles.statIcon} />
                <div className={styles.statNumber}>
                  <AnimatedCounter target={10000} suffix="+" />
                </div>
                <div className={styles.statLabel}>Daily Active Users</div>
              </div>
              <div className={clsx(styles.statCard, visibleSections.has('stats') && styles.fadeInUp)} style={{animationDelay: '0.1s'}}>
                <FaChartLine className={styles.statIcon} />
                <div className={styles.statNumber}>
                  <AnimatedCounter target={99.9} suffix="%" />
                </div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
              <div className={clsx(styles.statCard, visibleSections.has('stats') && styles.fadeInUp)} style={{animationDelay: '0.2s'}}>
                <FaBolt className={styles.statIcon} />
                <div className={styles.statNumber}>
                  <AnimatedCounter target={2} suffix="s" />
                </div>
                <div className={styles.statLabel}>Avg Response Time</div>
              </div>
              <div className={clsx(styles.statCard, visibleSections.has('stats') && styles.fadeInUp)} style={{animationDelay: '0.3s'}}>
                <FaShieldAlt className={styles.statIcon} />
                <div className={styles.statNumber}>
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className={styles.statLabel}>Enterprise Clients</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whatsNew} data-animate="news">
          <div className="container">
            <h2 className="text--center margin-bottom--lg">
              <FaNewspaper className={styles.sectionIcon} /> What's New
            </h2>
            <div className={styles.newsGrid}>
              <div className={clsx(styles.newsCard, styles.featured, visibleSections.has('news') && styles.fadeInUp)}>
                <div className={styles.newsDate}>December 2024</div>
                <h3>AVA 3.0 Released</h3>
                <p>Major update with enhanced AI models, improved performance, and new enterprise features.</p>
                <Link to="/docs/release-notes" className={styles.newsLink}>
                  Read More <FaArrowRight className={styles.linkIcon} />
                </Link>
              </div>
              <div className={clsx(styles.newsCard, visibleSections.has('news') && styles.fadeInUp)} style={{animationDelay: '0.1s'}}>
                <div className={styles.newsDate}>November 2024</div>
                <h4>New Claude Integration</h4>
                <p>Added support for Claude 3 models with enhanced reasoning capabilities.</p>
              </div>
              <div className={clsx(styles.newsCard, visibleSections.has('news') && styles.fadeInUp)} style={{animationDelay: '0.2s'}}>
                <div className={styles.newsDate}>October 2024</div>
                <h4>SharePoint Deep Search</h4>
                <p>Improved document search with semantic understanding across SharePoint.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.integrations} data-animate="integrations">
          <div className="container">
            <h2 className="text--center margin-bottom--lg">Seamless Integrations</h2>
            <p className="text--center margin-bottom--xl">AVA works with your existing Microsoft ecosystem</p>
            <div className={styles.integrationsWrapper}>
              <div className={styles.integrationsTrack}>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaMicrosoft className={styles.integrationIcon} />
                  <span>Microsoft 365</span>
                </div>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaUsers className={styles.integrationIcon} />
                  <span>Teams</span>
                </div>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaShareAlt className={styles.integrationIcon} />
                  <span>SharePoint</span>
                </div>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaServer className={styles.integrationIcon} />
                  <span>Azure AD</span>
                </div>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaBrain className={styles.integrationIcon} />
                  <span>OpenAI</span>
                </div>
                <div className={clsx(styles.integrationCard, visibleSections.has('integrations') && styles.slideIn)}>
                  <FaCloud className={styles.integrationIcon} />
                  <span>OneDrive</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.tryIt}>
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>Ready to Transform Your Work?</h2>
                <p className={styles.tryItText}>
                  AVA brings the power of AI to your enterprise while keeping your data secure.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg margin--sm"
                    to="https://dev.datarm.app">
                    Try AVA Now
                  </Link>
                  <Link
                    className="button button--outline button--primary button--lg margin--sm"
                    to="/docs/intro">
                    Read Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features} data-animate="features">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className="text--center margin-bottom--lg">Why Organizations Choose AVA</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col--4">
                <div className={clsx(styles.featureItem, visibleSections.has('features') && styles.fadeInUp)}>
                  <div className={styles.featureIconWrapper}>
                    <div className={styles.featureIcon}><FaLock /></div>
                  </div>
                  <h3>100% Data Privacy</h3>
                  <p>Your data never leaves your Microsoft Azure environment. Complete corporate compliance.</p>
                  <Link to="/docs/security" className={styles.featureLink}>
                    Learn More <FaArrowRight className={styles.linkIcon} />
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className={clsx(styles.featureItem, visibleSections.has('features') && styles.fadeInUp)} style={{animationDelay: '0.1s'}}>
                  <div className={styles.featureIconWrapper}>
                    <div className={styles.featureIcon}><FaRocket /></div>
                  </div>
                  <h3>Enterprise Ready</h3>
                  <p>Seamless integration with Microsoft 365, Teams, SharePoint, and your existing tools.</p>
                  <Link to="/docs/integrations" className={styles.featureLink}>
                    Learn More <FaArrowRight className={styles.linkIcon} />
                  </Link>
                </div>
              </div>
              <div className="col col--4">
                <div className={clsx(styles.featureItem, visibleSections.has('features') && styles.fadeInUp)} style={{animationDelay: '0.2s'}}>
                  <div className={styles.featureIconWrapper}>
                    <div className={styles.featureIcon}><FaRobot /></div>
                  </div>
                  <h3>Multiple AI Models</h3>
                  <p>Access GPT-4, Claude, Gemini, and Llama - choose the best model for your task.</p>
                  <Link to="/docs/ai-models" className={styles.featureLink}>
                    Learn More <FaArrowRight className={styles.linkIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonial}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className={styles.testimonialCard}>
                  <blockquote>
                    <p>
                      "AVA has transformed how our team works. We get all the benefits of AI while maintaining 
                      complete control over our data. The integration with our Microsoft 365 environment is seamless."
                    </p>
                    <footer>
                      <cite>- Enterprise Customer</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}