
export function Videos() {
    return (
        <div className="bg-[#22333b] text-white">
            <div className="flex items-center justify-center">
                <div className="pt-8 w-3/4 rounded text-white">
                    <div id="entertainment" className="text-3xl font-bold text-center pb-6 underline">Entertainment</div>
                    <div className="grid grid-cols-3 gap-4 bg-black rounded-lg px-4 py-4 text-center">
                        <div>
                            <iframe
                                className="w-full aspect-video rounded-lg border-8"
                                src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                            </iframe>
                            <p className="text-white mt-2">Video 1 Description</p>
                        </div>
                        <div>
                            <iframe
                                className="w-full aspect-video rounded-lg border-8"
                                src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                            </iframe>
                            <p className="text-white mt-2">Video 2 Description</p>
                        </div>
                        <div>
                            <iframe
                                className="w-full aspect-video rounded-lg border-8"
                                src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                            </iframe>
                            <p className="text-white mt-2">Video 3 Description</p>
                        </div>
                    </div>
                    <div id="education" className="text-3xl font-bold text-center pb-6">Education</div>
                    <div className="grid grid-cols-1 gap-4 bg-black rounded-lg px-4 py-4">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                    </div>
                    <div id="gaming" className="text-3xl font-bold text-center pb-6">Gaming</div>
                    <div className="grid grid-cols-1 gap-4 bg-black rounded-lg px-4 py-4">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                    </div>
                    <div id="music" className="text-3xl font-bold text-center pb-6">Music</div>
                    <div className="grid grid-cols-1 gap-4 bg-black rounded-lg px-4 py-4">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                    </div>
                    <div id="trailers" className="text-3xl font-bold text-center pb-6">Trailers</div>
                    <div className="grid grid-cols-1 gap-4 bg-black rounded-lg px-4 py-4">
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
