import { Videos } from "@/components/Videos";
import { ContactForm } from "@/components/ContactForm";
import { Youtube } from "@/components/Youtube";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { RootLayout } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="start" className="relative h-screen">
        <video autoPlay loop muted className="fixed inset-0 w-full h-full object-cover z-0 brightness-50">
          <source src="/videos/landing_page.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          <RootLayout />
          <div className="text-white text-center">
            <div className="lg:pt-80 pt-32">
              <div className="pl-8 pr-8">
                <div className="pt-10 lg:max-w-6xl lg:text-lg mx-auto text-left text-sm bg-black rounded-lg p-8">
                  <div className="lg:text-2xl text-lg font-bold text-center pb-12">
                    Video Editor | Thumbnail Designer | Scriptwriter
                  </div>
                  I&apos;m David Wilson, a content creator with over 6 years of experience in video editing, thumbnail design, and scriptwriting. Throughout my career, I&apos;ve worked with successful YouTube channels like Chess Vibes and EWU Bodycam, helping them captivate their audiences with engaging content. Whether you need expertly edited videos, eye-catching thumbnails, or scripts that tell compelling stories, I can help bring your vision to life.
                  What I offer:
                  Video Editing: High-quality, seamless edits designed to keep viewers engaged and invested.
                  Thumbnail Design: Creative, click-worthy designs that stand out in a crowded space.
                  Scriptwriting: Engaging narratives for YouTube videos, video games, and more.
                  With my background in a variety of genres like gaming and true crime, I bring a well-rounded approach to every project. If you&apos;re looking for a professional with a proven track record to elevate your content, let&apos;s work together!
                </div>
              </div>
              <div className="lg:pt-64 pt-36">
                <Videos />
              </div>
              <div id="contact" className="text-3xl font-bold scroll-m-32 text-black pb-12 ">
                <ContactForm />
              </div>
              <div className="relative z-0">
                <ScrollToTop />
              </div>
              <div className="space-y-12">
                <Youtube />
                <div className="relative z-10">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
