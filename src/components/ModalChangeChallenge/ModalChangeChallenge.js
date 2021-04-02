import React, { useState, useContext }      from 'react';
import { useParams }                        from 'react-router-dom';
import Radio                                from '@material-ui/core/Radio';
import RadioGroup                           from '@material-ui/core/RadioGroup';
import FormControlLabel                     from '@material-ui/core/FormControlLabel';
import ButtonPixel                          from 'UI/ButtonPixel/ButtonPixel';
import AnimateLoader                        from 'svgComponents/AnimateLoader';
import { IconNoCheckedModal }               from 'svgComponents/IconNoCheckedModal';
import { IconCheckedModal }                 from 'svgComponents/IconCheckedModal';
import { callToast }                        from 'utils/callToast';
import { errorHandler }                     from 'utils/errorHandler';
import { LkContext }                        from 'context/LkContext/LkContext';
import { useStyles }                        from './style';

const ModalChangeChallenge = ({ typesThinking, colorLine, activeChallenge, setOpenDialog }) => {
    const classes = useStyles();
    const { nameTest } = useParams();
    const { editChallenge } = useContext(LkContext);
    const [value, setValue] = useState(activeChallenge());
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const newChallenge = async () => {
        try {
            setLoading(true);
            await editChallenge({challenge: value}, nameTest);
            callToast({message: 'Вызов изменён'});
            setOpenDialog(false);
        } catch (err) {
            errorHandler(err);
            setLoading(false);
            throw err;
        }
    };

    return (
        <div className={classes.ModalChangeChallenge}>
            <h3 className={classes.heading}>Ваш вызов "{typesThinking()[activeChallenge()].title}"</h3>
            <span className={classes.subTitle}>Выберите новый вызов:</span>

            <div className={classes.wrapScroll}>
                <RadioGroup
                    name={'vysov'}
                    value={value}
                    onChange={handleChange}
                >
                    {
                        Object.entries(typesThinking()).map(([key, item]) => {
                            const Icon = colorLine.current[key].icon;

                            return (
                                <div
                                    className={classes.radioWrap}
                                    key={key}
                                    style={{
                                        order: activeChallenge() === key ? -1 : 0
                                    }}
                                >
                                    <div
                                        className={classes.iconBlock}
                                        style={{
                                            background: colorLine.current[key].bgColor
                                        }}
                                    >
                                        <Icon color={'#1b1b1b'} />
                                    </div>

                                    <div className={classes.radio}>
                                        <FormControlLabel
                                            classes={{
                                                root: classes.vp_formControlLabelRoot,
                                                label: classes.vp_label
                                            }}
                                            value={key}
                                            control={
                                                <Radio
                                                    icon={<IconNoCheckedModal />}
                                                    checkedIcon={<IconCheckedModal />}
                                                    size={'small'}
                                                    disableRipple
                                                    classes={{
                                                        root: classes.vp_radioRoot,
                                                        checked: classes.vp_checked
                                                    }}
                                                />
                                            }
                                            label={item.title}
                                        />
                                        <p className={classes.descText}>{colorLine.current[key].text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </RadioGroup>

                <div className={classes.buttonBlock}>
                    <ButtonPixel
                        disabled={loading}
                        height={61}
                        onClick={newChallenge}
                        colorType={'red'}
                    >
                        { loading
                            ?  <>Подождите...  <AnimateLoader className={'loader'} color={'#fff'} /></>
                            : 'Поменять вызов'
                        }
                    </ButtonPixel>
                </div>
            </div>
        </div>
    )
};

export default ModalChangeChallenge;