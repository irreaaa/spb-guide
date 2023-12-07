import { NavLink, useMatch } from "react-router-dom";
import {motion} from 'framer-motion';
const CustomLink = ({children, to, ...props}) =>{
    const match = useMatch(to);
    const NavLinkMotion = motion(NavLink);
    return(
        <NavLinkMotion 
        to = {to}
        style={{
            color: match ? '#B593D7' : '#822db8'
        }} 
        {...props}>
            {children}
        </NavLinkMotion>
    )
}
export default CustomLink