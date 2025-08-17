import { NextPage } from "next";
import React from "react";
import styles from "@/styles/globalsPages.module.css";
import { useTranslation } from "react-i18next";

const OurVision: NextPage = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div className={styles.visionbanner}>
                <p>{t("vis.tag")} </p>
            </div>
            <div className={styles.maindiv}>
                <p className={styles.mission}>{t("vis.mission")} </p>
                <p className={styles.statement}>{t("vis.p2")} </p>
                <p className={styles.paragraph}> {t("vis.p1")} </p>
                <ul className={styles.ul}>
                    <li>{t("vis.l1")}</li>
                    <li>{t("vis.l2")}</li>
                    <li>{t("vis.l3")}</li>
                    <li>{t("vis.l4")}</li>
                    <li>{t("vis.l5")}</li>
                    <li>{t("vis.l6")}</li>
                    <li>{t("vis.l7")}</li>
                </ul>
            </div>
        </>
    );
};

export default OurVision;
