import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SneakPeak from "@/components/SneakPeak";
import DesignInAction from "@/components/DesignInAction";
import Ability from "@/components/Ability";
import BehindTheCanvas from "@/components/BehindTheCanvas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f8f6f3] font-sans">
      <header className="w-full flex justify-center py-6">
        <Header />
      </header>
      <main className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center pt-16 pb-20 px-4">
          <Hero />
        </div>
        <div className="w-full flex flex-col items-center pt-20 pb-20 overflow-x-clip">
          <SneakPeak />
        </div>
        <div className="w-full flex flex-col items-center pt-20 pb-20">
          <DesignInAction />
        </div>
        <div className="w-full flex flex-col items-center pt-20 pb-20">
          <Ability />
        </div>
        <div className="w-full flex flex-col items-center pt-20 pb-20">
          <BehindTheCanvas />
        </div>
        <div className="w-full flex flex-col items-center pt-20 pb-20">
          <Contact />
        </div>
      </main>
      <footer className="w-full flex justify-center py-8">
        <Footer />
      </footer>
    </div>
  );
}
