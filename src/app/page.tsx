import { Header } from "../components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#22333b] h-screen text-white">
        <div className="text-3xl pt-6 font-bold text-center">Hello everyobody my name is Markiplier</div>
        <p className="pt-10 max-w-3xl mx-auto text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt molestias repudiandae rerum iste, dolore deleniti asperiores inventore et nam suscipit aliquam nemo illum delectus veniam! Non beatae asperiores laborum eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem eum distinctio enim aspernatur minus recusandae assumenda magni accusantium eos sint laborum repellat quis reprehenderit consequuntur praesentium, debitis beatae. Adipisci.</p>
        <div className="text-3xl font-bold text-center"></div>
        <div className="flex justify-center items-center w-screen">
          <div className="max-w-4xl pt-8 w-full rounded overflow-hidden">
            <div className='aspect-video'>
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/i5drPn_tsd0?si=Bg0QUkpAcncE7bSF">
              </iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <Link href="/videos" className="bg-black text-white font-bold py-4 px-12 rounded-full">
            Checkout my Work!
          </Link>
        </div>
      </div>
    </>
  );
}
