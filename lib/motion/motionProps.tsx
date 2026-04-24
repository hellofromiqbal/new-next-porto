export const motionProps = (offsetX: number, offsetY: number, duration: number, delay: number) => ({
  variants: {
    hidden: { x: offsetX,y: offsetY, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration, delay } },
  },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
});