import { motion } from "framer-motion";
import bgImage from "../assets/images/seedlings.png";
import farmImage from "../assets/images/seedlings.png";
import farm2 from "../assets/images/nurseries.png";
import farm3 from "../assets/images/image21.jpg";
import farm4 from "../assets/images/avocado1.jpeg";
import farm5 from "../assets/images/avocado.png";
import image1 from "../assets/images/image15.jpg";
import image2 from "../assets/images/image16.jpg";
import image3 from "../assets/images/image17.jpg";
import image4 from "../assets/images/people.png";
import SectionHeading from "../Components/SectionHeading";
import { Leaf, Lightbulb, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";


const values = [
    { icon: Leaf, title: "Sustainability", desc: "Every decision we make prioritizes long-term environmental health and resource conversation."},
    { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technology and creative solutions to solve agricultural challenges."},
    { icon: Users, title: "Community", desc: "Our work is rooted in partnership with farming communities we serve"},
    { icon: Award, title: "Quality", desc: "We maintain the highest standards in evrything from advisory services to crop output"}
];

const team = [
    { icon: Users, name: "Edward Agg-Manning", role: "Founder & CEO", desc: "Agricultural scientist with 20 years of experience in sustainable farming." },
    { icon: Users, name: "James Kariuki", role: "CMO", desc: "Tech leader specializing in agricultural data systems and IoT solutions." },
    { icon: Users, name: "Sarah Daniel", role: "Head of operations", desc:"Operations expert with deep roots in community development programs." },
    { icon: Users, name: "David Mutua", role: "Director of Researh", desc: "Crop scientists lead research in climate resilient agriculture." }
];



const About = () => {

    const changesImages = [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 }
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % changesImages.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [changesImages.length]);

    const galleryImages = [
        { src: farmImage, alt: "Sustainable farm landscape" },
        { src: farm2, alt: "Field with crops" },
        { src: farm3, alt: "Farmers collaborating" },
        { src: farm4, alt: "Modern farm equipment" },
        { src: farm5, alt: "Sunrise over farmland" },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [galleryImages.length]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <img src={bgImage} className="absolute inset-0 object-cover h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_52%_32%/0.9)] via-[hsl(142_52%_32%/0.7)] to-[hsl(30_35%_30%/0.6)] "/>
                <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        inital= {{ opacity: 0, y: 30 }}
                        animate= {{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.6 }}
                    >
                        <h2 className="text-[hsl(0,0%,100%)] text-4xl md:text-5xl lg:text-7xl font-bold font-display">About PlantED</h2>
                        <p className="mt-4 text-[hsl(0,0%,100%)]/80 max-w-xl text-lg ">Our Story, mission, and the people driving change in agriculture</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Stories */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src={galleryImages[currentImageIndex].src} 
                            alt={galleryImages[currentImageIndex].alt}
                            className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                        />
                    </motion.div>

                    <motion.div
                        initial= {{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm bg-[hsl(142,52%,32%)]/10 inline-block px-4 py-1 rounded-lg font-semibold text-[hsl(142,53%,32%)] mb-4">Our Story</h3>
                        <p className="text-3xl font-display font-bold text-[hsl(150,30%,12%)] ">From a Seed of an Idea to a Growing Movement</p>
                        <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">plantED began in 2015 when a group of agricultural scientists and community advocates recognized the urgent need to bridge the gap between modern farming 
                            innovation and smallholder farmers. What started as a small consultancy has grown into a comprehensive agricultural solutions provider.
                        </p>
                        <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">
                            Today, we serve over 12,500 farmers across multiple countries, helping them adopt sustainable practices, integrate smart technology, and access broader markets for their produce.
                        </p>
                    </motion.div>
                    
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial= {{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm bg-[hsl(142,52%,32%)]/10 inline-block px-4 py-1 rounded-lg font-semibold text-[hsl(142,53%,32%)] mb-4">Our Story</h3>
                        <p className="text-3xl font-display font-bold text-[hsl(150,30%,12%)] ">Roots of Change</p>
                        <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">
                            In a quiet farming community where opportunities once felt limited, a new kind of growth began to take shape, not just in the fields, but in the lives of the people. What started as an initiative to improve agricultural practices soon became a source of empowerment for local farmers. With access to better knowledge, improved techniques, and a shared vision, families began to see real change. Yields increased, incomes stabilized, and for the first time in a long while, there was a sense of control over their future. The project did not just introduce innovation, it restored dignity and confidence among those who had long relied on uncertain harvests.
                        </p>
                        <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">
                            At the heart of this transformation were the people themselves, the farmers, the trainers, and the leaders who believed in doing things differently. Faces once marked by doubt now reflected pride and resilience. Communities grew closer, sharing not only resources but also hope. The ripple effect was undeniable: children stayed in school, households became more secure, and local economies slowly strengthened. This was not just about farming, it was about building a sustainable future, one where progress is shared and every success story inspires another.
                        </p>
                    </motion.div>
                    <motion.div
                        initial= {{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} 
                    >
                        <img 
                            src={changesImages[currentImage].src} 
                            className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Mision& Vision */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[hsl(90,30%,94%)]">
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial= {{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)]"
                    >
                        <h3 className="text-2xl font-bold font-display text-[hsl(150,20%,8%)] mb-4">Our Mission</h3>
                        <p className="text-sm font-display text-[hsl(150,10%,45%)] mb-4">To empower farming communities with sustainable agricultural solutions, innovative technology, and comprehensive training that ensures food security and economic prosperity for generations to come.</p>
                    </motion.div>
                    <motion.div
                        initial= {{ opacity: 0, y:20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)]"
                    >
                        <h3 className="text-2xl font-bold font-display text-[hsl(150,20%,8%)] mb-4">Our Vission</h3>
                        <p className="text-sm font-display text-[hsl(150,10%,45%)] mb-4">A world where every farmer has access to the tools, knowledge, and markets needed to thrive—where agriculture is both a driver of economic growth and a guardian of our planet's resources.</p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Core Values"
                        title="What Drives Us"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div 
                                key={v.title}
                                initial= {{ opacity: 0, y: 30 }} 
                                whileInView= {{ opacity: 1, y: 0 }} 
                                viewport={{ once:true }}
                                transition= {{ duration: i * 0.1 }}
                                className="p-6 bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)] rounded-2xl text-center transition-all duration-300"
                            >
                                <div className="w-14 h-14 mx-auto rounded-lg bg-[hsl(142,52%,32%)]/10 flex items-center justify-center mb-4">
                                    <v.icon className="h-7 w-7 text-[hsl(142,52%,32%)]"/>
                                </div>
                                <h3 className="font-display font-semibold text-lg text-[hsl(150,30%,12%)]">{v.title}</h3>
                                <p className="mt-4 text-sm text-[hsl(150,10%,45%)]">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="px-4 xm:px-6 lg:px-8 py-15 md:py-24 bg-[hsl(90,30%,94%)]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading 
                        label="Leadership"
                        title="Meet Our Team"
                        description="The passionate individuals leading plantED's mission"
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial= {{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)] rounded-2xl text-center transition-all duration-300"
                            >
                                <div className="w-14 h-14 mx-auto rounded-lg bg-[hsl(142,52%,32%)]/10 flex items-center justify-center mb-4">
                                    <t.icon className="w-7 h-7 text-[hsl(142,52%,32%)]"/>
                                </div>
                                <h3 className="font-display font-bold text-lg text-[hsl(150,30%,12%)]">{t.name}</h3>
                                <h4 className="text-sm text-[hsl(142,52%,32%)]/60 font-bold">{t.role}</h4>
                                <p className="text-sm text-[hsl(150,10%,45%)] mt-2">{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;