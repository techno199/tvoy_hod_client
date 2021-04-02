import React                from 'react';
import CornerPixel          from 'UI/CornerPixel/CornerPixel';
import { useStyles }        from './style';

const ColorLine = ({ colorLine, typesThinking }) => {
    const classes = useStyles();

    return (
        <div>
            <h4 className={classes.headingTypeChallenge}>Наиболее подходящие вызовы:</h4>
            {
                Object.entries(typesThinking()).map(([key,item]) => {
                    const Icon = colorLine?.current[key]?.icon;
                    return (
                        <div key={key} className={classes.blockLine}>
                            <span
                                className={classes.colorHelper}
                                style={{background: colorLine?.current[key]?.bgColor}}
                            />
                            <CornerPixel color={'#C4C4C4'} />
                            <div
                                className={classes.progress}
                                style={{
                                    background: colorLine?.current[key]?.bgColor || '#fff',
                                    width: `calc(${item.value * 10}% - 16px)`
                                }}
                            />
                            {Icon ? <Icon color="#1B1B1B"/> : null }
                            <span className={classes.lineTitle}>{item.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ColorLine;