'use client';

import styles from './swiper.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from '../card/Card';

type Card = {
    name: string;
    text: string;
    src: string;
    alt: string;
};

const cards: Card[] = [
    {
        name: 'Max',
        text: 'Max shares her Lingoda success: mastering French and making friends through humour and flexible learning!',
        src: '/images/persons/max.png',
        alt: 'Max',
    },
    {
        name: 'Veronika',
        text: 'See how Veronika turned English lessons into career wins and summer fun with Lingoda!',
        src: '/images/persons/girl.png',
        alt: 'Veronika',
    },
    {
        name: 'George',
        text: 'From no German to seamless chats: George tells how Lingoda transformed her language skills in OAE!',
        src: '/images/persons/george.jpg',
        alt: 'George',
    },
    {
        name: 'Savannah',
        text: 'Join Savannah as she explores South America and shares how Lingoda sparked unforgettable Spanish conversations!',
        src: '/images/persons/savannah.jpg',
        alt: 'Savannah',
    },
];

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
                        <Card {...card} />
                    </SwiperSlide>
                ))}

                <div className={styles.pagination} />
            </Swiper>
        </div>
    );
}
