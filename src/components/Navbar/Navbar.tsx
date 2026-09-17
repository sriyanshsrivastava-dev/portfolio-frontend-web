'use client';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import { useState } from 'react';

const GLASS_BASE =
    "bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-lg";

const GLASS_HOVER =
    "transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/30 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="flex fixed top-4 h-16 w-full bg-transparent justify-between px-10 z-50">

                {/* Logo Container */}
                <div className={`h-full flex items-center px-8 rounded-full ${GLASS_BASE}`}>
                    <span className="text-2xl font-black">Portfolio.</span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className={`flex md:hidden h-full items-center p-4 rounded-full ${GLASS_BASE} ${GLASS_HOVER}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {!isOpen?(<Menu size={24} strokeWidth={2.5} />):(<X size={24} />)}

                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex h-full">
                    <ul className={`flex gap-5 items-center h-full px-10 rounded-full ${GLASS_BASE}`}>
                        <li>
                            <Link
                                href="/"
                                className="text-xl inline-block transition-transform duration-200 hover:scale-110"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className="text-xl inline-block transition-transform duration-200 hover:scale-110"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/projects"
                                className="text-xl inline-block transition-transform duration-200 hover:scale-110"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="text-xl inline-block transition-transform duration-200 hover:scale-110"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="fixed top-24 left-4 right-8 md:hidden z-50 animate-in fade-in slide-in-from-top-5 duration-200 w-1/2 ml-auto ">
                    <ul className={`flex flex-col gap-4 p-6 w-full rounded-2xl ${GLASS_BASE}`}>

                        <li>
                            <Link
                                href="/"
                                onClick={toggleMenu}
                                className="text-xl block py-2 px-4 hover:bg-white/10 dark:hover:bg-black/20 rounded-xl transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                onClick={toggleMenu}
                                className="text-xl block py-2 px-4 hover:bg-white/10 dark:hover:bg-black/20 rounded-xl transition-colors"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/projects"
                                onClick={toggleMenu}
                                className="text-xl block py-2 px-4 hover:bg-white/10 dark:hover:bg-black/20 rounded-xl transition-colors"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                onClick={toggleMenu}
                                className="text-xl block py-2 px-4 hover:bg-white/10 dark:hover:bg-black/20 rounded-xl transition-colors"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </>
    );
}
