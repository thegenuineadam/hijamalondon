
import React from 'react';

const LocationMap: React.FC = () => {
    return (
        <section id="location-map" className="py-12 bg-cream-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-teal mb-4">Find Us</h2>
                    <p className="text-lg text-gray-600">146 Palmerston Road, Walthamstow, London, E17 6PY</p>
                </div>
                <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-gray-200 max-w-5xl mx-auto">
                    <div className="rounded-[1.5rem] overflow-hidden h-96 md:h-[500px] relative group">
                        {/* Google Maps Embed - Always in color, lazy loaded */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39662.183760269676!2d-0.03530750000000507!3d51.58864379999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761dc4a5fb5e19%3A0x2f9df58c38a946a9!2sHijama%20London!5e0!3m2!1sen!2suk!4v1765396529444!5m2!1sen!2suk"
                            className="w-full h-full transition-all duration-700" 
                            style={{border:0}} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hijama London Location on Google Maps"
                        ></iframe>
                        <a href="https://maps.app.goo.gl/G9AEyWaCikrSbCRJA" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 bg-white text-primary-teal px-5 py-2.5 rounded-full shadow-lg text-sm font-bold hover:scale-105 transition-transform">
                            Open in Maps <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
