import React from 'react'
import { useFieldSetStyles } from './style'


/**
 * 
 * Возвращает стилизованный Сет полей из UIKit.
 * - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=647%3A1529)
 * 
 * Кастомные пропсы:
 * 
 * @param {String} title - заглавие . Например "Фамилия"
 * @param {String} subtitle - примечание за тайтлом . Например "(не обязательно)"
 * @param {String} description - описание поля . Например "Укажите адрес электронной почты, используемый при участии в конкурсе «Большая перемена», чтобы получить сертификат"
 * @param {Node | React.ReactNode | String | Number} underfield - текст под полем. Например "<div>Уже зарегистрированы? <span>Войти!</span> </div>"
 * @param {Node | React.ReactNode} children - Поле, которое оборачиваем. Например, <TextField name='asd'.... />
 * @param {Boolean} thin - устанавливает fontWeight: 400 принудительно
 * @param {Boolean} dark - тёмный режим. Надписи становятся белыми
 * @param {Node | React.ReactNode} noteLink - голубое примечание. Наезжает на некст поле. Например "Забыли пароль?"
 * @param {Boolean} dense - убирает margin в большинстве случаев. Прижимает отступы
 * @param {Array | String} error - выводит ошибку
 * 
*/


export const Fieldset = ({
    title,
    subtitle,
    description,
    underfield,
    children,
    error,
    thin,
    dark,
    noteLink,
    dense,
    ...other
}) => {

    const c = useFieldSetStyles({dark, thin,dense});

    return (
        <div className={c.fieldSet} style={other.style || {}}>
            {!!title && (
                <div className={`${c.title} titleFieldSet`} >
                    {title}
                    <span className={c.subtitle} >
                        {subtitle}
                    </span>
                </div>
            )}

            {!!description && (
                <div className={`${c.description} description`} >
                    {description}
                </div>
            )}

            <div className={c.children} >
                {children}
            </div>

            {
                error ?
                    <div className={c.error} >
                        {error}
                    </div> : null
            }


            {!!noteLink && (
                <div className={c.noteLink} >
                    {noteLink}
                </div>
            )}

            {underfield && (
                <div className={c.underfield} >
                    {underfield}
                </div>
            )}
        </div>
    )
};
