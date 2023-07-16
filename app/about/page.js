"use client";
import AboutComponent from "./components/About";
import { MotionPageWrapper } from "../components/motion/MotionPageWrapper";

export default function About() {
  return (
    <MotionPageWrapper>
      <AboutComponent />
    </MotionPageWrapper>
  );
}
