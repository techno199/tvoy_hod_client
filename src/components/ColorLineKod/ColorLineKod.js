import React            from 'react';
import CornerPixel      from 'UI/CornerPixel/CornerPixel';
import { useStyles }    from './style';

const ColorLineKod = ({ typesThinking, colorLine }) => {
    const classes = useStyles();

    return (
        <div>
            <h3 className={classes.heading}>Личностные особенности</h3>

            <div>
                {
                    Object.entries(typesThinking()).map(([key, item]) => {
                        return (
                            <div
                                key={key}
                                className={classes.lineWrap}
                            >
                                <CornerPixel color={'#C4C4C4'} />
                                <div
                                    className={`
                                        ${classes.fullLineColor}
                                        ${item.value > 5.5
                                            ? classes.colorRight
                                            : item.value < 5.5
                                                ? classes.colorLeft
                                                : ''
                                        }
                                    `}
                                    style={{
                                        background: colorLine.current[key],
                                        width: item.value > 5.5
                                            ? `calc(${item.value * 10}% - 16px)`
                                            : `calc(${(10 - item.value) * 10}% - 16px)`,
                                        left: item.value >= 5.5 ? 0 : 'auto',
                                        right: item.value < 5.5 ? 0 : 'auto',
                                    }}
                                />

                                <div className={`${classes.blockLine} ${classes.blockLeft}`}>
                                    <div
                                        className={classes.progressLeft}
                                        style={{
                                            zIndex: item.value >= 5.5 ? 3 : -1
                                        }}
                                    />
                                    <span
                                        className={classes.lineTitle}
                                        style={{
                                            color: item.value > 5.5 ? '#717784' : '#1B1B1B'
                                        }}
                                    >
                                        {item.titleMin}
                                    </span>
                                </div>

                                <div
                                    className={classes.middle}
                                    style={{
                                        background: colorLine.current[key]
                                    }}
                                />

                                <div className={`${classes.blockLine} ${classes.blockRight}`}>
                                    <div
                                        className={classes.progressRight}
                                        style={{
                                            zIndex: item.value <= 5.5 ? 3 : -1
                                        }}
                                    />
                                    <span
                                        className={`${classes.lineTitle} ${classes.rightTitle}`}
                                        style={{
                                            color: item.value < 5.5 ? '#717784' : '#1B1B1B'
                                        }}
                                    >
                                        {item.titleMax}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ColorLineKod;