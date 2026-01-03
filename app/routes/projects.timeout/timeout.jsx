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

const title = 'Timeout';
const description =
    'A game about time management and strategic decision making.';

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Timeout = () => {
    return (
        <Fragment>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    // TODO: Add your game URL here
                    url="https://dianarehan.itch.io/time-out"
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About the Game</ProjectSectionHeading>
                            <ProjectSectionText>
                                {/* TODO: Add detailed game description here */}
                                Timeout challenges players to manage their time effectively while
                                making strategic decisions under pressure.
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
