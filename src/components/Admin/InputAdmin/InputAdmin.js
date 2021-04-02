import React from 'react';
import { OutlinedInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MaskedInput from 'react-text-mask';
import { useStyles } from './style';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            guide={false}
            mask={props.mask}
            placeholder={props.placeholdermask}
            showMask
        />
    );
}

const InputAdmin = ({ type = 'text', value, onChange = null, onBlur = null, error, name, label, errorText = '', placeholder = '', maskInput, disabled = false, labelFloat, capitalize}) => {
    const classes = useStyles({ labelFloat, capitalize });

    const other = {};
    if(onChange) {
        other.value = value
    } else {
        other.defaultValue = value
    }

    return (
        <FormControl
            classes={{
                root: classes.vp_formControl
            }}
        >
            {label ? <p className={classes.label}>{label}</p>: null}
            {
                labelFloat ?
                    <InputLabel
                        classes={{
                            root: classes.vp_inputLabelRoot,
                            shrink: classes.vp_inputLabelShrink
                        }}
                        htmlFor={name}
                    >{labelFloat}</InputLabel> :
                    null
            }
            <OutlinedInput
                id={name}
                disabled={disabled}
                type={type}
                {...other}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                error={error}
                placeholder={placeholder}
                inputComponent={maskInput && TextMaskCustom}
                inputProps={{
                    mask:  maskInput,
                    placeholdermask: placeholder,
                }}
                classes={{
                    root: classes.vp_root,
                    input: classes.vp_input,
                    focused: classes.vp_focused,
                    notchedOutline: classes.vp_notchedOutline,
                    disabled: classes.vp_disabled
                }}
            />
            {errorText ? <span className={classes.errorText}>{errorText}</span> : null}
        </FormControl>
    )
};

export default React.memo(InputAdmin);