import { FaYoutube, FaInstagram } from 'react-icons/fa'

export function Footer() {
    return (
        <>
            <nav className="flex items-center justify-end bg-black p-6 text-white">
                <div className="flex items-center rounded-lg justify-between ">
                    {/* <a href="https://www.youtube.com/@cytechflow6273"  className="text-white text-2xl hover:text-red-500">
                        <FaYoutube />
                    </a> */}
                    <a href='#start'> © Cytech {new Date().getFullYear()} </a>
                </div>
            </nav>
        </>
    )
}