import React from "react";
import styles from "@/components/about/aboutus.module.css";

const AboutUs = () => {
    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Who We Are</p>
                    <p className={styles.paragraph}>
                        Nova Hub was founded with a clear mission: to empower
                        and develop the youth of the Republic of North
                        Macedonia. Recognizing the unique challenges faced by
                        young people today, our organization was established to
                        promote activities and initiatives that foster personal
                        growth, healthy relationships, and active lifestyle.
                    </p>
                    <p className={styles.paragraph}>
                        Our story began with a group of passionate individuals
                        who believed in the potential of youth and the
                        importance of providing them with the tools and
                        resources necessary to thirve in a rapidly changing
                        world.
                    </p>
                </div>
                <div style={{ alignSelf: "center" }}>
                    <img className={styles.img} src="/pic/im1.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default AboutUs;
