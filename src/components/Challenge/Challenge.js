import React from 'react';
import ChallengeBlock from 'components/ChallengeBlock/ChallengeBlock';
import {CHALLENGE} from '../../CONSTANTS';
import { useStyles } from './style';
import pixelFire from 'images/pixelFire.png'
import {Hidden} from "@material-ui/core";

const Challenge = () => {
    const classes = useStyles();

    return (
        <div className={classes.Challenge}>
            <h3 className={classes.heading}>
                У нас проходят <br/>
                <span>крутые челленджи, конкурсы <br/>
                <Hidden mdDown>
                    <img alt={'огонь'} src={pixelFire} className={classes.fireImage} />
                </Hidden>
                и активности для всех!</span>
            </h3>

            {
                CHALLENGE.map((item, ind) => (
                    <ChallengeBlock
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        imgSrc={item.imgSrc}
                        href={item.href}
                        endData={item.endData}
                        even={(ind + 1) % 2 === 0}
                        icon={item.icon}
                        topOffset={item.topOffset}
                        leftOffset={item.leftOffset}
                    />
                ))
            }
        </div>
    )
};

export default Challenge;