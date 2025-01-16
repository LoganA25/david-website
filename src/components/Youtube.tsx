import { FaYoutube } from 'react-icons/fa'

export function Youtube() {
    return (
        <>
            <a href="https://www.youtube.com/@cytechflow6273" className="inline-flex rounded-full px-4 space-x-4 text-lg font-semibold transition bg-black justify-center items-center hover:text-black hover:bg-white">
                <FaYoutube className="text-red-600 text-8xl"/>
                <p>Checkout my channel!</p>
            </a>
        </>
    )
}