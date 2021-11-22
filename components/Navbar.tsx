import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {

    return (
        <>
            <nav className="flex items-center flex-wrap p-3">
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>
                            Alain D&apos;Argent
                        </span>
                    </a>
                </Link>
            </nav>
        </>
    )
}