import { NextPage } from "next";
import React from "react";
import styles from "@/styles/globalsPages.module.css";
import { useTranslation } from "react-i18next";

const About: NextPage = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={styles.aboutusbanner}>
                <p>{t("aboutus.tag")} </p>
            </div>
            <div className={styles.maindiv}>
                <p className={styles.paragraph}> {t("aboutus.p1")} </p>
                <p className={styles.paragraph}> {t("aboutus.p2")} </p>
                <p className={styles.vision}> {t("aboutus.p3")} </p>
                <p className={styles.paragraph}> {t("aboutus.p4")} </p>
                <ul className={styles.ul}>
                    <li>{t("aboutus.l1")}</li>
                    <li>{t("aboutus.l2")}</li>
                    <li>{t("aboutus.l3")}</li>
                    <li>{t("aboutus.l4")}</li>
                    <li>{t("aboutus.l5")}</li>
                    <li>{t("aboutus.l6")}</li>
                    <li>{t("aboutus.l7")}</li>
                </ul>
                <p className={styles.paragraph}> {t("aboutus.p5")} </p>
            </div>
        </>
    );
};

export default About;
