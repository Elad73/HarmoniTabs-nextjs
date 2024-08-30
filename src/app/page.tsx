import Hero from "@/components/heros";
import homeImg from "public/images/home2.png"


export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="Harmonica band playing on stage"
        title="Home page" />
    </div>
  );
}
