import React from 'react';
import type { Review } from '../types';

interface ReviewsCarouselProps {
    reviews: Review[];
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-cream-bg p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200 h-full flex flex-col justify-between w-[85vw] md:w-[600px] snap-center flex-shrink-0">
        <div>
            <div className="flex text-amber-500 mb-4 text-lg">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed line-clamp-5">
                “{review.text}”
            </blockquote>
        </div>
        <div>
            <cite className="font-bold text-text-charcoal not-italic text-lg">{review.name}</cite>
            <p className="text-sm text-gray-500">via Google Reviews</p>
            {review.practitioner && (
                 <p className="text-xs text-primary-teal mt-1 font-medium">Practitioner: {review.practitioner}</p>
            )}
        </div>
    </div>
);

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
    return (
        <section id="testimonials" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real reviews from our 5.0-star rated Google Business Profile.</p>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 px-2 md:px-0 no-scrollbar snap-x snap-mandatory">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
                
                <div className="md:hidden text-center text-gray-400 text-xs mt-2 animate-pulse">
                    Swipe to see more <i className="fas fa-chevron-right ml-1"></i>
                </div>

                 <div className="text-center mt-8">
                    <a href="https://maps.app.goo.gl/G9AEyWaCikrSbCRJA" target="_blank" rel="noopener noreferrer" className="bg-primary-gold hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold inline-block transition-transform hover:scale-105 shadow-md">
                        <i className="fab fa-google mr-2"></i>Read All 300+ Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsCarousel;