'use client';

import styles from './FAQ.module.css';
import { useState } from 'react';
import { Accordion } from '@/components/accordion/Accordion';
import CTA from '@/components/CTA/CTA';

const question = {
    title: 'What learning materials i will get?',
    content:
        'As a Lingoda student, you can download the class materials for free and use them at any time. After your class, you will also find a quiz to help you refresh and practice your new skills. There are also downloadable exercises available. All materials are uniquely created by Lingoda experts to align with CEFR standards. If you want to learn more about CEFR, read more here.',
};

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(4);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className={styles.FAQSection}>
            <div className={styles.titleBlock}>
                <div className={styles.titleAndBtn}>
                    <h1>Frequently asked</h1>
                    <div className={styles.withBtn}>
                        <h1>questions</h1>
                        <CTA color="darkColor" />
                    </div>
                </div>

                <p className={styles.description}>
                    Here, you'll find detailed, well-explained answers to the
                    most frequently asked questions, giving you a complete
                    understanding of our services, processes, and how we work to
                    ensure the best experience for you. Whether you're a new or
                    existing customer, this section will guide you through
                    everything you need to know.
                </p>
            </div>

            <div className={styles.accordionSection}>
                <div className={styles.acordionBlock}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Accordion
                            key={index}
                            id={index}
                            title={question.title}
                            content={question.content}
                            isOpen={openId === index}
                            onToggle={toggle}
                        />
                    ))}
                </div>
                <div className={styles.acordionBlock}>
                    {Array.from({ length: 3 }).map((_, index) => {
                        const id = index + 3;

                        return (
                            <Accordion
                                key={id}
                                id={id}
                                title={question.title}
                                content={question.content}
                                isOpen={openId === id}
                                onToggle={toggle}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
