import Container from '@/Layout/Container';
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] selection:bg-primary selection:text-white">
            <Container>
                {/* 1. ULTRA-MODERN HEADER */}
                <div className="pt-20 pb-20 relative overflow-hidden">
                    {/* Background Subtle Shape */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10 blur-3xl" />
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-bounce-slow">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">Available for projects</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
                            Got an idea? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Talk to us.</span>
                        </h1>
                        
                        <p className="max-w-xl text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                            We don't just build tools; we craft experiences. Drop us a line and let's make magic happen.
                        </p>
                    </div>
                </div>

                {/* 2. THE FLOATING CONTACT SECTION */}
                <div className="relative -mt-10 pb-32">
                    <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-11">
                            
                            {/* LEFT SIDE: Minimalist Contact Info (4 Columns) */}
                            <div className="lg:col-span-4 bg-slate-900 p-4 md:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                                {/* Decorative Circles */}
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                                
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-12">Contact <br/>Information</h2>
                                    
                                    <div className="space-y-10">
                                        <div className="flex items-start gap-5">
                                            <Mail className="text-primary mt-1" size={24} />
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mail us</p>
                                                <a href="mailto:hello@nextools.io" className="text-lg font-medium hover:text-primary transition-colors">hello@nextools.io</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <Phone className="text-primary mt-1" size={24} />
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                                                <p className="text-lg font-medium">+880 1979-922268</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-5">
                                            <MapPin className="text-primary mt-1" size={24} />
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Studio</p>
                                                <p className="text-lg font-medium leading-snug">Level 4, Tech Plaza, <br/>Banani, Dhaka 1213</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 relative z-10">
                                    <div className="flex gap-4">
                                        {['TW', 'IG', 'LI', 'GH'].map(social => (
                                            <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-slate-900 transition-all cursor-pointer">
                                                {social}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Interactive Form (7 Columns) */}
                            <div className="lg:col-span-7 p-4 md:p-12 mt-5 md:mt-auto lg:p-20">
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group relative">
                                            <input type="text" className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-colors placeholder-transparent" id="name" placeholder="Name" />
                                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">Full Name</label>
                                        </div>
                                        <div className="group relative">
                                            <input type="email" className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-colors placeholder-transparent" id="email" placeholder="Email" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <input type="text" className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-colors placeholder-transparent" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">How can we help?</label>
                                    </div>

                                    <div className="group relative">
                                        <textarea rows="4" className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-colors placeholder-transparent resize-none" id="message" placeholder="Message"></textarea>
                                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs">Project Details</label>
                                    </div>

                                    <div className="pt-8">
                                        <button className="group relative flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-[0_20px_40px_-12px_rgba(var(--primary-rgb),0.3)] active:scale-95 overflow-hidden">
                                            <span className="relative z-10">Send Message</span>
                                            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={18} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactPage;