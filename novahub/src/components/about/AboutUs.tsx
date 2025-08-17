import React from "react";
import styles from "@/components/about/aboutus.module.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>
                        {t("home.whoweare.title")}
                    </p>
                    <p className={styles.paragraph}>{t("home.whoweare.p1")}</p>
                    <p className={styles.paragraph}>{t("home.whoweare.p2")}</p>
                </div>
                <div style={{ alignSelf: "center" }}>
                    <img className={styles.img} src="/pic/im1.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default AboutUs;
