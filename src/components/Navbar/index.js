import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'svgComponents/Logo';
import { useNavbarStyles } from './style'
import WrapContent from "../../HOC/WrapContent/WrapContent";
import { AuthContext } from 'context/AuthContext/AuthContext';
import IconButton from '@material-ui/core/IconButton';
import { BurgerIcon } from 'svgComponents/BurgerIcon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogCustom from 'components/DialogCustom';
import MenuNavBarMobile from 'components/MenuNavBarMobile';
import {Enter} from "svgComponents/Enter";
import {Register} from "svgComponents/Register";
import {LkImageButton} from "svgComponents/LkImageButton";
import obrazovanieLogo from 'images/obrazovanieLogo.png'
import { yaTarget } from 'utils/yaTarget';

const Navbar = () => {
    const c = useNavbarStyles();
    const { pathname } = useLocation();
    const { isAuth, getPermissions } = useContext(AuthContext);

    const isMobile = useMediaQuery('(max-width:800px)');
    const [openDialog, setOpenDialog] = useState(false);

    const mainPage = () =>  {
        return ['/', '/main'].includes(pathname)
    };

    const buttonsVisible = () => {
        if(!mainPage()) {
            return !pathname.includes('signin') ?
                <Link to="/auth/signin" style={{textDecoration: 'none'}}>
                    <div className={c.button}>
                        <div className={c.buttonInner} />
                        <div className={c.buttonLong} />
                        <span>Вход</span>
                    </div>
                </Link> :
                <Link to="/auth/signup" style={{textDecoration: 'none'}}>
                    <div className={c.button}
                        onClick={() => {
                            yaTarget('registration')
                        }}
                    >
                        <div className={c.buttonInner} />
                        <div className={c.buttonLong} />
                        <span>Регистрация</span>
                    </div>
                </Link>
        } else {
            return (
                <>
                    <Link
                        to="/auth/signin"
                    >
                        <Enter />
                    </Link>

                    <Link
                        to="/auth/signup"
                        className={c.margin}
                        onClick={() => {
                            yaTarget('registration')
                        }}
                    >
                        <Register />
                    </Link>
                </>
            )
        }
    };

    return (
        <div className={`${c.navbarWrapper} ${mainPage() ? c.navbarWrapperMain : ''}`}>
            <WrapContent>
                <div className={`${c.between} between`} >
                    <div className={'flex centered'}>
                        <Link to={'/'} >
                            <Logo color={mainPage() ? '#FF7271' : undefined}/>
                        </Link>
                        {mainPage() && (
                            <Link to={'/'} >
                                <img className={c.obrLogo} src={obrazovanieLogo} alt={'образование'} />
                            </Link>
                        )}
                    </div>

                    <div className={c.wrapperButtons}>
                        {
                            isAuth === 0 ?
                                <>
                                    {
                                        !isMobile ?
                                            <>
                                                { buttonsVisible() }
                                            </> :
                                            mainPage() ?
                                                <IconButton
                                                    onClick={() => setOpenDialog(true)}
                                                >
                                                    <BurgerIcon />
                                                </IconButton> : null
                                    }
                                </> :
                                <>
                                    {
                                        !getPermissions().includes('admin_access') ?
                                            <Link
                                                to="/lk"
                                                className={c.blueLink}
                                            >
                                                <LkImageButton/>
                                            </Link> : null
                                    }
                                </>
                        }
                    </div>
                </div>
            </WrapContent>

            {
                isMobile ?
                    <DialogCustom
                        widthDialog={800}
                        openDialog={openDialog}
                        setOpenDialog={setOpenDialog}
                    >
                        <MenuNavBarMobile
                            setOpenDialog={setOpenDialog}
                        />
                    </DialogCustom> : null
            }
        </div>
    )
};

export default Navbar
