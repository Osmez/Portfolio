import react, { useContext } from "react";
import { motion } from "framer-motion";
import React from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const boots={
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord={
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const Animatedtext = ({ text, className=""}) => {
    const {theme} = useContext(ThemeContext)
    return <div className="w-full mx-auto flex items-center justify-center  text-center overflow-hidden sm:py-0">
        <motion.h1 
        className={`inline-block w-full ${theme.foreground} font-bold capitalize text-6xl ${className}`}
        variants={boots} 
        initial="initial" 
        animate="animate" 
        >
            { 
            text.split(" ")
            .map((word, index ) => 
            <motion.span key={index}
                className="inline-block" 
                variants={singleWord} >
                {word}
                </motion.span>
                ) 
            }
        </motion.h1>
    </div>
    
}

export default Animatedtext;