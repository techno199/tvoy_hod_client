import React, { useState, useEffect } from 'react';
import ParticipantSliderBlock from 'components/ParticipantSliderBlock/ParticipantSliderBlock';
import computer from 'images/computer.png';
import Slider from 'react-slick';
import { settingsParticipant } from 'utils/settingsForSliders'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PARTICIPANT} from '../../CONSTANTS';
import DialogCustom from 'components/DialogCustom';
import FullInfo from 'components/FullInfo/FullInfo';
import { useStyles } from './style';
import {Hidden} from "@material-ui/core";

const ParticipantSlider = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const [dataDialog, setDataDialog] = useState(null);

    useEffect(() => {
        if(dataDialog) {
            setOpenDialog(true)
        }
    }, [dataDialog]);

    useEffect(() => {
        if(!openDialog && dataDialog) {
            setDataDialog(null)
        }
        //eslint-disable-next-line
    }, [openDialog]);

    const visibleFullInfo = (id) => () => {
        const find = PARTICIPANT.find(i => i.id === id);
        setDataDialog(find)
    };

    return (
        <div className={classes.ParticipantSlider}>
            <h3 className={classes.heading}>
                <Hidden mdDown>
                    <img src={computer} alt="computer" />
                </Hidden>
                <span className={classes.wrapSpan}> Проекты участников,<br/> которые {' '}
                <span>меняют мир к лучшему</span></span>
            </h3>

            <Slider {...settingsParticipant} className={classes.slider}>
                {
                    PARTICIPANT.map((item,ind) => (
                        <ParticipantSliderBlock
                            key={item.id}
                            title={item.short.title}
                            subTitle={item.short.subTitle}
                            description={item.short.description}
                            fio={item.short.fio}
                            position={item.short.position}
                            imgSrc={item.short.imgSrc}
                            additionally={item.short.additionally}
                            onClick={visibleFullInfo(item.id)}
                            background={item.short.background}
                            color={item.short.color}
                            index={ind}
                        />
                    ))
                }
            </Slider>

            <DialogCustom
                widthDialog={1016}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                scroll={'body'}
                noFullScreen
            >
                <FullInfo
                    data={dataDialog?.full}
                />
            </DialogCustom>
        </div>
    )
};

export default ParticipantSlider;