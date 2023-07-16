"use client";
import Hero from "./components/Hero";
import MotionPageWrapper from "../components/motion/MotionPageWrapper";
import WorkList from "./components/WorkList";

export default function Work() {
  return (
    <MotionPageWrapper>
      <Hero />
      <WorkList />
    </MotionPageWrapper>
  );
}
