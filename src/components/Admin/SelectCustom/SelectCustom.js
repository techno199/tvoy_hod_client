import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions  } from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnimateLoader from 'svgComponents/AnimateLoader';
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

const filterOptions = createFilterOptions({
    stringify: option => option.title
});

const SelectForFilter = ({options, handleValueSelect, value, readonly, disabled, errorData, placeholder, noArrow = false, async = false, loadingSearch, onChangeSearchField, topLabel, errorText, label = null, maskInput = null, customOptions}) => {
    const classes = useStyles({readonly, disabled, label});

    let inputPropsMask = {};
    if(maskInput) {
        inputPropsMask = {
            inputComponent: TextMaskCustom
        }
    }

    return (
        <>
            {topLabel ? <p className={classes.label}>{topLabel}</p>: null}
            <Autocomplete
                filterOptions={async ? (options, _) => options : filterOptions}
                popupIcon={!noArrow ? <ExpandMoreIcon /> : null}
                disabled={disabled}
                noOptionsText={'Не найдено'}
                disableClearable
                value={value}
                options={options}
                renderOption={(option) => (
                    <React.Fragment>
                        {customOptions ? option[customOptions] : option.title}
                    </React.Fragment>
                )}
                onChange={handleValueSelect}
                getOptionLabel={(option) => option.title}
                getOptionSelected={(option, value) => value?.id === option?.id}
                style={{ width: '100%' }}
                classes={{
                    root: classes.vpAutocompleteRoot,
                }}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        error={Boolean(errorData)}
                        placeholder={placeholder}
                        label={label}
                        variant="filled"
                        margin="dense"//делает ниже
                        onChange={onChangeSearchField ? onChangeSearchField : () => {}}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelRoot,
                                marginDense: classes.inputLabelMarginDense,
                                shrink: classes.vp_inputLabelShrink,
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            ...inputPropsMask,
                            disableUnderline: true, //пропадает нижняя линия
                            classes: {
                                root: classes.vp_filedRoot,
                                focused: classes.vp_focused,
                                error: classes.vp_errorFiled,
                            },
                            readOnly: Boolean(readonly),
                            endAdornment: loadingSearch && async ?
                                <InputAdornment position="end">
                                    <AnimateLoader className={classes.animateLoader} />
                                </InputAdornment> :
                                params.InputProps.endAdornment
                        }}
                        inputProps={{
                            ...params.inputProps,
                            mask:  maskInput,
                        }}
                        helperText={errorText}
                    />
                }
            />
        </>
    )
};

export default React.memo(SelectForFilter);