import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../Components/SectionHeading";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import bgImage from "../assets/images/image4.jpg";

const Contact = () => {
    const [ form, setForm] = useState({ name: "", email: "",  phone: "", organization: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Please fill in all required fields.");
            return;
        }
        toast.success("Message sent! We'll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", organization: "", message: ""});
    };


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
                            <h2 className="text-[hsl(0,0%,100%)] text-4xl md:text-5xl lg:text-7xl font-bold font-display">Contact Us</h2>
                            <p className="mt-4 text-[hsl(0,0%,100%)]/80 max-w-xl text-lg ">We would like to hear from you. Let's grow together.</p>
                    </motion.div>
                </div>
            </section>

            {/* Form section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                        <motion.div
                            initial= {{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeading title="Send Message" center= {false}/>
                            <form onClick={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[hsl(150,30%,12%)] mb-1.5">Name *</label>
                                        <input type="text" 
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[hsl(90,15%,88%)] bg-[hsl(90,20%,98%)] text-[hsl(150,30%,12%)] focus:outline-none focus:[hsl(142,52%,32%)]-2 focus:[hsl(142,52%,32%)]-[hsl(142,52%,32%)]"
                                            placeholder="Your name"
                                            maxLength={100}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[hsl(150,30%,12%)] mb-1.5">Email *</label>
                                        <input type="text" 
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[hsl(90,15%,88%)] bg-[hsl(90,20%,98%)] text-[hsl(150,30%,12%)] focus:outline-none focus:[hsl(142,52%,32%)]-2 focus:[hsl(142,52%,32%)]-[hsl(142,52%,32%)]"
                                            placeholder="Your email"
                                            maxLength={255}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[hsl(150,30%,12%)] mb-1.5">Phone *</label>
                                        <input type="text" 
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[hsl(90,15%,88%)] bg-[hsl(90,20%,98%)] text-[hsl(150,30%,12%)] focus:outline-none focus:[hsl(142,52%,32%)]-2 focus:[hsl(142,52%,32%)]-[hsl(142,52%,32%)]"
                                            placeholder="Your phone"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[hsl(150,30%,12%)] mb-1.5">Organization</label>
                                        <input type="text" 
                                            value={form.organization}
                                            onChange={(e) => setForm({ ...form, organization: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[hsl(90,15%,88%)] bg-[hsl(90,20%,98%)] text-[hsl(150,30%,12%)] focus:outline-none focus:[hsl(142,52%,32%)]-2 focus:[hsl(142,52%,32%)]-[hsl(142,52%,32%)]"
                                            placeholder="Your organization"
                                            maxLength={100}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[hsl(150,30%,12%)] mb-1.5">Message  *</label>
                                    <textarea type="text" 
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-[hsl(90,15%,88%)] bg-[hsl(90,20%,98%)] text-[hsl(150,30%,12%)] focus:outline-none focus:[hsl(142,52%,32%)]-2 focus:[hsl(142,52%,32%)]-[hsl(142,52%,32%)] resize-none"
                                        placeholder="Your Message"
                                        maxLength={1000}
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[hsl(142,52%,32%)] text-[hsl(0,0%,100%)] font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Send Message <Send size={18}/>
                                </button>
                            </form>
                        </motion.div>

                        {/* Info */}
                        <motion.div 
                            initial= {{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-[hsl(0,0%,100%)] border border-[hsl(90,15%,88%)]">
                                <h3 className="font-semibold font-display text-lg text-[hsl(150,30%,12%)] mb-4">Contact Information</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-[hsl(142,52%,32%)] mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <p className="font-medium text-[hsl(150,30%,12%)]">Office Address</p>
                                            <p className="text-sm text-[hsl(150,10%,45%)]">123 Upperhill, Nairobi, Kenya</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-[hsl(142,52%,32%)] mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <p className="font-medium text-[hsl(150,30%,12%)]">Phone</p>
                                            <p className="text-sm text-[hsl(150,10%,45%)]">+254-706-218-228</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-[hsl(142,52%,32%)] mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <p className="font-medium text-[hsl(150,30%,12%)]">Email</p>
                                            <p className="text-sm text-[hsl(150,10%,45%)]">info@planted.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Map */}
                            <div>
                                <iframe
                                    title="plantEd location"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=36.78%2C-1.29%2C36.82%2C-1.27&layer=mapnik"
                                    className="w-full h-full border-0"
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