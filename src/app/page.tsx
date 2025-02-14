import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobNavbar from "@/components/MobNavbar";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <NewProducts />
      <Testimonials />
      <MobNavbar />
      <Footer />
    </main>
  );
}
