import React from "react";
import styles from "@/components/cta/cta.module.css";
import { useTranslation } from "react-i18next";

const Cta = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div className={styles.main}>
                <h1>{t("home.impact.title")}</h1>
                <p className={styles.paragraph}>{t("home.impact.p1")}</p>
                <div className={`${styles.hero_buttons} `}>
                    <button className={`${styles.btn_blue} ${styles.m_b}`}>
                        <span>{t("home.impact.btn")}</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cta;
