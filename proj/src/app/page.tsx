
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Featured } from "@/components/sections/Featured";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { History } from "@/components/sections/History";
import { Location } from "@/components/sections/Location";
import { Menu } from "@/components/sections/Menu";
import { Order } from "@/components/sections/Order";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <History />
        <Featured />
        <Gallery />
        <Menu />
        <Reviews />
        <Order />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
