import Link from "next/link";

export interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

const NavLink = ({ href, label, active }: NavLinkProps) => {
  return (
    <Link href={href} className={`flex flex-col items-start rounded-lg p-4 ${active ? 'bg-[#FF5943]' : ''}`}>
      <span className="text-center text-white text-xl font-semibold font-poppins">{label}</span>
    </Link>
  )
}

export default NavLink;
