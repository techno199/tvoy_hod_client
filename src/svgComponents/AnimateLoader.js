import React from 'react';

const AnimateLoader = ({ color = '#00A4D8', className }) => {
    return (
        <svg className={className} width="30px" height="30px" viewBox="0 0 100 100">
            <g transform="rotate(0 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.7822685788787482s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(27.692307692307693 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.7170795306388525s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(55.38461538461539 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.6518904823989569s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(83.07692307692308 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.5867014341590612s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(110.76923076923077 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.5215123859191655s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(138.46153846153845 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.45632333767926986s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(166.15384615384616 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.3911342894393741s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(193.84615384615384 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.32594524119947843s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(221.53846153846155 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.26075619295958274s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(249.23076923076923 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.19556714471968706s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(276.9230769230769 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.13037809647979137s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(304.61538461538464 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s"
                             begin="-0.06518904823989569s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(332.3076923076923 50 50)">
                <rect x="46.5" y="9.5" rx="3.5" ry="5.7" width="7" height="19" fill={color}>
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.8474576271186439s" begin="0s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
        </svg>
    )
};

export default AnimateLoader;