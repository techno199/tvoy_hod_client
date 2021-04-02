import React from 'react';
import WrapContent from 'HOC/WrapContent/WrapContent';
import { NavLink  } from 'react-router-dom';
import {INSTREF, OKREF, VKREF} from '../../CONSTANTS';
import { OKicon } from 'svgComponents/OKicon'
import { VKicon } from 'svgComponents/VKicon'
import instaIcon from 'images/InstaIcon.svg'
import arrowTop from 'images/arrowTop.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { yaTarget } from 'utils/yaTarget';
import { useStyles } from './style';

const FooterMain = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width: 870px)');
  
    return (
        <footer className={classes.FooterMain}>
            {
                !matches ?
                    <WrapContent>
                        <div className={classes.topFooter}>
                            <div className={classes.topPart}>
                                <span className={classes.title}>Для звонков по России</span>
                                <a href="tel:+78003506383" className={classes.textLink}>+7 800 350 63 83</a>
                            </div>

                            <div className={classes.topPart}>
                                <span className={classes.title}>Для вопросов и обращений</span>
                                <a className={classes.textLink} href="mailto:help@bolshayaperemena.online">help@bolshayaperemena.online</a>
                            </div>

                            <div className={classes.topPart}>
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
                                        <VKicon size={'35'} />
                                    </a>
                                    <a
                                        target='_blank'
                                        rel={'noreferrer'}
                                        href={OKREF}
                                        onClick={() => yaTarget('bp-ok')}
                                    >
                                        <OKicon size={'35'} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.bottomFooter}>
                            <NavLink className={classes.goToAdmin} to={'/admin'}>Для администратора</NavLink>
                            <a className={classes.downloadLink} target='_blank' href='/politics.docx' download >Политика обработки персональных данных</a>
                            <a className={classes.downloadLink} target='_blank' href='/agreement.docx' download>Пользовательское соглашение</a>
                            <a className={classes.downloadLink} target='_blank' href='/polojenie_o_konkurse.pdf'>Положение о конкурсе</a>
                        </div>
                    </WrapContent> :
                    <WrapContent>
                        <div className={classes.goToTop}>
                            <span className={classes.toTopText}>Вернуться наверх</span>
                            <img
                                src={arrowTop}
                                alt="arrowTop"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                }}
                            />
                        </div>
                    </WrapContent>
            }
        </footer>
    )
};

export default FooterMain;