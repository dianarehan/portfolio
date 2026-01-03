import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useRef, useState } from 'react';
import styles from './video-project.module.css';

export function VideoProject({
    id,
    visible: sectionVisible,
    sectionRef,
    index,
    title,
    description,
    videoId, // YouTube video ID
    buttonText,
    buttonLink,
    alternate,
    ...rest
}) {
    const [focused, setFocused] = useState(false);
    const titleId = `${id}-title`;
    const indexText = index < 10 ? `0${index}` : index;

    function renderDetails(visible) {
        return (
            <div className={styles.details}>
                <div aria-hidden className={styles.index}>
                    <Divider
                        notchWidth="64px"
                        notchHeight="8px"
                        collapsed={!visible}
                        collapseDelay={1000}
                    />
                    <span className={styles.indexNumber} data-visible={visible}>
                        {indexText}
                    </span>
                </div>
                <Heading
                    level={3}
                    as="h2"
                    className={styles.title}
                    data-visible={visible}
                    id={titleId}
                >
                    {title}
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                    {description}
                </Text>
                <div className={styles.button} data-visible={visible}>
                    <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }

    function renderVideo(visible) {
        return (
            <div className={styles.videoWrapper} data-visible={visible}>
                {/* TODO: Replace videoId with your YouTube video ID */}
                <iframe
                    className={styles.video}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <Section
            className={styles.videoProject}
            data-alternate={alternate}
            data-first={index === 1}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            as="section"
            aria-labelledby={titleId}
            ref={sectionRef}
            id={id}
            tabIndex={-1}
            {...rest}
        >
            <div className={styles.content}>
                <Transition in={sectionVisible || focused}>
                    {({ visible }) => (
                        <>
                            {!alternate && (
                                <>
                                    {renderDetails(visible)}
                                    {renderVideo(visible)}
                                </>
                            )}
                            {alternate && (
                                <>
                                    {renderVideo(visible)}
                                    {renderDetails(visible)}
                                </>
                            )}
                        </>
                    )}
                </Transition>
            </div>
        </Section>
    );
}
