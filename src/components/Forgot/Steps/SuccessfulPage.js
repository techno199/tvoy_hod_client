import { useTheme } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'UI/Button'
import Title from 'UI/Title'
import { useRegisterStyles } from '../style'

export const SuccessfulPage = () => {
    const history = useHistory()
    const theme = useTheme()

    const c = useRegisterStyles()

    const handleSubmit = () => {
        history.push('/auth/signin')
    };

    return (
        <form onSubmit={handleSubmit} className={c.centered} >
            <Title marginBottom={theme.spacing(8)} >
                <span style={{textAlign: 'center', display: 'block'}}>
                    Пароль успешно восстановлен
                </span>
            </Title>
            
            <Button width={292} type='submit' >
                Войти
            </Button>
        </form>
    )
}
