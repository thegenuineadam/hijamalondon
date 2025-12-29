
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsCarousel from './components/ProductsCarousel';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import { reviews, products, conditions, faqItems } from './constants';

// Standard Imports (Restored for stability)
import SpiritualBenefits from './components/SpiritualBenefits';
import ConditionsCarousel from './components/ConditionsCarousel';
import Practitioners from './components/Practitioners';
import ReviewsCarousel from './components/ReviewsCarousel';
import GalleryCarousel from './components/GalleryCarousel';
import LocationMap from './components/LocationMap';
import Faq from './components/Faq';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Animation Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // slight delay to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="animated-bg-gradient"></div>
            
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="pt-[88px] relative z-10" onClick={() => { if (isMenuOpen) setIsMenuOpen(false); }}>
                <Hero />
                
                <ProductsCarousel products={products} />
                
                <LocationMap />

                <ReviewsCarousel reviews={reviews} />

                <GalleryCarousel />

                <Services />

                <ConditionsCarousel conditions={conditions} />

                <SpiritualBenefits />

                <Practitioners />

                <Faq faqItems={faqItems} />

                <InstagramFeed />

                <Contact />
            </main>
            <Footer />
            <FloatingSocials />
        </>
    );
};

export default App;
