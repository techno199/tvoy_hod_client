import React, { useRef }                from 'react';
import DescriptionsResultTest           from 'components/DescriptionsResultTest/DescriptionsResultTest';
import ColorLineKod                     from 'components/ColorLineKod/ColorLineKod';

const ResultTvoiKod = ({ resultScales, typesThinking }) => {
    const colorLine = useRef({
        S9: '#FF93CD',
        S10: '#FFF281',
        S11: '#AB71F4',
        S12: '#71F4A6',
        S24: '#3A98EF'
    });

    return (
        <>
            <ColorLineKod
                typesThinking={typesThinking}
                colorLine={colorLine}
            />
            <DescriptionsResultTest
                resultScales={resultScales}
                colorLine={colorLine}
            />
        </>
    )
};

export default ResultTvoiKod;