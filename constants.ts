



import type { Review, Product, Condition, FaqItem } from './types';

export const reviews: Review[] = [
    { name: "Ali L.", text: "This is the best Hijama place in the entire of the U.K. I got the full body session, and the cupping helped my shoulder pain and digestion problems. Easy to book through WhatsApp...", practitioner: "Adam" },
    { name: "Vince M.", text: "Fantastic service from start to finish. The cupping session helped my headaches and I feel more relaxed. Best Hijama experience I have had in London...", practitioner: "Adam" },
    { name: "Bella S.", text: "Shamim is an amazing Hijama therapist... She carries out Hijama in a very relaxing environment... I am really glad that we crossed paths and I cannot wait to come back for more Hijama treatments.", practitioner: "Shamim" },
    { name: "Khaja K.", text: "I had wet cupping done with Adam... The clinic is clean, professional and the practitioners really know what they are doing. I felt immediate relief from tension in my back and neck.", practitioner: "Adam" },
    { name: "Johnathan B.", text: "I had a great experience at Hijama London... The wet cupping helped with my back pain and I felt lighter straight after the session. The clinic is clean and the service is excellent...", practitioner: "Adam" },
    { name: "Aisha M.", text: "I came to Shamim for cupping as I was struggling with frequent and severe migraines. After just three sessions, I’ve noticed a real improvement... Shamim is professional and reassuring...", practitioner: "Shamim" }
];

export const products: Product[] = [
    // Top 4 Fixed Order
    { 
        name: "Black Seed Oil (125ml)", 
        price: 10, 
        description: "Pure cold-pressed black seed oil (125ml). Take 1 tsp daily for immunity and digestion, or apply externally for hair and skin. High-quality and potent.", 
        image: "https://files.catbox.moe/yu62pc.jpg" 
    },
    { 
        name: "Yemeni Sidr Honey (500g)", 
        price: 40, 
        description: "Premium Yemeni Sidr honey (500g) sourced from the Sidr tree. Known for its rich taste and strong healing benefits. Many customers use it for immunity, energy and digestive support.", 
        image: "https://files.catbox.moe/bcm4vx.png" 
    },
    { 
        name: "Zamzam Water 500ml (Authentic)", 
        price: 6, 
        description: "Authentic Zamzam water bottled in Makkah. Many customers use it for spiritual benefits, healing and general wellness.", 
        image: "https://files.catbox.moe/nwq55t.jpg" 
    },
    { 
        name: "Ajwa Dates (500g)", 
        price: 10, 
        description: "Premium Ajwa dates (500g) sourced from Madinah. Soft, sweet and high in natural nutrients. Perfect for daily snacking, energy and general wellbeing.", 
        image: "https://files.catbox.moe/2atbv8.jpg" 
    },
    // Remaining Products
    { 
        name: "Organic Honey", 
        price: 20, 
        description: "Authentic, raw and organic honey with a smooth flavour. Great for daily use, boosting energy and mixing with herbal remedies. A high-quality natural sweetener.", 
        image: "https://files.catbox.moe/cgtbg1.jpg" 
    },
    { 
        name: "Black Seed Oil Capsules (60 caps)", 
        price: 15, 
        description: "Convenient black seed capsules (60 count) for those who prefer an easy daily supplement. Helps support immunity, digestion and general wellness without the strong taste of the oil.", 
        image: "https://files.catbox.moe/cg99ol.png" 
    },
    { 
        name: "Talbina", 
        price: 5, 
        description: "Traditional barley porridge mix used for digestion, gut health and calming the body. A gentle, natural remedy often recommended for healing and comfort.", 
        image: "https://files.catbox.moe/n23mxs.png" 
    },
    { 
        name: "Black Musk", 
        price: 35, 
        description: "Long-lasting black musk fragrance oil with a rich, deep scent. Alcohol-free and ideal for daily wear. A popular gift item with a clean, smooth aroma.", 
        image: "https://files.catbox.moe/tm6u2h.jpg" 
    },
    { 
        name: "Olive Oil", 
        price: 10, 
        description: "Pure extra-virgin olive oil ideal for cooking, health remedies and daily consumption. Smooth taste, high in antioxidants and packed with natural benefits.", 
        image: "https://files.catbox.moe/15826a.jpg" 
    },
    { 
        name: "Frankincense", 
        price: 5, 
        description: "High-quality frankincense resin used for burning, relaxation and purification. Known for its calming scent and traditional healing properties.", 
        image: "https://files.catbox.moe/r5hhk5.jpg" 
    },
    { 
        name: "Qustul Hindi / Qustul Bahri", 
        price: 5, 
        description: "Premium Qust (Indian and Bahri) powder. Often used for immunity, respiratory relief and general detox. A traditional remedy with many daily uses.", 
        image: "https://files.catbox.moe/8nelxb.jpg" 
    },
    { 
        name: "Black (Nigella) Seeds", 
        price: 5, 
        description: "Pure nigella seeds, known for their strong health benefits. Can be added to food or taken as a natural remedy for immunity and digestion.", 
        image: "https://files.catbox.moe/b2bofq.jpg" 
    },
    { 
        name: "Senna Leaves", 
        price: 5, 
        description: "Natural senna leaves used for gentle detox and cleansing. Commonly used to support digestion and bowel health.", 
        image: "https://files.catbox.moe/c7m02t.jpg" 
    },
    { 
        name: "Hing (Asafoetida)", 
        price: 5, 
        description: "Strong, aromatic spice used for cooking and digestive support. Popular in herbal and traditional medicine.", 
        image: "https://files.catbox.moe/y7l7wt.jpg" 
    },
    { 
        name: "Sidr Leaves", 
        price: 5, 
        description: "Natural sidr leaves used for cleansing, detox and hair or skin treatments. Popular for both traditional remedies and spiritual cleansing.", 
        image: "https://files.catbox.moe/x6jn0x.jpg" 
    },
    { 
        name: "Irani Saffron", 
        price: 5, 
        description: "High-grade Iranian saffron threads with a rich aroma and deep colour. Perfect for cooking, hot drinks, health remedies and relaxation.", 
        image: "https://files.catbox.moe/42dcht.png" 
    },
    { 
        name: "Indian Husk (Psyllium Husk)", 
        price: 5, 
        description: "Pure psyllium husk used for digestion, gut cleansing and fibre support. Helps maintain regularity and overall digestive health.", 
        image: "https://files.catbox.moe/7lwpi7.png" 
    },
    { 
        name: "Roasted Ajwa Date Seed Powder", 
        price: 10, 
        description: "A natural wellness powder made from roasted Ajwa date seeds, finely ground for easy use. Traditionally known for supporting digestion and boosting energy.", 
        image: "https://files.catbox.moe/ntrpil.webp" 
    }
];

export const conditions: Condition[][] = [
    [
        { icon: "fas fa-leaf", gradient: "from-emerald-400 to-emerald-600", title: "General Wellness", description: "Perfect for maintaining overall health and preventing illness. Regular sessions can help maintain optimal health and well-being." },
        { icon: "fas fa-bone", gradient: "from-red-500 to-red-700", title: "Back Pain & Sciatica", description: "High-quality evidence shows cupping improves lower back pain. Studies demonstrate significant pain reduction, with effects often superior to medication." },
    ],
    [
        { icon: "fas fa-mars", gradient: "from-rose-500 to-rose-700", title: "Male Fertility", description: "May enhance male reproductive health by improving circulation to the pelvic region, reducing oxidative stress, and supporting hormonal balance." },
        { icon: "fas fa-female", gradient: "from-fuchsia-500 to-fuchsia-700", title: "PCOS & Female Fertility", description: "Addresses hormonal imbalances in PCOS, can help regulate menstrual cycles, and supports reproductive health by improving pelvic blood flow." }
    ],
    [
        { icon: "fas fa-running", gradient: "from-amber-500 to-amber-700", title: "Sports Injuries", description: "Effective for muscle tension and soft tissue flexibility. Popular among athletes for accelerating recovery and enhancing performance." },
        { icon: "fas fa-head-side-virus", gradient: "from-violet-500 to-violet-700", title: "Headaches & Migraines", description: "Addresses muscle tension in the head, neck, and upper back, improving blood flow to reduce headache intensity and frequency." }
    ],
    [
        { icon: "fas fa-utensils", gradient: "from-teal-500 to-teal-700", title: "IBS & Digestive Health", description: "Can alleviate symptoms of Irritable Bowel Syndrome (IBS) by reducing abdominal tension, improving gut motility, and enhancing local blood flow." },
        { icon: "fas fa-spa", gradient: "from-sky-500 to-sky-700", title: "Eczema & Skin Conditions", description: "Improves skin health by boosting circulation and oxygen flow. Can help with acne, psoriasis, and skin detoxification through enhanced toxin removal." }
    ],
    [
        { icon: "fas fa-battery-full", gradient: "from-amber-400 to-amber-600", title: "Fatigue & Low Energy", description: "Boosts energy levels by improving circulation and reducing fatigue. Enhanced blood flow supports detoxification and increases vitality." },
        { icon: "fas fa-hand-rock", gradient: "from-emerald-500 to-emerald-700", title: "Joint Pain & Arthritis", description: "Wet cupping significantly reduces pain and inflammatory markers in rheumatoid arthritis and knee osteoarthritis, comparable to conventional treatments." }
    ],
    [
        { icon: "fas fa-lungs", gradient: "from-cyan-500 to-cyan-700", title: "Asthma & Sinusitis", description: "Helps manage asthma and chronic sinusitis by improving circulation, reducing inflammation, and expanding lung capacity when applied to key points." },
        { icon: "fas fa-heartbeat", gradient: "from-pink-500 to-pink-700", title: "High Blood Pressure", description: "May help regulate blood pressure through nitric oxide release and vasodilation. Studies show potential cardiovascular benefits and improved circulation." }
    ],
    [
        { icon: "fas fa-tint", gradient: "from-lime-500 to-lime-700", title: "Poor Circulation", description: "A primary benefit is improved blood flow. The suction pulls blood to targeted areas, enhancing cellular health, tissue regeneration, and nutrient delivery." },
        { icon: "fas fa-chart-line", gradient: "from-orange-500 to-orange-700", title: "Cholesterol Management", description: "Studies show cupping can reduce total cholesterol and LDL/HDL ratios. Wet cupping has demonstrated significant decreases in harmful LDL-C levels." }
    ],
    [
        { icon: "fas fa-brain", gradient: "from-gray-500 to-gray-700", title: "Anxiety & Depression", description: "Promotes deep relaxation and reduces stress by increasing parasympathetic activity. Many clients report improved sleep quality and mental clarity." },
        { icon: "fas fa-shoe-prints", gradient: "from-indigo-500 to-indigo-700", title: "Plantar Fasciitis", description: "Effectively reduces heel pain and inflammation by increasing blood flow to the plantar fascia, releasing tension and promoting tissue repair." }
    ],
    [
        { icon: "fas fa-hands", gradient: "from-blue-500 to-blue-700", title: "Carpal Tunnel Syndrome", description: "Alleviates numbness and pain by reducing pressure on the median nerve in the wrist, decreasing inflammation and improving circulation in the hand." },
        { icon: "fas fa-balance-scale", gradient: "from-green-500 to-green-700", title: "Thyroid Balance", description: "Can support thyroid function by applying cupping to specific points, helping to regulate metabolism and reduce associated symptoms." }
    ],
    [
        { icon: "fas fa-sync-alt", gradient: "from-yellow-500 to-yellow-700", title: "Vertigo & Dizziness", description: "Helps manage symptoms of vertigo by targeting points on the neck and upper back to relieve muscle tension and improve blood flow to the inner ear." },
        { icon: "fas fa-shield-virus", gradient: "from-slate-500 to-slate-700", title: "Immune System Support", description: "Activates immune response and helps with cellular immunity. Removes toxins and waste products, supporting overall immune function and health." }
    ]
];


export const faqItems: FaqItem[] = [
    { question: "What is Hijama/Hacamat (Cupping Therapy)?", answer: "Hijama, also known as wet cupping or Hacamat (in Turkish), is a natural detoxification therapy that removes stagnant blood to promote healing and improve circulation. It's a Sunnah practice mentioned in Islamic tradition for its healing benefits. We use sterile, disposable equipment for every client." },
    { question: "Can I get cupping even if I don't have a specific medical condition?", answer: "<strong>Absolutely.</strong> In fact, traditionally, Hijama was performed regularly as a preventative measure (Sunnah) to maintain health, boost the immune system, and detoxify the body. Many of our clients come simply for general wellness, stress relief, and to feel 'lighter' and more energized. You do not need to be sick to benefit from cupping." },
    { question: "What does Hijama cupping help most with?", answer: "Hijama is commonly used for relieving <strong>back pain, sciatica, plantar fasciitis, and migraines</strong>. It is highly effective for <strong>detoxification</strong>, improving <strong>blood circulation</strong>, and boosting the <strong>immune system</strong>. Many athletes use it for recovery from sports injuries and lymphatic drainage, while others seek it for general wellness." },
    { question: "Is Massage Cupping different from a normal massage?", answer: "Yes. While a normal deep tissue massage uses hands to push down on muscles, <strong>Massage Cupping uses suction to pull the tissue up</strong>. This provides a deep myofascial release, improves lymphatic drainage, and helps break down stagnant knots without the discomfort of heavy pressure. It is excellent for tight backs and stiff shoulders." },
    { question: "How long do cupping marks last?", answer: "The circular marks (which are not bruises, but a sign of toxins being released) typically last between <strong>3 to 7 days</strong>. The darker the mark, the more stagnation was present in that area. They are not painful and fade naturally as your lymphatic system clears the waste." },
    { question: "What are the benefits of Hijama for ladies?", answer: "Many women use Hijama to support <strong>hormonal balance, PCOS management, and fertility</strong>. It helps improve blood flow to the reproductive organs, regulates menstrual cycles, and reduces bloating. Our female practitioner, Shamim, specializes in women's health and wellness." },
    { question: "What is the best way to book an appointment?", answer: "<strong>The fastest way is to Book Online</strong> instantly via our website to secure your slot. You can also call or message us directly:<br/><ul class='list-disc pl-6 mt-3 space-y-2'><li><strong>Book Online:</strong> Click any 'Book Now' button on this page.</li><li><strong>Phone/WhatsApp:</strong> <a href='tel:07740759975' class='text-primary-teal hover:underline'>07740 759975</a></li></ul><p class='mt-3'>We offer same-day appointments when available. Payment (Cash, Card, or Bank Transfer) is taken at the venue.</p>" },
    { question: "Does Hijama hurt?", answer: "Most clients describe it as mildly uncomfortable but not painful. The small scratches feel like a light cat scratch. Any sensation usually lasts only a few seconds. Our experienced practitioners ensure your comfort throughout the session." },
    { question: "What should I do before my Hijama session?", answer: "For maximum benefit, it is highly recommended to avoid eating for at least 2-3 hours before your session. A light fast allows your body to focus its energy on the healing process, ensuring the best results from your treatment." },
    { question: "Do you treat both men and women?", answer: "Yes, absolutely. To ensure comfort and privacy, Adam exclusively treats male clients and Shamim exclusively treats female clients. This is a core part of our commitment to providing professional, respectful care in our family-run clinic." },
    { question: "What is the aftercare for a Hijama session?", answer: "<ul class='list-disc pl-6 space-y-2'><li>Rest and avoid strenuous activity for 24 hours.</li><li>Avoid showering for 12-24 hours to allow the small incisions to heal.</li><li>If the areas become itchy, apply a natural oil like black seed, olive, or coconut oil.</li><li>Avoid heavy foods, especially red meat and dairy, for 24 hours.</li><li>Drink plenty of water to help your body's natural detoxification process.</li></ul>" },
    { question: "Is cupping effective for fertility issues?", answer: "Many people seek Hijama for fertility support. For both men and women, it can improve blood flow to the reproductive organs, help balance hormones, and reduce stress, all of which are crucial factors for fertility. It is often used as a complementary therapy to support natural conception." },
    { question: "Can Hijama help with weight loss?", answer: "Yes, Hijama can support weight management. By improving metabolism, balancing hormones, and enhancing digestion, it helps the body function more efficiently. Studies have shown it can contribute to a reduction in BMI and waist circumference when combined with a healthy lifestyle." },
    { question: "How does Hijama help with skin conditions like eczema or acne?", answer: "Hijama promotes healthier skin by drawing out toxins and improving local blood circulation. This increased blood flow delivers more oxygen and nutrients to the skin, which can reduce inflammation, accelerate healing, and help clear conditions like acne, eczema, and psoriasis." },
    { question: "Can Hijama help lower high cholesterol?", answer: "Yes, clinical research suggests that wet cupping can be effective in managing cholesterol. Studies have shown that regular sessions can lead to a significant reduction in harmful LDL cholesterol and triglycerides, while improving the overall lipid profile, supporting cardiovascular health." },
];
