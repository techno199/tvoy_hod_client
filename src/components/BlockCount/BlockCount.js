import React from 'react';
import { useStyles } from './style';

const BlockCount = ({count, text, imgSrc, flag}) => {
  const classes = useStyles({ flag });

  return (
    <div className={classes.BlockCount}>
		<h5 className={classes.heading}>{count.toLocaleString('ru')}</h5>
        <div className={classes.textAndIcon}>
            <p className={classes.text}>{text}</p>
            <img className={classes.img} src={imgSrc} alt="imgSrc"/>
        </div>
	</div>
  )
};

export default BlockCount;