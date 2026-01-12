'use client';

import styles from './swiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import StoryCard from '@/components/card/Card';
import { cards } from '@/data/cards';

export default function CustomSwiper() {
    return (
        <div className={styles.swiper}>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                initialSlide={1}
                centeredSlides={false}
                modules={[Pagination]}
                pagination={{
                    el: `.${styles.pagination}`,
                    clickable: true,
                    renderBullet: (index, className) => {
                        if (index > 2) return '';
                        return `<span class="${className} ${styles.bullet}"></span>`;
                    },
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    1120: {
                        slidesPerView: 4,
                    },
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        className={styles.slide}
                    >
                        <StoryCard {...card} />
                    </SwiperSlide>
                ))}

                <div className={styles.pagination} />
            </Swiper>
        </div>
    );
}
