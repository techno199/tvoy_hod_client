import React            from 'react';
import CornerPixel      from 'UI/CornerPixel/CornerPixel';
import { useStyles }    from './style';

const DescriptionChallenge = ({ typesThinking, resultScales, colorLine }) => {
    const classes = useStyles();

    return (
        <div className={classes.descriptionChallenge}>
            <h3 className={classes.descriptionChallengeHeading}>Описание вызовов</h3>

            {
                Object.entries(resultScales()).map(([key, item]) => {

                    const Icon = colorLine?.current[key]?.icon;

                    return (
                        <div key={key} className={classes.oneChallenge}>
                            <div className={classes.oneChallengeVal}>
                                {Icon ? <Icon color={'#1b1b1b'}/> : null}
                                <div className={classes.valueData}>
                                     <span
                                         className={classes.colorHelper}
                                         style={{background: colorLine?.current[key]?.bgColor}}
                                     />
                                    <CornerPixel color={'#C4C4C4'} />
                                    <span
                                        className={classes.valueTitle}
                                        dangerouslySetInnerHTML={{__html: item.header}}
                                    />
                                    <div
                                        className={classes.colorLine}
                                        style={{
                                            background: colorLine?.current[key]?.bgColor || '#fff',
                                            width: `calc(${typesThinking()[key].value * 10}% - 12px)`
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className={classes.descriptionChallengeText}
                                dangerouslySetInnerHTML={{__html: item.content}}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default DescriptionChallenge;