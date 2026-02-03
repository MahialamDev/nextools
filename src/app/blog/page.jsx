"use client"
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const blogs = [
        {
            id: 1,
            title: "How to Download Videos Faster Using VortexDown",
            excerpt: "Discover the secret algorithms we use to make your downloads lightning fast and secure...",
            author: "Admin",
            date: "Jan 30, 2026",
            category: "Tutorial",
            color: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            title: "The Future of Web Tools in 2026",
            excerpt: "Web technology is evolving. Learn how Next.js and AI are shaping the next generation of tools...",
            author: "Team",
            date: "Jan 28, 2026",
            category: "Technology",
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 3,
            title: "Why Privacy Matters in Online Downloaders",
            excerpt: "Most downloaders track your data. Here is how we keep your information 100% private...",
            author: "Expert",
            date: "Jan 25, 2026",
            category: "Privacy",
            color: "from-emerald-500 to-teal-600"
        }
    ];

    // Filter logic
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-[#f8fafc] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Articles</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
                        Stay updated with our latest tools, tutorials, and tech news from the VortexDown team.
                    </p>

                    {/* Premium Search Bar */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-15 group-focus-within:opacity-30 transition duration-1000"></div>
                        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm focus-within:shadow-xl focus-within:border-blue-400 transition-all duration-300">
                            <div className="pl-4 text-slate-400">
                                <Search size={20} />
                            </div>
                            <input 
                                type="text"
                                placeholder="Search articles, tutorials, or news..."
                                className="w-full px-4 py-3 bg-transparent text-slate-700 focus:outline-none font-medium"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors hidden sm:block">
                                <SlidersHorizontal size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categories Shortcut (Optional Premium Touch) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {['All', 'Tutorial', 'Technology', 'Privacy', 'Updates'].map((cat) => (
                        <button key={cat} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <article 
                                key={blog.id} 
                                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] transition-all duration-500 border border-slate-100 group flex flex-col"
                            >
                                {/* Gradient Image Placeholder */}
                                <div className={`w-full h-56 bg-gradient-to-br ${blog.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <span className="text-white/30 font-bold text-lg uppercase tracking-widest group-hover:scale-110 transition-transform duration-700">Vortex Blog</span>
                                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/30">
                                        {blog.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-blue-500" /> {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <User size={14} className="text-blue-500" /> {blog.author}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                        <Link href={`/blog/${blog.id}`}>
                                            {blog.title}
                                        </Link>
                                    </h2>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link 
                                            href={`/blog/${blog.id}`}
                                            className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm group/btn"
                                        >
                                            <span className="relative">
                                                Read Full Article
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover/btn:w-full transition-all duration-300"></span>
                                            </span>
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300 text-blue-600" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-slate-400 text-xl font-medium">No articles found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default BlogPage;