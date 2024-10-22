import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
    return (
        <>
            <a href="#start" className="fixed sm:bottom-24 sm:padding-2 sm:right-24 lg:bottom-4 lg:right-6 p-4 bg-black text-white rounded-full hover:bg-white hover:text-black text-2xl">
                <FaArrowUp />
            </a>
        </>
    );
}