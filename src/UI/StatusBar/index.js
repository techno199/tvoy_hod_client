import React, { useCallback } from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { Loader } from 'UI/Loader';


/**
 * Возвращает обёртку в виде кружка с обводкой
 * - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A7589)
 * 
 * Кастомные пропсы: 
 * 
 * @param {String | Number} status - статус обёртки. Обрабатывается внутри StatusBar
 */

export const StatusBar = ({
    small,
    status
}) => {

    const renderIcon = useCallback(() => {
        if (status === null) return <Loader  />
        if (status === true) return <DoneIcon style={{ color: 'white', fontSize: small ? 32 : 41 }} />
        if (status === false) return <CloseIcon style={{ color: 'white', fontSize: small ? 32 : 41 }} />
    }, [status,small]);

    const styles = {
        outer: {            
            width: small ? 57 : 78,
            minWidth: small ? 57 : 78,
            height: small ? 57 : 78,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            background: status === null ? 'rgba(164,166,186,.3)' : status === false ? 'rgba(241,63,50,.3)' : 'rgba(118,189,29,.3)'
        },
        inner: {
            width: small ? 43 : 54,
            height: small ? 43 : 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            background: status === null ? 'rgba(164,166,186)' : status === false ? 'rgba(241,63,50)' : 'rgba(118,189,29)'
        },
        nullLoader: {
            display: 'flex',
            background: 'rgba(164,166,186,.3)',
            borderRadius: 100,
            width: '100%',
            justifyContent: 'flex-end',
        },
        textBlock: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            paddingLeft: 38,
        },
        wait: {
            fontFamily: 'Proxima Nova Rg',
            fontWeight: 'normal',
            fontSize: 18,
            lineHeight: '22px',
            marginBottom: 8,
            color: '#FFFFFF'
        },
        bottomText: {
            fontFamily: 'Proxima Nova Rg',
            fontWeight: 'normal',
            fontSize: 13,
            lineHeight: '16px',
            color: 'rgba(255, 255, 255, 0.5)',
        }
    };

    if(status === undefined) {
        return null;
    }

    return (
        <>
            {
                status === null && !small ?
                    <div style={styles.nullLoader}>
                        <div style={styles.textBlock}>
                            <span style={styles.wait}>Подождите, идёт обработка запроса</span>
                            <span  style={styles.bottomText}>Это займет не более 5 минут</span>
                        </div>
                        <div style={styles.outer} >
                            <div style={styles.inner} >
                                {renderIcon()}
                            </div>
                        </div>
                    </div> :
                    <div style={styles.outer} >
                        <div style={styles.inner} >
                            {renderIcon()}
                        </div>
                    </div>
            }
        </>
    )
};
