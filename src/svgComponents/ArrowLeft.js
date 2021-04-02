import React from 'react'

export const ArrowLeft = (props) => (
    <svg className={props.className} style={{...props.style}} onClick={props.onClick} width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="64.6523" y="63.7461" width="63.7463" height="63.7463" transform="rotate(-180 64.6523 63.7461)" fill="#5CC0C4"/>
        <rect x="29.6523" y="34.7461" width="5" height="5" transform="rotate(-180 29.6523 34.7461)" fill="white"/>
        <rect x="34.6523" y="39.7461" width="5" height="5" transform="rotate(-180 34.6523 39.7461)" fill="white"/>
        <rect x="39.6523" y="44.7461" width="5" height="5" transform="rotate(-180 39.6523 44.7461)" fill="white"/>
        <rect x="34.6523" y="29.7461" width="5" height="5" transform="rotate(-180 34.6523 29.7461)" fill="white"/>
        <rect x="39.6523" y="24.7461" width="5" height="5" transform="rotate(-180 39.6523 24.7461)" fill="white"/>
    </svg>
)