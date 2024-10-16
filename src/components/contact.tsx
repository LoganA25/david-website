
export function Contact() {
    return (
        <div className="pt-56">
            <div className="p-4 mx-auto max-w-3xl rounded-lg ">
                <h1 className="text-3xl text-white text-center">Contact me</h1>
                <form className="mt-8 space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm" />
                    <textarea placeholder='Message' rows={6}
                        className="w-full rounded-md px-4 text-gray-800 bg-gray-100 text-sm pt-3"></textarea>
                    <button type='button'
                        className="text-black bg-white hover:text-white hover:bg-black tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
                </form>
            </div>
        </div>
    )
}
