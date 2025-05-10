import AboutUs from "@/components/about/AboutUs";
import Cta from "@/components/cta/Cta";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Team from "@/components/team/Team";
import VisionAndGoals from "@/components/visionandgoals/VisionAndGoals";

export default function Home() {
    return (
        <>
            <main>
                <Header />
                <Hero />
                <AboutUs />
                <Cta />
                <VisionAndGoals />
                <Team />
            </main>
        </>
    );
}
