import { Footer } from '~/components/footer';
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
import styles from './timeout.module.css';
import ddosGif from '~/assets/timeout/ddosattack-ezgif.com-video-to-gif-converter.gif';
import loginGif from '~/assets/timeout/timeoutlogin-ezgif.com-video-to-gif-converter.gif';
import navGif from '~/assets/timeout/timeoutnav-ezgif.com-video-to-gif-converter.gif';

const title = 'Timeout';
const description = 'A meta-narrative troll game where you hunt and delete "time.exe" across a chaotic virtual desktop.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Timeout = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    // TODO: Add your game URL here
                    url="https://dianarehan.itch.io/time-out"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                Timeout challenges players to manage their time effectively while
                                making strategic decisions under pressure.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionColumns centered className="timeout-columns">
                        <div className="timeout-media">
                            <ProjectImage
                                src={loginGif}
                                alt="Game Login Screen"
                                style={{ marginBottom: 'var(--spaceM)' }}
                            />
                            <ProjectImage
                                src={navGif}
                                alt="Menu Navigation"
                                style={{ marginBottom: 'var(--spaceM)' }}
                            />
                            <ProjectImage
                                src={ddosGif}
                                alt="DDoS Attack Gameplay"
                            />
                        </div>
                        <div className="timeout-text">
                            <ProjectTextRow>
                                <ProjectSectionHeading>Gameplay Mechanics</ProjectSectionHeading>
                                <ProjectSectionText>
                                    Experience the tension of managing server loads while defending against cyber attacks.
                                    Navigate through the system interface to monitor status, potential threats, and execute countermeasures before time runs out.
                                </ProjectSectionText>
                            </ProjectTextRow>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent width="m">
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>View Full Gameplay</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/_vjepH6EE_o?si=HDlvV9NvBZx2d2E4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                {/* TODO: Add more sections with images, GIFs, and gameplay details */}
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};
