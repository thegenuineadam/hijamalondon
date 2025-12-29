




import React from 'react';

const Footer: React.FC = () => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Standard offset for header
            let offset = 88;
            
            // Adjust offset specifically for service sections to ensure card is fully visible below sticky elements
            if (targetId.includes('cupping')) {
                offset = 120;
            }

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    return (
        <footer className="bg-text-charcoal text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-4 text-white">Hijama London</h3>
                        <p className="text-gray-400 mb-6 text-sm">Professional Hacamat & Hijama cupping therapy in Walthamstow, East London. 5.0★ rated clinic.</p>
                        <div className="flex space-x-6">
                            <a href="https://maps.app.goo.gl/G9AEyWaCikrSbCRJA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" title="Google Business Profile">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="https://www.instagram.com/hijama_london" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/hijama.london/?locale=en_GB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-2xl" title="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.tiktok.com/@hijamalondon.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" title="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-whatsapp-green transition-colors text-2xl" title="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-black bg-primary-gold px-2 py-1 inline-block rounded">Services</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#wet-cupping-hijama" onClick={(e) => handleNavClick(e, '#wet-cupping-hijama')} className="hover:text-white transition-colors">Wet Cupping (Hijama)</a></li>
                            <li><a href="#dry-cupping" onClick={(e) => handleNavClick(e, '#dry-cupping')} className="hover:text-white transition-colors">Dry Cupping</a></li>
                            <li><a href="#massage-cupping" onClick={(e) => handleNavClick(e, '#massage-cupping')} className="hover:text-white transition-colors">Massage Cupping</a></li>
                            <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">Home Visits</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-black bg-primary-gold px-2 py-1 inline-block rounded">Wellness & Recovery</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="hover:text-white transition-colors">Back Pain & Sciatica</a></li>
                            <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="hover:text-white transition-colors">General Detox (Sunnah)</a></li>
                            <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="hover:text-white transition-colors">Migraines & Headaches</a></li>
                            <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="hover:text-white transition-colors">Stress & Anxiety</a></li>
                            <li><a href="#conditions" onClick={(e) => handleNavClick(e, '#conditions')} className="hover:text-white transition-colors">Sports Injuries</a></li>
                        </ul>
                        <p className="mt-3 text-xs text-gray-500 italic">You don't need a specific condition to benefit from cupping.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-black bg-primary-gold px-2 py-1 inline-block rounded">Contact & Booking</h4>
                        <address className="space-y-3 text-gray-400 text-sm not-italic">
                            <p><i className="fas fa-phone w-4 mr-2 text-primary-gold"></i><a href="tel:07740759975" className="hover:text-white">07740 759975</a></p>
                            <p><i className="fas fa-envelope w-4 mr-2 text-primary-gold"></i><a href="mailto:hijama@gmx.com" className="hover:text-white">hijama@gmx.com</a></p>
                            <p><i className="fas fa-map-marker-alt w-4 mr-2 text-primary-gold"></i>146 Palmerston Rd, E17 6PY</p>
                        </address>
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2 text-white text-xs uppercase tracking-wider">Areas Served</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Serving clients from all over London, including Walthamstow, Leyton, E17, E10, E7, Bushwood, and surrounding East London areas. An excellent alternative to a chiropractor near me.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Hijama London. All Rights Reserved.</p>
                    <p className="mt-2">Professional Hacamat & Hijama Specialist | Serving Walthamstow, London E17</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;