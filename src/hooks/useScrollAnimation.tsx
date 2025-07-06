import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}): [
  React.Ref<any>,
  boolean,
  AnimationControls
] => {
  const {
    triggerOnce = true,
    threshold = 0.1,
    delay = 0
  } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return [ref, inView, controls];
};