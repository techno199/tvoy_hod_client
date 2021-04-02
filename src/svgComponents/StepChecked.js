import React from 'react'

export const StepChecked = ({ checked, color = '#fff', fill='none' }) => (
    <svg width="28" height="29" viewBox="0 0 28 29" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <rect x="1.75781" y="2.46948" width="24.7422" height="24.3018" stroke={color} strokeWidth="3"/>
        {
            checked
                ?   <>
                        <path d="M9.50957 14.4426H6.58203V17.3702H9.50957V14.4426Z" fill={color}/>
                        <path d="M12.4393 17.3687H9.51172V20.2962H12.4393V17.3687Z" fill={color}/>
                        <path d="M18.2908 11.512H15.3633V14.4395H18.2908V11.512Z" fill={color}/>
                        <path d="M15.365 14.4426H12.4375V17.3702H15.365V14.4426Z" fill={color}/>
                        <path d="M21.2244 8.58594H18.2969V11.5135H21.2244V8.58594Z" fill={color}/>
                    </>
                :   null
        }
    </svg>
);