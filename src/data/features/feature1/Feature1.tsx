import CTA from '@/components/CTA/CTA';
import styles from './feature1.module.css';
import Li from '@/components/Li/Li';

const listItems = [
    'Group classes with 3–5 students',
    'Cancel or change intensity every 4 weeks',
    '30 or 60 classes in 2 months',
];

export default function Feature1() {
    return (
        <div className={styles.feature}>
            <h2>Sprint</h2>
            <p className={styles.description}>
                2-month challenge with big rewards – for learners who want extra
                motivation.
            </p>

            <ul className={styles.list}>
                {listItems.map((text, i) => (
                    <Li text={text} key={i} />
                ))}
            </ul>

            <CTA
                backgroundColor="light"
                withArrow={false}
                color="darkColor"
            />
        </div>
    );
}
