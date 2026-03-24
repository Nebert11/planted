import { motion } from "framer-motion";
import bgImage from "../assets/images/avocado1.jpeg";
import SectionHeading from "../Components/SectionHeading";
import { Sprout, BarChart3, Cpu, GraduationCap, Leaf, Globe } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
    { icon: Sprout, title: "Sustainable Farming Solutions", desc: " We implement regenerative agriculture practices that restore soil health, conserve water, and increase biodiversity while maintaining profitable yields.", features:["Soil health restoration", "Organic farming transition", "Water conservation systems", "Biodiversity management"]},
    { icon: Cpu, title: "Agricultural Technology Integration", desc: "Leverage IoT sensors, drones, and data analytics to make informed decisions about crop management, irrigation, and pest control.", features:["IoT sensor networks", "Drone crop monitoring", "Predictive analysis", "Automotive Irrigation"]},
    { icon: BarChart3, title: "Farm Operations Management", desc: "End-to-end management solutions covering planning, execution, monitoring, and optimization of all farm activities.", features:["Production Farming", "Resource Management", "Supply chain optimization", "Financial tracking"]},
    { icon: Leaf, title: "Crop Advisory & Consultancy", desc: "Expert agronomists provide personalized guidance on crop selection, nutrient management, disease prevention, and harvest optimization.", features:["Crop selection guidance", "Nutrient management", "Disease prevention", "Harvest optimization"]},
    { icon: GraduationCap, title: "Agricultural Training Programs", desc: "Comprehensive capacity-building programs designed to equip farmers with modern skills and best practices.", features:["Hands-on workshops", "Digital leteracy", "Business skills", "Climate-smart techniques"]},
    { icon: Globe, title: "Market Access & Value Chain Support", desc: "Connecting farmers to local and international markets while building efficient value chains from farm to fork.", features:["Market linkages", "Quality standards", "Post harvest handling", "Export facilitation"]}
]

const Services = () => {
    return(
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
                        <h2 className="text-[hsl(0,0%,100%)] text-4xl md:text-5xl lg:text-7xl font-bold font-display">Our Services</h2>
                        <p className="mt-4 text-[hsl(0,0%,100%)]/80 max-w-xl text-lg ">Comprehensive agricultural solutions tailored to your needs.</p>
                    </motion.div>
                </div>
            </section>

            {/* What we offer */} 
            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="What We Offer"
                        title= "End-to-End Agricultural Solutions"
                        description= "From consulting and technology to traing and market access, we cover every aspect of modern farming."
                    />
                    <div className="space-y-8">
                        {solutions.map((s, i) => (
                            <motion.div
                                key={ s.title }
                                inital= {{ opacity: 0, y: 20 }}
                                whileInview= {{ opacity: 1, y: 0 }}
                                viewport= {{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="grid md:grid-cols-[auto_1fr] gap-6 p-6 md:p-8 rounded-2xl transition-all duration-300 bg-[hsl(0,0%,100%)] border border-[hsl(90,30%,88%)]"
                            >
                                <div className="w-16 h-16 bg-[hsl(142,52%,32%)]/10 items-center justify-center rounded-2xl flex flex-shrink-0">
                                    <s.icon className="w-6 h-6 text-[hsl(142,52%,32%)]"/>
                                </div>
                                <div>
                                    <h2 className="text-xl font-display font-bold ">{s.title}</h2>
                                    <p className="mt-2 text-[hsl(150,10%,45%)] leading-relaxed">{s.desc}</p>
                                    <ul className="mt-4 grid grid-cols-2 gap-2">
                                        {s.features.map((f) => (
                                            <li key={f} className="flex gap-2 items-center text-[hsl(150,10%,45%)] text-sm">
                                                <Leaf className="w-3 h-3 text-[hsl(142,52%,32%)] flex-shrink-0"/>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                            </motion.div>
                        ))}
                        
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[hsl(142_52%_32%)] to-[hsl(100_45%_45%)] ">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl lg:text-4xl text-[hsl(0,0%,100%)] font-display font-bold">Ready to Get Started?</h1>
                    <p className="mt-2 text-[hsl(0,0%,100%)]/80 text-sm max-w-7xl mx-auto">Let's discuss how our solutions can transform your agricultural operations.</p>
                    <Link to="/contact" className="mt-8 inline-flex bg-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full text-[hsl(142,53%,32%)] items-center font-semibold hover:opacity-90 transition-opacity">
                        Contact Us <ArrowRight size={18}/>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Services;