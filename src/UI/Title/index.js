import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles({
    main: {
        '@media(max-width: 1280px)': {
            fontSize: '3em !important'
        },


        '@media(max-width: 1200px)': {
            fontSize: '2em !important'
        },

        '@media(max-width: 1024px)': {
            fontSize: '4em !important'
        },

        '@media(max-width: 799px)': {
            fontSize: '2em !important'
        },

        '@media(max-width: 400px)': {
            fontSize: '1.5em !important'
        },
    }
})


/** Возвращает заголовок из UIKit
 * - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A7485)
 * 
 * Кастомные пропсы:
 * 
 * @param {String | Node} children - Текст заголовка.Можно теги
 * @param {String} color - Цвет заголовка. По-умолчанию "black"
 * @param {Number | String} marginBottom - Отступ снизу. По-умолчанию: "16px"
 * @param {Number | String} marginTop - Отступ сверху. По-умолчанию: "16px"
 * @param {Number | String} fontSize - Размер шрифта . По-умолчанию: 32
 */


const Title = ({
    children,
    color = 'black',
    marginBottom = '16px',
    aside,
    marginTop = '16px',
    fontSize = 32,
    ...params
}) => {

    const c = useStyles()

    return (
        <div style={{
            marginBottom,
            marginTop,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row'
        }} >
            <Typography
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '0.03em',
                    color,
                    fontSize,
                    lineHeight: '39px',
                }}
                className={c.main}
                variant='h3'
            >
                {children}
            </Typography>
            <div style={{ width: 20, height: 20, marginLeft: 16 }} >
                {aside && aside()}
            </div>
        </div>
    )
};

export default Title;
