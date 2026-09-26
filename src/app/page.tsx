import HeroSection from "@/components/Main/HeroSection/HeroSection";
import AboutSection from "@/components/Main/AboutSection/AboutSection";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <AboutSection/>
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1 className="text-3xl">Welcome to portfolio website.</h1>
          <p>Website is currently being developed.</p>
        </div>
      </main>
  );
}
