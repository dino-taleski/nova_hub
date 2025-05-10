import React from "react";
import styles from "@/components/footer/footer.module.css";

const Footer = () => {
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
                            <li>About Us</li>
                            <li>Our Vision</li>
                            <li>Our Team</li>
                            <li>Volunteer</li>
                            <li>Partnership</li>
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
