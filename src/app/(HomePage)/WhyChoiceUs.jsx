import React from 'react';
import { Zap, ShieldCheck, Globe, Star, Layers, Cpu } from 'lucide-react';
import Container from '@/Layout/Container';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Zap size={24} className="text-amber-500" />,
            title: "Lightning Fast",
            description: "Sub-second processing on all tools. Optimized algorithms ensure you never wait for results.",
            bgColor: "bg-amber-400/10"
        },
        {
            icon: <ShieldCheck size={24} className="text-emerald-500" />,
            title: "Privacy First",
            description: "Zero data logging. All processing happens client-side or through secure, ephemeral servers.",
            bgColor: "bg-emerald-400/10"
        },
        {
            icon: <Globe size={24} className="text-blue-600" />,
            title: "Universal Access",
            description: "Works on any device, any browser. No downloads, no installations, no restrictions.",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: <Star size={24} className="text-purple-600" />,
            title: "Always Free",
            description: "Core features remain free forever. No hidden costs, no premium tiers, no paywalls.",
            bgColor: "bg-purple-500/10"
        },
        {
            icon: <Layers size={24} className="text-indigo-600" />,
            title: "30+ Tools",
            description: "Comprehensive suite covering media, finance, development, and productivity needs.",
            bgColor: "bg-indigo-500/10"
        },
        {
            icon: <Cpu size={24} className="text-cyan-600" />,
            title: "Modern Tech",
            description: "Built with cutting-edge web technologies for maximum performance and reliability.",
            bgColor: "bg-cyan-500/10"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Why Choose <span className="text-blue-600">NexTools</span>?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Built for professionals who demand speed, security, and reliability in their daily workflows.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div 
                            key={index} 
                            className="p-8 rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${item.bgColor}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;