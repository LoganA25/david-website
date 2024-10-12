import { Header } from "../../components/header";

export default function Videos() {
  return (
    <>
      <Header />
      <div className="bg-[#f5f5f5] text-black">
        <div className="flex items-center justify-center">
          <div className="pt-8 w-3/4 rounded text-black">
            <div className="flex justify-center items-center underline space-x-4 pb-7 text-xl">
              <a href="#entertainment">Entertainment</a>
              <a href="#education">Education</a>
              <a href="#gaming">Gaming</a>
              <a href="#music">Music</a>
              <a href="#trailers">Trailers</a>
            </div>
            <div id="entertainment" className="text-3xl font-bold text-center">Entertainment</div>
            <div className="pt-6 pb-12 grid grid-cols-2 gap-4">
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
            <div id="education" className="text-3xl font-bold text-center">Education</div>
            <div className="pt-6 pb-12 grid grid-cols-2 gap-4">
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
            <div id="gaming" className="text-3xl font-bold text-center">Gaming</div>
            <div className="pt-6 pb-12 grid grid-cols-2 gap-4">
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
            <div id="music" className="text-3xl font-bold text-center">Music</div>
            <div className="pt-6 pb-12 grid grid-cols-2 gap-4">
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
            <div id="trailers" className="text-3xl font-bold text-center">Trailers</div>
            <div className="pt-6 pb-12 grid grid-cols-2 gap-4">
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
    </>
  );
}
