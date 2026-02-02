import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    role?: string;
    link?: string;
    isWinner?: boolean;
}

export const ProjectCard = ({ title, description, tags, role, link, isWinner }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
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
            className="relative h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 shadow-xl hover:shadow-primary-500/20 transition-shadow duration-500 group"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="relative z-10 flex flex-col h-full"
            >
                {isWinner && (
                    <div className="absolute -top-10 -right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-primary-500/40">
                        <Award size={14} /> WINNER
                    </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {title}
                </h3>

                {role && <span className="text-sm text-primary-400 font-mono mb-4 block">{role}</span>}

                <p className="text-white/70 mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                            #{tag}
                        </span>
                    ))}
                </div>

                {link && (
                    <div className='mt-6 pt-4 border-t border-white/10 flex justify-end'>
                        <ExternalLink className="text-white/40 hover:text-white transition-colors cursor-pointer" size={20} />
                    </div>
                )}
            </div>

            {/* Glossy gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};
