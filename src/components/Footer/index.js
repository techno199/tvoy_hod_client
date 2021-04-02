import { Hidden } from '@material-ui/core'
import { OKREF, VKREF, INSTREF } from 'CONSTANTS'
import React from 'react'
import { OKicon } from 'svgComponents/OKicon'
import { VKicon } from 'svgComponents/VKicon'
import { InstaIcon } from 'svgComponents/InstaIcon'

import { useLocation } from 'react-router-dom';
import { useStyles } from './style';

const Footer = () => {

    const c = useStyles();
    const { pathname } = useLocation();

    const mainPage = () =>  {
        return ['/', '/contest'].includes(pathname)
    };

    return (
        <div className={c.footer} style={{display: mainPage() ? 'none' : 'flex'}}>
            <Hidden mdDown>
                <div className={c.sectionFooter} >
                    <div className={c.title}>Для звонков по России</div>
                    <a target='_blank' href={`tel:+7 800 350 63 83`} rel={'noreferrer'} className={c.link}>
                        +7 800 350 63 83
                    </a>
                </div>
            </Hidden>

            <Hidden mdDown>
                <div className={c.sectionFooter}>
                    <div className={c.title}>Для вопросов и обращений</div>
                    <a target='_blank' rel={'noreferrer'} href={`mailto:help@bolshayaperemena.online`}  className={c.link}>help@bolshayaperemena.online</a>
                </div>
            </Hidden>

            <div className={c.politics} >
                <a target='_blank' rel={'noreferrer'} style={{ textDecoration: 'none', color: 'white', display: 'block' }} href='/politics.docx' download >Политика обработки персональных данных</a>
                <a target='_blank' rel={'noreferrer'} style={{ textDecoration: 'none', color: 'white', display: 'block' }} href='/agreement.docx' >Пользовательское соглашение</a>
            </div>

            <div  className={c.social} >
                <a target='_blank' rel={'noreferrer'} href={INSTREF} style={{ marginBottom: '5px' }}><InstaIcon /></a>
                <a target='_blank' rel={'noreferrer'} href={VKREF} style={{ marginBottom: '5px', marginLeft: 16 }}><VKicon /></a>
                <a target='_blank' rel={'noreferrer'} href={OKREF} style={{marginLeft: 16}}><OKicon /></a>
            </div>
        </div>
    )
};

export default Footer
