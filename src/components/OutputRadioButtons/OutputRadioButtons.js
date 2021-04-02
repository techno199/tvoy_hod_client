import React                    from 'react';
import Radio                    from '@material-ui/core/Radio';
import RadioGroup               from '@material-ui/core/RadioGroup';
import FormControlLabel         from '@material-ui/core/FormControlLabel';
import { CheckRadioButton }     from 'svgComponents/CheckRadioButton';
import { NoCheckedRadio }       from 'svgComponents/NoCheckedRadio';
import { useStyles }            from './style';

const OutputRadioButtons = ({ data }) => {
    const classes = useStyles();

    return (
        <RadioGroup
            name={data.getNameQ()}
            value={data.valueRadioGroup()}
            onChange={data.handleChange}
        >
            {
                data.getAnswers().map(([key, value]) => {
                    return (
                        <FormControlLabel
                            classes={{
                                label: classes.vp_label
                            }}
                            key={key}
                            value={key}
                            control={
                                <Radio
                                    icon={<NoCheckedRadio />}
                                    checkedIcon={<CheckRadioButton />}
                                    size={'small'}
                                    disableRipple
                                    classes={{
                                        root: classes.vp_radioRoot,
                                        checked: classes.vp_checked
                                    }}
                                />
                            }
                            label={value.text}
                        />
                    )
                })
            }
        </RadioGroup>
    )
};

export default OutputRadioButtons;