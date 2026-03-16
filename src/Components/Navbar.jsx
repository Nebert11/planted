import logo from "../assets/images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
]

const Navbar = () => {
    const [ scrolled, setScrolled ] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location=useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect (() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(90,20%,98%)] backdrop-blur-md border-b border-[hsl(90,15%,88%)]">
            <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 text-xl mt-2">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="" className="h-16 w-18 object-contain" />
                    <span className="text-xl font-display font-bold text-[hsl()]">plantED</span>
                </Link>

                <div className="hidden lg:flex items-center mx-auto justify-between gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded-md font-bold text-sm font-medium transition-colors)]
                                ${
                                    location.pathname === link.path
                                    ?
                                    "bg-[hsl(142,98%,23%)]/10 text-[hsl(142,98%,23%)]"
                                    :
                                    "text-[hsl(150,10%,45%)] hover:text-[hsl(150,30%,12%)] hover:bg-[hsl(90,30%,94%)] "
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                {/* CTA */}
                <Link to="/contact" 
                    className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[hsl(142,52%,32%)] text-[hsl(0,0%,100%)] text-sm font-semibold hover:opacity-90 transition-opacity ">
                    Get In touch
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text p-2 text-[hsl(150,30%,12%)] ">
                    {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height:"auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[hsl(90,20%,98%)] border-b border-[hsl(90,15%,88%)] overflow-hidden "
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    to={link.path}
                                    key={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                        location.pathname === link.path
                                        ? "bg-[hsl(142,52%,32%)]/10 text-[hsl(142,52%,32%)]"
                                        : "text-[hsl(150,10%,45%)] hover:text-[hsl(150,30%,12%)]"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block mt-3 text-center px-5 py-2 rounded-full bg-[hsl(142,52%,32%)] text-[hsl(0,0%,100%)] text-sm font-semibold"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;