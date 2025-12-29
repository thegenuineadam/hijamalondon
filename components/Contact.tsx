
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');

        const formData = new FormData(e.currentTarget);

        // Security: Honeypot check
        if (formData.get('botcheck')) {
            // Silently fail if bot detected
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmissionStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Form submission error:", data);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
        <section id="contact" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-teal mb-4">Contact & Visit Us</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">We are conveniently located in Walthamstow, E17.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
                    <div className="reveal-on-scroll">
                         {/* Fastest Booking Method Block */}
                         <div className="bg-gradient-to-br from-primary-teal to-teal-800 text-white rounded-[2.5rem] p-8 md:p-10 text-center shadow-2xl mb-10 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-1000"></div>
                             <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                             
                            <h3 className="font-serif text-2xl font-bold mb-2 relative z-10 text-teal-100">Speak to Us Directly</h3>
                            <p className="text-4xl md:text-5xl font-bold tracking-tight mb-8 relative z-10 drop-shadow-md">07740 759975</p>
                            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                                <button onClick={handleBookOnline} className="bg-primary-gold text-white hover:bg-amber-600 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center">
                                    <i className="fas fa-calendar-check mr-2"></i>Book Online
                                </button>
                                <a href="tel:+447740759975" className="bg-white text-primary-teal hover:bg-teal-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Call Now</a>
                                <a href="https://wa.me/447740759975" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center backdrop-blur-sm">
                                    <i className="fab fa-whatsapp mr-2 text-xl"></i>WhatsApp
                                </a>
                            </div>
                        </div>
                        
                        {/* Web3Forms Enquiry Form with AJAX Handling */}
                        <div className="glass-panel rounded-[2rem] p-8 md:p-10 shadow-xl" id="contact-form">
                            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-8 text-center">Send an Email Enquiry</h3>
                            
                            {submissionStatus === 'success' ? (
                                <div className="text-center py-10 animate-fade-in-up">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <i className="fas fa-check text-3xl text-green-600"></i>
                                    </div>
                                    <h4 className="text-2xl font-bold text-primary-teal mb-2">Message Sent!</h4>
                                    <p className="text-gray-600 mb-8">Thank you for contacting us. We will get back to you shortly via email.</p>
                                    <button 
                                        onClick={() => setSubmissionStatus('idle')}
                                        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <input type="hidden" name="access_key" value="52472f07-324a-45d3-b124-825980c50816" />
                                    
                                    {/* Honeypot Spam Protection */}
                                    <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                                    
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            required
                                            maxLength={100}
                                            className="w-full px-5 py-4 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-teal/50 focus:border-primary-teal outline-none transition-all placeholder-gray-400"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                         <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Email Address</label>
                                         <input 
                                            type="email" 
                                            name="email"
                                            id="email" 
                                            required
                                            maxLength={100}
                                            className="w-full px-5 py-4 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-teal/50 focus:border-primary-teal outline-none transition-all placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Interested Service</label>
                                        <select 
                                            id="service" 
                                            name="service" 
                                            className="w-full px-5 py-4 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-teal/50 focus:border-primary-teal outline-none transition-all text-gray-700"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="Core Session (£55)">Core Session (£55)</option>
                                            <option value="Full Body Session (£79)">Full Body Session (£79)</option>
                                            <option value="3x Core Package (£150)">3x Core Package (£150)</option>
                                            <option value="3x Full Body Package (£225)">3x Full Body Package (£225)</option>
                                            <option value="Home Visit (£100 + session)">Home Visit (£100 + session)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-2">Message</label>
                                        <textarea 
                                            name="message" 
                                            id="message"
                                            required
                                            rows={4}
                                            maxLength={2000}
                                            className="w-full px-5 py-4 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-teal/50 focus:border-primary-teal outline-none transition-all placeholder-gray-400"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-primary-teal text-white py-4 px-8 rounded-xl font-bold hover:bg-teal-700 transition-all text-lg shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</span>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                    
                                    {submissionStatus === 'error' && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-center text-sm border border-red-100 animate-fade-in-up">
                                            <i className="fas fa-exclamation-circle mr-1"></i> Something went wrong. Please try again or call us.
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8 reveal-on-scroll delay-200">
                        {/* Information Cards - Now taking full column height since map moved */}
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] shadow-lg h-full flex flex-col justify-center">
                             <div className="flex items-start gap-5 mb-8 group">
                                 <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
                                     <i className="fas fa-map-marker-alt text-xl"></i>
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg text-gray-800 font-serif mb-1">Address</h4>
                                     <p className="text-gray-600 leading-relaxed">146 Palmerston Road<br/>Walthamstow, London, E17 6PY</p>
                                 </div>
                             </div>
                             
                             <div className="flex items-start gap-5 mb-8 group">
                                 <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
                                     <i className="fas fa-clock text-xl"></i>
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg text-gray-800 font-serif mb-1">Opening Hours</h4>
                                     <p className="text-gray-600">Mon - Sun: 9:00 AM - 9:00 PM</p>
                                     <p className="text-green-600 text-sm font-bold mt-1 tracking-wide">● Open 7 days a week</p>
                                 </div>
                             </div>

                             <div className="flex items-start gap-5 mb-8 group">
                                 <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
                                     <i className="fas fa-train text-xl"></i>
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg text-gray-800 font-serif mb-1">Getting Here</h4>
                                     <p className="text-gray-600 text-sm leading-relaxed">
                                         10 min walk from <strong>Walthamstow Central</strong> or <strong>Blackhorse Road Station</strong> (Victoria Line).
                                     </p>
                                 </div>
                             </div>

                             {/* Social Media Section */}
                             <div className="flex items-start gap-5 group pt-4 border-t border-gray-100">
                                 <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
                                     <i className="fas fa-heart text-xl"></i>
                                 </div>
                                 <div className="w-full">
                                     <h4 className="font-bold text-lg text-gray-800 font-serif mb-3">Follow Us</h4>
                                     <div className="flex justify-start gap-4 flex-wrap">
                                         <a href="https://www.instagram.com/hijama_london" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors text-sm font-semibold">
                                            <i className="fab fa-instagram text-xl"></i> Instagram
                                         </a>
                                         <a href="https://www.tiktok.com/@hijamalondon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-semibold">
                                            <i className="fab fa-tiktok text-xl"></i> TikTok
                                         </a>
                                         <a href="https://www.facebook.com/hijama.london/?locale=en_GB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">
                                            <i className="fab fa-facebook text-xl"></i> Facebook
                                         </a>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
