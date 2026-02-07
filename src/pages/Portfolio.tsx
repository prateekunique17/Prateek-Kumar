import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { Award, CheckCircle2 } from 'lucide-react';

const achievements = [
    {
        title: "EnvoX Hackathon",
        role: "Member - GenInnovators | Winner",
        description: "Secured the #1 spot at Chitkara University under the theme 'Innovating Tech for Environmental Impact'. Built a comprehensive solution for environmental monitoring.",
        tags: ["React", "Node.js", "Environmental Tech"],
        isWinner: true
    },
    {
        title: "Smart India Hackathon",
        role: "Member - DevSpace",
        description: "Led a team from idea to execution under pressure, delivering a complete solution with clarity and confidence.",
        tags: ["Leadership", "Python", "Problem Solving"],
        isWinner: false
    },
    {
        title: "HackShastra 2025",
        role: "Team Leader - Team CyberPulse",
        description: "Successfully participated in Round 2 (Mentorship Round) organized by HackShastra.",
        tags: ["React JS", "Python", "Web3"],
        isWinner: false
    }
];

const certifications = [
    "Microsoft Certified: Azure AI Fundamentals",
    "AI and Disaster Management (United Latino Students Association)",
    "Natural Disaster and Climate Change Risk Assessment (BID)",
    "Python fundamentals from Coursera"

];

export const Portfolio = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Work & <span className="text-primary-500">Wins</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl">
                        A collection of hackathons, projects, and milestones where I pushed my limits.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {achievements.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className="h-[400px]" // Fixed height for alignment
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-16"
                >
                    <div className="flex items-center gap-3 mb-10">
                        <Award className="text-primary-500" size={32} />
                        <h3 className="text-3xl font-bold">Certifications</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-primary-500/50 transition-colors"
                            >
                                <CheckCircle2 className="text-primary-500 mt-1 shrink-0" />
                                <span className="text-lg text-white/80 font-medium">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
