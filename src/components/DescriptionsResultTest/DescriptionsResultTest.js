import React from 'react';
import { useStyles } from './style';

const DescriptionsResultTest = ({ resultScales, colorLine }) => {
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
                                    <div
                                        className={classes.colorLine}
                                        style={{
                                            background: colorLine.current[key],
                                        }}
                                    />
                                </div>
                                <span className={classes.valueTitle}
                                      dangerouslySetInnerHTML={{
                                          __html: item.level === 3
                                              ? item.header + ' или ' + item.footer
                                              : item.level < 3 ? item.footer : item.header
                                      }}
                                />
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

export default DescriptionsResultTest;

