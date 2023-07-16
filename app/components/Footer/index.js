"use client";
import { MotionHoverAnimation } from "../motion/MotionHoverAnimation";
import SocialButton from "./components/SocialButton";

export default function Footer() {
  return (
    <footer>
      <div className={"container flex justify-center h-28"}>
        <div className={`flex justify-center items-center`}>
          <SocialButton src='/images/beh.png' />
          <SocialButton src='/images/instagram.png' />
          <SocialButton src='/images/linkedin.png' />
          <SocialButton src='/images/basketball.png' />
        </div>
      </div>
      <div className={`border-t-2 border-neutral-800`}></div>
      <div className={`container`}>
        <div className={`h-28 flex justify-between items-center`}>
          <div className={`w-4/12 hidden lg:block text-center fst-italic`}>
            Made remotely from Seattle
          </div>
          <div className={`w-full lg:w-4/12 text-center`}>
            © 2023 genuinejesse.com
          </div>
        </div>
      </div>
    </footer>
  );
}
