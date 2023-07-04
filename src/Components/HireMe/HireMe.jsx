import React, { useContext } from "react";
import { CircularText } from "../Icons/Icons";
import Link from "next/link";
import { ThemeContext } from "@/Context/ThemeContext";

const HireMe = () => {
    const {theme} = useContext(ThemeContext)
    return <article className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
        <section className="w-48 h-auto flex items-center justify-center relative md:w-24">
            <CircularText className={`${theme.fill} animate-spin-slow`} />

            <Link href="mailto:osamanagnoh@gmail.com" 
            className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            ${theme.negBg} ${theme.negTx} shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold
            hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]`}>
            Hire Me
            </Link>
        </section>
    </article>
}

export default HireMe;