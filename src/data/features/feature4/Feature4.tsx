import styles from './feature4.module.css';
import Image from 'next/image';
import CTA from '@/components/CTA/CTA';

export default function Feature4() {
    return (
        <div className={styles.feature}>
            <h4 className={styles.title}>
                What learning English with Lingoda looks like
            </h4>
            <p className={styles.description}>
                Peek inside a class, discover how to book a lesson and what
                extra studying opportunities there are for you.
            </p>
            <CTA color="darkColor" />
            <div className={styles.imageContainer}>
                <Image
                    src="/images/bg/girl-with-book.png"
                    alt="Girl with book"
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    );
}
