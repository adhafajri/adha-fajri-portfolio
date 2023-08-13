'use client'

import { usePathname, useRouter } from 'next/navigation'
import { navImages, navLinks } from '@/config';
import { NavLink, NavLinkImage } from '@/components/nav';
import { ImageButton } from '../button';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isPathInNavLinks = navLinks.some(link => pathname === link.href);

    useEffect(() => {
        // Close the menu when the route changes
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className='px-8 pt-8 w-full'>
            <nav className={`flex justify-between items-start md:flex-row flex-col ${isMenuOpen ? 'gap-4' : ''}`}>

                {!isPathInNavLinks ? (
                    <ImageButton imageSrc='/icons/chevron-left.svg' label='Back' height={10.6} width={10.6} onClick={() => {
                        router.back();
                        setIsMenuOpen(false);
                    }} isShowLabel={true} />
                ) : (
                    <div className="md:hidden transform transition-transform duration-500 ease-in-out" style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ImageButton imageSrc={isMenuOpen ? '/icons/x-mark.svg' : '/icons/hamburger.svg'} label='Menu' height={16} width={16} onClick={() => setIsMenuOpen(!isMenuOpen)} isShowLabel={false} />
                    </div>
                )}

                <div className={`transform transition-transform duration-500 flex flex-col md:flex-row md:visible md:h-auto md:translate-y-0 ${isMenuOpen ? 'translate-y-0' : 'h-0 invisible -translate-y-3/4'} md:items-start items-center gap-4 w-full`}>
                    {isPathInNavLinks
                        && navLinks.map(({ href, label }) => (
                            <NavLink key={href} href={href} label={label} active={pathname === href} />
                        ))
                    }
                </div>

                <div className={`flex flex-col md:flex-row transform transition-transform duration-500 md:visible md:h-auto md:translate-y-0 ${isMenuOpen ? 'translate-y-0' : 'h-0 invisible -translate-y-3/4'} justify-end gap-4 w-full`}>
                    {navImages.map(({ href, label, imgSrc, width, height }) => (
                        <NavLinkImage
                            key={href}
                            href={href}
                            label={label}
                            width={width}
                            height={height}
                            imgSrc={imgSrc}
                            isShowLabel={false}
                            isExternalLink={true}
                        />
                    ))}
                </div>
            </nav>
        </header >
    );
}

export default NavBar;

/*
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { navImages, navLinks } from '@/config';
import { NavLink, NavLinkImage } from '@/components/nav';
import { ImageButton } from '../button';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isPathInNavLinks = navLinks.some(link => pathname === link.href);

    useEffect(() => {
        // Close the menu when the route changes
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className='px-8 pt-8 w-full'>
            <nav className={`flex justify-between items-start md:flex-row flex-col ${isMenuOpen ? 'gap-4' : ''}`}>

                {!isPathInNavLinks ? (
                    <ImageButton imageSrc='/icons/chevron-left.svg' label='Back' height={10.6} width={10.6} onClick={() => {
                        router.back();
                        setIsMenuOpen(false);
                    }} isShowLabel={true} />
                ) : (
                    <div className="md:hidden transform transition-transform duration-500 ease-in-out" style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ImageButton imageSrc={isMenuOpen ? '/icons/x-mark.svg' : '/icons/hamburger.svg'} label='Menu' height={16} width={16} onClick={() => setIsMenuOpen(!isMenuOpen)} isShowLabel={false} />
                    </div>
                )}

                <div className={`transform transition-transform duration-500 flex flex-col md:flex-row ${isMenuOpen ? 'translate-y-0' : 'h-0 invisible -translate-y-3/4'} md:items-start items-center gap-4 w-full`}>
                    {isPathInNavLinks
                        && navLinks.map(({ href, label }) => (
                            <NavLink key={href} href={href} label={label} active={pathname === href} />
                        ))
                    }
                </div>

                <div className={`flex flex-col md:flex-row transform transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : 'h-0 invisible -translate-y-3/4'} justify-end gap-4 w-full`}>
                    {navImages.map(({ href, label, imgSrc, width, height }) => (
                        <NavLinkImage
                            key={href}
                            href={href}
                            label={label}
                            width={width}
                            height={height}
                            imgSrc={imgSrc}
                            isShowLabel={false}
                            isExternalLink={true}
                        />
                    ))}
                </div>
            </nav>
        </header >
    );
}

export default NavBar;

*/