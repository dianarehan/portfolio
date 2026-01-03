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

const title = 'Museum Heist';
const description =
    'A stealth-action multiplayer game where players must plan and execute the perfect heist.';

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
                    // TODO: Add your Itch.io or game URL here
                    url="#"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                {/* TODO: Add detailed game description here */}
                                Museum Heist is a multiplayer stealth game where players work together
                                to infiltrate a museum and steal valuable artifacts while avoiding
                                detection.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                {/* TODO: Add more sections with images, GIFs, and gameplay details */}
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};
