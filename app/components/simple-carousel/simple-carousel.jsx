import { useState } from 'react';
import { Image } from '~/components/image';
import styles from './simple-carousel.module.css';

export function SimpleCarousel({ images, className, aspectRatio }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`${styles.carousel} ${className || ''}`}>
            <div className={styles.imageContainer} style={aspectRatio ? { aspectRatio } : undefined}>
                <Image
                    className={styles.image}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    placeholder={images[currentIndex].src}
                />
            </div>

            <button
                className={styles.arrow}
                data-direction="prev"
                onClick={goToPrevious}
                aria-label="Previous image"
            >
                <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
                    <path d="M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" />
                </svg>
            </button>

            <button
                className={styles.arrow}
                data-direction="next"
                onClick={goToNext}
                aria-label="Next image"
            >
                <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
                    <path d="M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" />
                </svg>
            </button>

            <div className={styles.dots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={styles.dot}
                        data-active={index === currentIndex}
                        onClick={() => goToIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.counter}>
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
