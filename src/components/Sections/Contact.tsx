import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "davidromerosalem@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="z-10 relative"
                >
                    <h2 className="text-gold-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">Project Inquiry</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tighter italic-fix">Get in <span className="gold-gradient-text italic pr-2">touch</span></h3>

                    <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gold-accent/10 flex items-center justify-center mb-6 border border-gold-accent/20">
                                <Mail className="text-gold-accent" size={28} />
                            </div>

                            <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
                                I'm currently open to new projects and interesting collaborations. If you'd like to chat about a technical challenge or just say hello, feel free to reach out.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
                                {/* The Email Button */}
                                <div className="relative group/email">
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:border-gold-accent/50 hover:bg-white/10 transition-all duration-300 group"
                                    >
                                        <span className="text-white font-mono text-sm md:text-base">{email}</span>
                                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold-accent/10 text-gold-accent group-hover:bg-gold-accent group-hover:text-black transition-colors">
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {copied && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: -45, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-accent text-black text-[10px] font-bold rounded uppercase tracking-wider shadow-lg pointer-events-none"
                                            >
                                                Email copied
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <span className="text-zinc-600 font-mono text-xs">OR</span>

                                <div className="flex gap-4">
                                    <a
                                        href="https://linkedin.com/in/dromerosalem"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all shadow-sm"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/dromerosalem"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all shadow-sm"
                                        title="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center gap-4">
                        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Based in London • Available Worldwide</p>
                        <div className="w-1 h-1 rounded-full bg-gold-accent animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
