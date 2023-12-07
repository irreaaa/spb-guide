import React, {useEffect} from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/img/Лого.PNG';
import {motion} from 'framer-motion';
import CustomLink from './CustomLink';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
// import {useAuth} from "../Authorization/hooks/use-auth";
// import {useDispatch, useSelector} from "react-redux";
// import {removeUser} from "../store/slices/userSlise";
import {useLocation} from 'react-router-dom';

const NavLinkMotion = motion(NavLink);

const Header = () => {
    const location = useLocation(); // Нужен!
    useEffect(() => {
        if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            localStorage.setItem('redirectPath', window.location.pathname)
        }
    }, [window.location.pathname]);

    // const dispatch = useDispatch()
    // const {isAuth} = useAuth()
    // const {isFetching} = useSelector(state => state.user)

    const navigateLink = () => {
        if (window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            localStorage.setItem('redirectPath', window.location.pathname)
        }
    }
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <NavLink
                        to="/"
      n                    onClick={() => navigateLink()}
                    >
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={navigateLink}
                    >
                        <h3>IriDima</h3>

                    </NavLink>
                </div>
                <div className={classes.link}>
                    <CustomLink
                        to="/"
                        activeclassname={classes.activeNavLink}
                        whileHover={{color: '#822db8'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Главная
                    </CustomLink>
                    <CustomLink
                        to="/attractions"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#B593D7'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Достопримечательности
                    </CustomLink>
                    <CustomLink
                        to="/directions"
                        activeclassname={classes.activeNavLink}
                        whileHover={{color: '#B593D7'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Маршруты
                    </CustomLink>
                    <CustomLink
                        to="/advices"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#B593D7'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Советы
                    </CustomLink>
                    <CustomLink
                        to="/personal-account"
                        activeclassname={classes.activeLink}
                        whileHover={{color: '#B593D7'}}
                        transition={{duration: 0.3}}
                        onClick={navigateLink}
                    >
                        Личный гид
                    </CustomLink>
                </div>
                <div className={classes.menu}>
                    <Menu isLazy>
                        <MenuButton as={Button} className={classes.customMenuButton}>Меню</MenuButton>
                        <MenuList className={classes.customMenuList}>
                            <NavLink to='/'>
                                <MenuItem>Главная</MenuItem>
                            </NavLink>
                            <NavLink to='/attractions'>
                                <MenuItem>Достопримечательности</MenuItem>
                            </NavLink>
                            <NavLink to='/directions'>
                                <MenuItem>Маршруты</MenuItem>
                            </NavLink>
                            <NavLink to='/advices'>
                                <MenuItem>Советы</MenuItem>
                            </NavLink>
                            <NavLink to='/personal-account'>
                                <MenuItem>Личный гид</MenuItem>
                            </NavLink>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;