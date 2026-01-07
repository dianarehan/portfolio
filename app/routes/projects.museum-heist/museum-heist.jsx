import { Footer } from '~/components/footer';
import {
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
    ProjectImage,
    ProjectSectionColumns,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './museum-heist.module.css';

import guardImg from '~/assets/museum/guard.png';
import thievesImg from '~/assets/museum/thieves.png';
import glassShatterGif from '~/assets/museum/glassshatter2-ezgif.com-video-to-gif-converter.gif';

const title = 'Museum Heist';
const description =
    'A multiplayer asymmetric game featuring 1 Guard vs 5 Thieves, each striving to achieve their unique objectives.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const MuseumHeist = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://dianarehan.itch.io/museum-heist"
                />

                {/* About the Game - Full Width */}
                <ProjectSection padding="top">
                    <ProjectSectionContent width="full">
                        <ProjectTextRow width="l">
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                <strong>Museum Heist</strong> is an asymmetric multiplayer game using <strong>Photon Unity Networking (PUN)</strong>.
                                One player plays as the <strong>Guard</strong>, tasked with protecting the museum and catching thieves.
                                Meanwhile, <strong>5 Thieves</strong> work together to steal artifacts and escape before they get caught.
                                <br /> <br />
                                The game features <strong>proximity voice chat</strong> powered by <strong>Photon Voice</strong>, players can only hear others nearby.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>

                {/* Role Images - Full Width Side by Side */}
                <ProjectSection>
                    <ProjectSectionContent width="full">
                        <div className={styles.roleImages}>
                            <div className={styles.roleCard}>
                                <img src={guardImg} alt="Guard objectives" />
                                <ProjectSectionText><strong>Guard Objectives</strong></ProjectSectionText>
                            </div>
                            <div className={styles.roleCard}>
                                <img src={thievesImg} alt="Thieves objectives" />
                                <ProjectSectionText><strong>Thieves Objectives</strong></ProjectSectionText>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                {/* GIF + Tech Stack Side by Side */}
                <ProjectSection>
                    <ProjectSectionColumns centered>
                        <div className={styles.gifContainer}>
                            <ProjectImage
                                src={glassShatterGif}
                                alt="Glass shattering effect"
                            />
                            <ProjectSectionText className={styles.caption}>
                                <em>Thief shattering glass mechanic</em>
                            </ProjectSectionText>
                        </div>
                        <div>
                            <ProjectTextRow>
                                <ProjectSectionHeading>Technical Stack</ProjectSectionHeading>
                                <ProjectSectionText>
                                    • <strong>Engine:</strong> Unity
                                    <br />
                                    • <strong>Networking:</strong> Photon Unity Networking (PUN)
                                    <br />
                                    • <strong>Voice Chat:</strong> Photon Voice 2
                                    <br />
                                    • <strong>3D Modeling:</strong> Blender
                                    <br />
                                    • <strong>Character Animation:</strong> Mixamo
                                </ProjectSectionText>
                            </ProjectTextRow>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>

                {/* Gameplay Videos - Side by Side */}
                <ProjectSection>
                    <ProjectSectionContent width="full">
                        <ProjectTextRow center>
                            <ProjectSectionHeading>Gameplay Footage</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.videosRow}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    className={styles.video}
                                    src="https://www.youtube.com/embed/znDyIxJOKvo?si=XQuMTPuTzOtFHPZM"
                                    title="Museum Heist Gameplay 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    className={styles.video}
                                    src="https://www.youtube.com/embed/yuw6RDPtH_8?si=CdnUyvc9ZrI36aSf"
                                    title="Museum Heist Gameplay 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default MuseumHeist;
