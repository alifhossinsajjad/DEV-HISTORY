import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>welcome to about us </h1>
            <nav className='ml-12 space-x-4'>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Teams</Link>
            </nav>
        </div>
    );
};

export default About;