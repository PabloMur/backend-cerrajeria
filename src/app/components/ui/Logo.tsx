import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="bg-amber-200 p-2 m-2 rounded w-full h-[150px] flex justify-end items-end"
    >
      <p className="font-bold text-black">Cerrajeria La Torre</p>
    </Link>
  );
};

export default Logo;
