import HeroSection from "@/components/Main/HeroSection";

export default function Home() {
  return (
      <main>
          <HeroSection/>
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <h1 className="text-3xl">Welcome to portfolio website.</h1>
          <p>Website is currently being developed.</p>
        </div>
      </main>
  );
}
