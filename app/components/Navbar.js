"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className={`flex bg-black items-center sticky top-0 h-14 z-50`}>
      <div className={`container flex justify-between`}>
        <Link
          href='/work'
          className={"text-white text-xl no-underline decoration-0 decoration-white"}
        >
          JESSE MOON
        </Link>
        <div className={"flex items-center "}>
          <Link
            className={"pr-1 hover:text-white/80 " + (pathname === "/work" ? " text-white/80" : " text-white/40")}
            href='/work'
          >
            Work
          </Link>
          <Link
            className={"pl-1 hover:text-white/80 " + (pathname === "/about" ? " text-white/80" : "text-white/40")}
            href='/about'
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
