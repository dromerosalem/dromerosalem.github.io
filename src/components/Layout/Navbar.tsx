import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 origin-top"
        >
            <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-8 shadow-2xl bg-white/5 backdrop-blur-lg">
                <span className="font-bold text-xl tracking-tighter text-white">DRS<span className="text-gold-accent">.</span></span>

                <div className="h-6 w-[1px] bg-white/10" />

                <div className="flex gap-6">
                    <a
                        href="https://github.com/dromerosalem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-all hover:scale-125 transform duration-200"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/dromerosalem/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-all hover:scale-125 transform duration-200"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:davidromerosalem@gmail.com"
                        className="text-zinc-400 hover:text-white transition-all hover:scale-125 transform duration-200"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
