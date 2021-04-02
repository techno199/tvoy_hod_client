import React, { useRef }                from 'react';
import ColorLineVektor                  from 'components/ColorLineVektor/ColorLineVektor';
import RecommendationsVektor            from 'components/RecommendationsVektor/RecommendationsVektor';
import DescriptionsResultTestVektor     from 'components/DescriptionsResultTestVektor/DescriptionsResultTestVektor';

const ResultTvoiVektor = ({ typesThinking, progress, recommendations, resultScales }) => {

    const colorLine = useRef({
        S1: '#FFF386',
        S2: '#FC7472',
        S3: '#B277FF',
        S4: '#55B1F2',
        S5: '#3DC7D0',
        S6: '#F5A26B',
        S7: '#F385B7',
        S8: '#E5ACFB',
        S9: '#7FEBAE'
    });

    return (
        <>
            <ColorLineVektor
                typesThinking={typesThinking}
                progress={progress}
                colorLine={colorLine}
            />
            <RecommendationsVektor
                recommendations={recommendations}
            />
            <DescriptionsResultTestVektor
                resultScales={resultScales}
                typesThinking={typesThinking}
                colorLine={colorLine}
            />
        </>
    )
};

export default React.memo(ResultTvoiVektor);