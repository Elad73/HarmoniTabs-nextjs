import Hero from "@/components/heros";
import artistsImg from "public/images/artists.png"

export default function ArtistsPage() {
  return (
    <div>
      <Hero
        imgData={artistsImg}
        imgAlt="An artist plays the Harmonica."
        title="Artists page" />
    </div>
  );
}
  