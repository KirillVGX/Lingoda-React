import { Level } from '@/types/level.type';
import styles from './level.module.css';

export default function LevelCard({ level, title, text }: Level) {
    return (
        <div className={styles.levelContainer}>
            <span className={styles.level}>{level}</span>
            <div className={styles.description}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}
