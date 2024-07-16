import "../styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="transicion">
      <section className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>  
        </motion.div>    
      </section>
    </div>


  );
}

export default function Transicion() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>
        <img src="../../img/ICONS/photoshop.svg" alt="icono de photoshop" />
        <img src="../../img/ICONS/illustrator.svg" alt="icono de illustrator" />
        <img src="../../img/ICONS/bootstrap.svg" alt="icono de bootstrap" />
        <img src="../../img/ICONS/figma.svg" alt="icono de figma" />
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        <img src="../../img/ICONS/html.svg" alt="icono de html" />
        <img src="../../img/ICONS/js.svg" alt="icono de js" />
        <img src="../../img/ICONS/laravel.svg" alt="icono de laravel" />  
        <img src="../../img/ICONS/vue.svg" alt="icono de vue" />
        <img src="../../img/ICONS/wordpress.svg" alt="icono de wordpress" />
      </ParallaxText>
    </section>
  );
}