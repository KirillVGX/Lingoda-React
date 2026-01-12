'use client';

import styles from './white.module.css';
import Image from 'next/image';
import Difference from '@/sections/difference/Difference';
import Levels from '@/sections/levels/Levels';
import Features from '@/sections/features/Features';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function White() {
    const isTablet = useMediaQuery('(min-width: 1224px)');

    return (
        <div className={styles.whiteSection}>
            <Features />
            <Levels />
            <Difference />
            {isTablet && (
                <>
                    <div className={styles.rightSpiral}>
                        <Image
                            src="/images/difference/right-spiral.png"
                            alt="Spiral"
                            fill
                        />
                    </div>
                    <div className={styles.leftSpiral}>
                        <Image
                            src="/images/difference/left-spiral.png"
                            alt="Spiral"
                            fill
                        />
                    </div>
                </>
            )}
        </div>
    );
}
