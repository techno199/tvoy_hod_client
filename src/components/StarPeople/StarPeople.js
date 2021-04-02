import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneStar from 'components/OneStar/OneStar';
import { useStyles } from './style';
import {STARS} from "../../CONSTANTS";
import {settingsStars} from "../../utils/settingsForSliders";
import {TitleStars} from "svgComponents/TitleStars";
import {Hidden} from "@material-ui/core";

const StarPeople = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.StarPeople}>

            <h3 className={classes.heading}>
                <Hidden mdDown>
                    <TitleStars/>
                </Hidden>
                Учись <span>у звездных наставников <br/> и побеждай!</span>
            </h3>
            <Slider {...settingsStars} className={classes.slider}>
                {
                    STARS.map(item => (
                        <OneStar
                            key={item.id}
                            fio={item.fio}
                            imageSrc={item.imageSrc}
                            title={item.title}
                        />
                    ))
                }
            </Slider>
        </div>
    )
};

export default StarPeople;