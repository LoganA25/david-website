'use client'

import Link from "next/link";
import Image from "next/image";
import channel_logo from "../images/channel_logo.png";
import { useState } from 'react'

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center flex-wrap bg-black p-3 text-black sticky top-0">
            <Link href="/" className="flex justify-center items-center ">
                <Image
                    className="h-20 w-20"
                    src={channel_logo}
                    alt="Picture of the author"
                />
                <span className="lg:flex font-semibold text-4xl text-white">Cytech</span>
            </Link>
            <div className="flex-grow flex justify-end">
                <div className="hidden text-md lg:flex justify-between space-x-10 text-[#f5f5f5] text-lg">
                    {/* <a href="#start" className="">
                        Start
                    </a> */}
                    <a href="#entertainment">
                        Entertainment
                    </a>
                    <a href="#education" className="block mt-4 lg:inline-block lg:mt-0">
                        Education
                    </a>
                    <a href="#gaming" className="block mt-4 lg:inline-block lg:mt-0">
                        Gaming
                    </a>
                    <a href="#music" className="block mt-4 lg:inline-block lg:mt-0">
                        Music
                    </a>
                    <a href="#trailers" className="block mt-4 lg:inline-block lg:mt-0">
                        Trailers
                    </a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0">
                        Contact
                    </a>
                </div>
            </div>

            <div className="relative mx-auto lg:hidden">
                <nav>
                    <button
                        className="text-white p-8 relative focus:outline-none"
                        onClick={() => setOpen(!open)}
                        // style={{
                        //     position: "absolute",
                        //     top: "-4.5rem",
                        //     right: "1rem",
                        // }}
                    >
                        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'
                                    }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''
                                    }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'
                                    }`}
                            ></span>
                        </div>
                    </button>
                    {open && (
                        <div className="w-screen bg-black text-white">
                            <ul className="space-y-2 text-lg">
                                <li>
                                    <a href="#" className="block px-4 py-2 border-b">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 border-b">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 border-b">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 border-b">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </nav>
    )
}


