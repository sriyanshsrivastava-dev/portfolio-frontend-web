import HeroVisual from "@/components/Main/HeroSection/HeroVisual";
import HeroContent from "@/components/Main/HeroSection/HeroContent";

const HeroSection = () => {
    return (
        <section className="min-h-screen p-4 md:px-24 pt-24 w-full flex flex-col">
            <div className="flex-1 w-full p-8 pt-24 md:pt-0 flex flex-col md:flex-row gap-36 md:gap-24 justify-start md:justify-around items-center">
                <HeroContent/>
                <HeroVisual/>
            </div>
        </section>
    )
}

export default HeroSection