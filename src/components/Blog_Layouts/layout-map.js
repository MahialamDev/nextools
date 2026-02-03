// src/components/blog-layouts/layout-map.js
import dynamic from 'next/dynamic';

// dynamic import ব্যবহার করলে পেজ লোডিং স্পিড অনেক ফাস্ট হবে
export const layoutMap = {
    "1": dynamic(() => import('./Blog_1/Blog_1')),
    // "20": dynamic(() => import('./Blog_20')),
    // "105": dynamic(() => import('./Blog_105')),
    // এভাবে ২০০টি আইডি থাকলেও কোনো সমস্যা নেই
};