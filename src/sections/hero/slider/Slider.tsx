'use client';

import { useState } from 'react';
import styles from './slider.module.css';

const slides = [
    { img: '/hero-slider/1.png', label: 'For business', styleName: 'fullImage' },
    { img: '/hero-slider/4.png', label: 'Next' },
    { img: '/hero-slider/5.png', label: 'Idea' },
];

export default function Slider() {
    const [index, setIndex] = useState(0);

    const visibleSlides = [
        slides[index % slides.length],
        slides[(index + 1) % slides.length],
        slides[(index + 2) % slides.length],
    ];

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
                {visibleSlides.map((slide, i) => (
                    <div
                        key={i}
                        className={`${styles.card} ${
                            slide.styleName ? styles.fullImage : ''
                        }`}
                        data-pos={i}
                    >
                        <img src={slide.img} alt={slide.label} />
                        <div className={styles.cardLabel}>{slide.label}</div>
                    </div>
                ))}
            </div>

            <button
                className={styles.sliderButton}
                onClick={() => setIndex((i) => i + 1)}
            >
                <img src="/right-arrow.svg" alt="next" />
            </button>
        </div>
    );
}
