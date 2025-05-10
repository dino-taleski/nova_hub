import React from "react";
import styles from "@/components/partner/becomeapartner.module.css";

const BecomeAPartner = () => {
    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Become a Partner</p>

                    <p className={styles.paragraph}>
                        We invite businesses, ogranizations and individuals to
                        join us in our mission through partnerships, joint
                        events, sponsorships and resource sharing. Together, we
                        can make a lasting impact!
                    </p>
                    <div className={styles.cards_main}>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <div className={styles.cardtitle}>
                                    <i
                                        className={`fa-solid fa-handshake ${styles.icon}`}
                                    ></i>
                                    <p className={styles.card_title}>
                                        Partnerships
                                    </p>
                                </div>

                                <p className={styles.card_paragraph}>
                                    Align your organization with a cause
                                    dedicated to empowering youth. By
                                    collaborating, we can combine strengths,
                                    resources and expertise.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <div className={styles.cardtitle}>
                                    <i
                                        className={`fa-solid fa-calendar-days ${styles.icon}`}
                                    ></i>
                                    <p className={styles.card_title}>
                                        Joint Events
                                    </p>
                                </div>
                                <p className={styles.card_paragraph}>
                                    Organize workshops, seminars, sports
                                    activities and awareness campaigns together.
                                    Reach a larger audience by combining our
                                    networks.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <div className={styles.cardtitle}>
                                    <i
                                        className={`fa-solid fa-gift ${styles.icon}`}
                                    ></i>
                                    <p className={styles.card_title}>
                                        Sponsorship
                                    </p>
                                </div>

                                <p className={styles.card_paragraph}>
                                    Support our programs and gain visibility for
                                    your brand. Demonstrate your commitment to
                                    social responsibility and community
                                    development.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <div className={styles.cardtitle}>
                                    <i
                                        className={`fa-solid fa-network-wired ${styles.icon}`}
                                    ></i>
                                    <p className={styles.card_title}>
                                        Resource Sharing
                                    </p>
                                </div>
                                <p className={styles.card_paragraph}>
                                    Collaborate for greater efficiency and
                                    impact. Share office space, expertise,
                                    traning or equipment to reduce costs and
                                    improve operation efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BecomeAPartner;
