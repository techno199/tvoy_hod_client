import { Hidden } from '@material-ui/core'
import { AuthContext } from 'context/AuthContext/AuthContext'
import { doRequest } from 'hooks/doRequest'
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'UI/Button'
import { Fieldset } from 'UI/Fieldset'
import { InlineTextField } from 'UI/InlineTextField'
import { StatusBar } from 'UI/StatusBar'
import Title from 'UI/Title'
import { EditDataIcon } from 'svgComponents/EditDataIcon';
import Fade from '@material-ui/core/Fade';
import AnimateLoader from 'svgComponents/AnimateLoader';
import { useCertificateCardStyles } from './style'

export const CertificateCard = ({ name, data,setData, handleClickSendRepeat }) => {

    const c = useCertificateCardStyles();
    const history = useHistory();

    const { certificate, postDataForCertificate, getCertificate, loadingSert } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        /* eslint-disable-next-line */
        ym(71328202,'reachGoal','get_cert');
        await doRequest(postDataForCertificate, {
            "certs_add": {
                "name": {
                    "first_name": data?.first || '',
                    "last_name": data?.last || '',
                    "middle_name": data?.middle || ''
                }
            }
        });

        await doRequest(getCertificate)
    };

    const renderText = () => {
        if (certificate?.cert?.approve === null) return 'Вы подали заявку на получение сертификата. Как только его утвердят, мы вышлем его Вам на почту.'
        if (certificate?.cert?.approve === true) return 'Сертификат утвержден и выслан Вам на электронную почту, указанную при регистрации.'
        if (certificate?.cert?.approve === false) return 'Сертификат не обнаружен.'
        return 'Проверьте Ваше ФИО. Эти данные будут расположены на сертификате.'
    };

    const visibleButton = () => {
        switch(certificate?.cert?.approve) {
            case undefined:
                return 'receive';

            case null:
                return 'wait';

            case true:
                return 'success';

            case false:
                return 'error';

            default:
                return ''
        }
    };

    const goToSettings = () => {
        history.push('/lk/settings')
    };

    return (
        <form onSubmit={handleSubmit} className={c.certCard} >

            <Hidden mdDown >
                <div className={c.wrapHeading}>
                    <Title
                        color='white'
                    >
                        Ваш сертификат
                    </Title>

                    {
                        (certificate?.cert === null || certificate === null) && !loadingSert ?
                            <Fade in timeout={1000}>
                                <div className={c.wrapEditData}>
                                    <div className={c.editData} onClick={goToSettings}>
                                        <EditDataIcon />
                                    </div>
                                    <p>Редактировать ФИО</p>
                                </div>
                            </Fade> : null
                    }
                </div>
            </Hidden>

            <Hidden lgUp>
                <div className={c.hiddentTop} >
                    <div className={c.wrapHeading}>
                        <Title
                            color='white'
                        >
                            Ваш <br /> сертификат
                        </Title>

                        {
                            (certificate?.cert === null || certificate === null) && !loadingSert ?
                                <Fade in timeout={1000}>
                                    <div className={c.editData} onClick={goToSettings}>
                                        <EditDataIcon />
                                    </div>
                                </Fade> : null
                        }
                    </div>

                    {
                        loadingSert ?
                            <AnimateLoader /> :
                            <StatusBar small status={certificate?.cert?.approve} />
                    }
                </div>
            </Hidden>

            <div className={c.subTitle} >
                {renderText()}
            </div>

            <Fieldset
                dense
                title='Фамилия'
                dark
                thin
            >
                <InlineTextField
                    value={data.last}
                    onChange={(e) => setData({ ...data, last: e.target.value })}
                    fullWidth
                    disableUnderline
                    readOnly
                />
            </Fieldset>

            <Fieldset
                dense
                title='Имя'
                dark
                thin
            >
                <InlineTextField
                    value={data.first}
                    onChange={(e) => setData({ ...data, first: e.target.value })}
                    fullWidth
                    disableUnderline
                    readOnly
                />
            </Fieldset>

            <Fieldset
                dense
                title='Отчество'
                dark
                thin
            >
                {
                    data.middle ?
                        <InlineTextField
                            value={data.middle}
                            onChange={(e) => setData({ ...data, middle: e.target.value })}
                            fullWidth
                            disableUnderline
                            readOnly
                        />  :
                        <p className={c.noValue}>(Не указано)</p>
                }
            </Fieldset>

            {
                loadingSert ?
                    <Hidden mdDown>
                        <div className={c.wrapLoader}>
                            <AnimateLoader />
                        </div>
                    </Hidden> :
                    <React.Fragment>
                        {
                            visibleButton() === 'receive' ?
                                <Button
                                    width={280}
                                    type='submit'
                                >
                                    Получить сертификат
                                </Button> : null
                        }

                        <Hidden lgUp>
                            {Boolean(certificate?.cert) && (
                                <div >
                                    {certificate?.cert?.approve && <a href={certificate?.cert?.link} className={c.downloadCerf} download >Скачать сертификат</a>}

                                    {certificate?.cert?.approve === false && (
                                        <div >
                                            <Button
                                                onClick={handleClickSendRepeat}
                                                width={318}
                                            >
                                                Запросить повторно
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Hidden>

                        <Hidden mdDown>
                            {Boolean(certificate?.cert) && (
                                <Fade in timeout={500}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                        {
                                            certificate?.cert?.approve
                                                ? <a href={certificate?.cert?.link} className={c.downloadCerf} download>Скачать сертификат</a>
                                                : null
                                        }

                                        {
                                            visibleButton() === 'error' ?
                                                <div >
                                                    <Button
                                                        onClick={handleClickSendRepeat}
                                                        width={318}
                                                    >
                                                        Запросить повторно
                                                    </Button>
                                                </div> : null
                                        }

                                        <StatusBar status={certificate?.cert?.approve} />
                                    </div>
                                </Fade>
                            )}
                        </Hidden>
                    </React.Fragment>
            }
        </form>
    )
};
