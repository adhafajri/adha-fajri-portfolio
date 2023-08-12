import Image from "next/image";
import Link from "next/link";

const NavLinkImage = ({ href, label, width, height, imgSrc, isShowLabel }: { href: string, label: string, width: number, height: number, imgSrc: string, isShowLabel: boolean }) => {
    return (
        <Link href={href} className='flex items-center rounded-2xl bg-[#FF5943] p-4 gap-4'>
            {isShowLabel && (
                <span className="text-center text-white text-sm font-normal">{label}</span>
            )}

            <Image src={imgSrc} alt={label} width={width} height={height} />
        </Link>
    )
}

export default NavLinkImage;
