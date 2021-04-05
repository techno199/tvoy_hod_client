import React from 'react'
import { capitalize } from 'utils/capitalize'
import { useReplicStyles } from './style'

/**
 * Возвращает реплику из макета
 * - [Макет](https://www.figma.com/file/KX8wIKbl6Z0fVB4z3fMCvQ/Tvojhod?node-id=127%3A105167)
 * 
 * 
 * @param {string='left'} align Выравнивание 'left' или 'right'
 * @param {string=''} title Заглавие реплики
 * @param {string=''} body текст реплики
 */

export const Replic = ({ align='left', title='', body='' }) => {

    const classes = useReplicStyles({ align: capitalize(align, true) })

    return (
        <div className={classes.replicWrapper} >

            <div className={classes.title} >
                {title}
            </div>

            <div className={classes.body} >
                {body}
            </div>

        </div>
    )
}
