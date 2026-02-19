import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: 500, damping: 28 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);

            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button'
            );
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // Disable on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                x,
                y,
                opacity: isVisible ? 1 : 0,
                width: 32,
                height: 32,
            }}
        >
            {/* Outer Ring */}
            <motion.div
                className="absolute w-full h-full rounded-full border border-gold-accent/40 backdrop-blur-[1px]"
                animate={{
                    scale: isPointer ? 1.8 : 1,
                    borderWidth: isPointer ? 1 : 1.5,
                    borderColor: isPointer ? "rgba(180, 148, 90, 0.8)" : "rgba(180, 148, 90, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Center Dot */}
            <motion.div
                className="w-1 h-1 rounded-full bg-gold-accent"
                animate={{
                    scale: isPointer ? 0.5 : 1,
                    opacity: isPointer ? 0.5 : 1
                }}
            />

            {/* Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-gold-accent/5 blur-md" />
        </motion.div>
    );
};
