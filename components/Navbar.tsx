import Link from 'next/link';

export const Navbar = () => {

    return (
        <>
            <nav className="flex items-center flex-wrap p-3 fixed">
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-white font-bold font-serif uppercase tracking-wide border-b border-white border-dotted'>
                            Alain D&apos;Argent
                        </span>
                    </a>
                </Link>
            </nav>
        </>
    )
}