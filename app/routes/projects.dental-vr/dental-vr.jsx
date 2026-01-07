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
import anatomyGif from '~/assets/dentalsim/anatomy-ezgif.com-video-to-gif-converter.gif';
import anatomy2Gif from '~/assets/dentalsim/anatomy2-ezgif.com-video-to-gif-converter.gif';
import extractionGif from '~/assets/dentalsim/extraction-ezgif.com-video-to-gif-converter.gif';

const title = 'Dental Prototype VR Simulator';
const description =
    'A VR training simulator for dental procedures, providing hands-on practice in a safe virtual environment.';

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
                    url="https://www.youtube.com/watch?v=rVsoI9lu_0M"
                    linkLabel="Watch Demo"
                />
                <ProjectSection padding="top">
                    <ProjectSectionColumns className="dental-columns" style={{ alignItems: 'start' }}>
                        <div className="dental-media" style={{ paddingRight: 'var(--spaceM)' }}>
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Visualize tooth anatomy.
                                </ProjectSectionText>
                                <ProjectImage
                                    src={anatomyGif}
                                    alt="Dental Anatomy Simulation showing tooth extraction layers"
                                />
                            </div>

                            <div style={{ height: 'var(--spaceL)' }} />
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    Resizing and isolation of tooth layers.
                                </ProjectSectionText>
                                <ProjectImage
                                    src={anatomy2Gif}
                                    alt="Dental Procedure Simulation"
                                />
                            </div>

                            <div style={{ height: 'var(--spaceL)' }} />
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    Extraction procedure using physics-based tools.
                                </ProjectSectionText>
                                <ProjectImage
                                    src={extractionGif}
                                    alt="Surgical Extraction Procedure"
                                />
                            </div>

                        </div>
                        <div className="dental-text">
                            <ProjectTextRow width="full">
                                <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                                <ProjectSectionText as="div">
                                    This VR simulator offers dental students an environment to learn about dental anatomy and procedures.
                                    <br /><br />
                                    <strong>Module 1: Anatomy Mode</strong>
                                    <br />
                                    This mode allows students to interact with accurate models to understand the human jaw.
                                    <ul style={{ paddingLeft: '40px', marginTop: '10px', marginBottom: '20px', listStyleType: 'disc', listStylePosition: 'outside' }}>
                                        <li style={{ marginBottom: '10px' }}><strong>Visualization:</strong> View every tooth in high fidelity, including the root structures and nerve pathways.</li>
                                        <li style={{ marginBottom: '10px' }}><strong>Interaction:</strong> Users can rotate, resize, and isolate specific teeth.</li>
                                        <li><strong>Labels:</strong> Integrated labels provide the medical names for every component.</li>
                                    </ul>

                                    <strong>Module 2: Surgical Extraction Procedure</strong>
                                    <br />
                                    A procedural simulation that tests clinical decision-making through realistic surgical scenarios.
                                    <ul style={{ paddingLeft: '40px', marginTop: '10px', marginBottom: '10px', listStyleType: 'disc', listStylePosition: 'outside' }}>
                                        <li style={{ marginBottom: '10px' }}><strong>Extraction Simulation:</strong> Guides the student through the step-by-step process of a tooth extraction.</li>
                                        <li style={{ marginBottom: '10px' }}><strong>Adaptive Challenges:</strong> Features a "Broken Tooth" scenario. If the tooth breaks, they can use another tool to remove the tooth.</li>
                                    </ul>
                                </ProjectSectionText>
                            </ProjectTextRow>
                            <div style={{ height: 'var(--spaceL)' }} />
                            <ProjectTextRow width="full">
                                <ProjectSectionHeading>Technologies Used</ProjectSectionHeading>
                                <ProjectSectionText>
                                    <strong>Technical Stack:</strong>
                                    <br />
                                    • <strong>Engine:</strong> Unity Game Engine (C#)
                                    <br />
                                    • <strong>XR Framework:</strong> Auto Hand VR
                                    <br />
                                    • <strong>Target Hardware:</strong> Oculus Quest 3
                                    <br />
                                    • <strong>3D Modeling:</strong> Blender                                </ProjectSectionText>
                            </ProjectTextRow>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

