import React from 'react';

const Practitioners: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-16 bg-white/40">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-teal mb-4">Meet Our Expert Practitioners</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">A dedicated, family-run clinic with over 22 years of combined experience providing compassionate care.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {/* Adam */}
                    <div className="reveal-on-scroll glass-panel p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-1">
                        <div className="relative w-40 h-40 mx-auto mb-8">
                            <div className="absolute inset-0 bg-teal-200 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            <img src="https://files.catbox.moe/7t2nm0.png" alt="Adam - Male Hijama practitioner" className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" decoding="async" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-primary-teal mb-2">Adam</h3>
                        <p className="text-primary-gold font-bold uppercase text-xs tracking-widest mb-6">Practitioner • 7+ Years Experience</p>
                        <p className="text-gray-600 mb-8 leading-relaxed">Adam specializes in sports injuries and pain management, combining traditional techniques with a modern understanding of anatomy.</p>
                        <div className="inline-block bg-teal-50 text-teal-800 text-sm font-semibold py-2 px-6 rounded-full border border-teal-100 shadow-sm">
                            ✓ Treats Men
                        </div>
                    </div>

                    {/* Shamim */}
                    <div className="reveal-on-scroll glass-panel p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-1">
                         <div className="relative w-40 h-40 mx-auto mb-8">
                            <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            <img src="https://files.catbox.moe/a9tszt.png" alt="Shamim - Female Hijama practitioner" className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" decoding="async" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-primary-teal mb-2">Shamim</h3>
                        <p className="text-primary-gold font-bold uppercase text-xs tracking-widest mb-6">Practitioner • 15+ Years Experience</p>
                        <p className="text-gray-600 mb-8 leading-relaxed">Top choice for female Hijama in London. With extensive experience in women's health and wellness, Shamim offers a gentle approach.</p>
                        <div className="inline-block bg-amber-50 text-amber-800 text-sm font-semibold py-2 px-6 rounded-full border border-amber-100 shadow-sm">
                            ✓ Treats Women
                        </div>
                    </div>

                    {/* Rashid */}
                    <div className="reveal-on-scroll glass-panel p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-1">
                        <div className="relative w-40 h-40 mx-auto mb-8">
                            <div className="absolute inset-0 bg-teal-200 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            <img src="https://files.catbox.moe/7t2nm0.png" alt="Rashid - Male Hijama practitioner" className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" decoding="async" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-primary-teal mb-2">Rashid</h3>
                        <p className="text-primary-gold font-bold uppercase text-xs tracking-widest mb-6">Practitioner • 15+ Years Experience</p>
                        <p className="text-gray-600 mb-8 leading-relaxed">Rashid brings over a decade of expertise in wet cupping and holistic therapies, delivering focused and effective treatment sessions.</p>
                        <div className="inline-block bg-teal-50 text-teal-800 text-sm font-semibold py-2 px-6 rounded-full border border-teal-100 shadow-sm">
                            ✓ Treats Men
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Practitioners;