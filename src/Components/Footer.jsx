import { Leaf, MapPin, Instagram, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <section className="bg-[hsl(150,30%,12%)] text-[hsl(90,20%,98%)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* plantED brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="h-6 w-6 text-[hsl(100,45%,45%)]"/>
                            <span className="text-xl font-display font-bold ">plantED</span>
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed">
                            Growing the future of sustainable agriculture through innovation, community empowerment, and smart farming solutions.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            {["Home", "About Us", "Services", "Projects", "Blog", "Partners", "Contact"].map((l) => (
                            <li key={l}>
                                <Link to={`${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                                    {l}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm opacity-70">
                            <li className="flex items-center gap-2"><MapPin size={16}/>123 Farm Road, Nairobi, Kenya</li>
                            <li className="flex items-center gap-2"><Phone size={16}/>+2547-06-218-228</li>
                            <li className="flex items-center gap-2"><Instagram size={16}/>Plantend Kenya</li>
                            <li className="flex items-center gap-2"><Mail size16/>info@planted.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">Newsletter</h4>
                        <p className="mb-2 text-sm opacity-70">Stay updated with the latest in sustainable agriculture</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Your Email"
                                className="flex-1 px-3 py-2 bg-[hsl(90,20%,98%)]/10 border border-[hsl(90,20%,98%)]/20 rounded-lg text-sm text-[hsl(90,20%,88%)] placeholder:text-[hsl(90,20%,88%)]/50 focus:outline-none focus:border-[hsl(100,45%,45%)]"
                            />
                            <button type="submit" className="px-4 py-2 bg-[hsl(142,52%,32%)] rounded-lg text-[hsl(0,0%,100%)] text-sm font-semibold hover:opacity-90 transition-opacity ">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-12 pt-8 border-t border-[hsl(90,20%,98%)]/10 text-sm opacity-50">
                    {new Date().getFullYear()} plantED. All rights preserved.
                </div>
            </div>
        </section>
    );
};


export default Footer; 