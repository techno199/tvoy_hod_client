import React            from 'react';
import CornerPixel      from 'UI/CornerPixel/CornerPixel';
import { useStyles }    from './style';

const DescriptionsResultTestVektor = ({ resultScales, typesThinking, colorLine }) => {
    const classes = useStyles();

    return (
        <div className={classes.DescriptionsResultTest}>
            <h3 className={classes.heading}>Описание результатов</h3>

            {
                Object.entries(resultScales()).map(([key, item]) => {

                    return (
                        <div key={key} className={classes.oneResult}>
                            <div className={classes.oneResultVal}>
                                <div className={classes.valueData}>
                                    <span
                                        className={classes.colorHelper}
                                        style={{background: colorLine.current[key]}}
                                    />
                                    <CornerPixel color={'#C4C4C4'} />
                                    <span className={classes.valueTitle}
                                          dangerouslySetInnerHTML={{__html: item.header}}
                                    />
                                    <div
                                        className={classes.colorLine}
                                        style={{
                                            background: colorLine.current[key],
                                            width: `calc(${typesThinking()[key].value * 10}% - 12px)`
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                className={classes.descriptionText}
                                dangerouslySetInnerHTML={{__html: item.content}}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default DescriptionsResultTestVektor;

