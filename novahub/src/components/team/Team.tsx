import React from "react";
import styles from "@/components/team/team.module.css";

const Team = () => {
    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Meet the Team</p>
                    <div className={styles.cards_main}>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>IP</p>
                                <p className={styles.card_title}>
                                    Ivana Popovska
                                </p>
                                <p className={styles.card_subtitle}>
                                    Founder / President
                                </p>
                                <p className={styles.card_paragraph}>
                                    Program Coordinator. Passionate about youth
                                    development and community management.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>VP</p>
                                <p className={styles.card_title}>
                                    Velimir Popovski
                                </p>
                                <p className={styles.card_subtitle}>
                                    Founder / Executive Director
                                </p>
                                <p className={styles.card_paragraph}>
                                    Community Engagement. Specialist. Dedicated
                                    to empowering young people.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>DP</p>
                                <p className={styles.card_title}>
                                    Danka Popovska
                                </p>
                                <p className={styles.card_subtitle}>
                                    Co-Founder / Project Facilitator
                                </p>
                                <p className={styles.card_paragraph}>
                                    Experience in community outreach and
                                    fostering healthy relationships among youth.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>TP</p>
                                <p className={styles.card_title}>
                                    Tomislav Popovski
                                </p>
                                <p className={styles.card_subtitle}>
                                    Board Member
                                </p>
                                <p className={styles.card_paragraph}>
                                    Professional background and vision for youth
                                    development in North Macedonia.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <p className={styles.img_plc}>AG</p>
                                <p className={styles.card_title}>
                                    Aleksandra Gjorgjievska
                                </p>
                                <p className={styles.card_subtitle}>
                                    Team Member
                                </p>
                                <p className={styles.card_paragraph}>
                                    Brings expertise and contributes to the
                                    mission of Nova Hub.
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
