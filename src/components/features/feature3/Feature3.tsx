import styles from './feature3.module.css';
import CTA from '@/components/CTA/CTA';
import Li from '@/components/Li/Li';
import Image from 'next/image';

const listItems = [
    'Learn anytime – at your pace',
    'Earn 50 % cashback or more in class credits',
    'Group or 1-on-1 private classes',
];

export default function Feature3() {
    return (
        <div className={styles.feature}>
            <h2>FLEX</h2>
            <p className={styles.description}>
                Build your own language journey – for learners who want more
                flexibility.
            </p>

            <ul className={styles.list}>
                {listItems.map((text, i) => (
                    <Li
                        text={text}
                        isDark={false}
                        key={i}
                    />
                ))}
            </ul>

            <CTA
                backgroundColor="dark"
                withArrow={false}
            />

            <div className={styles.imageContainer}>
                <Image
                    src='/images/bg/feature3.png'
                    alt=""
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    );
}
