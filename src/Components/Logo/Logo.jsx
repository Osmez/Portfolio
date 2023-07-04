import Link from "next/link";
import React, { useContext } from "react";
import {motion} from 'framer-motion';
import { ThemeContext } from "@/Context/ThemeContext";

const MotionLink = motion(Link);

const Logo = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <div className="flex items-center justify-center mt-2">
            <MotionLink
            href="/" 
            className={`w-16 h-16 ${theme.negBg} ${theme.negTx} flex items-center justify-center rounded-full text-2x1 font-bold`}
            whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"]
                ,transition:{duration:1, repeat: Infinity}
            }}>
                OS
            </MotionLink>
        </div>
    );
}

export default Logo;