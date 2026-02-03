import Container from '@/Layout/Container';
import React from 'react';
import Logo from '../Ui/Logo/Logo';
import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import MobileMenu from './MobileMenu';
const links =
    <>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/about'}>About</Link>
        </li>
        <li>
            <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
            <Link href={'/contact'}>Contact</Link>
        </li>
    </>

const Header = () => {
    return (
        <header className='p-4 sticky top-0 w-full border-b border-gray-50 shadow bg-white/30  backdrop-blur-xl z-50'>
            <Container>
                <div className='flex items-center justify-between relative'>
                    <Logo />

                    {/* Menu */}
                    <nav className='hidden md:flex items-center'>
                        <ul className='flex gap-6'>{links}</ul>
                    </nav>


                   {/* Only User Icon and Name */}
        <button className="group hidden md:flex items-center gap-2.5 py-2 px-4 bg-white border border-slate-200/60 rounded-xl hover:border-primary/40 hover:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.1)] transition-all duration-300">
    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 group-hover:bg-primary/10 transition-colors">
        <User size={15} className="text-slate-500 group-hover:text-primary transition-colors" />
    </div>
    <span className="text-[14px] font-bold text-slate-700 tracking-tight group-hover:text-slate-900">
        Account
    </span>
                    </button>


                    <MobileMenu links={links} />
                    

                </div>
            </Container>
        </header>
    );
};

export default Header;