


import React from 'react';

const services = [
    {
        id: "massage-cupping",
        title: "Massage Cupping",
        description: "A powerful deep tissue alternative for myofascial release and lymphatic drainage. We use moving suction cups (not hands) to break down knots and improve circulation over the back.",
        image: "https://files.catbox.moe/02s4dy.png",
        alt: "Massage cupping therapy for lymphatic drainage and back pain."
    },
    {
        id: "dry-cupping",
        title: "Dry Cupping",
        description: "Stationary cups are placed on key points to create suction, promoting blood flow, reducing inflammation, and relieving localized pain.",
        image: "https://files.catbox.moe/9bwxmp.png",
        alt: "Dry cupping therapy cups placed on a person's back."
    },
    {
        id: "wet-cupping-hijama",
        title: "Wet Cupping (Hijama)",
        description: "The ultimate detoxification. Also known as Blood Cupping. Tiny scratches are made to draw out stagnant blood and toxins, promoting deep healing.",
        image: "https://files.catbox.moe/mkeacl.png",
        alt: "A professional performing wet cupping (Hijama) in a clean environment."
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-teal mb-4">Our Cupping Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">A complete range of professional cupping therapies tailored to your specific health needs.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div id={service.id} key={index} className="reveal-on-scroll group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 text-center overflow-hidden flex flex-col hover:-translate-y-2 scroll-mt-32">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img 
                                    src={service.image} 
                                    alt={service.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="p-8 flex-grow flex flex-col relative">
                                <h3 className="font-serif text-2xl font-bold text-primary-teal mb-4 group-hover:text-teal-700 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 flex-grow leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
