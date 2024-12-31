import ItemCardHome from "./_components/ItemCardHome";
import HeroCardHome from "./_components/HeroCardHome";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <section className=" container mx-auto xl:mt-12">
      <HeroSection />
      <ItemCardHome />
      <HeroCardHome />
    </section>
  );
}
