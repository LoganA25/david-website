import { Header } from "../../components/header";

export default function Videos() {
  return (
    <>
      <Header />
      <div className="bg-[#22333b] text-white">
        <div className="grid grid-cols-1 gap-12 top-1/2 -translate-y-1/2 text-xl fixed rounded-lg px-4 py-4 bg-black">
          <a href="#entertainment" className="flex justify-center items-center rounded-lg px-8 bg-black text-white border-2">Entertainment</a>
          <a href="#education" className="flex justify-center items-center rounded-lg px-8 bg-black text-white border-2">Education</a>
          <a href="#gaming" className="flex justify-center items-center rounded-lg px-8 bg-black text-white border-2">Gaming</a>
          <a href="#music" className="flex justify-center items-center rounded-lg px-8 bg-black text-white border-2">Music</a>
          <a href="#trailers" className="flex justify-center items-center rounded-lg px-8 bg-black text-white border-2">Trailers</a>
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-8 w-3/4 rounded text-white">
            <div id="entertainment" className="text-3xl font-bold text-center pb-6">Entertainment</div>
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
    </>
  );
}
