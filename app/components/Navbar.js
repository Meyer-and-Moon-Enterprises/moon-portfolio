"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className={`flex bg-black items-center sticky top-0 h-14 border `}>
      <div className={`container border flex justify-between`}>
        <Link
          href='/work'
          className={"text-white text-xl no-underline decoration-0 decoration-white"}
        >
          JESSE MOON
        </Link>
        <div className={"flex items-center "}>
          <Link
            className={"pr-1 " + (pathname === "/work" ? " text-white" : " text-current")}
            href='/work'
          >
            Work
          </Link>
          <Link
            className={"pl-1 " + (pathname === "/about" ? " text-white" : "text-current")}
            href='/about'
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
