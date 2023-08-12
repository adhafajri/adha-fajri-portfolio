import Image from "next/image";
import Link from "next/link";

const NavLinkImage = ({
    href,
    label,
    width,
    height,
    imgSrc,
    isShowLabel,
    isExternalLink = false
}: {
    href: string,
    label: string,
    width: number,
    height: number,
    imgSrc: string,
    isShowLabel: boolean,
    isExternalLink?: boolean
}) => {
    const commonClasses = 'flex items-center rounded-2xl bg-orange p-4 gap-4 md:w-auto w-full hover:bg-orange-hover active:bg-orange-active transform hover:scale-105 transition duration-300';

    return (
        isExternalLink ? (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className={commonClasses}
            >
                {isShowLabel && (
                    <span className="text-center text-white text-sm font-normal">{label}</span>
                )}
                <Image src={imgSrc} alt={label} width={width} height={height} />
            </a>
        ) : (
            <Link href={href} className={commonClasses}>
                {isShowLabel && (
                    <span className="text-center text-white text-sm font-normal">{label}</span>
                )}
                <Image src={imgSrc} alt={label} width={width} height={height} />
            </Link>
        )
    )
}

export default NavLinkImage;