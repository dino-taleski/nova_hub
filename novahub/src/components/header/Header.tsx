import React from "react";
import styles from "@/components/header/header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        <img
                            style={{ width: "100px" }}
                            src="/logo/nh_logo.png"
                            alt="nova hub logo"
                        />
                    </Link>
                </div>
                <div className={styles.ul_lang}>
                    <div className={styles.ul}>
                        <Link href={"/about"}>
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
                        <Link href={""}>
                            <p>MK</p>
                        </Link>
                    </div>
                    <div className={styles.lang}></div>
                </div>
            </div>
        </>
    );
};

export default Header;
