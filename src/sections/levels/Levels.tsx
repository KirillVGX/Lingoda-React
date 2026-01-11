import CTA from '@/components/CTA/CTA';
import styles from './levels.module.css';
import LevelCard from '@/components/level/Level';
import { levels } from '@/data/levels';

export default function Levels() {
    return (
        <section className={styles.levelsSection}>
            <div className={styles.infoBlock}>
                <div className={styles.info}>
                    <h3 style={{color: 'hsla(0, 0%, 100%, 1)'}} >Learn about our English levels</h3>
                    <p>We don’t simply teach English from a textbook.</p>
                    <p>
                        Through our rotation of international teachers, you’ll
                        be exposed to a wide variety of accents, expressions and
                        cultures. This means you’ll always learn the most
                        up-to-date words and phrases used by English speakers
                        worldwide.
                    </p>
                    <p className={styles.end}>
                        And, in our Business English classes, we’ll prepare you
                        for success in all contexts, teaching you to
                        communicate, present and negotiate with confidence.
                    </p>
                </div>
                <CTA
                    color="darkColor"
                    arrowColor="light"
                    arrowBg
                />
            </div>
            <div className={styles.grid}>
                {levels.map((level, i) => (
                    <LevelCard {...level} key={i} />
                ))}
            </div>
        </section>
    );
}
