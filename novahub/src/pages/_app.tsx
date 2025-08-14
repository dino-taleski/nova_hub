import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Script
                src="https://kit.fontawesome.com/d61a840397.js"
                crossOrigin="anonymous"
            />
        </>
    );
}
