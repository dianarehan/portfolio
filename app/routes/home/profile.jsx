import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
// CV is now in public folder - accessible at /Diana-Rehan-CV.pdf
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Diana, currently working as a VR developer intern at{' '}
      <Link href="https://www.it-qan.com/">ITQAN for smart solutions</Link>. My portfolio includes personal games developed during game jams in my free time, alongside professional VR interaction scenarios created as part of my work.
      If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text> */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <br />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              {/* <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div> */}
            </div>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.buttonGroup} data-visible={visible}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/Diana-Rehan-CV.pdf"
                  icon="download"
                  download="Diana-Rehan-CV.pdf"
                >
                  Download CV
                </Button>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/Diana-Rehan-CV.pdf"
                  target="_blank"
                  icon="link"
                >
                  View CV
                </Button>
              </div>
              {/* PDF Viewer */}
              <div className={styles.pdfViewer} data-visible={visible}>
                <iframe
                  src="/Diana-Rehan-CV.pdf"
                  title="Diana Rehan CV"
                  className={styles.pdfFrame}
                />
              </div>
            </div>

          </div>
        )}
      </Transition>
    </Section>
  );
};
