import React from 'react';
import { useStyles } from './style';
import {PixelBox} from "UI/PixelBox/PixelBox";
import pixelLamp from 'images/pixelLamp.png'
import pixelSchool from 'images/pixelSchool.png'
import pixelProtractor from 'images/pixelProtractor.png'
import pixelCup from 'images/pixelCup.png'
import pixelRocketUp from 'images/pixelRocketUp.png'
import pixelTreasure from 'images/treasure.png'

const InCountContest = () => {
  const classes = useStyles();

  return (
    <div className={classes.InCount}>
		<h3 className={classes.heading}>Конкурс <span>“Большая перемена”</span><br/> в 2020 году</h3>

        <div className={classes.countBlocks}>
            <PixelBox
                number={1004278}
                title={'число участников нашего сообщества'}
                icon={pixelLamp}
                iconPosition={'left'}
                topOffset={'-90px'}
                mobileTopOffset={'-65px'}
                color={'#F6802C'}
            />
            <PixelBox
                number={11232}
                title={'школ-участниц'}
                icon={pixelSchool}
                iconPosition={'left'}
                color={'#2162AB'}
                topOffset={'-54px'}
            />
            <PixelBox
                number={18000}
                title={'педагогов-наставников'}
                icon={pixelProtractor}
                iconPosition={'left'}
                color={'#AA70CF'}
                topOffset={'-71px'}
            />
            <PixelBox
                number={40000}
                title={'проектов'}
                icon={pixelRocketUp}
                iconPosition={'left'}
                color={'#AA70CF'}
                topOffset={'-47px'}
            />
            <PixelBox
                number={600}
                title={'победителей'}
                icon={pixelCup}
                iconPosition={'left'}
                topOffset={'-43px'}
                mobileTopOffset={'-65px'}
                color={'#F6802C'}
            />
            <PixelBox
                number={300}
                title={'миллионеров в возрасте до 18 лет'}
                icon={pixelTreasure}
                iconPosition={'left'}
                color={'#2162AB'}
                topOffset={'-44px'}
            />
        </div>
	</div>
  )
};

export default InCountContest;