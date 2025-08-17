import React from "react";
import styles from "@/components/getinvolved/getinvolved.module.css";
import { useTranslation } from "react-i18next";

const GetInvolved = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div id="getInvolved" className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>
                        {t("home.getinvolved.title")}
                    </p>
                </div>

                <div className={styles.info_main}>
                    <div>
                        <p className={styles.text}>
                            {t("home.getinvolved.uhead")}
                        </p>
                        <ul className={`${styles.text} ${styles.ul}`}>
                            <li>{t("home.getinvolved.l1")}</li>
                            <li>{t("home.getinvolved.l2")}</li>
                            <li>{t("home.getinvolved.l3")}</li>
                            <li>{t("home.getinvolved.l4")}</li>
                        </ul>
                        <p className={styles.text}>
                            {t("home.getinvolved.p1")}
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
