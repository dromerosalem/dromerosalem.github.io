import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

interface GlassCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    githubLink?: string;
    image?: string;
    images?: string[];
    isMobile?: boolean;
    category: 'raw' | 'vibe';
    challenge?: string;
    solution?: string;
}

export const GlassCard = ({ title, description, tags, link, githubLink, image, images, isMobile, category, challenge, solution }: GlassCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const displayImages = images || (image ? [image] : []);

    useEffect(() => {
        if (displayImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [displayImages.length]);

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

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
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
                className={`glass-panel p-6 flex flex-col gap-4 group h-full relative overflow-hidden transition-all duration-500 ${category === 'vibe'
                        ? 'border-gold-accent/10 hover:border-gold-accent/30 bg-gradient-to-br from-gold-accent/5 to-transparent'
                        : 'border-white/10 hover:border-white/20 bg-gradient-to-br from-white/5 to-transparent'
                    }`}
            >
                {/* Visual Category Differentiation Layer */}
                {category === 'vibe' ? (
                    <>
                        {/* Vibe: AI Pulse Glow */}
                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-gold-accent/10 rounded-full blur-[80px] pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,148,90,0.05),transparent_70%)] pointer-events-none" />
                    </>
                ) : (
                    <>
                        {/* Raw: Engineering Grid Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    </>
                )}

                {/* Shine effect */}
                <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${category === 'vibe'
                    ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(180,148,90,0.15),transparent_50%)]'
                    : 'bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]'
                    }`} />

                <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(50px)" }}>
                    <h3 className={`text-xl font-bold transition-colors duration-500 ${category === 'vibe' ? 'text-white group-hover:text-gold-accent' : 'text-zinc-200 group-hover:text-white'
                        }`}>
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

                {displayImages.length > 0 && (
                    <div
                        className={`w-full overflow-hidden rounded-lg mt-2 mb-2 bg-zinc-900/50 border border-white/5 z-10 relative group-hover:border-white/10 transition-colors duration-500 ${isMobile ? 'aspect-[9/16] max-w-[200px] mx-auto p-2' : 'aspect-video'
                            }`}
                        style={{ transform: "translateZ(40px)" }}
                    >
                        {isMobile ? (
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-zinc-800 bg-black shadow-2xl group/phone">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-800 rounded-b-xl z-30" />

                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={displayImages[currentImageIndex]}
                                        alt={`${title} - step ${currentImageIndex + 1}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </AnimatePresence>

                                {/* Controls for multiple images */}
                                {displayImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover/phone:opacity-100 transition-opacity z-40"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover/phone:opacity-100 transition-opacity z-40"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-40">
                                            {displayImages.map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-gold-accent w-3' : 'bg-white/30'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="relative w-full h-full">
                                {/* Low-cost background fill */}
                                <img
                                    src={displayImages[0]}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 pointer-events-none"
                                    loading="lazy"
                                />
                                {/* Contained foreground image */}
                                <img
                                    src={displayImages[0]}
                                    alt={title}
                                    className="relative w-full h-full object-contain opacity-100 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Technical Breakdown Expansion */}
                {(challenge || solution) && (
                    <div className="z-10 mt-auto" style={{ transform: "translateZ(20px)" }}>
                        <button
                            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                            className={`w-full flex items-center justify-between py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${category === 'vibe' ? 'text-gold-accent/60 hover:text-gold-accent' : 'text-zinc-500 hover:text-white'
                                }`}
                        >
                            <span>Technical Breakdown</span>
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronRight size={14} className="rotate-90" />
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className={`mt-2 p-4 rounded-lg text-xs leading-relaxed space-y-3 ${category === 'vibe' ? 'bg-gold-accent/5 border border-gold-accent/10' : 'bg-white/5 border border-white/10'
                                        }`}>
                                        {challenge && (
                                            <div>
                                                <span className={`${category === 'vibe' ? 'text-gold-accent' : 'text-white'} font-bold block mb-1 uppercase tracking-tighter opacity-70`}>Challenge</span>
                                                <p className="text-zinc-400">{challenge}</p>
                                            </div>
                                        )}
                                        {solution && (
                                            <div>
                                                <span className={`${category === 'vibe' ? 'text-gold-accent' : 'text-white'} font-bold block mb-1 uppercase tracking-tighter opacity-70`}>Solution</span>
                                                <p className="text-zinc-400">{solution}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 z-10" style={{ transform: "translateZ(20px)" }}>
                    {tags.map((tag) => (
                        <span key={tag} className={`text-xs font-mono transition-colors duration-300 px-2 py-1 rounded ${category === 'vibe' ? 'text-gold-accent/70 bg-gold-accent/5' : 'text-zinc-500 bg-white/5'
                            }`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
