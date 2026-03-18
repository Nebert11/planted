import heroFarm from "../assets/images/hero-farm.jpg";
import farmImage from "../assets/images/image20.jpg";
import farm2 from "../assets/images/image8.jpg";
import farm3 from "../assets/images/image9.jpg";
import farm4 from "../assets/images/image19.jpg";
import farm5 from "../assets/images/image6.jpg";
import farm6 from "../assets/images/edward.jpeg";
import avocado from "../assets/images/avocado1.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { Leaf, Cpu, Users, ShieldCheck, Sprout, BarChart3, GraduationCap, Globe, ArrowRight } from "lucide-react";
import SectionHeading from "../Components/SectionHeading";
import AnimatedCounter from "../Components/AnimatedCounter";
import { useEffect } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {delay: i * 0.1, duration: 0.5 }
    })
}

const Highlights = [
    { icon: Leaf, title: "Sustainable Farming", desc: "Eco-friendly practices for a greener tomorrow" },
    { icon: Cpu, title: "Smart Practices", desc: "Data-driven agriculture for better yields" },
    { icon: Users, title: "Farmers Empowerment", desc: "Building capacity in rural communities" },
    { icon: ShieldCheck, title: "Food Security", desc: "Ensuring reliable food systems for all" }
];

const Services = [
    { icon: Sprout, title: "Agricultural Consulting", desc: "Expert advice for modern farming operations" },
    { icon: BarChart3, title: "Farm Management", desc: "End-to-end farm management solutions" },
    { icon: Leaf, title: "Crop Production", desc: "Advanced crop production and support" },
    { icon: Cpu, title: "Agritech Integration", desc: "Smart technology solutions for farms" },
    { icon: GraduationCap, title: "Training Programs", desc: "Building farmers' skills and knowldge" },
    { icon: Globe, title: "Market Access", desc: "Connecting farmers to wider markets" }
];

const stats = [
    { value: 12500, suffix: "+", label: "Farmers Supported" },
    { value: 85000, suffix: "+", label: "Acres Managed" },
    { value: 200000, suffix: "+", label: "Tons Harvested" },
    { value: 350, suffix: "+", label: "Communities Impacted" },
];

const testimonials = [
    {quote: "plantED transformed our farm's productivity by 200%. Their smart irrigation solutions saved us water and money.", name: "Mary Wanjiku", role: "Smallholder Famer in Kenya"},
    {quote: "The training programs gave our cooperative the knowledge to compete in modern agricultural markets.", name: "Samuel Ochieng", role: "Community Leader, Uganda"},
    {quote: "Working with plantED has been a game-changer for our community. We now have food security year-round.", name: "Fatima Ahmed", role: "Community Leader, Tanzania"}
];

const partners = [
  "Menegai", "AAA", "Mutara Orchards", "Mt Elgon", "Chesumot Tea", "Gecheha", "Eboss", "Kisima", "Osti Global Tanzania", "Mehta Group Uganda"
];

const team = [
    "Sasini", "KFM Kitui", "Panacol Kitale", "Africado", "Granot Agdevco", "Eastern Orchards", "EAGA", "Borana, Sanyati", "Delamere & Murula", 
  "Forest Foods", "Engineer Kamau", "Lewa Downs", "Cullen"
];


const Hero = () => {
    
    const galleryImages = [
        { src: farmImage, alt: "Sustainable farm landscape", caption: "Smart irrigation in action" },
        { src: farm2, alt: "Field with crops", caption: "Healthy crops powered by data" },
        { src: farm3, alt: "Farmers collaborating", caption: "Community-led farming" },
        { src: farm4, alt: "Modern farm equipment", caption: "Modern tools for better yields" },
        { src: farm5, alt: "Sunrise over farmland", caption: "A new day for sustainable agriculture" },
        { src: avocado, alt: "Ready to harvest avocados", caption: "Ready to harvest avocados" },
        { src: farm6, alt: "Founder in one of green houses", caption: "Our Founder" }
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
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <img src={heroFarm} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_52%_32%/0.9)] via-[hsl(142_52%_32%/0.7)] to-[hsl(30_35%_30%/0.6)] "/>
                <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial= {{ opacity: 0, y: 40 }}
                        animate= {{ opacity: 1, y: 0 }}
                        transition= {{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(0,0%,100%)]/20 text-[hsl(0,0%,100%)] text-sm font-semibold mb-6 backdrop-blur-sm">
                            🌱 Sustainable Agriculture for Tomorrow
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:6xl lg:text-7xl font-display font-bold text-[hsl(0,0%,100%)] leading-tight max-w-4xl mx-auto ">
                            Growing the Future of Sustainable Agriculture
                        </h1>
                        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[hsl(0,0%,100%)]/80">
                            Empowering farmers with innovative solutions, smart technology, and sustainable practices to build resilient food systems worlwide.
                        </p>
                        <div className="flex flex-col sm:flex-row mt-10 gap-4 justify-center">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 bg-[hsl(0,0%,100%)] rounded-full text-sm text-[hsl(140,52%,32%)] font-semibold hover:opacity-90 text-base transition-opacity"
                            >
                                Our Solutions <ArrowRight size={18}/>
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[hsl(0,0%,100%)]/40 rounded-full text-sm text-[hsl(0,0%,100%)] font-semibold hover:bg-[hsl(0,0%,100%)]/10 transition-colors text-base"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Highlights */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Highlights.map((h, i) => (
                            <motion.div
                                key={h.title}
                                custom={i}
                                initial= "hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="p-6 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)] text-center " //transition-all duration-300
                            >
                                <div className="w-14 h-14 bg-[hsl(140,52%,32%)]/10 mx-auto rounded-xl flex items-center justify-center mb-4 ">
                                    <h.icon className="h-7 w-7 text-[hsl(140,52%,32%)]"/>
                                </div>
                                <h3 className="font-display font-semibold text-lg text-[hsl(150,30%,12%)]">{h.title}</h3>
                                <p className="mt-2 text-sm text-[hsl(150,10%,45%)]">{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[hsl(90,30%,94%)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
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
                            initial= {{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-[hsl(142,52%,32%)]/10 text-[hsl(142,52%,32%)] text-sm font-semibold mb-4">About plantED</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,18%)]">
                                Transforming Agriculture for a Better World
                            </h2>
                            <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">At plantED, we believe in the power of sustainable agriculture to transform lives and communities. Through innovative farming practices, technology integration, and farmer empowerment programs, we're building resilient food systems that nourish both people and the planet. 
                            </p>
                            <p className="mt-3 text-[hsl(150,10%,45%)] leading-relaxed">   
                               Founded on the principles of sustainability, innovation, and community, we work alongside farmers to unlock the full potential of their land while preserving it for future generations.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-full text-sm font-semibold bg-[hsl(142,52%,32%)] text-[hsl(0,0%,100%)] hover:opacity-90 transition-opacity"
                            >
                            Learn More <ArrowRight size={18}/>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview*/}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="items-center justify-center">
                        <SectionHeading
                            label= "What We Do"
                            title= "Our Services"
                            description="Comprehensive agricultural solutions designed to drive sustainable growth and empower farming communities"
                        />
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
                        {Services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                custom={i}
                                initial= "hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="p-6 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)] group"
                            >
                                <div className="bg-[hsl(142,52%,32%)]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <s.icon className="w-7 h-7 text-[hsl(142,52%,32%)]"/>
                                </div>
                                <h3 className="font-semibold font-display mb-2 text-lg">{s.title}</h3>
                                <p className="text-sm text-[hsl(150,10%,45%)]">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[hsl(140,52%,32%)]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading 
                        label="Our Impact"
                        title="Making a difference"
                        description="Real results that demonstrate our commitment to sustainable agriculture and farmer empowerment."
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {stats.map((stats,i) => (
                            <motion.div 
                                key={stats.label}
                                initial= {{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-[hsl(0,0%,100%)]">
                                    <AnimatedCounter end={stats.value} suffix={stats.suffix}/>
                                </div>
                                <p className="mt-2 text-[hsl(0,0%,100%)]/70 text-sm font-medium">{stats.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[hsl(90,30%,94%)]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading 
                        label= "Testimonies"
                        title= "What Farmers Say"
                        description="Hear from the communities we've worked with across the region."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial= "hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="p-6 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)] "
                            >
                                <p className="text-[hsl(150,10%,45%)] italic leading-relaxed ">{t.quote}</p>
                                <div className="mt-4 pt-4 border-t border-[hsl(90,15%,88%)]">
                                    <p className="font-semibold text-[hsl(150,30%,12%)]">{t.name}</p>
                                    <p className="text-sm text-[hsl(150,10%,45%)]">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */} 
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading 
                    label="Our Partners"
                    title="Trusted Collaborators"
                    description="Working alongside leading organizations to transform agriculture"
                    />

                    <div className="overflow-hidden">
                        <div className="flex gap-12 animate-scroll-right whitespace-nowrap">
                            {[...partners, ...partners].map((name, index) => (
                            <div key={index} className="flex items-center justify-center min-w-[150px]">
                                <span className="font-display font-bold text-lg text-[hsl(150,30%,12%)] opacity-60">
                                {name}
                                </span>
                            </div>
                            ))}
                        </div>
                    </div>

                     <div className="overflow-hidden">
                        <div className="flex w-max gap-12 animate-scroll-left whitespace-nowrap">
                        {[...team, ...team].map((name, index) => (
                            <div key={index} className="min-w-[150px] text-center">
                            <span className="font-display font-bold text-lg text-[hsl(150,30%,12%)] opacity-60">
                                {name}
                            </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[hsl(140,52%,32%)]">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        inital={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(0,0%,100%)]">Partner With US To Transform Agriculture</h2>
                        <p className="mt-4 text-[hsl(0,0%,100%)]/80 max-w-xl mx-auto">Join our mission to build sustainable food systems and empower farming communities worldwide.</p>

                        <Link 
                            to="/contact"
                            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-[hsl(0,0%,100%)] text-[hsl(142,52%,32%)] font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get In Touch <ArrowRight size={18}/>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero;