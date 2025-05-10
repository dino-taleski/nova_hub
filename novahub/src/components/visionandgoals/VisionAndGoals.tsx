import React from "react";
import styles from "@/components/visionandgoals/visionandgoals.module.css";

const VisionAndGoals = () => {
    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Our Vision & Goals</p>
                    <div className={styles.cards_main}>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-people-arrows ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Enhancing Social Life
                                </p>
                                <p className={styles.card_paragraph}>
                                    We created spaces for connection and
                                    community engagement, enriching the lives of
                                    youg people.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-child-reaching ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Empowering Parents
                                </p>
                                <p className={styles.card_paragraph}>
                                    We provide resources to help parents build
                                    healthy relationships with their children,
                                    fostering supportive environments.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-rocket ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Building Confidence
                                </p>
                                <p className={styles.card_paragraph}>
                                    Our programs promote self-confidence,
                                    critical thinking and decision-making
                                    skills, preparing yough for life&apos;s
                                    challenges.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cards_inner}>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-heart-pulse ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Promoting Active Lifestyles
                                </p>
                                <p className={styles.card_paragraph}>
                                    We advocate for sports and physical
                                    activity, enouraging healthy habits among
                                    young people.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-mobile-screen-button ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Responsible Digital Engagement
                                </p>
                                <p className={styles.card_paragraph}>
                                    We educate youth on the responsible use of
                                    social media, ensuring they navigate the
                                    digital world safely.
                                </p>
                            </div>
                            <div className={styles.goalcard}>
                                <i
                                    className={`fa-solid fa-lightbulb ${styles.icon}`}
                                ></i>
                                <p className={styles.card_title}>
                                    Supporting Innovation
                                </p>
                                <p className={styles.card_paragraph}>
                                    We inspire youth to pursue entrepreneurial
                                    initiatives and innovations, fostering
                                    independence and creativity.
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
                                Collaborative Partnerships
                            </p>
                            <p className={styles.card_paragraph}>
                                We actively seek partnerships with local and
                                international organizations to enhance our
                                impact and reach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisionAndGoals;
