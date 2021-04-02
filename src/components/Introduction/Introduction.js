import React                    from 'react';
import { Link }                 from 'react-router-dom';
import { Fade }                 from '@material-ui/core';
import robot                    from 'images/robot.svg';
import CornerPixel              from 'UI/CornerPixel/CornerPixel';
import ButtonPixel              from 'UI/ButtonPixel/ButtonPixel';
import { useStyles }            from './style';

const Introduction = () => {
    const classes = useStyles();
  
    return (
        <Fade in timeout={800}>
            <div className={classes.Introduction}>
                <h3 className={classes.heading}>Мой конкурс</h3>
                <div className={classes.banner}>
                    <CornerPixel color={"#c4c4c4"} />
                    <div>
                        <h5 className={classes.headingBanner}>Пройди все тесты!</h5>
                        <p className={classes.text}>Здесь появятся задания по первому этапу конкурса, когда ты пройдешь все тесты.</p>
                        <Link to={'/lk/tests'} style={{textDecoration: 'none'}}>
                            <ButtonPixel colorType={'red'}>
                                Перейти к тестам
                            </ButtonPixel>
                        </Link>
                    </div>

                    <img className={classes.robot} src={robot} alt="robot"/>
                </div>
            </div>
        </Fade>
    )
};

export default Introduction;