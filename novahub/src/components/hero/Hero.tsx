import React from "react";
import styles from "@/components/hero/hero.module.css";

const Hero = () => {
    return (
        <>
            <div className={styles.main}>
                <h1>Empowering Youth in North Macedonia</h1>
                <p className={styles.paragraph}>
                    At Nova Hub, we are dedicated to fostering the growth and
                    development of young people in the Republic of North
                    Macedonia. Our mission is to create a vibrant community
                    where youth can thrive, engage, and realize their full
                    potential.
                </p>
                <div className={`${styles.hero_buttons} `}>
                    <button className={`${styles.btn_blue} ${styles.m_b}`}>
                        <span>Volunteer</span>
                    </button>
                    <button className={`${styles.btn_purple}`}>
                        Partner with us
                    </button>
                </div>
                <div>
                    <img
                        className={styles.scrollgif}
                        src="/gifs/scrollgif.gif"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
