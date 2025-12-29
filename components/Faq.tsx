
import React, { useState } from 'react';
import type { FaqItem } from '../types';

interface FaqProps {
    faqItems: FaqItem[];
}

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="bg-cream-bg rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <button
                className="w-full px-6 py-5 text-left font-semibold text-text-charcoal hover:bg-gray-50 flex justify-between items-center transition-colors"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="pr-4">{item.question}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-700 border-t border-gray-200" dangerouslySetInnerHTML={{ __html: item.answer }}>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Faq: React.FC<FaqProps> = ({ faqItems }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-12 bg-cream-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your questions about Hijama & Hacamat Cupping, answered.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <FaqAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;