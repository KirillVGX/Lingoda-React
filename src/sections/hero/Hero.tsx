'use client';

import CTA from '@/components/CTA/CTA';
import styles from './hero.module.css';
import Slider from './slider/Slider';
import ExpertCta from './ExpertCta/ExpertCta';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Hero() {
    const isMac = useMediaQuery('(min-width: 1400px)');
    const isTablet = useMediaQuery('(min-width: 768px)');

    return (
        <section className={styles.heroSection}>
            <div className={styles.mainBlock}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        <h1>
                            Learn <span className="selector">English</span>
                        </h1>
                        <h1 className={styles.marginLeft}>
                            <span className="selector">online</span> with
                        </h1>
                        <div className={styles.titleAndCTA}>
                            <h1>Lingoda</h1>
                            <CTA text="Get Started" color='darkColor' />
                        </div>
                    </div>
                    <p className={styles.description}>
                        With native-level teachers and courses for all levels,
                        our live, online classes will transform your skills for
                        those life-changing moments.
                    </p>
                </div>
                {isTablet && <Slider />}
            </div>
            {isTablet && <ExpertCta />}
            {isTablet ? (
                <Image
                    src="/images/bg/hero-bg.png"
                    alt="spiral"
                    fill
                    className={styles.bgImage}
                />
            ) : (
                <Image
                    src="/images/bg/hero-bg-mobile.png"
                    alt="spiral"
                    fill
                    className={styles.bgImage}
                />
            )}

            {isMac && (
                <div className={styles.mainImage}>
                    <Image
                        src="/images/bg/main-girl.png"
                        alt="Main girl"
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            )}
            {!isTablet && (
                <div className={styles.mainImageMobile}>
                    <Image
                        src="/images/bg/main-girl.png"
                        alt="Main girl"
                        fill
                        className={styles.imageMobile}
                        priority
                    />
                </div>
            )}
        </section>
    );
}
