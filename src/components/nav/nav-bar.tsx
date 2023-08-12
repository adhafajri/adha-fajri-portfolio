'use client'

import { usePathname, useRouter } from 'next/navigation'
import { navImages, navLinks } from '@/config';
import { NavLink, NavLinkImage } from '@/components/nav';
import Image from 'next/image';
import { ImageButton } from '../button';

const NavBar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isPathInNavLinks = navLinks.some(link => pathname === link.href);

    return (
        <header className='px-8 pt-8 w-full'>
            <nav className='flex justify-between items-center self-stretch'>
                <div className='flex items-start gap-4'>
                    {!isPathInNavLinks ? (
                        <ImageButton imageSrc='/icons/chevron-left.svg' label='Back' height={10.6} width={10.6} onClick={router.back} isShowLabel={true} />
                    ) : (
                        navLinks.map(({ href, label }) => (
                            <NavLink key={href} href={href} label={label} active={pathname === href} />
                        ))
                    )}
                </div>
                <div className='flex items-start gap-4'>
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
        </header>
    );
}

export default NavBar;