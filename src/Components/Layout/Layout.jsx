import { ThemeContext } from "@/Context/ThemeContext";
import { useContext } from "react";

const react = require("react");

const Layout = ({children, className}) => {
    const {theme} = useContext(ThemeContext)
    return <div className={`w-full h-full inline-block z-0 ${theme.background} p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
}

export default Layout;