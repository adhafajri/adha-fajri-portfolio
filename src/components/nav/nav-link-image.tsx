import Image from "next/image";
import Link from "next/link";

export interface NavLinkImageProps {
    href: string;
    label: string;
    imgSrc: string;
}

const NavLinkImage = ({ href, label, imgSrc }: NavLinkImageProps) => {
    return (
        <Link href={href} className='flex flex-col items-start rounded-lg bg-[#FF5943] p-4'>
            <Image src={imgSrc} alt={label} width={32} height={32} priority />
        </Link>
    )
}

export default NavLinkImage;
