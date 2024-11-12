import Image from "next/image";
import thumbnail_1 from "../images/thumbnails/thumbnail_1.jpg";
import thumbnail_2 from "../images/thumbnails/thumbnail_2.jpg";
import thumbnail_3 from "../images/thumbnails/thumbnail_3.jpg";
import thumbnail_4 from "../images/thumbnails/thumbnail_4.jpg";
import thumbnail_5 from "../images/thumbnails/thumbnail_5.jpg";
import thumbnail_6 from "../images/thumbnails/thumbnail_6.jpg";
import thumbnail_7 from "../images/thumbnails/thumbnail_7.jpg";
import thumbnail_8 from "../images/thumbnails/thumbnail_8.jpg";

export function Thumbnails() {
    return (
        <div className="text-white">
            <div className="flex items-center justify-center">
                <div className="pt-8 lg:w-3/4 w-11/12 rounded text-white">
                    <div>
                        <div id="thumbnails" className="px-4 py-4 text-3xl font-bold text-center bg-black rounded-t-lg lg:scroll-m-32 scroll-m-[900px]">Thumbnails</div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 bg-black rounded-b-lg px-4 py-4 text-center mb-24">
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_1}
                                    alt="Thumbnail 1"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_2}
                                    alt="Thumbnail 2"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_3}
                                    alt="Thumbnail 3"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_4}
                                    alt="Thumbnail 4"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_5}
                                    alt="Thumbnail 5"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_6}
                                    alt="Thumbnail 6"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_7}
                                    alt="Thumbnail 7"
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-full aspect-video rounded-lg border-8"
                                    src={thumbnail_8}
                                    alt="Thumbnail 8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
