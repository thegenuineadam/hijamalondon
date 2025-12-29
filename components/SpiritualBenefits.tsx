
import React from 'react';

const SpiritualBenefits: React.FC = () => {
    return (
        <section id="spiritual-benefits" className="py-20 relative overflow-hidden bg-cream-bg">
            {/* Parallax Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://files.catbox.moe/bo2jm2.png" 
                    alt="Cupping therapy session showing suction cups on back" 
                    className="w-full h-full object-cover opacity-40"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cream-bg via-cream-bg/60 to-cream-bg"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">A Sunnah Practice for Mind, Body & Soul</h2>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">Embrace the holistic healing of this ancient prophetic practice to restore balance and purify your being.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                    {/* Left Column: Prophetic Healing */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="font-serif text-2xl font-bold text-primary-teal mb-4">Prophetic Healing Tradition</h3>
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="bg-amber-100 p-2 rounded-lg">
                                <i className="fas fa-moon text-primary-gold text-2xl"></i>
                            </div>
                            <div>
                                <p className="text-gray-700 leading-relaxed">Hijama (Hacamat) is a highly recommended practice in Islam, praised by Prophet Muhammad (ﷺ) as one of the best remedies. It is a powerful means of physical detoxification and spiritual purification.</p>
                            </div>
                        </div>

                        <div className="bg-teal-50/80 p-5 rounded-xl border border-teal-100 relative">
                            <i className="fas fa-quote-left text-teal-200 text-4xl absolute -top-3 -left-2 opacity-50"></i>
                            <p className="text-teal-900 italic mb-2 relative z-10 font-medium">"Indeed, the best of remedies you have is Hijama (cupping)."</p>
                            <p className="text-xs text-teal-600 text-right font-bold uppercase tracking-wide">- Sahih al-Bukhari 5696</p>
                        </div>
                        <p className="text-sm text-center text-gray-500 mt-6 flex items-center justify-center gap-2">
                            <i className="fas fa-audio-description text-primary-teal"></i>
                            We can play Qur'an recitation during your session for enhanced tranquility.
                        </p>
                    </div>

                    {/* Right Column: Frequency Guidelines */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-amber-100 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="font-serif text-2xl font-bold text-primary-gold mb-4">Treatment Frequency</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm border border-gray-50">
                                <span className="text-gray-700 font-medium flex items-center"><i className="fas fa-calendar-check mr-3 text-primary-teal"></i>For specific conditions:</span>
                                <span className="font-bold text-success-green bg-green-50 px-4 py-1.5 rounded-full text-xs uppercase tracking-wide border border-green-100">Once a month</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm border border-gray-50">
                                <span className="text-gray-700 font-medium flex items-center"><i className="fas fa-leaf mr-3 text-primary-teal"></i>For general wellbeing:</span>
                                <span className="font-bold text-primary-gold bg-amber-50 px-4 py-1.5 rounded-full text-xs uppercase tracking-wide border border-amber-100">Every 3 months</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h4 className="font-bold text-text-charcoal mb-4 text-lg flex items-center">
                                <span className="bg-primary-teal text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span> 
                                Step Process
                            </h4>
                            <ol className="space-y-3 relative border-l-2 border-gray-200 ml-3 pl-5">
                                <li className="relative">
                                    <span className="absolute -left-[27px] top-1 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></span>
                                    <strong>Massage Cupping:</strong> <span className="text-gray-600 text-sm">To relax muscles & lymphatics.</span>
                                </li>
                                <li className="relative">
                                    <span className="absolute -left-[27px] top-1 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></span>
                                    <strong>Dry Cupping:</strong> <span className="text-gray-600 text-sm">To pull stagnation to surface.</span>
                                </li>
                                <li className="relative">
                                    <span className="absolute -left-[27px] top-1 w-3 h-3 bg-primary-gold rounded-full border-2 border-white animate-pulse"></span>
                                    <strong>Wet Cupping (Hijama):</strong> <span className="text-gray-600 text-sm">To detoxify & release.</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpiritualBenefits;
