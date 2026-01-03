import { Footer } from '~/components/footer';
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

const title = 'Pilot Training VR Simulator';
const description =
    'A comprehensive VR flight training system designed to prepare pilots with realistic cockpit simulations.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const PilotVR = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://www.youtube.com/watch?v=zRXndIMaAxU"
                    linkLabel="Watch Demo"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                {/* TODO: Add detailed project description here */}
                                This VR flight simulator provides an immersive training environment
                                for aspiring pilots, featuring realistic cockpit controls and
                                various flight scenarios.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                {/* TODO: Add more sections with images, GIFs, and details */}
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};
