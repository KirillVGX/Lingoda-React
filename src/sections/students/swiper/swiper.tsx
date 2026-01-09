'use client';

import styles from './swiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import StoryCard from '@/components/card/Card';
import { Card } from '@/types/card.type';
import { cards } from '@/data/cards';

const slides: Card[] = [...cards, ...cards];

export default function CustomSwiper() {
    return (
        <div className={styles.swiper}>
            <Swiper
                effect="coverflow"
                slidesPerView={4}
                centeredSlides
                loop
                spaceBetween={20}
                slidesOffsetBefore={-235}
                modules={[EffectCoverflow, Pagination]}
                // slidesPerGroup={Math.ceil(slides.length / 3)}
                pagination={{
                    el: `.${styles.pagination}`,
                    clickable: true,
                    renderBullet: (index, className) => {
                        if (index > 2) return '';
                        return `<span class="${className} ${styles.bullet}"></span>`;
                    },
                    
                }}
                coverflowEffect={{
                    rotate: 0,
                    depth: 200,
                    stretch: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {slides.map((card, index) => (
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
