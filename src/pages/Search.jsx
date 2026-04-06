import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";

export default function Search() {
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero eyebrow="Class Project" title="Search Foods" />
      <section className="content"></section>
      <BottomNav />
    </PhoneFrame>
  );
}
