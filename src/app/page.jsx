import Image from "next/image";
import Hero from "./(HomePage)/Hero";
import WhyChooseUs from "./(HomePage)/WhyChoiceUs";
import VideoDownloader from "./(HomePage)/VideoDownloader";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <VideoDownloader />
    </>
  );
}
