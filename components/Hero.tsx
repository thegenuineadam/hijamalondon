
import React, { useState, useEffect } from 'react';
import WhatIsCupping from './WhatIsCupping';

const Hero: React.FC = () => {
    const [showPackages, setShowPackages] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookOnline = (e: React.MouseEvent) => {
        e.preventDefault();
        const setmoreBtn = document.getElementById('Setmore_button_iframe');
        if (setmoreBtn) {
            setmoreBtn.click();
        } else {
            window.open('https://hijamalondon.setmore.com', '_blank');
        }
    };

    return (
        <section id="home" className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply animate-fade-in-up transition-transform duration-100 ease-out"
                style={{ transform: `translate(-50%, ${scrollY * 0.2}px)` }}
            ></div>
            <div 
                className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full -z-10 mix-blend-multiply blur-3xl transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ></div>

            <div className="relative container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary-teal mb-6 leading-relaxed animate-fade-in-up" style={{ fontFamily: '"Neue Power", "Estiana", "Questa Grande", "Playfair Display", serif' }}>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-teal-700 to-teal-500 pb-4 transform scale-y-125 origin-bottom tracking-tighter">Hijama London</span>
                    </h1>

                    <div className="animate-fade-in-up delay-100 mb-6">
                        <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-6 py-2 rounded-full font-bold text-sm md:text-base shadow-sm border border-amber-300/50 transform hover:scale-105 transition-transform">
                            🏆 #1 Rated Cupping & Hijama Clinic in London
                        </span>
                    </div>

                    <p className="text-xl md:text-2xl text-text-charcoal mb-2 animate-fade-in-up delay-200 font-light">
                        Professional <span className="font-semibold text-primary-teal">Massage Cupping, Dry Cupping & Hijamah Clinic</span> in East London — <span className="font-semibold text-primary-gold">Established 2009</span>
                    </p>
                    <p className="text-sm text-gray-500 mb-8 animate-fade-in-up delay-300 max-w-2xl mx-auto italic">
                        Specialising in Lymphatic Drainage, Myofascial Release & Deep Tissue Alternatives
                    </p>
                    
                    <div className="flex items-center justify-center space-x-6 mb-16 animate-fade-in-up delay-300">
                         <a href="https://maps.app.goo.gl/G9AEyWaCikrSbCRJA" target="_blank" rel="noopener noreferrer" className="glass-panel px-6 py-3 rounded-full flex items-center space-x-4 hover:shadow-lg transition-all group">
                            <div className="flex text-amber-500 text-xl group-hover:scale-110 transition-transform">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="text-left">
                                <p className="text-2xl font-black text-primary-teal leading-none">5.0</p>
                                <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">300+ Reviews</p>
                            </div>
                         </a>
                    </div>

                    <WhatIsCupping />

                    <div id="pricing" className="w-full mx-auto mb-6 animate-fade-in-up delay-500">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-4xl font-bold text-primary-teal inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-primary-gold after:mx-auto after:mt-2 after:rounded-full">Session Pricing</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {/* Core Session */}
                            <div className="glass-panel rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-teal/50 h-full flex flex-col">
                                <h3 className="font-serif text-2xl font-bold text-gray-800">Core Session</h3>
                                <p className="text-gray-500 mt-1 mb-4 text-sm font-medium">~40 minutes</p>
                                <p className="text-5xl font-bold text-primary-teal mb-4">£55</p>
                                <p className="text-gray-600 mb-8 text-sm leading-relaxed h-12">Massage, dry, and wet cupping (blood cupping) for the back half of the body.</p>
                                <div className="mt-auto grid grid-cols-2 gap-3">
                                    <a href="https://hijamalondon.setmore.com/services/09a3cfc5-d8ec-4c41-a6f9-b1a660982bf0" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors text-sm text-center">
                                        Men
                                    </a>
                                    <a href="https://hijamalondon.setmore.com/services/2cb12eee-aa76-4552-91dc-b201af86f106" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-pink-500 hover:bg-pink-600 transition-colors text-sm text-center">
                                        Women
                                    </a>
                                </div>
                                <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-xs font-bold text-whatsapp-green mt-4 pointer-events-none no-underline">
                                    <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                </a>
                            </div>
                            
                            {/* Full Body Session (Highlighted) */}
                            <div id="full-body-session" className="glass-panel rounded-3xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-primary-gold relative bg-gradient-to-b from-white to-amber-50/50 flex flex-col h-full">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-gold to-amber-600 text-white px-8 py-2 rounded-full text-xs font-black shadow-lg tracking-widest whitespace-nowrap animate-pulse-gold">
                                    MOST POPULAR
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-gray-800 mt-6">Full Body Session</h3>
                                <p className="text-gray-500 mt-1 mb-4 text-sm font-semibold uppercase tracking-wide">~1 hour</p>
                                <div className="mb-6 flex items-baseline justify-center gap-2">
                                    <span className="text-2xl text-gray-400 line-through decoration-red-400 decoration-2">£89</span>
                                    <span className="text-7xl font-black text-primary-gold">£79</span>
                                </div>
                                <p className="text-gray-700 mb-8 text-base leading-relaxed font-medium">Full body coverage (back, front, head). The ultimate systemic detoxification.</p>
                                <div className="mt-auto grid grid-cols-2 gap-4">
                                    <a href="https://hijamalondon.setmore.com/services/9edfe3fd-c347-4620-a573-baa2397b75a7" target="_blank" rel="noopener noreferrer" className="py-4 rounded-xl font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-lg transition-all transform hover:-translate-y-1 text-center text-lg">
                                        Men
                                    </a>
                                    <a href="https://hijamalondon.setmore.com/services/5dbe7f7f-b397-43ad-922e-9bf810f91378" target="_blank" rel="noopener noreferrer" className="py-4 rounded-xl font-bold text-white bg-pink-500 hover:bg-pink-600 shadow-lg transition-all transform hover:-translate-y-1 text-center text-lg">
                                        Women
                                    </a>
                                </div>
                                <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm font-bold text-whatsapp-green mt-6 pointer-events-none no-underline">
                                    <i className="fab fa-whatsapp mr-1 text-lg"></i>Or message us to book
                                </a>
                            </div>

                            {/* Column 3 Stack: Bespoke, Facial, Home Visit, Packages */}
                            <div className="flex flex-col gap-6">
                                {/* Bespoke Session */}
                                <div className="glass-panel rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-500/50 bg-gradient-to-b from-white to-purple-50/20 flex flex-col">
                                    <h3 className="font-serif text-2xl font-bold text-gray-800">Bespoke Session</h3>
                                    <p className="text-gray-500 mt-1 mb-4 text-sm font-medium uppercase">Minimum 75 minutes</p>
                                    <div className="mb-4 flex flex-col items-center">
                                        <span className="text-4xl font-black text-purple-800">From £99</span>
                                        <span className="text-xs text-purple-600 font-black mt-1 tracking-wide">(+£20 per extra 15 minutes)</span>
                                    </div>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        <span className="text-purple-700 font-bold">No limit on cups!</span> Anywhere on body (including head, legs, arms). Includes extended massage and multiple rounds.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href="https://hijamalondon.setmore.com/services/9c07ec42-39fc-4aba-8ef4-b98a180876d0" target="_blank" rel="noopener noreferrer" className="py-3 rounded-xl font-bold text-white bg-teal-700 shadow-md text-sm text-center">Men</a>
                                        <a href="https://hijamalondon.setmore.com/services/73b4bafe-92a5-4ae0-b066-b17db8b2b803" target="_blank" rel="noopener noreferrer" className="py-3 rounded-xl font-bold text-white bg-pink-500 shadow-md text-sm text-center">Women</a>
                                    </div>
                                    <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-xs font-bold text-whatsapp-green mt-3 pointer-events-none no-underline">
                                        <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                    </a>
                                </div>

                                {/* Facial Cupping */}
                                <div className="glass-panel rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-teal/30 bg-gradient-to-b from-white to-teal-50/20 flex flex-col">
                                    <h3 className="font-serif text-2xl font-bold text-gray-800">Facial Cupping</h3>
                                    <p className="text-gray-500 mt-1 mb-4 text-sm font-medium uppercase">~35 minutes</p>
                                    <p className="text-4xl font-bold text-primary-teal mb-4">£55</p>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        Includes lymphatic drainage massage, dry cupping, and wet cupping on the face.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href="https://hijamalondon.setmore.com/services/34188ce2-ce34-4849-80e1-57400941ae45" target="_blank" rel="noopener noreferrer" className="py-3 rounded-xl font-bold text-white bg-teal-700 shadow-md text-sm text-center">Men</a>
                                        <a href="https://hijamalondon.setmore.com/services/16434934-9b3d-4d21-a00b-8856443ab061" target="_blank" rel="noopener noreferrer" className="py-3 rounded-xl font-bold text-white bg-pink-500 shadow-md text-sm text-center">Women</a>
                                    </div>
                                    <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-xs font-bold text-whatsapp-green mt-3 pointer-events-none no-underline">
                                        <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                    </a>
                                </div>

                                {/* Home Visit */}
                                <div className="glass-panel rounded-3xl p-6 text-center shadow-lg border-2 border-gray-100 bg-white/80">
                                    <h3 className="font-serif text-2xl font-bold text-gray-800">Home Visit</h3>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Across East London</p>
                                    <div className="mb-4">
                                        <p className="text-3xl font-black text-primary-teal">£100</p>
                                        <p className="text-xs font-bold text-gray-400">+ session fee</p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-6 font-medium leading-relaxed">You can either <span className="font-bold">call or whatsapp</span> us to book a home visit.</p>
                                    <div className="grid grid-cols-2 gap-3 mb-2">
                                        <a href="tel:+447740759975" className="py-3 rounded-xl font-bold text-white bg-teal-700 shadow-md text-sm text-center flex items-center justify-center gap-2">
                                            <i className="fas fa-phone-alt"></i> Men
                                        </a>
                                        <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="py-3 rounded-xl font-bold text-white bg-pink-500 shadow-md text-sm text-center flex items-center justify-center gap-2">
                                            <i className="fab fa-whatsapp"></i> Women
                                        </a>
                                    </div>
                                    <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-xs font-bold text-whatsapp-green mt-1 pointer-events-none no-underline">
                                        <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                    </a>
                                </div>

                                {/* Package Deals Dropdown */}
                                <div className="w-full">
                                    <button 
                                        onClick={() => setShowPackages(!showPackages)}
                                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl shadow-2xl border-4 border-white p-6 flex items-center justify-between hover:scale-[1.03] transition-all group relative overflow-hidden animate-pulse-gold hover:animate-none"
                                    >
                                        <div className="flex items-center gap-4 relative z-10 w-full justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-white text-primary-gold flex items-center justify-center font-black shadow-xl animate-bounce">
                                                    <i className="fas fa-tags text-2xl"></i>
                                                </div>
                                                <div className="text-left">
                                                    <span className="block font-black text-white text-2xl tracking-tighter uppercase leading-none">Package Deals</span>
                                                    <span className="text-[10px] text-amber-100 font-black uppercase tracking-[0.2em] block mt-1">Huge Savings - Tap to View</span>
                                                </div>
                                            </div>
                                            <i className={`fas fa-chevron-circle-down text-white text-3xl transition-transform duration-500 ${showPackages ? 'rotate-180' : ''}`}></i>
                                        </div>
                                    </button>
                                    
                                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showPackages ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                        <div className="grid gap-6">
                                            <div className="bg-white rounded-3xl p-6 border-2 border-teal-50 shadow-xl text-left">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-serif text-2xl font-bold text-gray-800">3x Core Package</h4>
                                                    <div className="text-right">
                                                        <span className="text-gray-400 text-sm line-through block font-bold">£165</span>
                                                        <span className="text-2xl font-black text-primary-teal">£150</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-6 font-medium">Ideal for consistent wellness and chronic pain management.</p>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <a href="https://hijamalondon.setmore.com/services/efc2e90c-f885-45af-a779-2d32ade4eaf7" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-teal-700 text-sm text-center shadow-md">Men</a>
                                                    <a href="https://hijamalondon.setmore.com/services/7f949f26-ca91-453b-98f9-4e7c6a1c8b89" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-pink-500 text-sm text-center shadow-md">Women</a>
                                                </div>
                                                <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-[10px] font-bold text-whatsapp-green mt-4 pointer-events-none no-underline uppercase tracking-widest">
                                                    <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                                </a>
                                            </div>

                                            <div className="bg-white rounded-3xl p-6 border-4 border-amber-100 shadow-xl relative overflow-hidden text-left pt-10">
                                                <div className="absolute top-0 right-0 bg-primary-gold text-white text-[10px] px-6 py-2 rounded-bl-3xl font-black z-10 shadow-md tracking-widest uppercase">BEST VALUE</div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-serif text-2xl font-bold text-gray-800">3x Full Body Package</h4>
                                                    <div className="text-right">
                                                        <span className="text-gray-400 text-sm line-through block font-bold">£267</span>
                                                        <span className="text-2xl font-black text-primary-gold">£225</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-amber-600 mb-6 font-black uppercase tracking-wider">Save £42 — Our Best Systemic Overhaul</p>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <a href="https://hijamalondon.setmore.com/services/dab738cc-ec0b-4da0-a2c9-117da44ec294" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-teal-700 text-sm text-center shadow-md">Men</a>
                                                    <a href="https://hijamalondon.setmore.com/services/5b34115e-6c61-469e-a388-82c4417a3618" target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-xl font-bold text-white bg-pink-500 text-sm text-center shadow-md">Women</a>
                                                </div>
                                                <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-[10px] font-bold text-whatsapp-green mt-4 pointer-events-none no-underline uppercase tracking-widest">
                                                    <i className="fab fa-whatsapp mr-1"></i>Or message us to book
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="booking-info" className="bg-gradient-to-br from-teal-800 to-primary-teal text-white rounded-[2rem] p-8 mb-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden group animate-fade-in-up delay-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                        
                        <div className="relative z-10">
                            <div className="flex flex-col items-center mb-6">
                                <div className="flex items-center justify-center space-x-3 mb-2">
                                    <span className="bg-white/20 p-2 rounded-full"><i className="fas fa-bullhorn text-amber-300 text-xl animate-pulse"></i></span>
                                    <h2 className="text-xl md:text-2xl font-bold tracking-wide">Best Way to Book: Online booking or Message Us</h2>
                                </div>
                                <span className="bg-white/10 text-amber-200 px-4 py-1 rounded-full text-sm font-semibold border border-white/20 backdrop-blur-sm">
                                    <i className="fas fa-calendar-check mr-2"></i>Same Day Bookings Available
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center items-stretch">
                                <a 
                                    href="https://hijamalondon.setmore.com" 
                                    onClick={handleBookOnline}
                                    className="lg:col-span-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-amber-300/30 p-6 md:p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-2xl group/icon flex flex-col items-center justify-center cursor-pointer min-h-[140px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <i className="fas fa-calendar-check text-amber-300 text-4xl group-hover/icon:scale-110 transition-transform"></i>
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-amber-300 text-2xl md:text-3xl tracking-wide">Book Online</span>
                                            <span className="text-white/80 text-sm">Instant Confirmation</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="tel:+447740759975" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 p-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg group/icon flex flex-col items-center justify-center min-h-[100px]">
                                    <i className="fas fa-phone text-amber-300 text-2xl mb-2 group-hover/icon:scale-110 transition-transform"></i>
                                    <p className="font-semibold text-amber-300 text-lg">Call Us</p>
                                </a>
                                
                                <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                                    <a href="sms:+447740759975" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 p-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg group/icon flex flex-col items-center justify-center">
                                        <i className="fas fa-comment-alt text-amber-300 text-2xl mb-1 group-hover/icon:scale-110 transition-transform"></i>
                                        <p className="font-semibold text-amber-300">Text Us</p>
                                    </a>
                                    <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="bg-whatsapp-green hover:bg-green-500 border border-white/10 p-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg group/icon flex flex-col items-center justify-center">
                                        <i className="fab fa-whatsapp text-2xl mb-1 group-hover/icon:scale-110 transition-transform"></i>
                                        <p className="font-semibold">WhatsApp</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a id="Setmore_button_iframe" href="https://hijamalondon.setmore.com" className="hidden">Book Online</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
