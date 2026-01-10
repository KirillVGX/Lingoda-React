import Image from 'next/image';
import styles from './difference.module.css';

export default function Difference() {
    return (
        <section className={styles.differenceSection}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>
                    English or Business English. What’s the difference?
                </h1>
                <p className={styles.desciption}>
                    With native-level teachers and courses for all levels, our
                    live, online classes will transform your skills for those
                    life-changing moments.
                </p>
            </div>
            <div className={styles.differenceImages}>
                <div className={styles.englishBlock}>
                    <div
                        className={`${styles.cardBgEnglish} ${styles.cardBgEnglish1}`}
                    />
                    <div
                        className={`${styles.cardBgEnglish} ${styles.cardBgEnglish2}`}
                    />
                    <div className={styles.imageWrapperEnglish}>
                        <Image
                            src="/images/difference/english.png"
                            alt="English diffences"
                            fill
                            className={styles.imageEnglish}
                        />
                    </div>
                </div>

                <div className={styles.tvWrapper}>
                    <Image
                        src="/images/difference/tv.png"
                        alt="TV"
                        fill
                        className={styles.tvImage}
                    />
                </div>

                <div className={styles.englishBusinessBlock}>
                    <div
                        className={`${styles.cardBgBusiness} ${styles.cardBgBusiness1}`}
                    />
                    <div
                        className={`${styles.cardBgBusiness} ${styles.cardBgBusiness2}`}
                    />
                    <div className={styles.imageWrapperBusiness}>
                        <Image
                            src="/images/difference/business-english.png"
                            alt="Business English diffences"
                            fill
                            className={styles.imageBusiness}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
