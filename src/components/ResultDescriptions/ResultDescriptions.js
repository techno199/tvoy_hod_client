import React                    from 'react';
import CornerPixel              from 'UI/CornerPixel/CornerPixel';
import { useStyles }            from './style';

const ResultDescriptions = ({ typesThinking, fillSvgPercent, activeChallenge, resultScales }) => {
    const classes = useStyles({imageSrc: require(`../../images/activeChallenge${activeChallenge()}.svg`).default });

    return (
        <div className={classes.resultDescriptions}>
            <h3 className={classes.headingResult}>Описание результатов</h3>
            <div className={classes.suitable}>
                <CornerPixel color={'#C4C4C4'} />
                <div className={classes.textContent}>
                    <div className={classes.diagramBlock}>
                        <div data-per={typesThinking()[activeChallenge()].value * 10} className={classes.percent}>
                            <svg id="svg" width="40" height="40">
                                <circle r="18" cx="18" cy="18" fill="transparent" stroke="#DAEDE1" strokeWidth="4" transform="rotate(-90 20 18)"/>
                                <circle r="18" cx="18" cy="18" fill="transparent" stroke="#48A467" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${fillSvgPercent(typesThinking()[activeChallenge()].value * 10)}, 113.04`}  strokeDashoffset="0" transform="rotate(-90 20 18)"/>
                            </svg>
                        </div>

                        <div className={classes.diagramText}>
                            <span className={`${classes.top}`}>
                                Вызов “{typesThinking()[activeChallenge()].title}”
                            </span>
                            <span className={`${classes.bottom}`}>
                                подходит тебе на {typesThinking()[activeChallenge()].value * 10}%
                            </span>
                        </div>
                    </div>

                    <div className={classes.mainText}>
                        <h5 className={classes.headingMainText}>В этом вызове ты продолжишь участие в конкурсе.</h5>
                        <span className={classes.editChallenge}>Вызов можно изменить в любой момент до отправки на проверку задания "Представь себя".</span>
                        <div
                            className={classes.textChallenge}
                            dangerouslySetInnerHTML={{__html: resultScales()[activeChallenge()].content}}
                        />
                    </div>
                </div>

                <div className={classes.imgContent} />
            </div>
        </div>
    )
};

export default ResultDescriptions;