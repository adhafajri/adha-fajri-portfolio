import Link from "next/link";

export interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

const NavLink = ({ href, label, active }: NavLinkProps) => {
  return (
    <Link href={href} className={`flex flex-col items-start rounded-2xl p-4 ${active ? 'bg-[#FF5943]' : ''}`}>
      <span className="text-center text-white text-sm font-normal">{label}</span>
    </Link>
  )
}

export default NavLink;
