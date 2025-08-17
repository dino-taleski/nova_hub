import React from "react";
import styles from "@/components/contact/contact.module.css";

const Contact = () => {
    return (
        <>
            <div id="contact" className={styles.about_main}>
                <div className={styles.blurb}>
                    <p className={styles.about_title}>Contact</p>

                    <p className={styles.paragraph}>
                        Have questions or want to get involved? Reach out to us:
                    </p>
                    {/* contact form */}
                    {/* <div className={styles.form_div}>
                        <form className={styles.form}>
                            <div className={styles.nameemailinput}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Name / Име"
                                />
                                <input
                                    className={styles.input}
                                    type="email"
                                    placeholder="E-mail"
                                />
                            </div>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Subject / Предмет"
                            />
                            <textarea
                                className={styles.input}
                                name="message"
                                id="message"
                                rows={10}
                                placeholder="Message / Порака"
                            ></textarea>
                            <button className={styles.btn_blue}>
                                Send Message
                            </button>
                        </form>
                    </div> */}
                    <div className={styles.info}>
                        <div className={styles.info_inner}>
                            <div>
                                <i
                                    className={`fa-solid fa-envelope ${styles.icon}`}
                                ></i>
                            </div>
                            <div className={styles.info_text}>
                                <p className={styles.info_title}>E-mail</p>
                                <p className={styles.text}>info@novahub.mk</p>
                            </div>
                        </div>
                        <div className={styles.info_inner}>
                            <div>
                                <i
                                    className={`fa-solid fa-phone ${styles.icon}`}
                                ></i>
                            </div>
                            <div className={styles.info_text}>
                                <p className={styles.info_title}>Phone</p>
                                <p className={styles.text}>+389 70 123 456</p>
                            </div>
                        </div>
                        <div className={styles.info_inner}>
                            <div>
                                <i
                                    className={`fa-solid fa-location-dot ${styles.icon}`}
                                ></i>
                            </div>
                            <div className={styles.info_text}>
                                <p className={styles.info_title}>Location</p>
                                <p className={styles.text}>
                                    Skopje, North Macedonia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
