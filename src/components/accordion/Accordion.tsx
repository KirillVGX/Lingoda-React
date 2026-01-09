'use client';

import Image from 'next/image';
import styles from './accordion.module.css';

type AccordionProps = {
    id: number;
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: (id: number) => void;
};

export function Accordion({
    id,
    title,
    content,
    isOpen,
    onToggle,
}: AccordionProps) {
    return (
        <div
            className={styles.accordion}
            onClick={() => onToggle(id)}
        >
            <div className={styles.questionBlock}>
                <h5 className={styles.question}>{title}</h5>

                <span
                    className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
                >
                    <Image
                        src="/images/arrows/left-arrow-dark.svg"
                        alt="toggle"
                        width={20}
                        height={20}
                    />
                </span>
            </div>

            <div
                className={`${styles.answerWrapper} ${
                    isOpen ? styles.open : ''
                }`}
            >
                <p className={styles.answer}>{content}</p>
            </div>
        </div>
    );
}
