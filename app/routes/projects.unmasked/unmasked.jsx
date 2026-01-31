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
import styles from './unmasked.module.css';

import unmaskedThumbnail from '~/assets/Unmasked/1.png';
import gif1 from '~/assets/Unmasked/ezgif.com-video-to-gif-converter (1).gif';
import gif2 from '~/assets/Unmasked/ezgif.com-video-to-gif-converter.gif';
import jamImg1 from '~/assets/Unmasked/IMG_9535.jpeg';
import jamImg2 from '~/assets/Unmasked/29D8727B-3FFD-43A7-AC2A-78CCA29E5041.JPG';
import jamImg3 from '~/assets/Unmasked/89056EF9-AD41-49D5-921E-329D156287AE.jpg';

const title = 'Unmasked';
const description =
    'In UNMASKED, you are a Blank Identity trapped in a closed arena of emotions. Dozens of masks are fighting you. This fast-paced survival game forces you to move to exist. Your only weapon is the Dash.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Unmasked = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://dianarehan.itch.io/unmasked"
                    tools={['Unity', 'C#']}
                />

                {/* About the Game */}
                <ProjectSection padding="none" className={styles.tightSection}>
                    <ProjectSectionContent width="full">
                        <ProjectTextRow width="l">
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                <strong>UNMASKED</strong> was built in <strong>48 hours</strong> for a game jam.
                                It is a fast-paced 2D survival game where movement is your only weapon.
                                <br /><br />
                                🏆 <strong>2nd Place Winner</strong> at <strong>Global Game Jam 2026</strong>!
                                <br />
                                <a href="https://www.linkedin.com/posts/diana-rehan_%F0%9D%90%94%F0%9D%90%A7%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%A4%F0%9D%90%9E%F0%9D%90%9D-2nd-place-at-global-game-activity-7423042343982854144-E7aJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACtokXAB8xJcpgX2bYsl6mmS3sI0rkxa7x4" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                                    Read more on LinkedIn →
                                </a>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>

                {/* GGJ Showcase Images */}
                <ProjectSection padding="top">
                    <ProjectSectionContent width="full">
                        <ProjectTextRow center>
                            <ProjectSectionHeading>Global Game Jam 2026</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.jamImagesRow}>
                            <div className={styles.jamImageContainer}>
                                <ProjectImage src={jamImg1} alt="Game Jam Team" />
                                <ProjectSectionText className={styles.caption}>
                                    <em>The Team</em>
                                </ProjectSectionText>
                            </div>
                            <div className={styles.jamImageContainer}>
                                <ProjectImage src={jamImg2} alt="Award Ceremony" />
                                <ProjectSectionText className={styles.caption}>
                                    <em>Award Ceremony</em>
                                </ProjectSectionText>
                            </div>
                            <div className={styles.jamImageContainer}>
                                <ProjectImage src={jamImg3} alt="2nd Place Prize" />
                                <ProjectSectionText className={styles.caption}>
                                    <em>2nd Place Prize</em>
                                </ProjectSectionText>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>



                {/* GIFs Side by Side */}
                <ProjectSection padding="top">
                    <ProjectSectionColumns centered>
                        <div className={styles.gifContainer}>
                            <ProjectImage
                                src={gif2}
                                alt="Dash Mechanic demonstration"

                            />
                            <ProjectSectionText className={styles.caption}>
                                <em>Dash Mechanic</em>
                            </ProjectSectionText>
                        </div>
                        <div className={styles.gifContainer}>
                            <ProjectImage
                                src={gif1}
                                alt="Animated VFX for winning"

                            />
                            <ProjectSectionText className={styles.caption}>
                                <em>Animated VFX for Win</em>
                            </ProjectSectionText>
                        </div>

                    </ProjectSectionColumns>
                </ProjectSection>

                {/* Gameplay Video */}
                <ProjectSection padding="top">
                    <ProjectSectionContent width="full">
                        <ProjectTextRow center>
                            <ProjectSectionHeading>Gameplay Footage</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/cniqtBpMo4w?si=Mmq_jR-0WlYy_Wv_"
                                title="Unmasked Gameplay"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                {/* Tech Stack
                <ProjectSection padding="top">
                    <ProjectSectionContent width="l">
                        <ProjectTextRow>
                            <ProjectSectionHeading>Technical Details</ProjectSectionHeading>
                            <ProjectSectionText>
                                • <strong>Engine:</strong> Unity 2D
                                <br />
                                • <strong>Language:</strong> C#
                                <br />
                                • <strong>Development Time:</strong> 48 Hours
                                <br />
                                • <strong>Key Mechanics:</strong> Dash-based movement, wave survival system.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection> */}

            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default Unmasked;
