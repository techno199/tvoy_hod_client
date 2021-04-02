import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import WinnerBlock from 'components/WinnerBlock/WinnerBlock';
import OneWinner from 'components/OneWinner/OneWinner';
import DialogCustom from 'components/DialogCustom';
import { settingsWinners } from 'utils/settingsForSliders';
import { WINNERS } from '../../CONSTANTS';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from './style';
import pixelDarts from 'images/pixelDarts.svg'
import {Hidden} from "@material-ui/core";

const Winners = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [dataDialog, setDataDialog] = useState(null);

    useEffect(() => {
        if(dataDialog) {
            setOpenDialog(true)
        }
        //eslint-disable-next-line
    }, [dataDialog]);

    useEffect(() => {
        if(!openDialog && dataDialog) {
            setDataDialog(null)
        }
        //eslint-disable-next-line
    }, [openDialog]);

    const visibleWinner = (id) => () => {
        const findWinner = WINNERS.find(i => i.id === id)
        setDataDialog(findWinner)
    };

    return (
        <div className={classes.Winners}>
            <h3 className={classes.heading}>
                <div>Наши победители расскажут <br/>
                    <span>тебе о своем опыте</span></div>
                <Hidden mdDown>
                    <img alt={'дартс'} src={pixelDarts} />
                </Hidden>
            </h3>

            <Slider {...settingsWinners} className={classes.slider}>
                {
                    WINNERS.map(item => (
                        <WinnerBlock
                            key={item.id}
                            fio={item.fio}
                            title={item.titleShort}
                            src={item.imgSrc}
                            onClick={visibleWinner(item.id)}
                        />
                    ))
                }
            </Slider>

            <DialogCustom
                widthDialog={1016}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                noFullScreen
                scroll={'body'}
            >
                <OneWinner
                    data={dataDialog}
                />
            </DialogCustom>
        </div>
    )
};

export default Winners;