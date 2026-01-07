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
import cockpitGif from '~/assets/itqan/Cookpit2-ezgif.com-optimize.gif';
import f16Gif from '~/assets/itqan/ezgif.com-optimize.gif';
import assemblyGif from '~/assets/itqan/Assembly-Disassembly-Trim-ezgif.com-video-to-gif-converter.gif';

const title = 'Pilot Training VR Simulator';
const description =
    'A Multiplayer VR flight training system designed for pilots to master jet engine mechanics and aircraft systems.';

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
                    <ProjectSectionColumns className="pilot-columns" style={{ alignItems: 'start' }}>
                        <div className="pilot-media" style={{ paddingRight: 'var(--spaceM)' }}>

                            {/* GIF 1: Cockpit */}
                            <div style={{ paddingBottom: 'var(--spaceL)' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Realistic cockpit interaction.
                                </ProjectSectionText>
                                <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                    <ProjectImage
                                        src={cockpitGif}
                                        alt="VR Cockpit interior interaction"
                                    />
                                </div>
                            </div>

                            {/* GIF 2: F16 */}
                            <div style={{ paddingBottom: 'var(--spaceL)' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Miniature grabbable F16 aircraft.
                                </ProjectSectionText>
                                <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                    <ProjectImage
                                        src={f16Gif}
                                        alt="F16 Aerodynamics simulation"
                                    />
                                </div>
                            </div>

                            {/* GIF 3: Assembly */}
                            <div style={{ paddingBottom: 'var(--spaceL)' }}>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Assembly and disassembly mechanic.
                                </ProjectSectionText>
                                <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                                    <ProjectImage
                                        src={assemblyGif}
                                        alt="Aircraft engine assembly and disassembly"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pilot-text">
                            <ProjectTextRow width="full">
                                <ProjectSectionHeading>About the Project</ProjectSectionHeading>
                                <ProjectSectionText as="div">
                                    This VR Simulator allows up to <strong>20 players</strong> to attend a flight training session, developed using <strong>Netcode for GameObjects (NGO)</strong>.
                                    <br /><br />
                                    <br />
                                    • The simulator features different <strong>five aircraft</strong>.
                                    <br />
                                    • Users can learn the architecture of critical subsystems:
                                    <ul style={{ paddingLeft: '40px', marginTop: '10px', marginBottom: '10px', listStyleType: 'disc', listStylePosition: 'outside' }}>
                                        <li style={{ marginBottom: '10px' }}><strong>Engines:</strong> Detailed animations showing internal components for 4 different engine types.</li>
                                        <li style={{ marginBottom: '10px' }}><strong>Fuel & Oil Systems:</strong> Visualized flow paths, how fluids move through the pipes.</li>
                                        <li><strong>Hydraulic & Electrical Systems:</strong> Showing the movement of aircraft surfaces and the electrical interaction across the cockpit.</li>
                                    </ul>
                                    <strong>Advanced Aerodynamics</strong>
                                    <br />
                                    The project also features a <strong>Dynamic Airflow Module</strong>. Showing how air interacts with the wings and fuselage.
                                    <br /><br />
                                    <strong>Technical Stack:</strong>
                                    <br />
                                    • <strong>Engine:</strong> Unity Game Engine (C#)
                                    <br />
                                    • <strong>Networking:</strong> Netcode for GameObjects (NGO)
                                    <br />
                                    • <strong>XR Framework:</strong> XR Interaction Toolkit & Meta SDK
                                    <br />
                                    • <strong>Target Hardware:</strong> Meta Quest 3
                                    <br />
                                    • <strong>3D Modeling & Animation:</strong> Blender
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
