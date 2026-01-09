import styles from './students.module.css';
import CustomSwiper from './swiper/swiper';

export default function Students() {
    return (
        <section className={styles.studentsSection}>
            <div className={styles.title}>
                <h1 className={styles.titleText}>Get inspired by our</h1>
                <h1 className={styles.titleText}>
                    <span className="selector">students' success stories</span>
                </h1>
            </div>

            <p className={styles.description}>
                Hear how our students transformed their first language steps
                into life-changing moments. Let their stories motivate you to
                get your own language wins.
            </p>

            <CustomSwiper />
        </section>
    );
}
