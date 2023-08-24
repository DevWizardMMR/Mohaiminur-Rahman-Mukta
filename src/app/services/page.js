import React from 'react';
import Image from 'next/image';
import womenBanner from '../../../public/women-banner.png'
import Link from 'next/link';

const services = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Services</h1>
            <div className='my-10 flex justify-around w-full items-center'>
                <button className='bg-[#047E70] text-white px-5 py-2 rounded-full font-bold text-sm'>1:1 call</button>
                <button className='bg-base-200 px-5 py-2 rounded-full font-bold text-sm'>Text Query</button>
                <button className='bg-base-200 px-5 py-2 rounded-full font-bold text-sm'>Webbinar</button>
                <Link href="/addservice" className='bg-base-200 px-5 py-2 rounded-full font-bold text-sm'>+ Add Service</Link>
            </div>
            <div className='text-center'>
            <Image className='w-2/5 mx-auto' src={womenBanner}/>
            <p className='font-mono mb-5'>Create a 1:1 Service</p>
            <Link href="/addservice" className='px-8 py-2 bg-gradient-to-t from-[#358279] to-[#27EDD5] text-sm font-bold text-white rounded-full shadow-sm'>+ ADD</Link>
            </div>

        </div>
    );
};

export default services;