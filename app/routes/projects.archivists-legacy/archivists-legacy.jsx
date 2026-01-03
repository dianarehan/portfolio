import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import {
    ProjectContainer,
    ProjectHeader,
    ProjectImage,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
    ProjectSectionColumns,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './archivists-legacy.module.css';

import boxOpenGif from '~/assets/game/boxopen-ezgif.com-video-to-gif-converter.gif';

const title = 'Archivists Legacy Prototype';
const description = 'A narrative escape room where you must preserve a mafia empire\'s history before it\'s purged.';

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
                {/* <ProjectSection padding="top">
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
                </ProjectSection> */}
                <ProjectSection>
                    <ProjectSectionColumns centered className="archivists-columns">
                        <div className="archivists-media">
                            <ProjectImage
                                src={boxOpenGif}
                                alt="Opening an archival box"
                            />
                        </div>
                        <div className="archivists-text">
                            <ProjectTextRow>
                                <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                                <ProjectSectionText>
                                    <strong>Archivist's Legacy</strong> is a Gothic puzzle prototype built in <strong>Unity 6</strong>. Players step into the role of Victor Rossi, trapped in a "locked room" scenario by antagonist Silas Thorne. The mission: solve environmental puzzles and disarm a Data Purge Device before the Syndicate's history is erased forever.
                                    <br /><br />
                                    <strong>Core Features:</strong>
                                    <br />
                                    • <strong>Three-Stage Journey:</strong> Transitions from narrative triggers in the Church and dialogue in the Hallway to the complex puzzle loop of Volkov's Office.
                                    <br />
                                    • <strong>Environmental Storytelling:</strong> Narrative depth delivered via audio logs, hidden documents, and visual clues.
                                    <br />
                                    • <strong>Mechanics:</strong> Point-and-click interaction for object examination, code input, and inventory management.
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
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default ArchivistsLegacy;
