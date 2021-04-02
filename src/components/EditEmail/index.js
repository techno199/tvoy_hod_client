import React, { useState, useContext } from 'react';
import EditEmailStepOne from 'components/EditEmailStepOne';
import EditEmailStepTwo from 'components/EditEmailStepTwo';
import { AuthContext } from 'context/AuthContext/AuthContext';

const EditEmail = ({ setVisibleEditData }) => {
    const { state : stateContext } =useContext(AuthContext);
    const [step, setStep] = useState(1);//1

    const renderSteps = () => {
        switch(step) {
            case 1:
                return (
                    <EditEmailStepOne
                        setStep={setStep}
                        stateContext={stateContext}
                    />
                );

            case 2:
                return (
                    <EditEmailStepTwo
                        setStep={setStep}
                        setVisibleEditData={setVisibleEditData}
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

export default EditEmail;