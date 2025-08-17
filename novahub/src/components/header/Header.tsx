import React, { useState } from "react";
import styles from "@/components/header/header.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const [t, i18n] = useTranslation("global");

    const langChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    function triggerMenu() {
        SetIsOpen((open) => !open);
    }

    function closeMenu() {
        SetIsOpen(false);
    }

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
                            <p>{t("menu.about")}</p>
                        </Link>
                        <Link href={""}>
                            <p>{t("menu.vision")}</p>
                        </Link>
                        <Link href={""}>
                            <p>{t("menu.team")}</p>
                        </Link>
                        <Link href={""}>
                            <p>{t("menu.inv")}</p>
                        </Link>
                        <Link href={""}>
                            <p>{t("menu.partner")}</p>
                        </Link>
                        <Link href={""}>
                            <p>{t("menu.contact")}</p>
                        </Link>
                        <Link href={""}>
                            <p onClick={triggerMenu}>{t("menu.lang")}</p>
                            <div className={styles.langmain}>
                                <ul
                                    className={`${styles.langmenu} ${
                                        isOpen ? styles.isopen : ""
                                    }`}
                                >
                                    <li
                                        onClick={() => {
                                            langChange("mk");
                                            closeMenu();
                                        }}
                                    >
                                        MK
                                    </li>
                                    <li
                                        onClick={() => {
                                            langChange("eng");
                                            closeMenu();
                                        }}
                                    >
                                        ENG
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.lang}></div>
                </div>
            </div>
        </>
    );
};

export default Header;
