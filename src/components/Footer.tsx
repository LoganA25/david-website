
export function Footer() {
    return (
        <>
            <nav className="flex items-center justify-end bg-black p-6 text-white w-screen">
                <div className="flex items-center rounded-lg justify-between">
                    <a href='#start'> © Cytech {new Date().getFullYear()} </a>
                </div>
            </nav>
        </>
    )
}