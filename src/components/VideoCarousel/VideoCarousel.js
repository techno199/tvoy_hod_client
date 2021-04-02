import React from 'react'
import {useStyles} from './style'
import Slider from 'react-slick'
import { Player, LoadingSpinner } from 'video-react';

/*import finals from 'video/finals.mp4'
import mentors from 'video/mentors.mp4'
import semifinals from 'video/semifinals.mp4'*/
import {settingsVideos} from "utils/settingsForSliders";

const videos = [
    {
        link: '/video/dancers.mp4',
        preview: '/video/dancers.png',
    },
    {
        link: '/video/finals.mp4',
        preview: '/video/finals.png',
    },
    {
        link: '/video/season_finals.mp4',
        preview: '/video/season_finals.png',
    },
]


export const VideoCarousel = () => {

    const classes = useStyles()

    return (
    <section id='videoCarousel' className={classes.sect}>
        <div className={classes.videoCarouselContainer} >
            <Slider {...settingsVideos} >
                {videos.map((item, ind) => (
                    <div key={ind} className={classes.video}>
                        <div className={classes.headingVideo}>
                            <span className={`${classes.curcle} ${classes.red}`} />
                            <span className={`${classes.curcle} ${classes.yellow}`}  />
                            <span className={`${classes.curcle} ${classes.green}`} />
                        </div>

                        <Player poster={item.preview} autoPlay={false} src={item.link} preload={"none"}>
                            <LoadingSpinner />
                        </Player>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
    )
}