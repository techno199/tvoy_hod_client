import React, { useState } from 'react'
import { DataCorrection } from './Steps/DataCorrection'
import { EmailEnter } from './Steps/EmailEnter'
import { PhoneCodeEnter } from './Steps/PhoneCodeEnter'
import { useRegisterStyles } from './style'

export const Register = () => {

    const c = useRegisterStyles();
    const [currentStep, setCurrentStep] = useState(1); //1

    const [state, setState] = useState({});

    const saveToParentState = (obj) => setState((prevState) => ({...prevState,...obj}))

    const nextStep = () => setCurrentStep((prevStep) => ++prevStep)

    const renderStep = () => {
        switch(currentStep){
            case 1:
                return <EmailEnter nextStep={nextStep} saveToRequestData={saveToParentState} />;
            case 2: 
                return <PhoneCodeEnter c={c} email={state.email.toLowerCase()}  nextStep={nextStep} saveToRequestData={saveToParentState} />;
            case 3:
                return <DataCorrection c={c} oldData={state.oldData} email={state.email.toLowerCase()} code={state.code} nextStep={nextStep} saveToRequestData={saveToParentState} />
            default:
                return null
        }
    };

    return (
        <div className={c.registerWrapper} >
            {renderStep()}                        
        </div>
    )
};