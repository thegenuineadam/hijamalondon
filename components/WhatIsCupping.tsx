import React from 'react';

const WhatIsCupping: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto text-center mb-16 animate-fade-in-up delay-300">
            <span className="text-primary-gold font-bold tracking-widest uppercase text-xs mb-3 block">New to Cupping?</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-teal mb-6">What is Cupping Therapy & Hijamah?</h2>
            
            <div className="prose prose-lg mx-auto text-gray-600 mb-8">
                <p className="lead text-lg md:text-xl font-light text-text-charcoal mb-4">
                    Think of it as a <span className="font-semibold text-primary-teal">"reverse massage"</span>. Instead of pushing down, we use suction to pull <span className="text-primary-teal font-semibold">up</span>.
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-4">
                    Cupping, also known as <strong>Hijamah</strong> or <strong>Hacamat</strong>, is an ancient holistic therapy trusted for over 3,000 years. The suction creates space between muscle fibers and skin, allowing oxygenated blood to flood the area. This promotes rapid healing, relieves tension, and clears stagnation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="glass-panel p-5 rounded-2xl border border-white/50 hover:shadow-lg transition-shadow bg-white/40">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-teal-100 text-primary-teal flex items-center justify-center">
                            <i className="fas fa-wind text-sm"></i>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-gray-800">Dry Cupping</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        <strong>For Relaxation & Massage.</strong> Cups are placed on the skin to create suction. Increases circulation, perfect for muscle tightness and deep tissue release.
                    </p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-amber-100/50 hover:shadow-lg transition-shadow bg-white/40">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-primary-gold flex items-center justify-center">
                            <i className="fas fa-tint text-sm"></i>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-gray-800">Wet Cupping (Hijama/Hacamat)</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        <strong>For Detoxification.</strong> After dry cupping, tiny scratches draw out stagnant blood. Used for deep detoxification and spiritual wellness.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatIsCupping;