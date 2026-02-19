import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const ScrollReveal = ({ children, className = "", id }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.85, 1, 1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [150, 0, 0, -150]);
    const filter = useTransform(
        scrollYProgress,
        [0, 0.05, 0.95, 1],
        ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]
    );

    return (
        <motion.div
            id={id}
            ref={ref}
            style={{
                opacity,
                scale,
                y,
                filter
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
