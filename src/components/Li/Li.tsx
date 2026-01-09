import Image from 'next/image';
import styles from './li.module.css'

type LiProps = {
    text: string;
    isDark?: boolean;
};

export default function Li({ text, isDark = true }: LiProps) {
    return (
        <li className={styles.listItem}>
            <span
                className={`${styles.checkMark} ${
                    !isDark && styles.checkMarkDark
                }`}
            >
                {isDark ? (
                    <Image
                        src="/images/icons/check-mark-dark.svg"
                        alt="Check mark"
                        width={11.73}
                        height={11.52}
                    />
                ) : (
                    <Image
                        src="/images/icons/check-mark-light.svg"
                        alt="Check mark"
                        width={11.73}
                        height={11.52}
                    />
                )}
            </span>

            <h5 className={`${styles.liText} ${!isDark && styles.liTextDark}`}>
                {text}
            </h5>
        </li>
    );
}