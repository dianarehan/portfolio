import itchScreenshot from '~/assets/portfolioScreenshot.png';
import timeoutTexture from '~/assets/jobless.png';
import tempoDashTexture from '~/assets/tempodash-game.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { ProjectSummary } from '../home/project-summary';
import { VideoProject } from '../home/video-project';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './game-projects.module.css';

export const meta = () => {
    return baseMeta({
        title: 'Game Projects',
        description: `Game projects by ${config.name} — indie games and experiments.`,
    });
};

export default function GameProjects() {
    const [visibleSections, setVisibleSections] = useState([]);
    const intro = useRef();
    const gameProject1 = useRef();
    const gameProject2 = useRef();
    const gameProject3 = useRef();
    const gameProject4 = useRef();

    useEffect(() => {
        const sections = [intro, gameProject1, gameProject2, gameProject3, gameProject4];

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

        sections.forEach(section => {
            sectionObserver.observe(section.current);
        });

        return () => {
            sectionObserver.disconnect();
        };
    }, [visibleSections]);

    return (
        <div className={styles.gameProjects}>
            {/* Page Header */}
            <Section className={styles.header} ref={intro}>
                <Heading level={1} className={styles.title}>
                    Game Projects
                </Heading>
                <Text size="l" className={styles.description}>
                    A collection of my indie games and experiments.
                </Text>
            </Section>

            {/* Game 1: Museum Heist */}
            <VideoProject
                id="museum-heist"
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
                id="tempo-dash"
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
                id="timeout"
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
                id="more-games"
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

            <Footer />
        </div>
    );
}
