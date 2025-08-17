import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import global_mk from "@/translations/mk/global.json";
import global_eng from "@/translations/eng/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
    interpolation: { escapeValue: true },
    lng: "eng",
    resources: {
        mk: {
            global: global_mk,
        },
        eng: {
            global: global_eng,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <I18nextProvider i18n={i18next}>
                <Header />
                <Component {...pageProps} />
                <Footer />
                <Script
                    src="https://kit.fontawesome.com/d61a840397.js"
                    crossOrigin="anonymous"
                />
            </I18nextProvider>
        </>
    );
}
