import React from 'react';
import noPhoto from 'images/noPhoto.svg';
import { useStyles } from './style';
import CornerPixel from "UI/CornerPixel/CornerPixel";

const WinnerBlock = ({ fio, title, src, onClick }) => {
    const classes = useStyles();
  
    return (
        <div
            className={classes.WinnerBlock}
            onClick={onClick}
        >
            {
                src ?
                    <img src={src} className={classes.img} alt="photoWinner"/> :
                    <div className={classes.noPhoto}>
                        <img src={noPhoto} alt="noPhoto"/>
                    </div>
            }

            <div className={classes.textBox} >
                <CornerPixel color={'#272C5B'}/>

                <p className={classes.fio}>{fio}</p>
                <p className={classes.title}>{title}</p>
            </div>
        </div>
    )
};

export default WinnerBlock;