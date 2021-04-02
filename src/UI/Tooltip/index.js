import { withStyles } from '@material-ui/core';
import MuiTooltip from '@material-ui/core/Tooltip'
import React from 'react'
import { InfoIcon } from 'svgComponents/InfoIcon'

const UIKitTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: 'Proxima Nova Rg',
        lineHeight: '21px',
        padding: 16,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 40px 40px rgba(0, 0, 0, 0.012037), 0px 25.9259px 23.4259px rgba(0, 0, 0, 0.0196296), 0px 15.4074px 12.7407px rgba(0, 0, 0, 0.025), 0px 8px 6.5px rgba(0, 0, 0, 0.0303704), 0px 3.25926px 3.25926px rgba(0, 0, 0, 0.037963), 0px 0.740741px 1.57407px rgba(0, 0, 0, 0.05)'
    },
    arrow: {
        color: 'white',
        fontSize: '18px'
    },
}))(MuiTooltip);


export const TooltipQuestion = ({
    title,
    body
}) => {
    return (
        <UIKitTooltip  title={
            <>
                <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: 8 }} >
                    {title}
                </div>
                <div style={{ fontSize: '16px' }} >
                    {body}
                </div>
            </>
        } placement="right-start">
            <div style={{ width: 50 }} >
                <InfoIcon />
            </div>
        </UIKitTooltip>
    )
};
