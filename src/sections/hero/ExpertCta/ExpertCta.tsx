import Image from 'next/image';
import styles from './expertCta.module.css';

export default function ExpertCta() {
    return (
        <div className={styles.expertCta}>
            <div className={styles.cardWrapper}>
                <div className={`${styles.cardBg} ${styles.cardBg1}`}></div>
                <div className={`${styles.cardBg} ${styles.cardBg2}`}></div>
                <div className={styles.card}>
                    <Image
                        src="/arrow.png"
                        alt="arrow"
                        width={312}
                        height={51}
                        className={styles.arrow}
                    />

                    <p>
                        Would you like to talk to an expert and learn more about
                        how Lingoda can help with your language learning
                        journey?
                    </p>

                    <div className={styles.quiz}>
                        <div className={styles.answer}>
                            <span>
                                <Image
                                    src="ellipse.svg"
                                    alt="ellipse"
                                    width={10}
                                    height={10}
                                />
                            </span>
                            <h6 className={styles.variant}>Yes</h6>
                        </div>
                        <div className={styles.answer}>
                            <span>
                                <Image
                                    src="ellipse.svg"
                                    alt="ellipse"
                                    width={10}
                                    height={10}
                                />
                            </span>
                            <h6 className={styles.variant}>No</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.socialsBlock}>
                <div className={styles.social}>
                    <span className={styles.imgWrapper}>
                        <Image
                            src="/instagram.svg"
                            alt="Instagram"
                            width={60}
                            height={60}
                        />
                    </span>
                </div>
                <div className={styles.social}>
                    <span className={styles.imgWrapper}>
                        <Image
                            src="/facebook.svg"
                            alt="Facebook"
                            width={60}
                            height={60}
                        />
                    </span>
                </div>
                <div className={styles.social}>
                    <span className={styles.imgWrapper}>
                        <Image
                            src="/whatsapp.svg"
                            alt="Whatsapp"
                            width={60}
                            height={60}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
