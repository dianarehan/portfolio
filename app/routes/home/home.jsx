import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { Footer } from '~/components/footer';
import { Link } from '@remix-run/react';
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

      {/* ==================== RECENT NEWS SECTION ==================== */}
      <Section className={styles.newsSection}>
        <div className={styles.newsBanner}>
          <span className={styles.newsIcon}>🏆</span>
          <div className={styles.newsContent}>
            <Heading level={4} as="h3" className={styles.newsTitle}>
              ITI Best VR Game — 1st Place Winner!
            </Heading>
            <Text size="s" className={styles.newsText}>
              <a href="https://dianarehan.itch.io/protect-her" target="_blank" rel="noopener noreferrer" className={styles.newsLink}><strong>Protect Her</strong></a> won Best VR Game at the ITI Egypt Game Jam 2026.
            </Text>
            <div className={styles.newsLinks}>
              <a
                href="https://www.linkedin.com/posts/iti-game-development-academy_we-have-a-winner-egypt-game-jam-2026-activity-7429230601200824320-Xnby?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtokXAB8xJcpgX2bYsl6mmS3sI0rkxa7x4"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.newsLink}
              >
                Read more on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.newsSection}>
        <div className={styles.newsBanner}>
          <span className={styles.newsIcon}>🏆</span>
          <div className={styles.newsContent}>
            <Heading level={4} as="h3" className={styles.newsTitle}>
              2nd Place at Global Game Jam 2026!
            </Heading>
            <Text size="s" className={styles.newsText}>
              Our game <Link to="/projects/unmasked" className={styles.newsLink}><strong>UNMASKED</strong></Link> won 2nd place. Built in 48 hours with an amazing team.
            </Text>
            <div className={styles.newsLinks}>
              <a
                href="https://www.linkedin.com/posts/diana-rehan_%F0%9D%90%94%F0%9D%90%A7%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%9E%F0%9D%90%9D-2nd-place-at-global-game-activity-7423042343982854144-E7aJ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.newsLink}
              >
                Read more on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== VR/WORK PROJECTS SECTION ==================== */}
      <div className={styles.sectionHeader}>
        <Heading level={2} as="h2" align="center">
          Professional Work
        </Heading>
      </div>

      {/* VR Project 1: Dental Prototype VR Simulator */}
      <VideoProject
        id="work-projects"
        sectionRef={vrProject1}
        visible={visibleSections.includes(vrProject1.current)}
        index={1}
        title="Dental VR Simulator Prototype"
        description="A VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment."
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
        description="A Multiplayer VR flight training system designed for pilots using Netcode for GameObjects (NGO)."
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
