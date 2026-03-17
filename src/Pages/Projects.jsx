import bgImage from "../assets/images/farm2.jpeg";
import { motion } from "framer-motion"
import SectionHeading from "../Components/SectionHeading";
import {Link} from "react-router-dom";
import { MapPin, ArrowRight, TrendingUp } from "lucide-react";
import avocadoImage from "../assets/images/avocado.png";
import avocadoTrees from "../assets/images/avocado1.jpeg";
import teaFarm from "../assets/images/tea.png";

const projects = [
    {
        title: "Mutara Orchards Avocado Development",
        location: "Mutara, Laikipia, Kenya",
        image: avocadoImage,
        impact: "100% adoption of structured orchard spacing (6x4) across the new planting blocks.",
        desc: "The orchard was planted with Hass and Fuerte varieties at optimized spacing (6x4) with Napier windbreaks, forming part of a vertically integrated avocado production and processing project.",
        results: ["2 years to first fruit production, demonstrating strong early orchard establishment.", "6x4 meter tree spacing implemented, enabling efficient orchard management and yield potential.", "2 avocado varieties introduced (Hass and Fuerte) to diversify production.", "1 integrated processing facility planned, supporting future avocado oil production."]
    },
    {
        title: "Chemusot Tea Estates Avocado Conversion",
        location: "Chemusot, Kenya",
        image: teaFarm,
        impact: "40% of the planned orchad already established, accelerating the transition from tea to high-value avocado farming.",
        desc: "PlantED implemented a greenfield conversion project transforming tea plantations into a modern avocado orchad.",
        results: ["32 hectares of avocado orchards planted, forming the first phase of the development.","80 hectares targeted for total orchard development, expanding the scale of production.", "1 full orchard conversion project underway, transitioning land use from tea to avocado.", "2027 target completion year, marking the expected full establishment of the farm."]
    },
    {
        title: "Souk Farms Avocado Development",
        location: "Kigali & Southern Rwanda",
        image: avocadoTrees,
        impact: "100% technical assessment of site conditions, improving orchard design and disease prevention measures.",
        desc: "PlantED provided technical consultancy for Souk Farms focusing on orchard planning, irrigation design, soil and drainage analysis, and disease prevention strategies to support large-scale avocado production.",
        results: ["2 key production regions assessed (Kigali and Southern Rwanda) for orchard suitability.", "20 litres irrigation per tree recommended twice weekly, improving water management.",  "1 drainage improvement strategy implemented, reducing water-logging risk.", "Raised mound planting method introduced, improving root health and disease resistance."]
    }
]

const Projects = () => {
    return (
        <div className="overlow-hidden">
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
                        <h2 className="text-[hsl(0,0%,100%)] text-4xl md:text-5xl lg:text-7xl font-bold font-display">Our Projects</h2>
                        <p className="mt-4 text-[hsl(0,0%,100%)]/80 max-w-xl text-lg ">Real impact in real communities across the region.</p>
                    </motion.div>
                </div>
            </section>

            {/* impact stories */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Impact Stories"
                        title="Transforming Communities"
                        description= "Explore how our projects are making differences in farming communities."
                    />
                    <div className="space-y-16">
                        {projects.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial= {{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:direction-rtl" : "" }`}
                            >
                                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                                    <img src={p.image} alt="" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"/>
                                </div>
                                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                                    <div className="flex items-center gap-2 text-sm text-[hsl(150,10%,45%)] mb-2">
                                        <MapPin size={14}/> {p.location}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-[hsl(150,30%,12%)]">{p.title}</h3>
                                    <div className="flex items-center gap-2 mt-2 text-[hsl(142,52%,32%)] font-semibold text-sm">
                                        <TrendingUp size={16}/> {p.impact}
                                    </div>
                                    <p className="mt-4 text-[hsl(150,10%,45%)] leading-relaxed">{p.desc}</p>
                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        {p.results.map((r) => (
                                            <div key={r} className="px-3 py-2 rounded-lg bg-[hsl(90,30%,94%)] text-sm text-[hsl(150,30%,18%)] font-medium">
                                                {r}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[hsl(142_52%_32%)] to-[hsl(100_45%_45%)] ">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl lg:text-4xl text-[hsl(0,0%,100%)] font-display font-bold">Want To Create Impact Together?</h1>
                    <Link to="/contact" className="mt-8 inline-flex bg-[hsl(0,0%,100%)] px-8 py-3.5 rounded-full text-[hsl(142,53%,32%)] items-center font-semibold hover:opacity-90 transition-opacity">
                        Partner With Us <ArrowRight size={18}/>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Projects;