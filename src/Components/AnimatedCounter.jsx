import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2,
  label = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
        {count}{suffix}
      </div>
      <div className="font-barlow-condensed text-sm tracking-[0.2em] uppercase text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
