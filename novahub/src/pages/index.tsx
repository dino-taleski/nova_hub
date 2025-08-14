import AboutUs from "@/components/about/AboutUs";
import Contact from "@/components/contact/Contact";
import Cta from "@/components/cta/Cta";
import GetInvolved from "@/components/getinvolved/GetInvolved";
import Hero from "@/components/hero/Hero";
import BecomeAPartner from "@/components/partner/BecomeAPartner";
import Team from "@/components/team/Team";
import VisionAndGoals from "@/components/visionandgoals/VisionAndGoals";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <AboutUs />
                <Cta />
                <VisionAndGoals />
                <Team />
                <GetInvolved />
                <BecomeAPartner />
                <Contact />
            </main>
        </>
    );
}
