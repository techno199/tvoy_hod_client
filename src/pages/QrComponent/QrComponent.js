import React from 'react';
import { useHistory } from 'react-router-dom'

const QrComponent = () => {
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 2000)
        // eslint-disable-next-line
    }, []);

    return (
        <div />
    )
};

export default QrComponent;