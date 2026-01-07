import Image from 'next/image';
import styles from './secondarySlider.module.css';

const slides = [
    {
        img: '/advantages-slider/4.jpg',
        label: 'Expertly-designed curriculums',
        description:
            'Follow our structured curriculum at each level, or choose the classes you’d like to take for complete flexibility.',
    },
    {
        img: '/advantages-slider/5.jpg',
        label: 'Expertly-designed curriculums',
        description:
            'Follow our structured curriculum at each level, or choose the classes you’d like to take for complete flexibility.',
    },
    {
        img: '/advantages-slider/4.jpg',
        label: 'Expertly-designed curriculums',
        description:
            'Follow our structured curriculum at each level, or choose the classes you’d like to take for complete flexibility.',
    },
];

interface SecondarySliderProps {
    index: number;
}

export default function SecondarySlider({ index }: SecondarySliderProps) {
    const visibleSlides = [
        slides[index % slides.length],
        slides[(index + 1) % slides.length],
        slides[(index + 2) % slides.length],
    ];

    return (
        <div className={styles.secondarySlider}>
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

                        {/* <Image
                            src={slide.img}
                            alt={slide.label}
                            width={500}
                        /> */}
                        <div className={styles.infoBlock}>
                            <h6 className={styles.label}> {slide.label} </h6>
                            <p className={styles.description}>
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
