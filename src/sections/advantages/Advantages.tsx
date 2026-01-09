'use client';

import Image from 'next/image';
import styles from './advantages.module.css';
import MainSlider from './main-slider/mainSlider';
import { useState } from 'react';
import SecondarySlider from './secondary-slider/SecondarySlider';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Advantages() {
    const [index, setIndex] = useState(0);
    const isTablet = useMediaQuery('(min-width: 1280px)');
    const isMobile = useMediaQuery('(min-width: 768px)');

    return (
        <section className={styles.advantagesSection}>
            <div className={styles.mainBlock}>
                <h3 className={styles.title}>
                    Why should you{' '}
                    <span className="selector">learn English online</span> with
                    Lingoda?
                </h3>
                <div className={styles.swiperAndDescription}>
                    {isTablet && <MainSlider />}
                    <div className={styles.description}>
                        <p>
                            With native-level teachers and courses for all
                            levels, our live, online classes will transform your
                            skills for those life-changing moments.
                        </p>
                        <div className={styles.buttons}>
                            <button
                                className={styles.button}
                                onClick={() => setIndex((i) => i - 1)}
                            >
                                <Image
                                    src="/images/arrows/left-arrow-dark.svg"
                                    alt="Previous slide"
                                    width={10}
                                    height={10}
                                />
                            </button>
                            <button
                                className={`${styles.button} ${styles.nextButton}`}
                                onClick={() => setIndex((i) => i + 1)}
                            >
                                <Image
                                    src="/images/arrows/right-arrow-dark.svg"
                                    alt="Next slide"
                                    width={10}
                                    height={10}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SecondarySlider index={index} />
            {isMobile && (
                <Image
                    src="/images/bg/spirral-blur.png"
                    alt="spiral"
                    fill
                    className={styles.bgImage}
                />
            )}
        </section>
    );
}
