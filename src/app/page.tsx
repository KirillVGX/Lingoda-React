import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Advantages = lazy(() => import('@/sections/advantages/Advantages'));
const FAQ = lazy(() => import('@/sections/FAQ/FAQ'));
const Footer = lazy(() => import('@/sections/footer/Footer'));
const Hero = lazy(() => import('@/sections/hero/Hero'));
const Students = lazy(() => import('@/sections/students/Students'));
const White = lazy(() => import('@/sections/white/white'));
const Header = lazy(() => import('@/sections/header/Header'));

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Header />
            </Reveal>
            <main>
                <Reveal>
                    <Hero />
                </Reveal>
                <Reveal>
                    <Advantages />
                </Reveal>
                <Reveal>
                    <Students />
                </Reveal>
                <Reveal>
                    <White />
                </Reveal>
                <Reveal>
                    <FAQ />
                </Reveal>
                <Reveal>
                    <hr className="hr" />
                    <Footer />
                </Reveal>
            </main>
        </Suspense>
    );
}
