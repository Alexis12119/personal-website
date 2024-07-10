import { animate } from 'framer-motion';

export const smoothScroll = (id) => {
  const element = document.getElementById(id);
  const offset = element.getBoundingClientRect().top + window.pageYOffset;

  animate(window.scrollY, offset, {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    duration: 0.5,
    onUpdate: (latest) => {
      window.scrollTo(0, latest);
    },
  });
};
