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
                {/* <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                Timeout challenges players to manage their time effectively while
                                making strategic decisions under pressure.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection> */}

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
                                <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                                <ProjectSectionText>
                                    <strong>C/Time out</strong> is a meta-fictional "troll" game set within a simulated OS. Your mission is to achieve timelessness by hunting down and deleting the <strong>time.exe</strong> file before the clock wins.
                                    <br /><br />
                                    <strong>Key Features:</strong>
                                    <br />
                                    • <strong>Desktop Navigation:</strong> Scour nested folders and hidden directories within a nostalgic, Windows-inspired UI.
                                    <br />
                                    • <strong>Ad Warfare:</strong> Battle relentless, obstructive pop-up ads designed to protect the system and hinder your progress.
                                    <br />
                                    • <strong>Troll Mechanics:</strong> Encounter deceptive UI elements and intentional "glitches" that challenge your persistence.
                                    <br />
                                    • <strong>The Objective:</strong> Locate and destroy the clock to become truly Timeless.
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
