import React from 'react';

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <radialGradient id="instaGradient" cx="0.3" cy="1" r="1">
                <stop offset="0" stopColor="#FEDA75" />
                <stop offset="0.5" stopColor="#FA7E1E" />
                <stop offset="0.7" stopColor="#D62976" />
                <stop offset="0.9" stopColor="#962FBF" />
                <stop offset="1" stopColor="#4F5BD5" />
            </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#instaGradient)"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="white" strokeLinecap="round"></line>
    </svg>
);


const FloatingSocials: React.FC = () => {
    return (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
            <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
                className="w-14 h-14 bg-whatsapp-green text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 text-2xl animate-bounce-custom">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/hijama_london" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram"
                className="w-12 h-12 bg-white text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@hijamalondon.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on TikTok"
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 text-xl">
                <i className="fab fa-tiktok"></i>
            </a>
        </div>
    );
};

export default FloatingSocials;