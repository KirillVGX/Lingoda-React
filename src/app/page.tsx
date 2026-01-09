import Advantages from '@/sections/advantages/Advantages';
import Difference from '@/sections/difference/Difference';
import FAQ from '@/sections/FAQ/FAQ';
import Features from '@/sections/features/Features';
import Footer from '@/sections/footer/Footer';
import Hero from '@/sections/hero/Hero';
import Levels from '@/sections/levels/Levels';
import Students from '@/sections/students/Students';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Hero />
            <Advantages />
            <Students />
            <div className="white-section">
                <Features />
                <Levels />
                <Difference />
                <div className="rightSpiral">
                    <Image
                        src="/images/difference/right-spiral.png"
                        alt="Spiral"
                        fill
                    />
                </div>
                <div className="leftSpiral">
                    <Image
                        src="/images/difference/left-spiral.png"
                        alt="Spiral"
                        fill
                    />
                </div>
            </div>
            <FAQ />
            <hr className="hr" />
            <Footer />
        </>
    );
}
