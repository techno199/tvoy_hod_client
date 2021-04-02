import React from 'react';

const VisiblePermissions = ({ visible, children }) => {

    return (
        <>
            { visible? children : null }
        </>
    )
};

export default VisiblePermissions;