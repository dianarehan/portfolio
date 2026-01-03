import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { VideoProject } from './video-project';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'XR & Game Developer',
    description: `Portfolio of ${config.name} — a VR/XR developer and game developer working on immersive experiences.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const vrProject1 = useRef();
  const vrProject2 = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, vrProject1, vrProject2, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      {/* ==================== VR/WORK PROJECTS SECTION ==================== */}

      {/* VR Project 1: Dental Prototype VR Simulator */}
      <VideoProject
        id="work-projects"
        sectionRef={vrProject1}
        visible={visibleSections.includes(vrProject1.current)}
        index={1}
        title="Dental Prototype VR Simulator"
        description="An immersive VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment."
        // TODO: Replace this placeholder video ID with your actual YouTube video ID
        videoId="rVsoI9lu_0M"
        buttonText="View Details"
        buttonLink="/projects/dental-vr"
      />

      {/* VR Project 2: Pilot Training VR Simulator */}
      <VideoProject
        id="vr-project-2"
        alternate
        sectionRef={vrProject2}
        visible={visibleSections.includes(vrProject2.current)}
        index={2}
        title="Pilot Training VR Simulator"
        description="A comprehensive VR flight training system designed to prepare pilots with realistic cockpit simulations."
        videoId="zRXndIMaAxU"
        buttonText="View Details"
        buttonLink="/projects/pilot-vr"
      />

      {/* ==================== ABOUT/DETAILS SECTION ==================== */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
