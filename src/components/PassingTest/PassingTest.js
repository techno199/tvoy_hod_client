import React, { useContext }  from 'react';
import { Redirect }           from 'react-router-dom';
import OutputRadioButtons     from 'components/OutputRadioButtons/OutputRadioButtons';
import OutputCheckboxes       from 'components/OutputCheckboxes/OutputCheckboxes'
import AnimateLoader          from 'svgComponents/AnimateLoader';
import ButtonPixel            from 'UI/ButtonPixel/ButtonPixel';
import CornerPixel            from 'UI/CornerPixel/CornerPixel';
import chess                  from 'images/chess.svg';
import moment                 from 'moment'
import { TEST_ONLINE }        from '../../CONSTANTS';
import { useHookTests }       from 'HOC/useHook/useHookTests';
import { AuthContext }        from 'context/AuthContext/AuthContext';
import { vipUser }            from 'utils/vipUsers';
import { useStyles }          from './style';

const PassingTest = ({ nameTest }) => {
    const classes = useStyles();
    const { state : stateContext } = useContext(AuthContext);
    const data = useHookTests({ nameTest });

    const findTest = () => {
        return TEST_ONLINE.find(i => i.link === nameTest)
    };

    if(moment(findTest().dateStart).isAfter(stateContext.currentDate) && !vipUser(stateContext)) {
        return <Redirect to={'/lk/tests'} />
    }

    return (
        <div className={classes.PassingTest}>
            <h3 className={classes.titleTest}>{data.switchTest().attributes.title}</h3>

            <div className={classes.card}>
                <div
                    className={classes.cardHeader}
                    style={{
                        backgroundColor: data.colorTest()
                    }}
                >
                    {
                        nameTest ===  '20210203-170332-8692'
                            ? <img src={chess} className={classes.dopImg} alt="dopImg"/>
                            : null
                    }
                </div>

                <div className={classes.testContent}>
                    <CornerPixel color={'#C4C4C4'} />

                    <span
                        className={classes.counter}
                        style={{
                            color: data.colorTest()
                        }}
                    >
                        {data.stepTest()}/{data.countQuestions()}
                    </span>

                    <p className={classes.questionTitle}
                       dangerouslySetInnerHTML={{__html: data.questionData().text}}
                    />

                    <div>
                        {
                            data.typeSelection() === 'single'
                                ? <OutputRadioButtons data={data} />
                                : <OutputCheckboxes data={data} nameTest={nameTest} />
                        }
                    </div>

                    <div className={classes.buttonsBlock}>
                        {
                            nameTest !== '20210305-140818-8208' ?
                                <ButtonPixel
                                    className={classes.backButton}
                                    disabled={data.disabledBackButton()}
                                    onClick={data.back}
                                    colorType={'red'}
                                >
                                    Вернуться назад
                                </ButtonPixel>: null
                        }

                        <ButtonPixel
                            className={classes.forwardButton}
                            disabled={data.disasbledForwardButton()}
                            onClick={!data.endQuestions() ? data.forward : data.forwardFinish}
                            colorType={data.colorTypeButton()}
                        >
                            {
                                data.loading
                                    ? <>Подождите... <AnimateLoader className={'loader'} color={'#fff'} /></>
                                    : !data.endQuestions()
                                        ? 'Следующий'
                                        : 'Показать результаты'
                            }
                        </ButtonPixel>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PassingTest;