import React from "react";
import styles from "@/components/team/team.module.css";
import { useTranslation } from "react-i18next";

const Team = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div id="team" className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>{t("home.team.title")}</p>
                    <p>{t("home.team.p1")}</p>
                    <div className={styles.cards_main}>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>IP</p>
                                <p className={styles.card_title}>
                                    {t("home.team.mem1name")}
                                </p>
                                <p className={styles.card_subtitle}>
                                    {t("home.team.mem1title")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.team.mem1brief")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>VP</p>
                                <p className={styles.card_title}>
                                    {t("home.team.mem2name")}
                                </p>
                                <p className={styles.card_subtitle}>
                                    {t("home.team.mem2title")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.team.mem2brief")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>DP</p>
                                <p className={styles.card_title}>
                                    {t("home.team.mem3name")}
                                </p>
                                <p className={styles.card_subtitle}>
                                    {t("home.team.mem3title")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.team.mem3brief")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>TP</p>
                                <p className={styles.card_title}>
                                    {t("home.team.mem4name")}
                                </p>
                                <p className={styles.card_subtitle}>
                                    {t("home.team.mem4title")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.team.mem4brief")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>AG</p>
                                <p className={styles.card_title}>
                                    {t("home.team.mem5name")}
                                </p>
                                <p className={styles.card_subtitle}>
                                    {t("home.team.mem5title")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.team.mem5brief")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
