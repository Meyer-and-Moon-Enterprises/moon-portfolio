import { MotionHoverAnimation } from "../../motion/MotionHoverAnimation";

export default function SocialButton({ src }) {
  return (
    <>
      <MotionHoverAnimation>
        <a href='https://www.behance.net/jessemoon'>
          <img
            className={`pl-2.5 pr-2.5 h-7`}
            src={src}
          />
        </a>
      </MotionHoverAnimation>
    </>
  );
}