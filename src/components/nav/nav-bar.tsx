'use client'

import { usePathname } from 'next/navigation'
import { NavLink, NavLinkImage } from ".";

const NavBar = () => {
    const pathname = usePathname()
    console.log('[NavBar][pathname]', pathname)

    return (
        <nav className='flex justify-between items-center self-stretch'>
            <div className='flex items-start gap-4'>
                <NavLink href="/" label="About Me" active={pathname == "/"} />
                <NavLink href="/projects" label="Projects" active={pathname == "/projects"} />
            </div>

            <div className='flex items-start gap-4'>
                <NavLinkImage href="https://www.linkedin.com/in/adhafajri/" label="About Me" imgSrc={"/linkedIn.svg"} />
                <NavLinkImage href="https://github.com/adhafajri" label="Projects" imgSrc={"/github.svg"} />
            </div>
        </nav>
    )
}

export default NavBar;