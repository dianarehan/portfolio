import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
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
import styles from './archivists-legacy.module.css';

const title = 'Archivists Legacy Prototype';
const description =
    'A narrative-driven adventure game prototype exploring archives and historical mysteries.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const ArchivistsLegacy = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/dianarehan/Archivists-Legacy-Prototype"
                    linkLabel="View GDD on GitHub"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/X-nktLuP6Ho"
                                title="Archivists Legacy Prototype Demo"
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
                                Archivists Legacy is a narrative-driven adventure game prototype that
                                takes players on a journey through archives and historical mysteries.
                                The game design document is available on GitHub.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <div className={styles.buttonGroup}>
                            <Button
                                href="https://github.com/dianarehan/Archivists-Legacy-Prototype"
                                target="_blank"
                                icon="github"
                            >
                                View Game Design Document
                            </Button>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default ArchivistsLegacy;
