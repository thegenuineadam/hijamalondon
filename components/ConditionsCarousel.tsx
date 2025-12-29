import React from 'react';
import type { Condition } from '../types';

interface ConditionsCarouselProps {
    conditions: Condition[][];
}

const ConditionCard: React.FC<{ condition: Condition }> = ({ condition }) => (
    <div className="condition-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full w-full">
        <div className={`condition-icon w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-3xl bg-gradient-to-br ${condition.gradient} flex-shrink-0`}>
            <i className={condition.icon}></i>
        </div>
        <h3 className="condition-title text-xl font-bold text-text-charcoal mb-2">{condition.title}</h3>
        <p className="condition-description text-gray-600 text-sm flex-grow">{condition.description}</p>
    </div>
);

const ConditionsCarousel: React.FC<ConditionsCarouselProps> = ({ conditions }) => {
    // Flatten the array since we are switching to a swipeable list
    const allConditions = conditions.flat();

    return (
        <section id="conditions" className="py-12 bg-cream-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">Conditions We Treat</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">Evidence-based cupping therapy to help reduce pain, improve circulation, and promote your body's natural healing.</p>
                    <p className="text-md text-primary-teal font-medium bg-teal-50 inline-block px-6 py-2 rounded-full border border-teal-100">
                        <i className="fas fa-heart text-primary-gold mr-2"></i>
                        You do not need a specific medical condition to benefit. Many clients book for general detox, wellness, and stress relief.
                    </p>
                </div>

                {/* Swipeable Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 px-2 md:px-6 no-scrollbar snap-x snap-mandatory">
                    {allConditions.map((condition, index) => (
                        <div key={index} className="flex-shrink-0 snap-center w-80 md:w-96">
                            <ConditionCard condition={condition} />
                        </div>
                    ))}
                </div>
                
                <div className="text-center text-gray-400 text-xs mt-2 animate-pulse md:hidden">
                    Swipe to see more <i className="fas fa-chevron-right ml-1"></i>
                </div>
            </div>
        </section>
    );
};

export default ConditionsCarousel;