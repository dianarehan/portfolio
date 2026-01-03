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

const title = 'Dental Prototype VR Simulator';
const description =
    'An immersive VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const DentalVR = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    // TODO: Add your project URL here
                    url="#"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                {/* TODO: Add detailed project description here */}
                                This VR simulator was designed to provide dental students with a
                                realistic training environment to practice various dental procedures
                                without the risks associated with real patients.
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
