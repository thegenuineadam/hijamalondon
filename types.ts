export interface Review {
    name: string;
    text: string;
    practitioner: 'Adam' | 'Shamim';
}

export interface Product {
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface Condition {
    icon: string;
    gradient: string;
    title: string;
    description: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}