import React, { useContext, useState } from 'react'
import { useTheme } from '@material-ui/core'
import { AuthContext } from 'context/AuthContext/AuthContext'
import { doRequest } from 'hooks/doRequest'
import CertificateContent from 'components/CertificateContent';

export const Certificate = () => {
    const theme = useTheme();
    const { certificate, getCertificate, name, postDataForCertificate } = useContext(AuthContext);

    const handleClick = async () => {
        try {
            /* eslint-disable-next-line */
            ym(71328202,'reachGoal','get_cert');
            await doRequest(postDataForCertificate, {
                "certs_add": {
                    "name": {
                        "first_name": name?.first || '',
                        "last_name": name?.last || '',
                        "middle_name": name?.middle || ''
                    }
                }
            });
            doRequest(getCertificate)
        } catch (err) {
            throw err
        }
    };

    const [data, setData] = useState({
        last: name.last || '',
        first: name.first || '',
        middle: name.middle || ''
    });

    return (
        <>
            <div className='lkContent' >
                <CertificateContent
                    name={name}
                    data={data}
                    setData={setData}
                    certificate={certificate}
                    handleClick={handleClick}
                    theme={theme}
                />
            </div>
        </>
    )
};
