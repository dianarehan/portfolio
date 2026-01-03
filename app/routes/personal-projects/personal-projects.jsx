import tripalHomepage from '~/assets/tripal/homepage.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { ProjectSummary } from '../home/project-summary';
import { VideoProject } from '../home/video-project';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './personal-projects.module.css';

export const meta = () => {
    return baseMeta({
        title: 'Personal Projects',
        description: `Personal projects by ${config.name} — web development and machine learning projects.`,
    });
};

export default function PersonalProjects() {
    const [visibleSections, setVisibleSections] = useState([]);
    const intro = useRef();
    const project1 = useRef();
    const project2 = useRef();

    useEffect(() => {
        const sections = [intro, project1, project2];

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
        <div className={styles.personalProjects}>
            {/* Page Header */}
            <Section className={styles.header} ref={intro}>
                <Heading level={1} className={styles.title}>
                    Personal Projects
                </Heading>
                <Text size="l" className={styles.description}>
                    Web development and machine learning projects.
                </Text>
            </Section>

            {/* Project 1: Tripal Website */}
            <ProjectSummary
                id="tripal"
                sectionRef={project1}
                visible={visibleSections.includes(project1.current)}
                index={1}
                title="Tripal Website"
                description="A modern travel planning website built with Next.js, featuring trip discovery and booking functionality."
                buttonText="View Project"
                buttonLink="/projects/tripal"
                model={{
                    type: 'laptop',
                    alt: 'Tripal website homepage',
                    textures: [
                        {
                            srcSet: `${tripalHomepage} 1280w, ${tripalHomepage} 2560w`,
                            placeholder: tripalHomepage,
                        },
                    ],
                }}
            />

            {/* Project 2: Facial Personality Profiling CNN */}
            <VideoProject
                id="cnn-profiling"
                alternate
                sectionRef={project2}
                visible={visibleSections.includes(project2.current)}
                index={2}
                title="Facial Personality Profiling CNN"
                description="A deep learning project using Convolutional Neural Networks to predict personality traits from facial features."
                videoId="VApflOkXT0I"
                buttonText="View Project"
                buttonLink="/projects/cnn"
            />

            {/* GitHub CTA */}
            <Section className={styles.header}>
                <Heading level={2} align="center" style={{ marginBottom: 'var(--spaceM)' }}>
                    More on GitHub
                </Heading>
                <Text align="center" style={{ marginBottom: 'var(--spaceXL)', maxWidth: '600px', marginInline: 'auto' }}>
                    I have many more open-source projects, experiments, and contributions available on my GitHub profile.
                </Text>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spaceL)' }}>
                    <Button href={`https://github.com/${config.github}`} iconEnd="arrow-right">
                        Visit GitHub
                    </Button>
                </div>
            </Section>

            <Footer />
        </div>
    );
}
