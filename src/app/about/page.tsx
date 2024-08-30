import Hero from "@/components/heros";
import aboutImg from "public/images/about.png"

export default function AboutPage() {
  return (
    <div>
      <Hero
        imgData={aboutImg}
        imgAlt="Harmonica player"
        title="About page" />
    </div>
  );
}
  