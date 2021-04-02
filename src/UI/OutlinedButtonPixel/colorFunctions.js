export function buttonPixel (props) {
    const buttonPixel = {};
    switch(props.colorType) {
        case 'red':
            buttonPixel['background'] = '#FF7271';
            buttonPixel['borderTop'] = `${props.borderWidth || '7px'} solid #FF9F9E`;
            buttonPixel['borderBottom'] = `${props.borderWidth || '7px'} solid #F45553`;
            break;

        case 'violet':
            buttonPixel['background'] = '#AA70CF';
            buttonPixel['borderTop'] = `${props.borderWidth || '7px'} solid #C78EEC`;
            buttonPixel['borderBottom'] = `${props.borderWidth || '7px'} solid #9A52C8`;
            break;

        default:
            buttonPixel['background'] = props.mainColor;
            buttonPixel['borderTop'] = `${props.borderWidth || '7px'} solid ${props.lightColor}`;
            buttonPixel['borderBottom'] = `${props.borderWidth || '7px'} solid ${props.darkColor}`;
    }

    return buttonPixel;
}

export function buttonPixelHover (props) {
    const buttonPixelHover = {};
    switch(props.colorType){
        case 'red':
            buttonPixelHover['background'] = '#D0312F';
            buttonPixelHover['borderTop'] = `${props.borderWidth || '7px'} solid #EF5A58`;
            buttonPixelHover['borderBottom'] = `${props.borderWidth || '7px'} solid #AD2220`;
            break;

        case 'violet':
            buttonPixelHover['background'] = '#7D22B7';
            buttonPixelHover['borderTop'] = `${props.borderWidth || '7px'} solid #9E48D6`;
            buttonPixelHover['borderBottom'] = `${props.borderWidth || '7px'} solid #630E99`;
            break;

        default:
            return {}
    }

    return buttonPixelHover
}

export function innerPixel(props) {
    const innerPixel = {};
    switch(props.colorType) {
        case 'red':
            innerPixel['background'] = '#FF7271';
            break;

        case 'violet':
            innerPixel['background'] = '#AA70CF';
            break;

        default:
            innerPixel['background'] = props.mainColor;
    }

    return innerPixel;
}

export function innerPixelHover (props) {
    const innerPixel = {};

    switch(props.colorType) {
        case 'red':
            innerPixel['background'] = '#D0312F';
            break;

        case 'violet':
            innerPixel['background'] = '#7D22B7';
            break;

        default:
            return {}
    }

    return innerPixel;
}

export function innerPixelAfter(props) {
    const innerPixelAfter = {};
    switch(props.colorType) {
        case 'red':
            innerPixelAfter['background'] = '#F45553';
            break;

        case 'violet':
            innerPixelAfter['background'] = '#9A52C8';
            break;

        default:
            innerPixelAfter['background'] = props.darkColor;
    }

    return innerPixelAfter;
}