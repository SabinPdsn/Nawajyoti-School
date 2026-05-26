import {
  HomeHero,
  HomeAbout,
  HomeMissionVision,
  HomeWhyUs,
  HomeTestimonials,
  HomeGallery,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeMissionVision />
      <HomeWhyUs />
      <HomeGallery />
      <HomeTestimonials />
    </main>
  );
}
