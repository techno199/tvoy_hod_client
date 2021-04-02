import { Box, Hidden } from '@material-ui/core'
import { OKREF, VKREF, INSTREF } from 'CONSTANTS'
import React from 'react'
import { OKicon } from 'svgComponents/OKicon'
import { VKicon } from 'svgComponents/VKicon'
import { InstaIcon } from 'svgComponents/InstaIcon'
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useStyles } from './style';
import BrandLink from 'UI/BrandLink/BrandLink'

const Footer = () => {

    const c = useStyles();
    const { pathname } = useLocation();

    const mainPage = () =>  {
        return ['/', '/contest'].includes(pathname)
    };

    return (
        <div className={c.footer} style={{display: mainPage() ? 'none' : 'flex'}}>
            <Hidden mdDown>
                <div className={c.sectionFooter}>
                    <Box clone fontSize='16px'>
                        <div className={c.title}>Для звонков по России</div>
                    </Box>

                    <a target='_blank' href={`tel:+7 800 350 63 83`} rel={'noreferrer'} className={c.link}>
                        +7 800 350 63 83
                    </a>

                    <Box marginTop='32px'>
                        <BrandLink
                            target='_self'
                            to='/admin/login'
                            className={classnames(c.subtitleUnderline, c.subtitle)}
                        >   
                            Для администратора
                        </BrandLink>
                    </Box>
                </div>
            </Hidden>

            <Hidden mdDown>
                <div className={c.sectionFooter}>
                    <Box clone fontSize='16px'>
                        <div className={c.title}>Для вопросов и обращений</div>
                    </Box>

                    <a target='_blank' rel={'noreferrer'} href={`mailto:help@bolshayaperemena.online`}  className={c.link}>help@tvoyhod.online</a>

                    <Box marginTop='30px' display='flex' flexWrap='nowrap'>
                        <Box marginRight='24px'>
                            <BrandLink to='/politics.docx' className={c.subtitle}>Политика обработки персональных данных</BrandLink>
                        </Box>

                        <Box marginRight='24px'>
                            <BrandLink to='/agreement.docx' className={c.subtitle}>Пользовательское соглашение</BrandLink>
                        </Box>

                        <BrandLink to='' className={c.subtitle}>Положение о конкурсе</BrandLink>
                    </Box>
                </div>
            </Hidden>

            <div  className={c.social} >
                <a target='_blank' rel={'noreferrer'} href={INSTREF} style={{ marginBottom: '5px' }}><InstaIcon /></a>
                <a target='_blank' rel={'noreferrer'} href={VKREF} style={{ marginBottom: '5px', marginLeft: 16 }}><VKicon /></a>
            </div>
        </div>
    )
};

export default Footer
