import React, { useState, useRef, useContext }      from 'react';
import TabsMenu                                     from 'components/TabsMenu';
import PersonalData                                 from 'components/PersonalData';
import SecurityAndLogin                             from 'components/SecurityAndLogin';
import BigChangeSettings                            from 'components/BigChangeSettings';
import EditDataComponent                            from 'components/EditDataComponent';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { errorHandler }                             from 'utils/errorHandler';
import { callToast }                                from 'utils/callToast';
import { useStyles }                                from './style';

const Settings = () => {
    const classes = useStyles();
    const { state : stateContext, editUser } =useContext(AuthContext);
    const options = useRef([
        {id: 0, title: 'Личные данные'},
        {id: 1, title: 'Настройки Большой перемены'},
        {id: 2, title: 'Безопасность и вход'},
    ]);
    const [value, setValue] = useState(0); //0
    const [visibleEditData, setVisibleEditData] = useState(false); //false

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const personDataEdit = async (event, {setLoading, objData}) => {
        event.preventDefault();
        try {
            setLoading(true);
            await editUser(objData);
            setLoading(false);
            callToast({
                message: 'Данные успешно изменены',
                type: 'success'
            });
        } catch (err) {
            setLoading(false);
            errorHandler(err);
            throw err;
        }
    };

    //переход по табсам
    const renderSections = () => {
        switch (value) {
            case 0:
                return (
                    <PersonalData
                        stateContext={stateContext}
                        personDataEdit={personDataEdit}
                    />
                );

            case 1:
                return (
                    <BigChangeSettings
                        stateContext={stateContext}
                        personDataEdit={personDataEdit}
                    />
                );

            case 2:
                return (
                    <SecurityAndLogin
                        stateContext={stateContext}
                        setVisibleEditData={setVisibleEditData}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div>
            {
                !visibleEditData ?
                    <>
                        <h3 className={classes.heading}>Мои данные</h3>

                        <TabsMenu
                            handleChange={handleChange}
                            value={value}
                            options={options.current}
                        />

                        <div>{renderSections()}</div>
                    </> :
                    <EditDataComponent
                        visibleEditData={visibleEditData}
                        setVisibleEditData={setVisibleEditData}
                        personDataEdit={personDataEdit}
                    />
            }
        </div>
    )
};

export default Settings;