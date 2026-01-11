import styles from './CTA.module.css';
import Image from 'next/image';
import clsx from 'clsx';

interface CTAProps {
    text?: string;
    backgroundColor?: 'basic' | 'dark' | 'light';
    color?: 'darkColor' | 'lightColor';
    withArrow?: boolean;
    arrowColor?: 'dark' | 'light';
    arrowBg?: boolean;
}

export default function CTA({
    text = 'Learn More',
    backgroundColor = 'basic',
    color = 'lightColor',
    withArrow = true,
    arrowColor = 'light',
    arrowBg
}: CTAProps) {
    const isLightArrow = arrowColor === 'light';
    const arrowBackground = arrowBg ? '#FFF' : '';
    let arrowSrc = isLightArrow
        ? '/images/arrows/light-arrow.svg'
        : '/images/arrows/dark-arrow.svg';

    if (arrowBg) arrowSrc = '/images/arrows/dark-arrow.svg'

    return (
        <button
            className={clsx(
                styles.CTAButton,
                styles[backgroundColor],
                !withArrow && styles.padding
            )}
            type='button'
        >
            <p
                className={`${withArrow ? styles.boldText : styles.thickText} ${
                    styles[color]
                }`}
            >
                {text}
            </p>
            {withArrow && (
                <span
                    className={`${styles.imageWrapper} ${
                        isLightArrow ? styles.darkWrapper : styles.lightWrapper
                    }`}
                    style={{backgroundColor: arrowBackground}}
                >
                    <Image
                        src={arrowSrc}
                        alt=""
                        aria-hidden="true"
                        width={12}
                        height={12}
                        className={styles.arrow}
                    />
                </span>
            )}
        </button>
    );
}
