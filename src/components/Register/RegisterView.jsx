import { Box, Grid, useMediaQuery} from '@material-ui/core'
import React from 'react'
import TextField from 'UI/TextField'
import Title from 'UI/Title'
import PropTypes from 'prop-types'
import SelectCustom from 'components/Admin/SelectCustom/SelectCustom'
import BrandLink from 'UI/BrandLink/BrandLink'
import Button from 'UI/Button'
import RegisterMainStep from './_steps/RegisterMainStep'
import { REGISTER_STEPS } from './_constants/registerSteps'
import RegisterConfirmation from './_steps/RegisterConfirmation'

export default function RegisterView(props) {
    const {
        step,
        mainStepProps,
        confirmationProps
    } = props;

    return (
        <>
            {
                step === REGISTER_STEPS.MAIN && (
                    <RegisterMainStep
                        {...mainStepProps}
                    />
                )
            }

            {
                step === REGISTER_STEPS.CONFIRMATION && (
                    <RegisterConfirmation
                        {...confirmationProps}
                    />
                )
            }
        </>
    )
}

RegisterView.propTypes = {
    step: PropTypes.string,
    mainStepProps: PropTypes.shape({
        formik: PropTypes.object.isRequired,
        regions: PropTypes.array,
        universities: PropTypes.array,
        /** Активация ручного ввода названия универа */
        customUniversity: PropTypes.bool,
        onCustomUniversityRequest: PropTypes.func,
        onSubmit: PropTypes.func,
    }).isRequired,
    confirmationProps: PropTypes.shape({
        formik: PropTypes.object.isRequired,
        onSubmit: PropTypes.func,
    }).isRequired,
}