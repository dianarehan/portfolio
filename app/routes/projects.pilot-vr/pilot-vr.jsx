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
import assemblyGif from '~/assets/itqan/Assembly-Disassembly-Trim-ezgif.com-optimize.gif';
import cockpitGif from '~/assets/itqan/Cookpit2-ezgif.com-optimize.gif';
import f16Gif from '~/assets/itqan/ezgif.com-optimize.gif';

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
                            <div>
                                <ProjectSectionText style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                    Detailed engine assembly and internal mechanics.
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
                                <ProjectSectionText>
                                    This VR flight training system is a technical simulator designed for pilots to provide understanding of aviation mechanics.
                                    <br /><br />
                                    <strong>Multi-Aircraft Fleet</strong>
                                    <br />
                                    The simulator features <strong>five aircraft</strong>, each modeled to serve as a digital twin for training and exploration.
                                    <br /><br />
                                    <strong>Deep-Dive System Walkthroughs</strong>
                                    <br />
                                    Users can step inside the airframe to inspect and learn the architecture of critical subsystems:
                                    <br /><br />
                                    • <strong>Turbine & Piston Engines:</strong> Detailed animations showing internal component movement, including <strong>airflow intake</strong>, <strong>compression cycles</strong>, and <strong>combustion stages</strong>.
                                    <br />
                                    • <strong>Fuel & Oil Systems:</strong> Visualized plumbing and flow paths, highlighting how fluids move through the airframe during flight.
                                    <br />
                                    • <strong>Hydraulic & Electrical Grids:</strong> Interactive schematics showing the actuation of flight surfaces and the distribution of power across the cockpit.
                                    <br /><br />
                                    <strong>Advanced Aerodynamics</strong>
                                    <br />
                                    Beyond internal mechanics, the project features a <strong>Dynamic Airflow Module</strong>. This visualizes the physics of flight in real-time, showing how air interacts with the wings and fuselage. It covers all flight regimes, from laminar flow to high-angle-of-attack turbulence, providing a visual masterclass in lift and drag.
                                    <br /><br />
                                    <strong>Technical Stack:</strong>
                                    <br />
                                    • <strong>Engine:</strong> Unity Game Engine (C#)
                                    <br />
                                    • <strong>XR Framework:</strong> XR Interaction Toolkit & Meta SDK
                                    <br />
                                    • <strong>Target Hardware:</strong> Oculus Quest 3
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
