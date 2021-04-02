import React from 'react';
import EditEmail from 'components/EditEmail';
import EditPhone from 'components/EditPhone';
import EditPassword from 'components/EditPassword';
import { useStyles } from './style';

const EditDataComponent = ({ visibleEditData, setVisibleEditData, personDataEdit }) => {
    const classes= useStyles();

    const renderHeading = () => {
        switch (visibleEditData) {
            case 'email':
                return 'Изменить электронную почту';

            case 'phone':
                return 'Изменить номер телефона';

            case 'password':
                return 'Изменить пароль';

            default:
                return ''
        }
    };

    const renderPages = () => {
        switch (visibleEditData) {
            case 'email':
                return (
                    <EditEmail setVisibleEditData={setVisibleEditData}/>
                );

            case 'phone':
                return (
                    <EditPhone
                        setVisibleEditData={setVisibleEditData}
                        personDataEdit={personDataEdit}
                    />
                );

            case 'password':
                return (
                    <EditPassword setVisibleEditData={setVisibleEditData}/>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <h3 className={classes.heading}>{renderHeading()}</h3>
            {renderPages()}
        </div>
    )
};

export default EditDataComponent;