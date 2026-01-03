import itchScreenshot from '~/assets/portfolioScreenshot.png';
import timeoutTexture from '~/assets/jobless.png';
import tempoDashTexture from '~/assets/tempodash-game.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
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
  // VR Projects
  const vrProject1 = useRef();
  const vrProject2 = useRef();
  // Personal Projects (Games)
  const gameProject1 = useRef();
  const gameProject2 = useRef();
  const gameProject3 = useRef();
  const gameProject4 = useRef();
  // Details section
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      vrProject1,
      vrProject2,
      gameProject1,
      gameProject2,
      gameProject3,
      gameProject4,
      details,
    ];

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

      {/* ==================== VR PROJECTS SECTION ==================== */}

      {/* VR Project 1: Dental Prototype VR Simulator */}
      <VideoProject
        id="vr-project-1"
        sectionRef={vrProject1}
        visible={visibleSections.includes(vrProject1.current)}
        index={1}
        title="Dental Prototype VR Simulator"
        description="An immersive VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment."
        // TODO: Replace this placeholder video ID with your actual YouTube video ID
        videoId="dQw4w9WgXcQ"
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

      {/* ==================== PERSONAL PROJECTS (GAMES) SECTION ==================== */}

      {/* Game 1: Museum Heist */}
      <VideoProject
        id="personal-projects"
        sectionRef={gameProject1}
        visible={visibleSections.includes(gameProject1.current)}
        index={1}
        title="Museum Heist"
        description="A stealth-action multiplayer game where players must plan and execute the perfect heist."
        videoId="yuw6RDPtH_8"
        buttonText="View Game"
        buttonLink="/projects/museum-heist"
      />

      {/* Game 2: Tempo Dash */}
      <ProjectSummary
        id="game-2"
        alternate
        sectionRef={gameProject2}
        visible={visibleSections.includes(gameProject2.current)}
        index={2}
        title="Tempo Dash"
        description="A fast-paced 3D rhythm game built in Unity. Hit tempo-based arrows, move with precision, and vibe with the music."
        buttonText="View Game"
        buttonLink="/projects/tempo-dash"
        model={{
          type: 'laptop',
          alt: 'Tempo Dash game',
          textures: [
            {
              srcSet: `${tempoDashTexture} 1280w, ${tempoDashTexture} 2560w`,
              placeholder: tempoDashTexture,
            },
          ],
        }}
      />

      {/* Game 3: Timeout */}
      <ProjectSummary
        id="game-3"
        sectionRef={gameProject3}
        visible={visibleSections.includes(gameProject3.current)}
        index={3}
        title="Timeout"
        description="A game about time management and strategic decision making."
        buttonText="View Game"
        buttonLink="/projects/timeout"
        model={{
          type: 'laptop',
          alt: 'Timeout game screenshot',
          textures: [
            {
              srcSet: `${timeoutTexture} 1280w, ${timeoutTexture} 2560w`,
              placeholder: timeoutTexture,
            },
          ],
        }}
      />

      {/* Game 4: Itch.io Showcase */}
      <ProjectSummary
        id="game-4"
        alternate
        sectionRef={gameProject4}
        visible={visibleSections.includes(gameProject4.current)}
        index={4}
        title="More Games on Itch.io"
        description="Explore more of my games and experiments on my Itch.io page."
        buttonText="Visit Itch.io"
        buttonLink={config.itch}
        model={{
          type: 'phone',
          alt: 'My Itch.io page showing various games',
          textures: [
            {
              srcSet: `${itchScreenshot} 375w, ${itchScreenshot} 750w`,
              placeholder: itchScreenshot,
            },
            {
              srcSet: `${itchScreenshot} 375w, ${itchScreenshot} 750w`,
              placeholder: itchScreenshot,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
