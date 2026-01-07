'use client';

import { useState } from 'react';
import styles from './mainSlider.module.css';

const slides = [
    { img: '/advantages-slider/1.png', label: 'For business' },
    { img: '/advantages-slider/2.png', label: 'Next' },
    { img: '/advantages-slider/3.png', label: 'Idea' },
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
                    src="/return-arrow.svg"
                    alt="next"
                />
            </button>
        </div>
    );
}
