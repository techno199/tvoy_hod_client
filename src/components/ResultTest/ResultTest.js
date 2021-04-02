import React, { useState, useContext }                  from 'react';
import { Redirect }                                     from 'react-router-dom';
import { Fade }                                         from '@material-ui/core';
import ButtonPixel                                      from 'UI/ButtonPixel/ButtonPixel';
import CircularProgress                                 from '@material-ui/core/CircularProgress';
import ResultTvoiVybor                                  from 'components/ResultTvoiVybor/ResultTvoiVybor';
import ResultTvoiVektor                                 from 'components/ResultTvoiVektor/ResultTvoiVektor';
import ResultTvoiKod                                    from 'components/ResultTvoiKod/ResultTvoiKod';
import SaveAltIcon                                      from '@material-ui/icons/SaveAlt';
import AnimateLoader                                    from 'svgComponents/AnimateLoader';
import { useHookResultTest }                            from 'HOC/useHook/useHookResultTest';
import html2pdf                                         from 'html2pdf.js'
import { visibleTest }                                  from 'utils/visibleTest';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { useStyles }                                    from './style';

const ResultTest = () => {
    const classes = useStyles();
    const { state : stateContext } = useContext(AuthContext);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const data = useHookResultTest();

    const resultBlock = () => {
        switch (data.nameTest) {
            case '20210203-170332-8692':
                return (
                    <ResultTvoiKod
                        typesThinking={data.typesThinking}
                        resultScales={data.resultScales}
                    />
                );

            case '20210205-152506-2643':
                return (
                    <ResultTvoiVektor
                        typesThinking={data.typesThinking}
                        progress={data.progress}
                        recommendations={data.recommendations}
                        resultScales={data.resultScales}
                    />
                );

            case '20210305-140818-8208':
                return (
                    <ResultTvoiVybor
                        progress={data.progress}
                        fillSvgPercent={data.fillSvgPercent}
                        typesThinking={data.typesThinking}
                        activeChallenge={data.activeChallenge}
                        resultScales={data.resultScales}
                    />
                );

            default:
                return <div>Теста не существует</div>
        }
    };

    if(!visibleTest(stateContext)) {
        return <Redirect to={'/lk'} />
    }


    if(data.loading || !data.passedTests[data.nameTest]) {
        return (
            <div className={classes.loadingPage}>
                <CircularProgress disableShrink  size={50}/>;
            </div>
        )
    }

    return (
        <Fade in timeout={800}>
            <div className={classes.ResultTest}>
                <h3 className={classes.heading}>
                    Результат теста "{data.currentTest().result.metadata.testTitle}"

                    <span className={classes.rightContent}>
                        <span
                            className={classes.print}
                            onClick={() => window.print()}
                        >
                            Распечатать <SaveAltIcon />
                        </span>

                        <ButtonPixel
                            width={162}
                            height={53}
                            disabled={loadingPdf}
                            colorType={'red'}
                            onClick={() => {
                                setLoadingPdf(true);
                                let element = document.getElementById('page');

                                let opt = {
                                    margin:        [20, 0],
                                    filename:     'myfile.pdf',
                                    image:        { type: 'jpeg', quality: 0.98 },
                                    html2canvas:  { scale: 2 },
                                    jsPDF:        { unit: 'pt', format: 'a4'},
                                    precision:     10
                                };
                                html2pdf().set(opt).from(element).save().then(() => setLoadingPdf(false));
                            }}
                        >
                            { loadingPdf ? <AnimateLoader className={'loader'} color={'#fff'} /> : 'Сохранить'}
                        </ButtonPixel>
                    </span>
                </h3>

                <p className={classes.datePassed}>
                    Дата прохождения:&nbsp;
                    <span>
                        {data.currentTest().test_date.date.slice(0, 10).split('-').reverse().join('.')}
                    </span>
                </p>
                { resultBlock() }
            </div>
        </Fade>
    )
};

export default ResultTest;