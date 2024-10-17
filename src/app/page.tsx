import { Header } from "../components/header";
import { Videos } from "../components/videos";
import { Contact } from "../components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <video autoPlay loop muted className="fixed inset-0 w-full h-full object-cover z-0 brightness-50">
          <source src="/videos/landing_page.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <Header />
          <div className="text-white text-center">
            <div id="home" className="text-3xl pt-6 font-bold scroll-m-32">
              Hello everybody, my name is Markiplier
            </div>
            <p className="pt-10 max-w-3xl mx-auto text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              molestias repudiandae rerum iste, dolore deleniti asperiores inventore
              et nam suscipit aliquam nemo illum delectus veniam! Non beatae asperiores
              laborum eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum exercitationem eum distinctio enim aspernatur minus recusandae
              assumenda magni accusantium eos sint laborum repellat quis reprehenderit
              consequuntur praesentium, debitis beatae. Adipisci.
            </p>
            <div className="pt-96">
              <Videos />
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
