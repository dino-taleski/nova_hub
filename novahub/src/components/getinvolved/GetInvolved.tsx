import React from "react";
import styles from "@/components/getinvolved/getinvolved.module.css";

const GetInvolved = () => {
    return (
        <>
            <div className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Get Involved</p>
                </div>

                <div className={styles.info_main}>
                    <div>
                        <p className={styles.text}>
                            Join our dedicated team and help us create a
                            positive impact in the lives of young people. We
                            offer various volunteer roles, including:
                        </p>
                        <ul className={`${styles.text} ${styles.ul}`}>
                            <li>
                                Mentoring: Support youth by sharing your
                                knowledgde.
                            </li>
                            <li>
                                Event Planning: Assist in organizing workshops,
                                seminars and community events.
                            </li>
                            <li>
                                Community Outreach: Help us connect with local
                                youth and promote our initiatives.
                            </li>
                            <li>
                                Program Facilitation: Lead or assist in workshop
                                and training sessions focused on skill
                                development and personal growth.
                            </li>
                        </ul>
                        <p className={styles.text}>
                            Your time and skills can help us enhance the quality
                            of life for youg people in our community!
                        </p>
                    </div>
                    <div>
                        <img
                            style={{ width: "600px" }}
                            src="/pic/team.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInvolved;
