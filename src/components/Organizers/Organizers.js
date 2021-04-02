import React from 'react';
import Slider from 'react-slick';
import OneOrganizer from 'components/OneOrganizer/OneOrganizer';
import {settingsOrganizers} from 'utils/settingsForSliders';
import {ORGANIZERS} from '../../CONSTANTS';
import { useStyles } from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Organizers = ({inner}) => {
    const classes = useStyles();
  
    return (
        <div className={classes.Organizers}>
            {inner || <h3 className={classes.heading}>
                Спасибо всем организаторам <br/>
                и партнерам, <span>благодаря которым <br/>
                состоялась Большая перемена 2020</span>
            </h3>}

            <Slider {...settingsOrganizers} className={classes.slider}>
                {
                    ORGANIZERS.map((item, ind) => (
                        <OneOrganizer
                            key={item.id}
                            imgSrc={item.imgSrc}
                            text={item?.text}
                            first={ind === 0}
                            last={ind === (ORGANIZERS.length - 1)}
                        />
                    ))
                }
            </Slider>
        </div>
    )
};

export default Organizers;