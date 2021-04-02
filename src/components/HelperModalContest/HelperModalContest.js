import React                            from 'react';
import CornerPixel                      from 'UI/CornerPixel/CornerPixel'
import CornerPixelSlice                 from 'components/CornerPixelSlice/CornerPixelSlice';
import ButtonPixel                      from 'UI/ButtonPixel/ButtonPixel';
import { useStyles }                    from './style';

const HelperModalContest = ({ more, setVisibleMore }) => {
    const classes = useStyles();

    return (
        <div className={classes.HelperModalContest}>
            <CornerPixel color={'#2162AB'}/>

            <div className={classes.arrowStep}>
                {
                    Array.from(new Array(16)).map((_, ind) => (
                        <div
                            key={ind}
                            className={`${[2,5,7, 8, 11].includes(ind) ? classes.fill : ''}`}
                        />
                    ))
                }
            </div>

            {
                more.map(item => {
                    return (
                        <div key={item.id} className={classes.moreStep}>

                            <svg
                                className={classes.closeIcon}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setVisibleMore(false)}
                            >
                                <rect y="12" width="3" height="3" fill="#3B3F43"/>
                                <rect x="3" y="9" width="3" height="3" fill="#3B3F43"/>
                                <rect x="6" y="6" width="3" height="3" fill="#3B3F43"/>
                                <rect x="3" y="3" width="3" height="3" fill="#3B3F43"/>
                                <rect width="3" height="3" fill="#3B3F43"/>
                                <rect x="9" y="3" width="3" height="3" fill="#3B3F43"/>
                                <rect x="12" width="3" height="3" fill="#3B3F43"/>
                                <rect x="9" y="9" width="3" height="3" fill="#3B3F43"/>
                                <rect x="12" y="12" width="3" height="3" fill="#3B3F43"/>
                            </svg>

                            <div className={classes.numBlock}>
                                <CornerPixelSlice size={7} />
                                <img src={item.img} alt="num"/>
                            </div>

                            <div className={classes.textBlock}>
                                <h5 className={classes.textBlockHeading}>{item.title}</h5>
                                <span className={classes.text}>{item.text}</span>
                                <span className={classes.date}>{item.date}</span>
                            </div>
                        </div>
                    )
                })
            }

            <ButtonPixel
                colorType={'red'}
                className={classes.buttonPixelContest}
                width={122}
                height={40}
                onClick={() => setVisibleMore(false)}
            >
                Закрыть
            </ButtonPixel>
        </div>
    )
};

export default HelperModalContest;