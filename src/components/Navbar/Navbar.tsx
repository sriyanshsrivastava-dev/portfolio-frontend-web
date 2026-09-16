import Link from 'next/link';
import { Menu } from 'lucide-react';

const GLASS_BASE = "bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg rounded-full";

const GLASS_HOVER = "transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/30 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer";

export default function Navbar() {
    return (
        <nav className="flex fixed top-4 h-16 w-full bg-transparent justify-between px-10 z-50">

            {/* Logo Container */}
            <div className={`h-full flex items-center px-8 ${GLASS_BASE}`}>
                <span className="text-2xl font-black">Portfolio.</span>
            </div>

            {/* Mobile Menu Button */}
            <div className={`flex sm:hidden h-full items-center p-4 ${GLASS_BASE} ${GLASS_HOVER}`}>
                <Menu size={24} strokeWidth={2.5}/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex h-full">
                <ul className={`flex gap-5 items-center h-full px-10 ${GLASS_BASE}`}>
                    <li>
                        <Link href="/" className="text-xl inline-block transition-transform duration-200 hover:scale-110">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-xl inline-block transition-transform duration-200 hover:scale-110">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-xl inline-block transition-transform duration-200 hover:scale-110">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-xl inline-block transition-transform duration-200 hover:scale-110">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}