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
                    url="https://www.youtube.com/watch?v=rVsoI9lu_0M"
                    linkLabel="Watch Demo"
                />
                <ProjectSection padding="top">
                    <ProjectSectionColumns className="dental-columns" style={{ alignItems: 'start' }}>
                        <div className="dental-media" style={{ paddingRight: 'var(--spaceM)' }}>
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Detailed anatomy simulation allowing students to visualize tooth details.
                                </ProjectSectionText>
                                <ProjectImage
                                    src={anatomyGif}
                                    alt="Dental Anatomy Simulation showing tooth extraction layers"
                                />
                            </div>

                            <div style={{ height: 'var(--spaceL)' }} />
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    Interactive resizing and isolation of tooth layers.
                                </ProjectSectionText>
                                <ProjectImage
                                    src={anatomy2Gif}
                                    alt="Dental Procedure Simulation"
                                />
                            </div>

                            <div style={{ height: 'var(--spaceL)' }} />
                            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    Surgical extraction procedure using physics-based tools.
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
                                <ProjectSectionText>
                                    This VR simulation offers dental students an environment to master oral surgery and dental anatomy. It bridges the gap between textbook theory and clinical practice through two specialized modules.
                                    <br /><br />
                                    <strong>Module 1: High-Fidelity Anatomy Mode</strong>
                                    <br />
                                    This mode serves as a comprehensive digital reference for oral study. Students can interact with anatomically accurate models to understand the human jaw.
                                    <br /><br />
                                    • <strong>Detailed Visualization:</strong> View every tooth in high fidelity, including the hidden root structures and nerve pathways.
                                    <br />
                                    • <strong>Interactive Manipulation:</strong> Users can rotate, resize, and isolate specific teeth.
                                    <br />
                                    • <strong>Nomenclature:</strong> Integrated labels provide the medical names for every component.
                                    <br /><br /><br />
                                    <strong>Module 2: Surgical Extraction Procedure</strong>
                                    <br />
                                    A procedural simulation that tests clinical decision-making through realistic surgical scenarios.
                                    <br /><br />
                                    • <strong>Full Procedure Simulation:</strong> Guides the student through the step-by-step process of a tooth extraction.
                                    <br />
                                    • <strong>Adaptive Challenges:</strong> Features a "Broken Tooth" scenario. If the tooth structure fails, the simulation requires the student to adapt their strategy.
                                    <br />
                                    • <strong>Advanced Toolset:</strong> Teaches the correct application of various instruments; students must recognize when to transition from standard forceps to specialized tools to remove remaining fragments.
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
                                    • <strong>XR Framework:</strong> XR Interaction Toolkit & Auto Hand VR
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

