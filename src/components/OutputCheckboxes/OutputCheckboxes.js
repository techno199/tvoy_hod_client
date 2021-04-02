import React                        from 'react';
import { Fade }                     from '@material-ui/core';
import FormControlLabel             from '@material-ui/core/FormControlLabel';
import FormGroup                    from '@material-ui/core/FormGroup';
import Checkbox                     from '@material-ui/core/Checkbox';
import { NoCheckedButton }          from 'svgComponents/NoCheckedButton';
import { CheckedIconVector }        from 'svgComponents/CheckedIconVector';
import useMediaQuery                from '@material-ui/core/useMediaQuery';
import { useStyles }                from './style';

const OutputCheckboxes = ({ data, nameTest }) => {
    const classes = useStyles({ onlyImage: Boolean(data.getAnswers()[0][1].image)});
    const isMob = useMediaQuery('(max-width:800px)');

    const checkIcon = () => {
        return (
            <CheckedIconVector
                color={nameTest === '20210305-140818-8208' ? '#2C73BF' : '#52A0D8'}
            />
        )
    };

    const rowBool = () => {
        return (Boolean(data.questionData().image) && !isMob) || (nameTest === '20210305-140818-8208' && !isMob)
    };

    return (
        <div className={classes.OutputCheckboxes}>
            {
                data.questionData().image
                    ? <img
                            className={classes.img}
                            src={require(`../../images/${data.questionData().image}`).default}
                            alt="imageTest"
                    />
                    : null
            }

            <FormGroup
                row={rowBool()}
                classes={{
                    root: classes.vp_formGroupRoot,
                    row: classes.vp_row
                }}
            >
                {
                    data.getAnswers().map(([key, value]) => {
                        return (
                            <FormControlLabel
                                key={key}
                                classes={{
                                    root: classes.vp_rootFormControlLabel,
                                    label: classes.vp_label
                                }}
                                control={
                                    <Checkbox
                                        disabled={data.disabledChecked(key) && !data.checkedValue(key)}
                                        icon={
                                            value.image
                                                ?   <Fade in timeout={800}>
                                                        <span>
                                                            <img
                                                                className={classes.imgCheck}
                                                                src={require(`../../images/${value.image}`).default}
                                                                alt="imageCheckbox"
                                                            />
                                                        </span>
                                                    </Fade>
                                                :   <NoCheckedButton />}
                                        checkedIcon={
                                            value.image
                                                ?   <Fade in timeout={800}>
                                                        <span className={classes.wrapCheck}>
                                                            <img
                                                                className={classes.imgCheck}
                                                                src={require(`../../images/${value.image}`).default}
                                                                alt="imageCheckbox"
                                                            />
                                                       </span>
                                                    </Fade>
                                                :   checkIcon()
                                        }
                                        checked={data.checkedValue(key)}
                                        onChange={data.handleChangeCheckbox}
                                        name={key}
                                        disableRipple
                                        size={'small'}
                                        classes={{
                                            root: classes.vp_rootCheckbox,
                                            checked: classes.vp_checked,
                                            disabled: classes.vp_disabled
                                        }}
                                    />
                                }
                                label={value.text ? value.text : null}
                            />
                        )
                    })
                }
            </FormGroup>
        </div>
    )
};

export default OutputCheckboxes;