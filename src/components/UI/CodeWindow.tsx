import { motion } from 'framer-motion';

const codeSnippet = `/**
 * Software Orchestration Core
 * @focus: System Design, AI Infrastructure, Optimization
 */
class Orchestrator {
  async scale(system: ResilientArchitecture) {
    const nodes = await system.nodes.optimize({
      strategy: 'PREDICTIVE_SCALING',
      latencyTarget: '<10ms'
    });

    return nodes.dispatch({
      env: 'PRODUCTION',
      redundancy: 'HIGH_RESILIENCE',
      ai_engine: 'DISPATCH_READY'
    });
  }
}

// System initialized: R&D focus
export default new Orchestrator();`;

export const CodeWindow = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl font-mono text-xs md:text-sm"
        >
            {/* Window Header */}
            <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-widest">Orchestrator.ts</div>
                <div className="w-5" /> {/* Spacer */}
            </div>

            {/* Code Content */}
            <div className="p-6 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="text-gold-accent text-4xl">{"{ }"}</div>
                </div>

                <pre className="text-zinc-400">
                    {codeSnippet.split('\n').map((line, i) => {
                        // Very basic syntax highlighting replacements
                        let highlightedLine = line
                            .replace(/(class|async|await|const|return|export|default|new)/g, '<span class="text-purple-400">$1</span>')
                            .replace(/(Orchestrator|ResilientArchitecture)/g, '<span class="text-yellow-200">$1</span>')
                            .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
                            .replace(/(\/\/ .*|\/\*\*[\s\S]*?\*\/)/g, '<span class="text-zinc-600 italic">$1</span>')
                            .replace(/(static|private|public)/g, '<span class="text-blue-400">$1</span>')
                            .replace(/(@\w+)/g, '<span class="text-gold-accent/70">$1</span>');

                        return (
                            <div key={i} className="flex gap-4">
                                <span className="text-zinc-700 w-4 text-right select-none">{i + 1}</span>
                                <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                            </div>
                        );
                    })}
                </pre>

                {/* Blinking Cursor */}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute bottom-6 left-28 w-2 h-4 bg-gold-accent/50"
                />
            </div>
        </motion.div>
    );
};
