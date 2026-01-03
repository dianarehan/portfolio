import { Footer } from '~/components/footer';
import { SimpleCarousel } from '~/components/simple-carousel';
import {
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
    ProjectSectionColumns,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './cnn.module.css';

// Import all CNN images
import cnn1 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.05 PM.jpeg';
import cnn2 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.05 PM (1).jpeg';
import cnn3 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.05 PM (2).jpeg';
import cnn4 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.05 PM (3).jpeg';
import cnn5 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.06 PM.jpeg';
import cnn6 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.06 PM (1).jpeg';
import cnn7 from '~/assets/cnn/WhatsApp Image 2026-01-03 at 1.51.06 PM (2).jpeg';

const title = 'Facial Personality Profiling CNN';
const description =
    'A deep learning project using Convolutional Neural Networks to predict personality traits from facial features.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

const screenshots = [
    { src: cnn1, alt: 'CNN model visualization 1' },
    { src: cnn2, alt: 'CNN model visualization 2' },
    { src: cnn3, alt: 'CNN model visualization 3' },
    { src: cnn4, alt: 'CNN model visualization 4' },
    { src: cnn5, alt: 'CNN model visualization 5' },
    { src: cnn6, alt: 'CNN model visualization 6' },
    { src: cnn7, alt: 'CNN model visualization 7' },
];

export const CNN = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://www.youtube.com/watch?v=VApflOkXT0I"
                    linkLabel="Watch Demo"
                />
                {/* <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/VApflOkXT0I"
                                title="Facial Personality Profiling CNN Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </ProjectSectionContent>
                </ProjectSection> */}
                <ProjectSection>
                    <ProjectSectionColumns width="full" className="cnn-columns" style={{ alignItems: 'start', gridTemplateColumns: '1.5fr 1fr' }}>
                        <div className="cnn-media" style={{ paddingRight: 'var(--spaceM)' }}>
                            <ProjectTextRow>
                                <ProjectSectionHeading>Project Gallery</ProjectSectionHeading>
                                <ProjectSectionText>
                                    The gallery below showcases the model's visualizations and live testing results from our <strong>Berlin Workshop</strong>, where users interacted with the system in a real-world setting. Use the arrows to navigate.
                                </ProjectSectionText>
                            </ProjectTextRow>
                            <div style={{ marginTop: 'var(--spaceL)' }}>
                                <SimpleCarousel className={styles.carouselOverride} aspectRatio="9/16" images={screenshots} />
                            </div>
                        </div>

                        <div className="cnn-text">
                            <ProjectTextRow width="full">
                                <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                                <ProjectSectionText>
                                    This end-to-end Machine Learning application predicts <strong>"Big Five" personality traits</strong> (OCEAN) by analyzing facial biometric data. The system utilizes a custom Convolutional Neural Network (CNN) to map facial micro-features to psychological profiles.
                                    <br /><br />
                                    <strong>Key Features:</strong>
                                    <br />
                                    • <strong>Biometric Analysis:</strong> Processes 64x64 facial inputs to detect traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.
                                    <br />
                                    • <strong>Real-time Inference:</strong> A React-based frontend communicates with a Flask REST API for instant scoring.
                                    <br />
                                    • <strong>Trait Classification:</strong> Categorizes results into High, Moderate, or Low intensity for each trait.
                                    <br /><br />
                                    <strong>Technical Stack:</strong>
                                    <br />
                                    • <strong>ML Framework:</strong> TensorFlow, Keras (CNN), NumPy
                                    <br />
                                    • <strong>Backend:</strong> Python (Flask)
                                    <br />
                                    • <strong>Frontend:</strong> React.js
                                </ProjectSectionText>
                            </ProjectTextRow>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default CNN;
