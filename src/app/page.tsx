import Image from "next/image";
import homeImg from "public/images/harmonica-band.png"


export default function Home() {
  return (
    <div>
      <h1>home page</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="Harmonica band playing on stage"
          fill
          style={{ objectFit: 'cover' }}
          />
      </div>
    </div>

  );
}
