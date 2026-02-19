import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-accent/20 via-gold-accent to-gold-accent/20 origin-left z-[100]"
            style={{
                scaleX,
                boxShadow: '0 0 15px rgba(180, 148, 90, 0.3)'
            }}
        />
    );
};
