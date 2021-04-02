import React from 'react'


const style = {
    fontSize: 16,
    color: 'rgba(72,139,255,1)',
    textDecoration: 'none',
    textTransform: 'none',
    cursor: 'pointer'
}


/**
 * 
 * Возвращает стилизованную ссылку из макета
 *  - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=743%3A73)
 * 
 * Кастомные пропсы:
 * 
 * @param {String} to - адрес для редиректа
 * @param {Function} onClick - обработчик клика по ссылке
 * @param {*} chilren - обьект для обёртки 
 */


export const SpanLink = ({
    to,
    onClick,
    children,
}) => {

    const handleClick = (e) => {
        e.preventDefault()
        onClick()
    }

    if (onClick) {
        return (
            <span style={style} onClick={handleClick} >
                {children}
            </span>
        )
    } else {
        return (
            <a style={style} href={to} target='_blank' rel={'noreferrer'}  >
                {children}
            </a>
        )
    }
}
