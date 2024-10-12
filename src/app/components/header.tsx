import Link from "next/link";
export function Header() {
    return (
        <nav className="flex items-center flex-wrap bg-gray-800 p-6">
            <div className="absolute flex items-center flex-shrink-0 text-white">
                <span className="lg:flex font-semibold text-xl tracking-tight">Cytech</span>
            </div>
            <div className="flex-grow flex justify-center">
                <div className="hidden text-md lg:flex justify-between space-x-10">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Home
                    </Link>
                    <Link href="videos" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Videos
                    </Link>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Contact
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        About Me
                    </a>
                </div>
            </div>
        </nav>

    )
}


