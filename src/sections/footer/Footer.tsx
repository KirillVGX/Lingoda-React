import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.head}>
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={230}
                    height={80}
                    className={styles.logo}
                />
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <h6>Languages</h6>
                        </li>
                        <li className={styles.listItem}>
                            <h6>How it works</h6>
                        </li>
                        <li className={styles.listItem}>
                            <h6>Sprint</h6>
                        </li>
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
            </div>

            <p className={styles.description}>
                By speaking someone's language you learn about them, their
                culture and their ideas. Breaking down the language barrier
                bridges cultural differences, fosters a world of inclusion and
                is a first step in helping to address humanity’s challenges. For
                us, language knows no boundaries.
            </p>

            <p className={styles.copyRight}>Copyright 2025 Lingoda GmbH. Zimmerstr. 69, 10117 Berlin - All Rights Reserved</p>
        </footer>
    );
}
