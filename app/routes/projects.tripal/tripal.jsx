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
                        <SimpleCarousel images={screenshots} />

                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                <strong>Tripal</strong> is a full-stack travel marketplace built using the <strong>MERN stack</strong>.
                                <br /><br />
                                The platform features a sophisticated <strong>Role-Based Access Control (RBAC)</strong> system, tailoring the experience for five distinct user types: Tourists, Tour Guides, Sellers, Advertisers, and Admins.
                            </ProjectSectionText>

                            <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                            <ProjectSectionText>
                                • <strong>Multi-Role User Management:</strong> Secure authentication and personalized dashboards for tourists, guides, sellers, and advertisers.
                                <br /><br />
                                • <strong>End-to-End Travel Booking:</strong> A centralized hub for tourists to discover and book activities, itineraries, hotels, flights, and transportation.
                                <br /><br />
                                • <strong>Integrated E-commerce:</strong> A dedicated marketplace where sellers manage product inventories and tourists can browse, review, and purchase travel essentials.
                                <br /><br />
                                • <strong>Financial & Loyalty System:</strong> Secure payment processing with integrated cancellation policies and a <strong>Loyalty Points</strong> system that rewards users for bookings.
                                <br /><br />
                                • <strong>Reviews & Social Proof:</strong> A transparent rating system allowing users to review activities, products, and tour guides.
                                <br /><br />
                                • <strong>Administrative Command Center:</strong> Comprehensive admin tools for user moderation, profile approvals, and complaint resolution.
                                <br /><br />
                                • <strong>Real-time Notifications:</strong> Automated updates for booking confirmations, and promotional offers
                                <br /><br />
                                <strong>Technical Stack:</strong>
                                <br />
                                • <strong>Frontend:</strong> React.js, Tailwind CSS / Styled Components
                                <br />
                                • <strong>Backend:</strong> Node.js, Express.js
                                <br />
                                • <strong>Database:</strong> MongoDB (Mongoose ODM)
                                <br />
                                • <strong>Authentication:</strong> JWT (JSON Web Tokens) & Bcrypt
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default Tripal;
