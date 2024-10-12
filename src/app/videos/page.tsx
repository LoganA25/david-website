import { Header } from "../components/header";
export default function Videos() {
  return (
    <>
      <Header />
      <div className="text-3xl font-bold text-center">Videos</div>
      <div className="flex justify-center items-center w-screen">
        <div className="max-w-4xl mt-8 w-full rounded overflow-hidden bg-white text-black">
          <div className="flex flex-grow space-x-4 h-96 aspect-video">
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF"
              width="100%"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF"
              width="100%"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF"
              width="100%"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
