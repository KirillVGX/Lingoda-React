import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={230}
                height={80}
            />

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <h6>Languages</h6>
                    </li>
                    <span>
                        <Image
                            src="ellipse.svg"
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
                            src="ellipse.svg"
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
                            src="ellipse.svg"
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
                        src="/phone.svg"
                        alt="Phone"
                        width={16}
                        height={16}
                    />
                </span>
                <h6 className={styles.number}>+380 99 5345 123</h6>
            </div>
        </header>
    );
}
