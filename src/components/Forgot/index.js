import React, { useState } from 'react'
import { EmailEnter } from './Steps/EmailEnter'
import { PasswordEnter } from './Steps/PasswordEnter'
import { PhoneCodeEnter } from './Steps/PhoneCodeEnter'
import { SuccessfulPage } from './Steps/SuccessfulPage'
import { useRegisterStyles } from './style'

export const Forgot = () => {

    const c = useRegisterStyles();
    const [currentStep, setCurrentStep] = useState(1); //1

    const [state, setState] = useState({});
    const [attemptEmail, setAttemptEmail] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const tries_left = React.useRef(null);

    const saveToParentState = (obj) => setState({...state,...obj});

    const nextStep = () => setCurrentStep((prevStep) => ++prevStep);

    const renderStep = () => {
        switch(currentStep){
            case 1:
                return (
                    <EmailEnter
                        nextStep={nextStep}
                        saveToRequestData={saveToParentState}
                        setAttemptEmail={setAttemptEmail}
                        setSeconds={setSeconds}
                        tries_left={tries_left}
                    />
                );
            case 2: 
                return (
                    <PhoneCodeEnter
                        c={c}
                        email={state.email}
                        nextStep={nextStep}
                        saveToRequestData={saveToParentState}
                        attemptEmail={attemptEmail}
                        setAttemptEmail={setAttemptEmail}
                        seconds={seconds}
                        tries_left={tries_left}
                    />
                );
            case 3: 
                return (
                    <PasswordEnter
                        email={state.email}
                        code={state.code}
                        nextStep={nextStep}
                        saveToRequestData={saveToParentState}
                    />
                );
            case 4:
                return <SuccessfulPage />;

            default:
                return <SuccessfulPage />
        }
    };

    return (
        <div className={c.registerWrapper} >
            {renderStep()}        
        </div>
    )
};
