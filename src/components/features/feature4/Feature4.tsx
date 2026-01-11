'use client';

import styles from './feature4.module.css';
import Image from 'next/image';
import CTA from '@/components/CTA/CTA';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Feature4() {
    const isMobile = useMediaQuery('(max-width: 680px)');
    const src = isMobile
        ? '/images/bg/girl-with-book-mobile.png'
        : '/images/bg/girl-with-book.png';

    return (
        <div className={styles.feature}>
            <div className={styles.content}>
                <h4 className={styles.title}>
                    What learning English with Lingoda looks like
                </h4>
                <p className={styles.description}>
                    Peek inside a class, discover how to book a lesson and what
                    extra studying opportunities there are for you.
                </p>
                <CTA color="darkColor" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={src}
                    alt="Girl with book"
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    );
}
