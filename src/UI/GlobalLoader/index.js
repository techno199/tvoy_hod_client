import { Hidden, makeStyles } from '@material-ui/core'
import { AuthContext } from 'context/AuthContext/AuthContext'
import React, { useContext, useEffect } from 'react'
import { Loader } from 'UI/Loader'


const useGlobalLoaderStyle = makeStyles(theme => ({
    globalLoader: {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        background: '#272c5B',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))


export const GlobalLoader = () => {

    const c = useGlobalLoaderStyle()

    const { getMe } = useContext(AuthContext)

    useEffect(() => {
        getMe()
    }, [getMe])

    return (
        <div className={c.globalLoader} >
            <Hidden mdDown>

                <div className="loadingio-spinner-spin-rcqibn4uluj"><div className="ldio-5jwa4ww3vid">
                    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                </div></div>
            </Hidden>
            <Hidden lgUp>
                <Loader />
            </Hidden>
        </div>
    )
}
