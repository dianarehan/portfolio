import { Footer } from '~/components/footer';
import {
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './dda-fps.module.css';

const title = 'DDA FPS Game';
const description =
    'A first-person shooter featuring dynamic difficulty adjustment using LLMs to adapt gameplay in real-time.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const DdaFps = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://www.youtube.com/watch?v=6z8rV1pVdVw"
                    linkLabel="Watch Demo"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/6z8rV1pVdVw"
                                title="DDA FPS Game Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow width="full">
                            <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                Developed as part of a <strong>Bachelor Thesis</strong>, this FPS serves as a testing ground for <strong>Dynamic Difficulty Adjustment (DDA)</strong> powered by LLMs. The system captures real-time performance data and utilizes an LLM backend to balance gameplay dynamically.
                                <br /><br />
                                <strong>Core Systems:</strong>
                                <br />
                                • <strong>LLM Data Pipeline:</strong> Tracks detailed stats and feeding them into the LLM for real-time difficulty balancing.
                                <br />
                                • <strong>Dynamic Spawner Logic:</strong> Enemy and resource spawns based on the DDA system's output."
                                <br />
                                • <strong>Combat Mechanics:</strong> Tactical sniper scope zooming, smooth weapon switching, and a comprehensive health/medkit system.
                                <br />
                                • <strong>Zombie AI Behavior:</strong> Enemy logic including patrolling, chasing, and varied attack patterns (melee and projectiles).
                                <br />
                                • <strong>Advanced HUD & UX:</strong> Real-time minimap for situational awareness, and immersive VFX/SFX (muzzle flashes, explosions).
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default DdaFps;
