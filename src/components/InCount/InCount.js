import React from 'react';
import { useStyles } from './style';
import {PixelBox} from "UI/PixelBox/PixelBox";
import pixelLamp from 'images/pixelLamp.png'
import pixelBag from 'images/pixelBag.png'
import pixelRocket from 'images/pixelRocket.png'

const InCount = () => {
  const classes = useStyles();

  return (
    <div className={classes.InCount}>
		<h3 className={classes.heading}>Сообщество <span>“Большая перемена”</span> в цифрах</h3>

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
                title={'школы к нам присоединилось'}
                icon={pixelBag}
                iconPosition={'left'}
                color={'#2162AB'}
                topOffset={'-54px'}
            />
            <PixelBox
                number={18000}
                title={'педагогов - наставников'}
                icon={pixelRocket}
                iconPosition={'left'}
                color={'#AA70CF'}
                topOffset={'-47px'}
            />
        </div>
	</div>
  )
};

export default InCount;