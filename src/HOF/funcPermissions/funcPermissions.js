import { useContext }       from 'react'
import { Redirect }         from 'react-router-dom';
import { AuthContext }      from 'context/AuthContext/AuthContext';

const funcPermissions = (Component, namePermission) => {
    return (props) => {
        const { getPermissions } = useContext(AuthContext);
        if(!getPermissions().includes(namePermission)) {
            return <Redirect to={'/admin/dashboard'}/>
        }

        return (
            <Component {...props}/>
        )
    }
};

export default funcPermissions;