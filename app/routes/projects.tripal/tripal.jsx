import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { media } from '~/utils/style';

// Import all Tripal images
import tripalHomepage from '~/assets/tripal/homepage.jpg';
import tripal1 from '~/assets/tripal/1740511301962.jpg';
import tripal2 from '~/assets/tripal/1740511304319.jpg';
import tripal3 from '~/assets/tripal/1740511304543.jpg';
import tripal4 from '~/assets/tripal/1740511307389.jpg';
import tripal5 from '~/assets/tripal/1740511311735.jpg';
import tripal6 from '~/assets/tripal/1740511329107.jpg';
import tripal7 from '~/assets/tripal/1740511332653.jpg';
import tripal8 from '~/assets/tripal/1740511346265.jpg';

const title = 'Tripal Website';
const description =
    'A modern travel planning website built with Next.js, featuring trip discovery and booking functionality.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

const screenshots = [
    { src: tripalHomepage, alt: 'Tripal homepage' },
    { src: tripal1, alt: 'Tripal screenshot 1' },
    { src: tripal2, alt: 'Tripal screenshot 2' },
    { src: tripal3, alt: 'Tripal screenshot 3' },
    { src: tripal4, alt: 'Tripal screenshot 4' },
    { src: tripal5, alt: 'Tripal screenshot 5' },
    { src: tripal6, alt: 'Tripal screenshot 6' },
    { src: tripal7, alt: 'Tripal screenshot 7' },
    { src: tripal8, alt: 'Tripal screenshot 8' }
];

export const Tripal = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://tripal-sable.vercel.app/"
                    linkLabel="Visit Website"
                />
                {/* <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <Image
                            srcSet={`${tripalHomepage} 800w, ${tripalHomepage} 1920w`}
                            width={800}
                            height={500}
                            placeholder={tripalHomepage}
                            alt="Tripal homepage"
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection> */}
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Project Screenshots</ProjectSectionHeading>
                            <ProjectSectionText>
                                Explore different pages and features of the Tripal website. Use the arrows to navigate.
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

export default Tripal;
