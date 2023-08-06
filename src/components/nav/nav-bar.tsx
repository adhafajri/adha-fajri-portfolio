'use client'

import { usePathname } from 'next/navigation'
import { navImages, navLinks } from '@/config';
import { NavLink, NavLinkImage } from '@/components/nav';

const NavBar = () => {
    const pathname = usePathname()

    return (
        <header className='px-16 w-full'>
            <nav className='flex justify-between items-center self-stretch'>
                <div className='flex items-start gap-4'>
                    {navLinks.map(({ href, label, isNavLink }) => (
                        <NavLink key={href} href={href} label={label} active={pathname === href} />
                    ))}
                </div>
                <div className='flex items-start gap-4'>
                    {navImages.map(({ href, label, imgSrc }) => (
                        <NavLinkImage key={href} href={href} label={label} imgSrc={imgSrc} />
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;