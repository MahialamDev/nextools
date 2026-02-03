import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='text-xl md:text-2xl font-bold'><span className='text-primary'>N</span>exTools</Link>
    );
};

export default Logo;