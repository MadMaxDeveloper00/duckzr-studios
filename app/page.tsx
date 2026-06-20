import Header from "@/components/layout/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import Games from "@/components/sections/Games";
import Careers from "@/components/sections/Careers";
import News from "@/components/sections/News";
import Launcher from "@/components/sections/Launcher";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>

      <Header />

      <HeroCarousel />

      <Games />

      <Careers />

      <News />

      <Launcher />

      <Footer />

    </main>
  );
}