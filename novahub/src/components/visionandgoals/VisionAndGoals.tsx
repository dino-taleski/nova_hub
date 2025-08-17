import React from "react";
import styles from "@/components/visionandgoals/visionandgoals.module.css";
import { useTranslation } from "react-i18next";

const VisionAndGoals = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>{t("home.v&g.title")}</p>
                    <div className={styles.cards_main}>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-people-arrows ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading1")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p1")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-child-reaching ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading2")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p2")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-rocket ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading3")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p3")}
                                </p>
                            </div>
                        </div>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-heart-pulse ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading4")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p4")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-mobile-screen-button ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading5")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p5")}
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-lightbulb ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    {t("home.v&g.heading6")}
                                </p>
                                <p className={styles.card_paragraph}>
                                    {t("home.v&g.p6")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.goalcard}>
                            <i
                                className={`fa-solid fa-arrow-right-arrow-left ${styles.icon}`}
                            ></i>
                            <p className={styles.card_title}>
                                {t("home.v&g.heading7")}
                            </p>
                            <p className={styles.card_paragraph}>
                                {t("home.v&g.p7")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisionAndGoals;
