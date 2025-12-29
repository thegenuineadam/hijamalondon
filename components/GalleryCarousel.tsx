




import React from 'react';

const galleryImages = [
    {
        src: "https://files.catbox.moe/9bwxmp.png",
        alt: "Dry cupping therapy for back pain relief and circulation"
    },
    {
        src: "https://files.catbox.moe/02s4dy.png",
        alt: "Massage cupping technique on back muscles"
    },
    {
        src: "https://files.catbox.moe/mkeacl.png",
        alt: "Wet cupping (Hijama) treatment in progress"
    },
    {
        src: "https://files.catbox.moe/bo2jm2.png",
        alt: "Cupping therapy session showing suction cups on back"
    },
    {
        src: "https://files.catbox.moe/ec06oc.png",
        alt: "Post-hijama treatment marks indicating improved blood flow"
    },
    {
        src: "https://files.catbox.moe/t633eq.png",
        alt: "Full back cupping arrangement for holistic healing"
    },
    {
        src: "https://files.catbox.moe/xohef3.png",
        alt: "Hijama London Logo and Clinic Branding"
    },
    {
        src: "https://files.catbox.moe/8bycoe.jpg",
        alt: "Hijama cups applied to back for detox and wellness"
    }
];

const GalleryCarousel: React.FC = () => {
    return (
        <section id="gallery" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-primary-teal mb-4">Treatment Gallery</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">See our professional treatments in action. We maintain the highest standards of hygiene and care.</p>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-4 px-2 md:px-0 no-scrollbar snap-x snap-mandatory">
                    {galleryImages.map((img, index) => (
                         <div key={index} className="flex-shrink-0 snap-center w-[85vw] md:w-[600px] aspect-video rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative group">
                            <img 
                                src={img.src}
                                alt={img.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent text-white px-4 pt-8 pb-2 text-sm w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {img.alt}
                            </div>
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

export default GalleryCarousel;