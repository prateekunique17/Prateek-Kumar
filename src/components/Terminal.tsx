import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const commands = {
    help: `Available commands:
  about     - Who am I?
  email     - Get in touch
  github    - Check my code
  linkedin  - Professional profile
  clear     - Clear terminal`,
    about: "I am Prateek, a developer who crafts digital experiences. I believe in executing in silence and letting output speak. Obsessed with excellence and building things that matter.",
    email: "prateekunique17@gmail.com",
    github: "https://github.com/prateekunique17",
    linkedin: "https://www.linkedin.com/in/prateek-kumar-a31ab5323/",
    sudo: "Permission denied: You are not authorized to run sudo on this portfolio.",
};

export const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
        {
            cmd: 'welcome',
            output: `Welcome to Prateek's Terminal v1.0.0
            
Available commands:
  help      - Show this menu
  about     - Who am I?
  email     - Get in touch
  github    - Check my code
  linkedin  - Professional profile
  clear     - Clear terminal

Type a command to start...`
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (cmd === 'clear') {
            setHistory([]);
            setInput('');
            return;
        }

        let output = "Command not found. Type 'help' for available commands.";
        if (cmd in commands) {
            output = commands[cmd as keyof typeof commands];
        } else if (cmd === '') {
            output = '';
        }

        setHistory([...history, { cmd: input, output }]);
        setInput('');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm"
        >
            {/* Window Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                    <TerminalIcon size={12} />
                    <span>Prateek's Terminal</span>
                </div>
                <div className="w-12" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div
                className="p-6 h-[400px] overflow-y-auto text-white/90 space-y-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((entry, i) => (
                    <div key={i} className="space-y-1">
                        <div className="flex gap-2 text-white/50">
                            <span className="text-primary-500">➜</span>
                            <span className="text-blue-400">~</span>
                            <span>{entry.cmd}</span>
                        </div>
                        {entry.output && (
                            <div className="pl-6 text-white/80 whitespace-pre-wrap">{entry.output}</div>
                        )}
                    </div>
                ))}

                <form onSubmit={handleCommand} className="flex gap-2 pt-2">
                    <span className="text-primary-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none flex-1 text-white focus:ring-0 p-0"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </form>
                <div ref={messagesEndRef} />
            </div>
        </motion.div>
    );
};
