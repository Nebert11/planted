import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../Components/SectionHeading";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import bgImage from "../assets/images/nurseries.png";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            organization: form.organization,
            message: form.message,
        };

        emailjs
            .send(
                "service_hcfdrvp",   
                "template_v1tby3l",  
                templateParams,
                "ntlMGLxV3PE4BHcM9"   
            )
            .then(() => {
                toast.success("Message sent successfully!");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send message. Try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <img src={bgImage} className="absolute inset-0 object-cover h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142_52%_32%/0.9)] via-[hsl(142_52%_32%/0.7)] to-[hsl(30_35%_30%/0.6)]" />
                <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold font-display">
                            Contact Us
                        </h2>
                        <p className="mt-4 text-white/80 max-w-xl text-lg">
                            We would like to hear from you. Let's grow together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeading title="Send Message" center={false} />

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Your name *"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="input"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Your email *"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="input"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Your phone"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="input"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Your organization"
                                        value={form.organization}
                                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                                        className="input"
                                    />
                                </div>

                                <textarea
                                    rows={5}
                                    placeholder="Your message *"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="input resize-none"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[hsl(142,52%,32%)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-white border">
                                <h3 className="font-semibold text-lg mb-4">
                                    Contact Information
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-green-700 mt-1" />
                                        <p>123 Upperhill, Nairobi, Kenya</p>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-green-700 mt-1" />
                                        <p>+254-706-218-228</p>
                                    </li>

                                    <li className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-green-700 mt-1" />
                                        <a href="mailto:ed@planted.co.ke" className="hover:underline">
                                            ed@planted.co.ke
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <iframe
                                    title="plantEd location"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=36.78%2C-1.29%2C36.82%2C-1.27&layer=mapnik"
                                    className="w-full h-64 border-0 rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;