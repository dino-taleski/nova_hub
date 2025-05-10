import React from "react";
import styles from "@/components/cta/cta.module.css";

const Cta = () => {
    return (
        <>
            <div className={styles.main}>
                <h1>Creating Impact Together</h1>
                <p className={styles.paragraph}>
                    Our initiatives enhance the quality of life for youth
                    through education, community engagement and innovative
                    approaches
                </p>
                <div className={`${styles.hero_buttons} `}>
                    <button className={`${styles.btn_blue} ${styles.m_b}`}>
                        <span>Join Us</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cta;
