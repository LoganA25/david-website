import { Header } from "../components/header";
import { Videos } from "../components/videos";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#22333b] h-screen text-white">
        <div className="text-3xl pt-6 font-bold text-center">Hello everyobody my name is Markiplier</div>
        <p className="pt-10 max-w-3xl mx-auto text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt molestias repudiandae rerum iste, dolore deleniti asperiores inventore et nam suscipit aliquam nemo illum delectus veniam! Non beatae asperiores laborum eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem eum distinctio enim aspernatur minus recusandae assumenda magni accusantium eos sint laborum repellat quis reprehenderit consequuntur praesentium, debitis beatae. Adipisci.</p> 
        <Videos />     
        <div className="flex justify-center pt-6">
          <Link href="/videos" className="bg-black text-white font-bold py-4 px-12 rounded-full">
            Checkout my Work!
          </Link>
        </div>
      </div>
    </>
  );
}
