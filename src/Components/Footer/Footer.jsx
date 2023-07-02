import { ThemeContext } from "@/Context/ThemeContext";
import Link from "next/link";
import react, { useContext } from "react";
import Layout from "../Layout/Layout";

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    
    return <footer className={`w-full ${theme.background} border-t-2 border-solid border-dark font-medium text-lg`}>
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()}, All Rights Reserved</span>
            <div className="flex items-center">
                Build with <span className="text-primary text-2x1 px-1"></span>
                <Link href="/" target={"_blank"} className = "underline underline-offset-2">CodeBucks</Link>
            </div>
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
}

export default Footer;