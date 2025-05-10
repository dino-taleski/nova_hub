import AboutUs from "@/components/about/AboutUs";
import Contact from "@/components/contact/Contact";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import GetInvolved from "@/components/getinvolved/GetInvolved";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import BecomeAPartner from "@/components/partner/BecomeAPartner";
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
                <GetInvolved />
                <BecomeAPartner />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
