import styles from './feature2.module.css';

export default function Feature2() {
    return (
        <div className={styles.feature}>
            <div className={styles.titleBlock}>
                <h1 className={styles.titleText}>What English</h1>
                <h1 className={styles.titleText}>courses does </h1>
                <h1 className={styles.titleText}> Lingoda offer?</h1>
            </div>
            <p className={styles.description}>
                With native-level teachers and courses for all levels, our live,
                online classes will transform your skills for those
                life-changing moments.
            </p>
        </div>
    );
}
