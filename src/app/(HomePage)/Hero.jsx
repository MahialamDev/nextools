import Container from '@/Layout/Container';
import React from 'react';
import SearchTools from './SearchTools';

const Hero = () => {
    return (
        <Container>
            <p className=' text-center py-8 font-semibold uppercase mt-5 md:mt-10 '><span className=' shadow rounded-3xl px-5 py-2 text-primary bg-gray-100/60'><span className='bg-primary/10'> ✨ Universal Utility Hub v3.0</span></span></p>

            <h1 className='max-w-4xl mx-auto text-4xl md:text-8xl font-bold  text-center tracking-tight leading-tight md:leading-30 '>Professional Tools. <span className='text-primary'>Minimal Friction.</span></h1>
            <p className='max-w-3xl mx-auto text-[17px] md:text-xl text-center mt-5 md:font-semibold text-gray-400 p-2'><span >A specialized collection of high-fidelity tools engineered for the modern web. Fast, secure, and ready for any workflow.</span></p>
            <SearchTools />
        </Container>
    );
};

export default Hero;