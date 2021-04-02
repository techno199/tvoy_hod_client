import React from 'react';
import { VKicon } from 'svgComponents/VKicon'
import { useStyles } from './style';
import sandClocks from 'images/sandClocks.svg'
import OutlinedButtonPixel from "UI/OutlinedButtonPixel/OutlinedButtonPixel";

const ChallengeBlock = ({ title, imgSrc, href, text, endData, even, topOffset, leftOffset, icon }) => {
  const classes = useStyles({ even });

  return (
    <div className={classes.ChallengeBlock}>
        <div className={classes.imgWrap}>
            <img alt={'иконка блока'} src={imgSrc}/>
        </div>

        <div className={classes.textContent}>
            <h5 className={classes.heading}>{title}</h5>
            <div className={classes.text}>{text}</div>
            <OutlinedButtonPixel
                shadowColor={'#EAF3FF'}
                mainColor={'#3F94F6'}
                darkColor={'#2787F5'}
                lightColor={'#6DB1FF'}
                width={216}
                height={60}
            >
                <a href={href} className={classes.link} target={'_blank'} rel={'noreferrer'}>
                    Узнать больше
                    <VKicon />
                </a>
            </OutlinedButtonPixel>
            <div className={classes.data}>
                <span>
                    <img alt={'песочные часы'} src={sandClocks} />
                </span>
                Завершение {endData}
            </div>
        </div>
	</div>
  )
};

export default ChallengeBlock;