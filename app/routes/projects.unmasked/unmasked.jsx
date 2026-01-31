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
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>



                {/* GIFs Side by Side */}
                <ProjectSection padding="top">
                    <ProjectSectionColumns centered>
                        <div className={styles.gifContainer}>
                            <ProjectImage
                                src={gif1}
                                alt="Unmasked Gameplay Dash Mechanic"
                            />
                        </div>
                        <div className={styles.gifContainer}>
                            <ProjectImage
                                src={gif2}
                                alt="Unmasked Gameplay Survival"
                            />
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
