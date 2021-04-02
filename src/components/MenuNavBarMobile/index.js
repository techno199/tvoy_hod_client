import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import {OKREF, VKREF, INSTREF} from '../../CONSTANTS';
import { OKicon } from 'svgComponents/OKicon'
import { VKicon } from 'svgComponents/VKicon'
import instaIcon from "images/InstaIcon.svg";
import { yaTarget } from 'utils/yaTarget';
// import { FaceBook } from 'svgComponents/FaceBook';

const MenuNavBarMobile = ({ setOpenDialog }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
           <div className={classes.buttonClose} onClick={() => setOpenDialog(false)}>
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M6.99999 5.586L11.95 0.636002L13.364 2.05L8.41399 7L13.364 11.95L11.95 13.364L6.99999 8.414L2.04999 13.364L0.635986 11.95L5.58599 7L0.635986 2.05L2.04999 0.636002L6.99999 5.586Z" fill="#4946E2"/>
               </svg>
           </div>

            <div className={classes.enterAndRegister}>
                <p
                    className={classes.enter}
                    onClick={() => {
                        setOpenDialog(false);
                        history.push('/auth/signin');
                    }}
                >Вход</p>
                <p
                    className={classes.register}
                    onClick={() => {
                        yaTarget('registration');
                        setOpenDialog(false);
                        history.push('/auth/signup');
                    }}
                >Регистрация</p>
            </div>

            <footer>
                <div className={classes.phoneAndEmail}>
                    <div className={classes.phone}>
                        <span className={classes.title}>Для звонков по России</span>
                        <a href="tel:+78003506383" className={classes.textPhone}>+7 800 350 63 83</a>
                    </div>

                    <div className={classes.email}>
                        <span className={classes.title}>Для вопросов и обращений</span>
                        <a className={classes.emailText} href="mailto:help@bolshayaperemena.online">help@bolshayaperemena.online</a>
                    </div>
                </div>

                <div className={classes.politics} >
                    <a target='_blank' rel={'noreferrer'} href='/politics.docx' download >Политика обработки персональных данных</a>
                    <a target='_blank' rel={'noreferrer'} href='/agreement.docx' >Пользовательское соглашение</a>
                    <a target='_blank' rel={'noreferrer'} href='/polojenie_o_konkurse.pdf' >Положение о конкурсе</a>
                </div>

                <div className={classes.socialBlock}>
                    <a
                        target='_blank'
                        rel={'noreferrer'}
                        href={INSTREF}
                        onClick={() => yaTarget('bp-instagram')}
                    >
                        <img src={instaIcon} alt={'инста'} />
                    </a>
                    {/*<a href={'/#'}><FaceBook /></a>*/}
                    <a
                        target='_blank'
                        rel={'noreferrer'}
                        href={VKREF}
                        onClick={() => yaTarget('bp-vk')}
                    >
                        <VKicon />
                    </a>
                    <a
                        target='_blank'
                        rel={'noreferrer'}
                        href={OKREF}
                        onClick={() => yaTarget('bp-ok')}
                    >
                        <OKicon />
                    </a>
                </div>
            </footer>
        </div>
    )
};

export default MenuNavBarMobile;