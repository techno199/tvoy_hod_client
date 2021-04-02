import React                            from 'react';
import CornerPixel                      from 'UI/CornerPixel/CornerPixel';
import { useStyles }                    from './style';

const ColorLineVektor = ({ typesThinking, progress, colorLine }) => {
    const classes = useStyles();

    return (
        <div>
            <h4 className={classes.headingTypeChallenge}>Факторный профиль интеллекта:</h4>
            {
                Object.entries(typesThinking()).map(([key, item]) => {
                    return (
                        <div key={key} className={classes.blockLine}>
                            <span
                                className={classes.colorHelper}
                                style={{background: colorLine.current[key]}}
                            />
                            <CornerPixel color={'#C4C4C4'} />
                            <div
                                className={classes.progress}
                                style={{
                                    background: colorLine.current[key],
                                    width: `calc(${progress(key)}% - 16px)`
                                }}
                            />
                            <span className={classes.lineTitle}>
                                {/*eslint-disable-next-line*/}
                                {item.title.replace(/[\+\)\(]/g, '').trim()}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ColorLineVektor;