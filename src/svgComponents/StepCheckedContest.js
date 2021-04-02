import React from 'react'

export const StepCheckedContest = ({ checked, color = 'white' }) => (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.05078" y="3.8125" width="48.0336" height="47.2712" fill="white"/>
        <rect x="4" y="4" width="46" height="45.0362" stroke={color} strokeWidth="8"/>
        {
            checked ?
                <>
                    <path d="M19.0688 27.1404H14V32.2092H19.0688V27.1404Z" fill="#6EDD9E"/>
                    <path d="M24.1431 32.207H19.0742V37.2759H24.1431V32.207Z" fill="#6EDD9E"/>
                    <path d="M34.2759 22.0664H29.207V27.1352H34.2759V22.0664Z" fill="#6EDD9E"/>
                    <path d="M29.2095 27.1404H24.1406V32.2092H29.2095V27.1404Z" fill="#6EDD9E"/>
                    <path d="M39.3501 17H34.2812V22.0688H39.3501V17Z" fill="#6EDD9E"/>
                </> : null
        }
    </svg>

);