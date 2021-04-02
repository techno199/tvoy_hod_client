import React from 'react';
import { useStyles } from './style';

const ParticlePixelBorder = ({ color,disableMobile }) => {
    const classes = useStyles({color, disableMobile});

    return (
        <>
           <div className={classes.tripleLeft} >
               <div className={classes.filled}/>
               <div className={classes.filled}/>
               <div className={classes.filled} />
               <div className={classes.empty} />
           </div>
            <div className={classes.tripleRight} >
                <div className={classes.filled} />
                <div className={classes.filled}/>
                <div className={classes.empty} />
                <div className={classes.filled} />
            </div>
            <div className={classes.singleRight} />
            <div className={classes.singleLeft} />

        </>
    )
};

export default ParticlePixelBorder;