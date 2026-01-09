'use client';

import Image from 'next/image';
import styles from './header.module.css';
import Modal from '@/components/modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';

export default function Header() {
    const isTablet = useMediaQuery('(min-width: 768px)');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={230}
                height={80}
                className={styles.logo}
            />

            {isTablet ? (
                <>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <h6>Languages</h6>
                            </li>
                            <span>
                                <Image
                                    src="/images/icons/ellipse.svg"
                                    alt="ellipse"
                                    width={10}
                                    height={10}
                                />
                            </span>
                            <li className={styles.listItem}>
                                <h6>How it works</h6>
                            </li>
                            <span>
                                <Image
                                    src="/images/icons/ellipse.svg"
                                    alt="ellipse"
                                    width={10}
                                    height={10}
                                />
                            </span>
                            <li className={styles.listItem}>
                                <h6>Sprint</h6>
                            </li>
                            <span>
                                <Image
                                    src="/images/icons/ellipse.svg"
                                    alt="ellipse"
                                    width={10}
                                    height={10}
                                />
                            </span>
                            <li className={styles.listItem}>
                                <h6>More</h6>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.contactNumber}>
                        <span className={styles.imageContainer}>
                            <Image
                                src="/images/socials/phone.svg"
                                alt="Phone"
                                width={16}
                                height={16}
                            />
                        </span>
                        <h6 className={styles.number}>+380 99 5345 123</h6>
                    </div>
                </>
            ) : (
                <button
                    className={styles.burgerButton}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <span className={styles.imageButton}>
                        <Image
                            src="/images/icons/burger-button.svg"
                            alt="Open menu"
                            width={23}
                            height={20}
                        />
                    </span>
                </button>
            )}

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            ><div className=""></div></Modal>
        </header>
    );
}
