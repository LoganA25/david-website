import Link from "next/link";
import Image from "next/image";
import channel_logo from "../images/channel_logo.png";

export function Header() {
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
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0">
                        Home
                    </Link>
                    <Link href="videos" className="block mt-4 lg:inline-block lg:mt-0">
                        Videos
                    </Link>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
                        Thumbnails
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}


