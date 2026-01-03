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
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Project Screenshots</ProjectSectionHeading>
                            <ProjectSectionText>
                                Visualizations and results from the CNN facial personality profiling model. Use the arrows to navigate.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <SimpleCarousel images={screenshots} />
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default CNN;
