import Hero from "@/components/heros";
import tabsImg from "public/images/tabs2.png"

export default function TabsPage() {
  return (
    <div>
      <Hero
        imgData={tabsImg}
        imgAlt="Harmonica tabs."
        title="Tabs page" />
    </div>
  );
}
  