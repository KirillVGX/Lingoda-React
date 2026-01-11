import styles from './features.module.css';
import Feature1 from '@/components/features/feature1/Feature1';
import Feature3 from '@/components/features/feature3/Feature3';
import Feature2 from '@/components/features/feature2/Feature2';
import Feature4 from '@/components/features/feature4/Feature4';

export default function Features() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <Feature1 />
                <Feature2 />
            </div>
            <div className={styles.container}>
                <Feature3 />
                <Feature4 />
            </div>
        </section>
    );
}
