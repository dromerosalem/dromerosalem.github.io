import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import React, { useRef } from 'react';

interface GlassCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    githubLink?: string;
    image?: string;
}

export const GlassCard = ({ title, description, tags, link, githubLink, image }: GlassCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full perspective-1000"
        >
            <motion.div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="glass-panel p-6 flex flex-col gap-4 group h-full relative overflow-hidden bg-gradient-to-br from-white/10 to-white/0"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />

                <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-accent transition-colors duration-500">
                        {title}
                    </h3>
                    <div className="flex gap-2">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors p-1"
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors p-1"
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                <ArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed flex-grow z-10" style={{ transform: "translateZ(30px)" }}>
                    {description}
                </p>

                {image && (
                    <div
                        className="w-full aspect-video overflow-hidden rounded-lg mt-2 mb-2 bg-zinc-900/50 border border-white/5 z-10 relative group-hover:border-white/10 transition-colors duration-500"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        {/* Low-cost background fill */}
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 pointer-events-none"
                            loading="lazy"
                        />
                        {/* Contained foreground image */}
                        <img
                            src={image}
                            alt={title}
                            className="relative w-full h-full object-contain opacity-100 transition-all duration-500"
                            loading="lazy"
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 z-10" style={{ transform: "translateZ(20px)" }}>
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
