import React from 'react'
import MaskedInput from 'react-text-mask';

export const PhoneMask = (props) => {
    const { inputRef, ...other } = props;

    return <MaskedInput
        {...other}
        mask={['+','7',' ','(',/\d/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/,]}
        className="MuiInputBase-input MuiInput-input"
        guide={true}
    />
}

export const DateMask = (props) => {
    const { inputRef, ...other } = props;

    return <MaskedInput
        {...other}
        mask={[/\d/,/\d/,'.',/\d/,/\d/,'.',/\d/,/\d/,/\d/,/\d/,]}
        className="MuiInputBase-input MuiInput-input "
    />
}

export const CodeMask = (props) => {
    const { inputRef, ...other } = props;

    return <MaskedInput
        {...other}
        mask={[/\d/,/\d/,/\d/,/\d/,/\d/]}
        className="MuiInputBase-input MuiInput-input "
    />
}