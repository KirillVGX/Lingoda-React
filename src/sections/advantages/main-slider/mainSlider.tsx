'use client';

import { useState } from 'react';
import styles from './mainSlider.module.css';

const slides = [
    { img: '/images/advantages-slider/1.png', label: 'For business' },
    { img: '/images/advantages-slider/2.png', label: 'Next' },
    { img: '/images/advantages-slider/3.png', label: 'Idea' },
];

export default function MainSlider() {
    const [index, setIndex] = useState(0);

    const visibleSlides = [
        slides[index % slides.length],
        slides[(index + 1) % slides.length],
        slides[(index + 2) % slides.length],
    ];

    return (
        <div className={styles.mainSwiper}>
            <div className={styles.swiperTrack}>
                {visibleSlides.map((slide, i) => (
                    <div
                        key={i}
                        className={styles.card}
                        data-pos={i}
                    >
                        <img
                            src={slide.img}
                            alt={slide.label}
                        />
                    </div>
                ))}
            </div>

            <button
                className={styles.sliderButton}
                onClick={() => setIndex((i) => i + 1)}
            >
                <img
                    src="/images/arrows/return-arrow.svg"
                    alt="next"
                />
            </button>
        </div>
    );
}
