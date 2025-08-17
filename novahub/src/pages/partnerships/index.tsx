import { NextPage } from "next";
import React from "react";
import styles from "@/styles/globalsPages.module.css";
import { useTranslation } from "react-i18next";

const Partnerships: NextPage = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={styles.partnershipsbanner}>
                <p style={{ textAlign: "center" }}>{t("partner.title")} </p>
            </div>
            <div className={styles.maindiv}>
                <p className={styles.paragraph}> {t("partner.p1")} </p>
                <div className={styles.partnercardsmain}>
                    <p className={styles.mainheading}>
                        {t("partner.card1main")}
                    </p>
                    <div className={styles.partnercardsinner}>
                        <div>
                            <p>{t("partner.card1heading")} </p>
                            <p>{t("partner.card1text")} </p>
                        </div>
                        <div>
                            <p>{t("partner.card2heading")} </p>
                            <ul>
                                <li>{t("partner.card2l1")} </li>
                                <li>{t("partner.card2l2")} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.eventscardsmain}>
                    <p className={styles.mainheading}>
                        {t("events.card1main")}
                    </p>
                    <div className={styles.eventscardsinner}>
                        <div>
                            <p>{t("events.card1heading")} </p>
                            <p>{t("events.card1text")} </p>
                        </div>
                        <div>
                            <p>{t("events.card2heading")} </p>
                            <ul>
                                <li>{t("events.card2l1")} </li>
                                <li>{t("events.card2l2")} </li>
                                <li>{t("events.card2l3")} </li>
                            </ul>
                        </div>
                        <div>
                            <p>{t("events.card3heading")} </p>
                            <ul>
                                <li>{t("events.card3l1")} </li>
                                <li>{t("events.card3l2")} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.sponsorcardsmain}>
                    <p className={styles.mainheading}>
                        {t("sponsor.card1main")}
                    </p>
                    <div className={styles.sponcardsinner}>
                        <div>
                            <p>{t("sponsor.card1heading")} </p>
                            <p>{t("sponsor.card1text")} </p>
                        </div>
                        <div>
                            <p>{t("sponsor.card2heading")} </p>
                            <ul>
                                <li>{t("sponsor.card2l1")} </li>
                                <li>{t("sponsor.card2l2")} </li>
                                <li>{t("sponsor.card2l2")} </li>
                            </ul>
                        </div>
                        <div>
                            <p>{t("sponsor.card3heading")} </p>
                            <ul>
                                <li>{t("sponsor.card3p1")} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.resourcecardsmain}>
                    <p className={styles.mainheading}>
                        {t("resource.card1main")}
                    </p>
                    <div className={styles.rescardsinner}>
                        <div>
                            <p>{t("resource.card1heading")} </p>
                            <p>{t("resource.card1text")} </p>
                        </div>
                        <div>
                            <p>{t("resource.card2heading")} </p>
                            <ul>
                                <li>{t("resource.card2l1")} </li>
                                <li>{t("resource.card2l2")} </li>
                                <li>{t("resource.card2l3")} </li>
                            </ul>
                        </div>
                        <div>
                            <p>{t("resource.card3heading")} </p>
                            <ul>
                                <li>{t("resource.card3l1")} </li>
                                <li>{t("resource.card3l2")} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <p className={styles.mainheading}>{t("contact.title")}</p>
                    <p className={styles.regulartext}>{t("contact.p1")}</p>
                    <p className={styles.regulartext}>{t("contact.p2")}</p>
                </div>
            </div>
        </>
    );
};

export default Partnerships;
