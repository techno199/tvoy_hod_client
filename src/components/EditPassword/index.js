import React, {useState } from 'react';
import EditPasswordStepOne from 'components/EditPasswordStepOne';
import EditPasswordStepTwo from 'components/EditPasswordStepTwo';

const EditPassword = ({ setVisibleEditData }) => {
    const [step, setStep] = useState(1);//1
    const [noVlaid, setNoValid] = useState(false);
    const [state, setState] = useState({
        oldpassword: '',
        password: '',
        repPassword: ''
    });

    const handleFieldChange = (event) => {
        const { name, value } = event.target;

        setState({...state, [name]: value});
        if(noVlaid) setNoValid(false);
    };

    const renderSteps = () => {
        switch(step) {
            case 1:
                return (
                    <EditPasswordStepOne
                        setStep={setStep}
                        handleFieldChange={handleFieldChange}
                        state={state}
                        noVlaid={noVlaid}
                        setNoValid={setNoValid}
                    />
                );

            case 2:
                return (
                    <EditPasswordStepTwo
                        setVisibleEditData={setVisibleEditData}
                        handleFieldChange={handleFieldChange}
                        state={state}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div>
            {renderSteps()}
        </div>
    )
};

export default EditPassword;