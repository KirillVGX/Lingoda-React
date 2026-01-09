import Image from 'next/image';
import styles from './CTA.module.css';

interface CTAProps {
    text?: string;
    backgroundColor?: 'basic' | 'dark' | 'light';
    color?: 'darkColor' | 'lightColor';
    withArrow?: boolean;
    arrowColor?: 'dark' | 'light';
}

export default function CTA({
    text = 'Learn More',
    backgroundColor = 'basic',
    color = 'lightColor',
    withArrow = true,
    arrowColor = 'light',
}: CTAProps) {
    const isLightBg = arrowColor === 'light';

    return (
        <button className={`${styles.CTAButton} ${withArrow ? '' : styles.padding} ${styles[backgroundColor]}`} >
            <p className={`${withArrow ? styles.boldText : styles.thickText} ${styles[color]}`}>{text}</p>
            {withArrow && (
                <span
                    className={`${styles.imageWrapper} ${
                        isLightBg ? styles.darkWrapper : styles.lightWrapper
                    }`}
                >
                    {isLightBg ? (
                        <Image
                            src="/images/arrows/light-arrow.svg"
                            alt="arrow"
                            width={12}
                            height={12}
                        />
                    ) : (
                        <Image
                            src="/images/arrows/dark-arrow.svg"
                            alt="arrow"
                            width={12}
                            height={12}
                        />
                    )}
                </span>
            )}
        </button>
    );
}
