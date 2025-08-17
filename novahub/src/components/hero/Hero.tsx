import React from "react";
import styles from "@/components/hero/hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={styles.main}>
                <h1>{t("home.hero.heading")}</h1>
                <p className={styles.paragraph}>{t("home.hero.paragraph")}</p>
                <div className={`${styles.hero_buttons} `}>
                    <button className={`${styles.btn_blue} ${styles.m_b}`}>
                        <span>{t("home.hero.volunteer.btn")}</span>
                    </button>
                    <button className={`${styles.btn_purple}`}>
                        {t("home.hero.partner.btn")}
                    </button>
                </div>
                <div>
                    <img
                        className={styles.scrollgif}
                        src="/gifs/scrollgif.gif"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
