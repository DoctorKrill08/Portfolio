import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeInWhenVisible({ className, children, threshold = 0.07, rootMargin = '0px 0px', ...props }) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
  });
  const animation = useAnimation();

  const x_initial = -60

  useEffect(() => {
    animation.start({
      opacity: inView ? 1 : 0,
      x: inView ? 0 : x_initial,
      transition: { type: 'tween', ease: 'easeInOut', duration: 0.6 }
    });
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: x_initial}}
      animate={animation}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
