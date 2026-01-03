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
    'A first-person shooter featuring dynamic difficulty adjustment using Large Language Models (LLMs) to adapt gameplay in real-time.';

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
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                Developed as part of a <strong>Bachelor Thesis</strong>, this FPS serves as a testing ground for <strong>Dynamic Difficulty Adjustment (DDA)</strong> powered by Large Language Models (LLMs). The system captures real-time performance data and utilizes an LLM backend to balance gameplay dynamically, ensuring a tailored challenge for any skill level.
                                <br /><br />
                                <strong>Core Systems:</strong>
                                <br />
                                • <strong>LLM Data Pipeline:</strong> Tracks detailed round stats—including accuracy, headshots, health management, and ammo consumption—feeding them into the LLM for real-time difficulty balancing.
                                <br />
                                • <strong>Dynamic Spawner Logic:</strong> Enemy and resource spawns are triggered procedurally based on the DDA system's output to maintain optimal player "flow."
                                <br />
                                • <strong>Combat Mechanics:</strong> Features tactical sniper scope zooming with FOV reduction, smooth weapon switching, and a comprehensive health/medkit system.
                                <br />
                                • <strong>Zombie AI Behavior:</strong> Sophisticated enemy logic including patrolling, chasing, and varied attack patterns (melee and projectiles).
                                <br />
                                • <strong>Advanced HUD & UX:</strong> Includes a real-time minimap for situational awareness, a card collection system from fallen enemies, and immersive VFX/SFX (muzzle flashes, explosions).
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
