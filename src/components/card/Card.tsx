import Image from 'next/image';
import styles from './card.module.css';

type CardProps = {
    name: string;
    text: string;
    src: string;
    alt: string;
}

export default function Card({ name, text, src, alt }: CardProps) {
    return (
        <div className={styles.card}>
            <Image
                src={src}
                alt={alt}
                fill
                className={styles.image}
            />
            <div className={styles.info}>
                <small className={styles.text}>{text}</small>
                <span className={styles.name}>{name}</span>
                <span className={styles.playButton}>
                    <Image src='/images/icons/triangle.svg' alt='Play button' width={26.4} height={31} />
                </span>
            </div>
        </div>
    );
}
