import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        {/* <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        /> */}
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to do everything."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design and Manage</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days.
                  </ListItem>
                  <ListItem>
                    For planning and organizing I use{' '}
                    <Link href="https://trello.com/">Trello</Link>, it really made my life easier. 
                  </ListItem>
                  <ListItem>
                    I use{' '}
                    <Link href="https://www.canva.com/">Canva</Link> for really quick designs for my games when puplishing out a game jam on <Link href="https://dianarehan.itch.io/">itch.io</Link>
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I basically use <Link href="https://unity.com/products/unity-engine">Unity</Link> as my current game engine,
                    hopefully I’ll be able to switch to <Link href="https://www.unrealengine.com/en-US/">Unreal Engine</Link> in the future.
                  </ListItem>
                  <ListItem>
                    Brave is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                  I often work with the <Link href="https://www.mongodb.com/mern-stack">MERN stack</Link> (MongoDB, Express.js, React, Node.js) for full-stack web development projects.
                </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (by the way)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Zen Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Tofu65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </>
  );
};
