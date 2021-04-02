import React from 'react';
import { useStyles } from './style';
import CornerPixelSlice from "UI/CornerPixelSlice/CornerPixelSlice";
import ButtonPixel from "UI/ButtonPixel/ButtonPixel";
import {Stars} from "UI/Stars/Stars";

const ParticipantSliderBlock = ({ title, subTitle, description, fio, position, imgSrc, additionally, onClick,background, index,color }) => {
  const classes = useStyles({ additionally, background,color });

  return (
    <div className={classes.ParticipantSliderBlock}>
        <CornerPixelSlice color={'green'} size={14} />
		<div className={classes.wrapData}>
            {
                subTitle ?
                    <span className={classes.subTitle}>{subTitle}</span> : null
            }
            <h5 className={classes.heading}>{title}</h5>
            <p className={classes.text}>{description}</p>
            <ButtonPixel
                width={216}
                height={70}
                colorType={'red'}
                shadowColor={index === 0 ? '#1761AF' : index === 1 ? '#1F99C2' : '#292B6B' }
                onClick={onClick}
            >
                Подробнее о проекте
            </ButtonPixel>
        </div>

        <div className={classes.rightContent}>
            <Stars />
            <div className={classes.studentData}>
                <img className={classes.img} src={imgSrc} alt="volunteer"/>
                <div>
                    <h5 className={classes.nameHeading}>{fio}</h5>
                    <p className={classes.titleVolunteer}>{position}</p>
                    {
                        additionally ?
                            <p className={classes.subTitleVolunteer}>{additionally}</p> : null
                    }
                </div>
            </div>

            <ButtonPixel
                width={216}
                height={70}
                colorType={'red'}
                shadowColor={index === 1 ? '#1761AF' : index === 2 ? '#1F99C2' : '#292B6B' }
                onClick={onClick}
            >
                Подробнее о проекте
            </ButtonPixel>
        </div>
	</div>
  )
};

export default ParticipantSliderBlock;