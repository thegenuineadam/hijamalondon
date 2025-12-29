
import React, { useEffect, useState } from 'react';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#pricing", label: "Prices" },
        { href: "#products", label: "Products" },
        { href: "#testimonials", label: "Reviews" },
        { href: "#gallery", label: "Gallery" },
        { href: "#location-map", label: "Map" },
        { href: "#conditions", label: "Conditions" },
        { href: "#about", label: "About" },
        { href: "#faq", label: "FAQ" },
        { href: "#contact", label: "Contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 88;
            const additionalOffset = targetId === '#booking-info' ? 60 : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - additionalOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const handleBookOnline = (e: React.MouseEvent) => {
        e.preventDefault();
        const setmoreBtn = document.getElementById('Setmore_button_iframe');
        if (setmoreBtn) {
            setmoreBtn.click();
        } else {
            window.open('https://hijamalondon.setmore.com', '_blank');
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-lg'}`}>
            {/* Main Navbar: Shrinks and becomes opaque on scroll */}
            <div className={`transition-all duration-300 ${scrolled ? 'bg-teal-800 py-2 shadow-md' : 'bg-primary-teal/90 backdrop-blur-sm py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between text-white gap-2">
                        {/* Left Side: Logo/Name */}
                        <div className="flex-shrink-0">
                            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group">
                                <span className={`font-light text-white tracking-tighter group-hover:text-amber-300 transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`} style={{ fontFamily: '"Neue Power", "Estiana", "Questa Grande", "Playfair Display", serif' }}>hijamalondon.com</span>
                            </a>
                        </div>
                        
                        {/* Middle: Book Now button (Mobile Only) */}
                        <div className="flex-grow flex justify-center md:hidden">
                             <button onClick={handleBookOnline} className={`bg-gradient-to-r from-primary-gold to-amber-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-md ${scrolled ? 'text-xs px-4 py-2' : 'text-sm px-5 py-2.5'}`}>
                                Book Now
                             </button>
                        </div>
                        
                        {/* Middle: Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-grow justify-center">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="relative py-1 hover:text-amber-300 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full">{link.label}</a>
                            ))}
                        </nav>
                        
                        {/* Right Side: Icons & Hamburger */}
                        <div className="flex-shrink-0 flex items-center justify-end space-x-3">
                             <a href="tel:+447740759975" className={`hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all font-semibold border border-white/10 backdrop-blur-sm ${scrolled ? 'px-2 py-1.5 text-[10px]' : 'px-3 py-2 text-xs'}`}>
                                <i className="fas fa-phone"></i>
                                <span>07740 759975</span>
                            </a>
                            <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className={`hidden sm:flex items-center space-x-2 bg-whatsapp-green hover:bg-green-500 rounded-lg transition-all font-bold shadow-sm hover:shadow-md ${scrolled ? 'px-2 py-1.5 text-[10px]' : 'px-3 py-2 text-xs'}`}>
                                <i className="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>

                            <button
                                className={`md:hidden flex items-center justify-center rounded-full hover:bg-white/10 transition-all ${scrolled ? 'w-8 h-8 text-xl' : 'w-10 h-10 text-2xl'}`}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} pill-aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Using Dark Teal Background for better contrast */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-teal-900 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-2xl ${isMenuOpen ? 'max-h-[500px] opacity-100 border-b border-teal-800' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col items-center space-y-3 py-6">
                    {navLinks.map((link, idx) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="text-white hover:text-amber-300 transition-colors py-2 text-lg font-serif"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                     <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="sm:hidden mt-4 flex items-center space-x-2 bg-whatsapp-green hover:bg-green-500 px-6 py-3 rounded-full transition-all text-sm font-bold text-white shadow-lg">
                        <i className="fab fa-whatsapp text-lg"></i>
                        <span>WhatsApp Us</span>
                    </a>
                </nav>
            </div>

            {/* Limited Offer Banner with Gentle Animation */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white py-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
                        <i className="fas fa-tag animate-bounce"></i>
                        <span className="font-bold tracking-wide">LIMITED OFFER:</span>
                        <span>Full Body Session <span className="line-through text-amber-200 opacity-80">£89</span> <b className="text-white font-extrabold text-lg ml-1 drop-shadow-sm">£79</b> - Save £10!</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
