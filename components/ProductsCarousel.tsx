
import React from 'react';
import type { Product } from '../types';

interface ProductsCarouselProps {
    products: Product[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
    
    const handleScrollToLocation = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://placehold.co/800x600/2D3748/FFFFFF?text=Image+Not+Found";
        // Specific fallback for black seed oil if needed, or generic placeholder
        if (e.currentTarget.alt === "Black seed oil") {
             e.currentTarget.src = "https://placehold.co/800x600/2D3748/FFFFFF?text=Black+Seed+Oil";
        }
    };

    return (
        <section id="products" className="py-12 bg-cream-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">Natural Wellness Shop</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Authentic remedies available exclusively at our clinic.</p>
                    <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm mt-4 border border-amber-100">
                        <i className="fas fa-store-alt"></i> In-store purchase only
                    </div>
                </div>

                <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 md:px-0 no-scrollbar snap-x snap-mandatory">
                    {products.map((product, index) => (
                        <div key={index} className="flex-shrink-0 snap-center px-2 md:px-0 w-72 md:w-auto">
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative flex-shrink-0">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                        loading="lazy" 
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="font-serif text-xl font-bold text-text-charcoal mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-auto">
                                        <span className="text-lg font-bold text-primary-teal">£{product.price}</span>
                                        <button 
                                            onClick={handleScrollToLocation}
                                            className="text-sm font-medium text-primary-gold hover:text-amber-700 transition-colors"
                                        >
                                            Enquire <i className="fas fa-arrow-right ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:hidden text-center text-gray-400 text-xs mt-2 animate-pulse">
                    Swipe to see more <i className="fas fa-chevron-right ml-1"></i>
                </div>
            </div>
        </section>
    );
};

export default ProductsCarousel;
