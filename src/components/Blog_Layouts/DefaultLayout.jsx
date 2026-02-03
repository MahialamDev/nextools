"use client" // যদই আপনার ডাইনামিক ডেটা লাগে, তবে মেইন কন্টেন্ট সার্ভার থেকে পাঠানোই ভালো
import React from 'react';
import { Calendar, User, Clock, ChevronLeft, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

const DefaultLayout = ({ id }) => {
    // এখানে স্যাম্পল ডেটা দেওয়া হয়েছে, আপনি চাইলে props হিসেবেও ডেটা পাস করতে পারেন
    const blogData = {
        title: "The Future of Web Development in 2026",
        date: "Jan 31, 2026",
        author: "Vortex Team",
        readTime: "6 min read",
        category: "Technology",
        content: `
            Web technology is evolving faster than ever. In 2026, we see a massive shift 
            towards AI-integrated development environments and edge computing. 
            Next.js and Turbopack have become the industry standard for high-performance applications...
        `,
        tags: ["NextJS", "WebDesign", "SEO"]
    };


    // শেয়ার ফাংশন: মোবাইল বা পিসির নেটিভ শেয়ার মেনু ওপেন করার জন্য
    const handleShare = async () => {
        const shareData = {
            title: blogData.title,
            text: `Check out this amazing article: ${blogData.title}`,
            url: window.location.href,
        };

        try {
            // ব্রাউজার যদি শেয়ার মেনু সাপোর্ট করে (Mobile & Chrome/Safari)
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // সাপোর্ট না করলে লিঙ্ক কপি হবে (যেমন Desktop Chrome-এ অনেক সময় লাগে না)
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied! Share it on Messenger.");
            }
        } catch (err) {
            console.log("Error sharing:", err);
            // ইউজার শেয়ার ক্যানসেল করলে বা এরর হলে কপি করে দেওয়া সেফ
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    return (
        <article className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
            {/* 1. Navigation / Back Link */}
            <div className="max-w-4xl mx-auto px-6 pt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>
            </div>

            {/* 2. Blog Header */}
            <header className="max-w-4xl mx-auto px-6 pt-12 pb-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                        {blogData.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                        <Clock size={16} /> {blogData.readTime}
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                    {blogData.title}
                </h1>

                {/* Author & Date Card */}
                <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {blogData.author[0]}
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold leading-none mb-1.5">{blogData.author}</p>
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{blogData.date}</p>
                        </div>
                    </div>
                    
                    <button onClick={handleShare} className="flex items-center gap-2 text-slate-500 hover:bg-slate-50 px-4 py-2 rounded-xl transition-all border border-slate-200">
                        <Share2 size={18} />
                        <span className="font-bold text-sm">Share</span>
                    </button>
                </div>
            </header>

            {/* 3. Featured Image Placeholder */}
            <div className="max-w-5xl mx-auto px-4 mb-16">
                <div className="aspect-video w-full bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:opacity-0 transition-opacity" />
                    <div className="flex items-center justify-center h-full text-slate-300 font-bold text-2xl tracking-widest uppercase">
                        Featured Image
                    </div>
                </div>
            </div>

            {/* 4. Blog Body Content */}
            <main className="max-w-3xl mx-auto px-6 pb-20">
                <div className="prose prose-lg prose-slate max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-black 
                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                    prose-strong:text-slate-900 prose-strong:font-bold">
                    
                    {/* আপনি এখানে আপনার আর্টিকেলের কন্টেন্ট দেখাবেন */}
                    <p className="text-2xl font-medium text-slate-800 leading-snug mb-10">
                        {blogData.content.split('.')[0]}.
                    </p>
                    
                    <p>{blogData.content}</p>

                    {/* Example Subheading */}
                    <h2 className="text-3xl mt-12 mb-6">Why Speed Matters in 2026</h2>
                    <p>
                        In a world where attention spans are shrinking, performance isn't just a technical metric; 
                        it's a critical part of user experience and SEO ranking.
                    </p>
                </div>

                {/* Tags Section */}
                <div className="mt-16 pt-10 border-t border-slate-100">
                    <div className="flex items-center gap-4 flex-wrap">
                        <Tag size={20} className="text-slate-400" />
                        {blogData.tags.map((tag) => (
                            <span key={tag} className="text-sm font-bold text-slate-500 hover:text-blue-600 cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </main>
        </article>
    );
};

export default DefaultLayout;