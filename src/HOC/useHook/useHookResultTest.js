import { useContext, useCallback, useEffect, useState } from 'react';
import { LkContext }                                    from 'context/LkContext/LkContext';
import { AuthContext }                                  from 'context/AuthContext/AuthContext';
import { useParams }                                    from 'react-router-dom'
import { visibleTest }                                  from 'utils/visibleTest';

export const useHookResultTest = () => {
    const { nameTest } = useParams();
    const { completedTests, passedTests } = useContext(LkContext);
    const { state : stateContext } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!passedTests[nameTest] && visibleTest(stateContext)) {
            (async function() {
                setLoading(true);
                try {
                    await completedTests();
                    setLoading(false)
                } catch (err) {
                    setLoading(false);
                    throw err;
                }
            })();
        }
        //eslint-disable-next-line
    }, []);

    const currentTest = useCallback(() => {
        return passedTests[nameTest];
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const typesThinking = useCallback(() => {
        if(passedTests[nameTest]) {
            return passedTests[nameTest].result.variants[0].report.blocks.find(i => i.type === 'barsDiagram').blocks[0].scales
        }
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const recommendations = useCallback(() => {
        if(passedTests[nameTest]) {
            return passedTests[nameTest].result.variants[0].report.blocks.find(i => i.type === 'conditionsTexts').texts
        }
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const resultScales = useCallback(() => {
        if(passedTests[nameTest]) {
            return passedTests[nameTest].result.variants[0].report.blocks.find(i => i.type === 'scalesTexts').texts
        }
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const valueMax = useCallback(() => {
        return passedTests[nameTest].result.variants[0].report.blocks.find(i => i.type === 'barsDiagram').valueMax
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const progress = useCallback((key) => {
        if(passedTests[nameTest]) {
            const valPart = typesThinking()[key].value;
            return (valPart * 100) / valueMax();
        }
        return 0;
        //eslint-disable-next-line
    },  [passedTests[nameTest]]);

    const fillSvgPercent = useCallback((percent) => {
        if(passedTests[nameTest]) {
            return (113.04 * percent) / 100
        }
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    const activeChallenge = useCallback(() => {
        if(passedTests[nameTest]) {
            return 'S' + passedTests[nameTest].challenge
        }
        //eslint-disable-next-line
    }, [passedTests[nameTest]]);

    return {
        loading,
        passedTests,
        currentTest,
        progress,
        nameTest,
        typesThinking,
        fillSvgPercent,
        recommendations,
        resultScales,
        activeChallenge,
    }
};