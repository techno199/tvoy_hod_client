export function buttonPixel (props) {
    const buttonPixel = {};
    switch(props.colorType) {
        case 'red':
            buttonPixel['background'] = '#FF7271';
            buttonPixel['borderTop'] = `7px solid #FF9F9E`;
            buttonPixel['borderBottom'] = `7px solid #F45553`;
            break;

        case 'violet':
            buttonPixel['background'] = '#AA70CF';
            buttonPixel['borderTop'] = `7px solid #C78EEC`;
            buttonPixel['borderBottom'] = `7px solid #9A52C8`;
            break;

        case 'lightBlue':
            buttonPixel['background'] = '#689FD3';
            buttonPixel['borderTop'] = `7px solid #87BDEE`;
            buttonPixel['borderBottom'] = `7px solid #578DC2`;
            break;

        case 'darkBlue':
            buttonPixel['background'] = '#2C73BF';
            buttonPixel['borderTop'] = `7px solid #3482D4`;
            buttonPixel['borderBottom'] = `7px solid #0D66C4`;
            break;

        default:
            buttonPixel['background'] = props.mainColor;
            buttonPixel['borderTop'] = `7px solid ${props.lightColor}`;
            buttonPixel['borderBottom'] = `7px solid ${props.darkColor}`;
    }

    return buttonPixel;
}

export function buttonPixelHover (props) {
    const buttonPixelHover = {};
    switch(props.colorType){
        case 'red':
            buttonPixelHover['background'] = '#D0312F';
            buttonPixelHover['borderTop'] = '7px solid #EF5A58';
            buttonPixelHover['borderBottom'] = '7px solid #AD2220';
            break;

        case 'violet':
            buttonPixelHover['background'] = '#7D22B7';
            buttonPixelHover['borderTop'] = '7px solid #9E48D6';
            buttonPixelHover['borderBottom'] = '7px solid #630E99';
            break;

        case 'lightBlue':
            buttonPixelHover['background'] = '#2885DD';
            buttonPixelHover['borderTop'] = '7px solid #45A7FF';
            buttonPixelHover['borderBottom'] = '7px solid #0F69C0';
            break;

        case 'darkBlue':
            buttonPixelHover['background'] = '#0050A6';
            buttonPixelHover['borderTop'] = '7px solid #3482D4';
            buttonPixelHover['borderBottom'] = '7px solid #003B79';
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

        case 'lightBlue':
            innerPixel['background'] = '#689FD3';
            break;

        case 'darkBlue':
            innerPixel['background'] = '#2C73BF';
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

        case 'lightBlue':
            innerPixel['background'] = '#2885DD';
            break;

        case 'darkBlue':
            innerPixel['background'] = '#0050A6';
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

        case 'lightBlue':
            innerPixelAfter['background'] = '#578DC2';
            break;

        case 'darkBlue':
            innerPixelAfter['background'] = '#0D66C4';
            break;

        default:
            innerPixelAfter['background'] = props.darkColor;
    }

    return innerPixelAfter;
}