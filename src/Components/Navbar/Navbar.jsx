import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { DribbbleIcon } from "../Icons/Icons";
import { PinterestIcon } from "../Icons/Icons";
import { GithubIcon } from "../Icons/Icons";
import { LinkedInIcon } from "../Icons/Icons";
import { TwitterIcon } from "../Icons/Icons";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
import Image from "next/image";
import face from "../../../public/face.png";
import sketch from "../../../public/sketch.png";
import { ThemeContext } from "@/Context/ThemeContext";

const CustomLink = ({href, title, className}) => {

    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-100 ${router.asPath == href? `w-full`:`w-0`}`}></span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className, toggle}) => {

    const router = useRouter();

    const handleClick = ()=> {
        toggle();
        router.push(href);
    }

    return(
        <button className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute 
            left-0 bottom-0.5 group-hover:w-full transition-[width] ease 
            duration-100 ${router.asPath == href? `w-full`:`w-0`}`}></span>
        </button>
    )
}

const Navbar = ({changeTheme}) => {
    const [isOpen, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext)
    const handleClick = () => {
        setOpen(!isOpen);
    }

    return(
        <header className={`w-full px-32 py-8 ${theme.foreground} font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8`}>
            
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen? ' rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
                <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen? 'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen? ' -rotate-45 translate-y-1':'translate-y-0.5'}`}></span>
            </button>

            <section className="w-full flex justify-between items-center lg:hidden">
            
            <nav className="flex items-center flex-col justify-center">
                <CustomLink href="/" title="React" className="mr-4" />
                <CustomLink href="/" title="Angular" className="mr-4" />
                <CustomLink href="/" title="Django" className="mr-4" />
                <CustomLink href="/" title="Wordpress" className="mr-4"/>
                <CustomLink href="/" title="Unity" className="mr-4"/>
            </nav>
            
            <nav className="w-100 flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/Osmez" target={"_blank"} 
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/osama-namur-408834182/" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <LinkedInIcon/>
                </motion.a>
                <motion.a href="https://sketchfab.com/CezarBlack" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <Image className={`max-w-[35px]`} src={sketch} width="50px" height="50px" alt="facebook icon"></Image> 
                </motion.a>
                <motion.a href="https://www.facebook.com/osama.namur" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                   <Image className={`max-w-[35px]`} src={face} width="50px" height="50px" alt="facebook icon"></Image>
                </motion.a>
                <motion.a href="https://github.com/Osmez" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                   
                </motion.a>
                <motion.button className={`mx-2`} onClick={changeTheme}>
                    Dark Mode
                </motion.button>
            </nav>
            </section>

           {isOpen?    <motion.div initial={{scale:0, opacity:0, x:"-50%",y:"-50%"}} animate={{scale:1, opacity:1}} className="min-w-[70px] flex justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 rounded-lg backdrop-blur-md py-32">
            <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
                <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
                <CustomMobileLink href="/projects" title="projects" className="" toggle={handleClick}/>
                <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/>
            </nav>
            
            <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/Osmez" target={"_blank"} 
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/osama-namur-408834182/" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <LinkedInIcon/>
                </motion.a>
                <motion.a href="https://sketchfab.com/CezarBlack" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <Image className={`max-w-[35px]`} src={sketch} width="50px" height="50px" alt="facebook icon"></Image> 
                </motion.a>
                <motion.a href="https://www.facebook.com/osama.namur" target={"_blank"}
                className="w-6 mx-3" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                   <Image className={`max-w-[35px]`} src={face} width="50px" height="50px" alt="facebook icon"></Image>
                </motion.a>
               
                <motion.button className={`mx-2 text-light`} onClick={changeTheme}>
                    Dark Mode
                </motion.button>
               
            </nav>
                
            </motion.div>:null}
           
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar;