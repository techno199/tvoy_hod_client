import React from 'react'


export const OutNextArrow = (props) => (
    <svg className={props.className} style={{...props.style}} onClick={props.onClick} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="6" width="3" height="3" fill="#5CC0C4"/>
        <rect x="3" y="9" width="3" height="3" fill="#5CC0C4"/>
        <rect x="6" y="12" width="3" height="3" fill="#5CC0C4"/>
        <rect x="3" y="3" width="3" height="3" fill="#5CC0C4"/>
        <rect x="6" width="3" height="3" fill="#5CC0C4"/>
    </svg>

)