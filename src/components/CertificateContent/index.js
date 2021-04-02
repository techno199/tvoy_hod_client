import React from 'react';
import Title from 'UI/Title';
import { CertificateCard } from 'components/Certificate/CertificateCard';

const CertificateContent = ({ name, data, setData, handleClick, theme }) => {

    return (
        <>
            <div>
                <Title
                    marginTop={0}
                    marginBottom={theme.spacing(5)}
                >
                    Мой сертификат
                </Title>

                {
                    (name?.first || name?.first_name) ?
                        <CertificateCard data={data} setData={setData} name={name} handleClickSendRepeat={handleClick} /> : null
                }
            </div>
        </>
    )
};

export default CertificateContent;