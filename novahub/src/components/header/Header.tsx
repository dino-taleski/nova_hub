import React from "react";
import styles from "@/components/header/header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className={styles.menu}>
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                    <Link href={"/"}>
                        <img
                            style={{ width: "15%" }}
                            src="/logo/nh_logo.png"
                            alt="nova hub logo"
                        />
                    </Link>
                </div>
                <div className={styles.ul_lang}>
                    <div className={styles.ul}>
                        <Link href={""}>
                            <p>About</p>
                        </Link>
                        <Link href={""}>
                            <p>Vision</p>
                        </Link>
                        <Link href={""}>
                            <p>Team</p>
                        </Link>
                        <Link href={""}>
                            <p>Get Involved</p>
                        </Link>
                        <Link href={""}>
                            <p>Partnerships</p>
                        </Link>
                        <Link href={""}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className={styles.lang}>
                        <p>MK</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
