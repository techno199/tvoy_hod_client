import { Collapse, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Collapsed = ({
    stage,
    status,
    body,
    intenders,
    classes,
}) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={classes.collapsedItem} >
            <div className={classes.collapsedStage} >
                Этап {stage}
            </div>
            <div className={classes.status} >
                Статус:&nbsp;«{status}»
            </div>
            <Collapse in={collapsed}>
                <div className={classes.hidden} >
                    {!!intenders && (
                        <div className={classes.intenders} >
                            {intenders}
                        </div>
                    )}
                    <div className={classes.body} >
                        {body}
                    </div>
                </div>
            </Collapse>


            <IconButton
                onClick={() => setCollapsed(!collapsed)}
                className={classes.IconButton}
            >
                <ExpandMoreIcon />
            </IconButton>
        </div>
    )
}
