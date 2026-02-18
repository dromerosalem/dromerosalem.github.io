import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { ParticlesBackground } from './ParticlesBackground';

export const Background = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <ParticlesBackground />
            {/* Interactive blob following mouse (delayed) */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    willChange: "transform",
                }}
                className="absolute w-[30vw] h-[30vw] bg-zinc-800/20 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
            />

            {/* Ambient floating blobs - Using gradients instead of blurs for performance */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    willChange: "opacity",
                    background: "radial-gradient(circle at center, rgba(63, 63, 70, 0.4) 0%, transparent 70%)"
                }}
                className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    willChange: "opacity",
                    background: "radial-gradient(circle at center, rgba(39, 39, 42, 0.4) 0%, transparent 70%)"
                }}
                className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 brightness-100 contrast-120 mix-blend-overlay pointer-events-none" />
        </div>
    );
};
