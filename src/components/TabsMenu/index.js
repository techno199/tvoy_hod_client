import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './style';

const TabsMenu = ({ value , handleChange, options }) => {
    const classes = useStyles();

    return (
        <div className={classes.tabsMenu}>
            <Tabs
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                value={value}
                onChange={handleChange}
                classes={{
                    indicator: classes.vp_indicator,
                    flexContainer: classes.vp_flexContainer
                }}
            >
                {
                    options.map(item => (
                        <Tab
                            classes={{
                                root: classes.vp_tabRoot
                            }}
                            key={item.id}
                            label={item.title}
                            disableRipple
                        />
                    ))
                }
            </Tabs>
        </div>
    )
};

export default TabsMenu;