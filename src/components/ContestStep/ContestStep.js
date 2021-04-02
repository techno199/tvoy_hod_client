import React, { useEffect, useState }   from 'react';
import HelperModalContest               from 'components/HelperModalContest/HelperModalContest';
import CornerPixelSlice                 from 'components/CornerPixelSlice/CornerPixelSlice';
import ButtonPixel                      from 'UI/ButtonPixel/ButtonPixel';
import { StepCheckedContest }           from 'svgComponents/StepCheckedContest';
import { ArrowStepContest }             from 'svgComponents/ArrowStepContest';
import moneyBonus                       from 'images/moneyBonus.svg';
import { useStyles }                    from './style';

const ContestStep = ({ item, ind }) => {
    const classes = useStyles();
    const [visibleMore, setVisibleMore] = useState(false);

    useEffect(() => {
        if(!visibleMore) {
            document.querySelector('#wrapLk').removeAttribute('style');
        }
    }, [visibleMore]);
  
    return (
        <>
            {
                visibleMore ?
                    <div
                        className={classes.layout}
                        onClick={() => setVisibleMore(false)}
                    /> : null
            }

            <div
                className={`${classes.oneStep} step${ind+1}`}
                style={{
                    background: item.bgColor,
                    zIndex: visibleMore && 357
                }}
            >
                {
                    item.more && visibleMore ?
                        <HelperModalContest more={item.more} setVisibleMore={setVisibleMore} /> :
                        null
                }

                <CornerPixelSlice size={5} />
                <StepCheckedContest
                    checked={item.checked}
                    color={item.disabled ? '#9D9FA1' : '#6EDD9E'}
                />
                <img className={classes.img} src={item.img} alt="img"/>

                {
                    item.id !== 1 ?
                        <div
                            className={classes.bonus}
                            style={{background: item.disabled && 'rgba(157, 159, 161, 0.2)'}}
                        >
                            <span
                                className={classes.score}
                                style={{color: item.disabled && '#9D9FA1'}}
                            >
                                {item.bonus}
                            </span>

                            <img
                                className={classes.moneyBonus}
                                src={moneyBonus}
                                alt="moneyBonus"
                            />
                        </div> : null
                }

                <h5
                    className={classes.title}
                    style={{color: item.disabled && '#9D9FA1'}}
                >
                    {item.title}
                </h5>
                <span
                    className={classes.date}
                    style={{color: item.disabled && '#9D9FA1'}}
                >
                    {item.date}
                </span>

                <div className={classes.textButton}>
                    <span
                    className={classes.text}
                    style={{color: item.disabled && '#9D9FA1'}}
                >
                        {item.text}
                    </span>
                </div>

                {
                    item.id !== 1 ?
                        <ButtonPixel
                            disabled={item.disabled}
                            colorType={'red'}
                            className={classes.buttonPixelContest}
                            width={122}
                            height={40}
                            onClick={() => {
                                if(item.more) {
                                    setVisibleMore(true);

                                    setTimeout(() => {
                                        const HeightDoc = document.body.offsetHeight;
                                        const HeightScrollDoc = document.body.scrollHeight;
                                        if(HeightDoc < HeightScrollDoc) {
                                            document.querySelector('#wrapLk').style.minHeight = HeightScrollDoc + 'px'
                                        }
                                    }, 0)
                                }
                            }}
                        >
                            Подробнее
                        </ButtonPixel> : null
                }

                {
                    item.id !== 5 ?
                        <ArrowStepContest fill={item.id !== 1 ? '#9D9FA1' : '#6EDD9E'}/> :
                        null
                }
            </div>
        </>
    )
};

export default ContestStep;