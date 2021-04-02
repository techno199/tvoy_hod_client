import React from 'react'


export const OutPrevArrow = (props) => (
    <svg className={props.className} style={{...props.style}} onClick={props.onClick} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="9" width="3" height="3" transform="rotate(-180 9 9)" fill="#5CC0C4"/>
        <rect x="6" y="6" width="3" height="3" transform="rotate(-180 6 6)" fill="#5CC0C4"/>
        <rect x="3" y="3" width="3" height="3" transform="rotate(-180 3 3)" fill="#5CC0C4"/>
        <rect x="6" y="12" width="3" height="3" transform="rotate(-180 6 12)" fill="#5CC0C4"/>
        <rect x="3" y="15" width="3" height="3" transform="rotate(-180 3 15)" fill="#5CC0C4"/>
    </svg>

)