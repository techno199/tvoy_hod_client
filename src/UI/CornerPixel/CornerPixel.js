import React, { useCallback } from 'react';
import { useStyles } from './style';

const CornerPixel = ({ color, size, mainColor }) => {
    const classes = useStyles({size, mainColor});

    const colorBackground = useCallback((index) => {
        let coord;

        switch(index) {
            case 0:
                coord = [6,8];
            break;

            case 1:
                coord = [4,8];
            break;

            case 2:
                coord = [2,4];
            break;

            default:
                coord = [2,6]
        }
        return coord;
    }, []);

    const classesPixel = useCallback((ind) => {
        switch(ind) {
            case 0:
                return 'leftTop';

            case 1:
                return 'rightTop';

            case 2:
                return 'rightBottom';

            default:
                return 'leftBottom'
        }
    }, []);

    return (
        <>
            {
                Array.from(new Array(4)).map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={`${classes.CornerPixel} ${classesPixel(index)}`}

                            style={{
                                left: index === 0 || index === 3 ? -5 : 'auto',
                                top: index === 0 || index === 1 ? -5 : 'auto',
                                right: index === 1 || index === 2 ? -5 : 'auto',
                                bottom: index === 2 || index === 3 ? -5 : 'auto',
                            }}
                        >
                            {
                                Array.from(new Array(9)).map((_, ind) => {
                                    return (
                                        <div
                                            key={ind}
                                            style={{
                                                background: colorBackground(index).includes(ind + 1) ? color : 'transparent',
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    )

                })
            }
        </>
    )
};

export default CornerPixel;