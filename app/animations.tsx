import { useState, useEffect} from "react";
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function Animation() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: 'tween', ease: 'easeOut', duration: 0.6 }
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 20,
        transition: { type: 'tween', ease: 'easeOut', duration: 0.6 }
      });
    }
  }, [inView, animation])

}
