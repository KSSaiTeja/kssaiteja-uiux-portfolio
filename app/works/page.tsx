import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function WorksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f8f6f3] font-sans">
      <header className="w-full flex justify-center py-6">
        <Header />
      </header>
      <main className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center pt-20 pb-20">
          <Works />
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
