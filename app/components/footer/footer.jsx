import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

import { Icon } from '~/components/icon';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <div className={styles.socials}>
      <a
        href={`https://github.com/${config.github}`}
        className={styles.socialIcon}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Icon icon="github" />
      </a>
      <a
        href={`https://www.linkedin.com/in/${config.linkedin}`}
        className={styles.socialIcon}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <Icon icon="linkedin" />
      </a>
      <a
        href={config.itch}
        className={styles.socialIcon}
        target="_blank"
        rel="noreferrer"
        aria-label="itch.io"
      >
        <Icon icon="itch.io" />
      </a>
      <a
        href={config.upwork}
        className={styles.socialIcon}
        target="_blank"
        rel="noreferrer"
        aria-label="Upwork"
      >
        <Icon icon="upwork" />
      </a>
    </div>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      {/* <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link> */}
    </Text>
  </footer>
);
