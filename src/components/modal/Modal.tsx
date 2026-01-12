import type { ReactNode, CSSProperties } from 'react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import styles from './modal.module.css';
import Image from 'next/image';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={140}
                    height={40}
                    className={styles.logoModal}
                />

                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <Image
                        src="./images/icons/close-button.svg"
                        alt="close menu"
                        width={32}
                        height={32}
                    />
                </button>

                {children}
            </div>
        </div>
    );
}
