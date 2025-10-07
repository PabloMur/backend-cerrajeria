import Link from "next/link";

interface NavLinksProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinksProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export default NavLink;
