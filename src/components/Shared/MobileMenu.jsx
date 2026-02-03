'use client'
import { LogOut, Menu, Settings, Sparkles, User, X } from 'lucide-react';
import React, { useState } from 'react';
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import Logo from '../Ui/Logo/Logo';
const MobileMenu = ({links}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='md:hidden'>
    {/* Trigger Button */}
    <button onClick={() => setOpen(!open)} className="p-2 active:scale-90 transition-transform">
        <Menu size={28} className="text-slate-700" />
    </button>

    <AnimatePresence mode="wait">
        {open && (
            <nav className='fixed w-full h-screen inset-0 bg-slate-500/70 backdrop-blur-sm z-50 overflow-hidden' onClick={() => setOpen(false)}>
                <motion.div
                    className='w-[80%] max-w-[320px] bg-white h-full px-5 py-8 relative border-r border-slate-100 flex flex-col shadow-xl'
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    {/* 1. LOGO SECTION */}
                    <div className='flex items-center gap-3 mb-10 px-1 '>
                        <div className='w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-100'>
                            <Sparkles size={22} fill="currentColor" />
                        </div>
                        <Logo />
                    </div>

                    {/* 2. PROFILE & SETTINGS SECTION - Light Glassmorphism Look */}
                    <div className='mb-10 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm'>
                                <User size={24} className="text-indigo-600" />
                            </div>
                            <div className="overflow-hidden">
                                <p className='text-sm font-bold leading-none text-slate-800 truncate'>User</p>
                                <p className='text-[10px] text-indigo-600 mt-1.5 font-bold uppercase tracking-widest'>Pro Member</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <button className='flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[11px] font-bold text-slate-600 transition-all active:scale-95 shadow-sm'>
                                <Settings size={14} /> Settings
                            </button>
                            <button className='flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-50 border border-rose-100 hover:bg-rose-100 text-[11px] font-bold text-rose-600 transition-all active:scale-95'>
                                <LogOut size={14} /> Logout
                            </button>
                        </div>
                    </div>

                    {/* 3. MENU LINKS */}
                    <div className="overflow-y-auto px-1">
                        <p className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-5 px-2'>Navigation</p>
                        
                        <ul className='space-y-2 list-none flex flex-col 
                            [&>li]:w-full 
                            [&>li>a]:flex [&>li>a]:items-center 
                            [&>li>a]:px-5 [&>li>a]:py-4 
                            [&>li>a]:rounded-2xl 
                            [&>li>a]:text-slate-600 [&>li>a]:font-bold [&>li>a]:text-[15px]
                            [&>li>a]:transition-all [&>li>a]:duration-300
                            hover:[&>li>a]:bg-indigo-50 hover:[&>li>a]:text-indigo-600 
                            hover:[&>li>a]:translate-x-1
                            [&>li>a]:no-underline'>
                            {links}
                        </ul>
                            </div>
                            
                           {/* 4. FOOTER SECTION - Clean & Minimal */}
<div className='mt-auto pt-6 border-t border-slate-100'>
    <div className='flex items-center justify-between px-2 text-slate-400'>
        <div className='flex flex-col'>
            <span className='text-[11px] font-bold text-slate-900'>NexTools Pro</span>
            <span className='text-[10px]'>v2.4.0 • © 2026</span>
        </div>
        <button className='px-3 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-lg hover:bg-indigo-100 transition-colors'>
            Support
        </button>
    </div>
</div>
                    {/* CLOSE BUTTON */}
                    <div 
                        onClick={() => setOpen(false)} 
                        className='absolute right-4 top-8 p-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all cursor-pointer'
                    >
                        <X size={20} />
                    </div>
                </motion.div>   
            </nav>
        )}
    </AnimatePresence>
</div>
    );
};

export default MobileMenu;