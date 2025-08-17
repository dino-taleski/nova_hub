import React from "react";
import styles from "@/components/footer/footer.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Footer = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <div style={{ borderTop: "1px solid #b46bd8" }}>
                <div className={styles.footer_main}>
                    <div className={styles.footer_inner}>
                        <p className={styles.footer_title}>About Nova Hub</p>
                        <p className={styles.footer_text}>
                            Empowering youth in North Macedonia through
                            education, community engagement and innovative
                            initiatives.
                        </p>
                        <div className={styles.social_links}>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className={styles.footer_inner}>
                        <p className={styles.footer_title}>Quick Links</p>
                        <ul className={styles.ul}>
                            <li>
                                <Link href={"/about"}>
                                    <p>{t("menu.about")}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/our-vision"}>
                                    <p>{t("menu.vision")}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#team"}>
                                    <p>{t("menu.team")}</p>
                                </Link>
                            </li>
                            <li>Volunteer</li>
                            <li>
                                <Link href={"/partnerships"}>
                                    <p>{t("menu.partner")}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_inner}>
                        <p className={styles.footer_title}>Get Involved</p>
                        <ul className={styles.ul}>
                            <li>Become a Volunteer</li>
                            <li>Become a Partner</li>
                            <li>Sponsor an Event</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
