import { motion } from "framer-motion";

const SectionHeading = ({ label, title, description, center }) =>
{
    return (
        <motion.div
            initial= {{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${center ? "" : "text-center"}`}
        >
            { label && <p className="inline-block px-4 py-1 rounded-full bg-[hsl(142,52%,32%)]/10 text-[hsl(142,52%,32%)] text-sm font-semibold mb-4">{label}</p>}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[hsl(150,30%,12%)]">{title}</h2>
            {description && <p className="mt-4 text-[hsl(150,10%,45%)] max-w-2xl mx-auto leading-relaxed">{description}</p>}
        </motion.div>
    );
};
export default SectionHeading;