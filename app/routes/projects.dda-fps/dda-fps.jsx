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
                                {/* TODO: Add detailed project description here */}
                                This FPS game implements dynamic difficulty adjustment (DDA) powered by
                                Large Language Models. The system analyzes player performance in real-time
                                and adjusts game parameters to maintain an optimal challenge level,
                                ensuring an engaging experience for players of all skill levels.
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
