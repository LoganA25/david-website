'use client';

import {
    createContext,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import Image from "next/image";
import channel_logo from "../images/channel_logo.png";

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { div } from 'framer-motion/client'
// import { Offices } from '@/components/Offices'

const RootLayoutContext = createContext<{
    logoHovered: boolean
    setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
        </svg>
    )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z" />
        </svg>
    )
}

function Header({
    panelId,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
    invert = false,
}: {
    panelId: string
    icon: React.ComponentType<{ className?: string }>
    expanded: boolean
    onToggle: () => void
    toggleRef: React.RefObject<HTMLButtonElement>
    invert?: boolean
}) {

    return (
        <header className="sticky top-0 z-10">
            <div className="flex items-center bg-black p-3 text-black">
                <Link href="/" className="flex justify-center items-center ">
                    <Image
                        className="h-20 w-20"
                        src={channel_logo}
                        alt="Picture of the Cytech channel logo"
                    />
                    <span className="lg:flex font-semibold text-4xl text-white">Cytech</span>
                </Link>
                <div className="flex-grow flex justify-end">
                    <div className="hidden text-md lg:flex justify-between space-x-10 text-[#f5f5f5] text-lg">
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
                <div className="flex items-center justify-between lg:hidden">
                    <div className="flex items-center sm:gap-x-8 pr-4">
                        <button
                            ref={toggleRef}
                            type="button"
                            onClick={onToggle}
                            aria-expanded={expanded ? 'true' : 'false'}
                            aria-controls={panelId}
                            className={clsx(
                                'flexgroup -m-2.5 rounded-full p-2.5 transition',
                                invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
                            )}
                            aria-label="Toggle navigation"
                        >
                            <Icon
                                className={clsx(
                                    'h-6 w-6 fill-white',
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="even:mt-px sm:bg-neutral-950">
            <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
        </div>
    )
}

function NavigationItem({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="group relative flex-mx-6 bg-black px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:pl-16"
        >
            {children}
            <span className="absolute inset-y-0 -z-10 w-screen bg-white opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
        </Link>
    )
}

function Navigation({
    expanded
}: {
    expanded: boolean
}) {
    return (
        <nav className="mt-px font-display text-3xl font-medium tracking-tight text-white pl-4">
            <NavigationRow>
                <NavigationItem href="#entertainment" aria-expanded={expanded ? 'true' : 'false'}>Entertainment</NavigationItem>
                <NavigationItem href="#education" aria-expanded={expanded ? 'true' : 'false'}>Education</NavigationItem>
                <NavigationItem href="#gaming" aria-expanded={expanded ? 'true' : 'false'}>Gaming</NavigationItem>
                <NavigationItem href="#music" aria-expanded={expanded ? 'true' : 'false'}>Music</NavigationItem>
                <NavigationItem href="#trailers" aria-expanded={expanded ? 'true' : 'false'}>Trailers</NavigationItem>
                <NavigationItem href="#contact" aria-expanded={expanded ? 'true' : 'false'}>Contact</NavigationItem>
            </NavigationRow>
        </nav>
    )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let openRef = useRef<React.ElementRef<'button'>>(null)
    let closeRef = useRef<React.ElementRef<'button'>>(null)
    let navRef = useRef<React.ElementRef<'div'>>(null)
    let shouldReduceMotion = useReducedMotion()

    // Disables scrolling when mobile menu is open
    useEffect(() => {
        if (expanded) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [expanded])

    useEffect(() => {
        function onClick(event: MouseEvent) {
            if (event.target instanceof HTMLElement) {
                const targetLink = event.target.closest('a');
                if (targetLink) {
                    setExpanded(false);
                }
            }
        }

        window.addEventListener('click', onClick)

        return () => {
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
            <header className="sticky top-0 z-10">
                <div
                    className="absolute left-0 right-0 z-10"
                    aria-hidden={expanded ? 'true' : undefined}
                    // @ts-ignore (https://github.com/facebook/react/issues/17157)
                    inert={expanded ? '' : undefined}
                >
                    <Header
                        panelId={panelId}
                        icon={MenuIcon}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded)
                            window.setTimeout(
                                () => closeRef.current?.focus({ preventScroll: true }),
                            )
                        }}
                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{ height: expanded ? 'auto' : '0' }}
                    className="relative z-50 overflow-hidden bg-black lg:hidden"
                    aria-hidden={expanded ? undefined : 'true'}
                    initial={{ height: 0 }}
                    animate={{ height: expanded ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }} // Adjust duration for smoothness
                >
                    <motion.div layout className="bg-black">
                        <div ref={navRef} className="bg-black">
                            <Header
                                invert
                                panelId={panelId}
                                icon={XIcon}
                                toggleRef={closeRef}
                                expanded={expanded}
                                onToggle={() => {
                                    setExpanded((expanded) => !expanded)
                                    window.setTimeout(
                                        () => openRef.current?.focus({ preventScroll: true }),
                                    )
                                }}
                            />
                        </div>
                        <Navigation expanded={expanded} />
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
            >
                <motion.div
                    layout
                    className="relative isolate flex w-full flex-col pt-9"
                >
                    <main className="w-full flex-auto">{children}</main>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
    let pathname = usePathname()
    let [logoHovered, setLogoHovered] = useState(false)

    return (
        <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
            <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    )
}
