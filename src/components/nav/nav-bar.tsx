'use client'

import { usePathname } from 'next/navigation'
import { NavLink, NavLinkImage } from ".";
import { navImages, navLinks } from '@/config';

const NavBar = () => {
    const pathname = usePathname()

    return (
        <nav className='flex justify-between items-center self-stretch'>
            <div className='flex items-start gap-4'>
                {navLinks.map(({href, label, isNavLink}) => (
                    <NavLink key={href} href={href} label={label} active={pathname === href} />
                ))}
            </div>
            <div className='flex items-start gap-4'>
                {navImages.map(({href, label, imgSrc}) => (
                    <NavLinkImage key={href} href={href} label={label} imgSrc={imgSrc} />
                ))}
            </div>
        </nav>
    );
}

export default NavBar;