import React from 'react';
import { useStyles } from './style';

const VkAuth = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.VkAuth}>
            <div id="vk_auth" />
        </div>
    )
};

export default VkAuth;