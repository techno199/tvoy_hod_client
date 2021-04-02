import { useState, useEffect,
    useRef, useContext, useCallback }   from 'react';
import { useHistory }                   from 'react-router-dom';
import tvoi_kod                         from 'TESTS/bp_test_tvoi_kod_210203';
import tvoi_vector                      from 'TESTS/bp_test_tvoi_vektor_210205';
import tvoi_vybor_new                   from 'TESTS/bp_test_tvoy_vybor_8208.json'
import { LkContext }                    from 'context/LkContext/LkContext';
import { errorHandler }                 from 'utils/errorHandler';

export const useHookTests = ({ nameTest }) => {
    const { postResultTest } = useContext(LkContext);
    const history = useHistory();

    const backStep = useRef(0);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);//1
    const [stepT, setStepT] = useState(1);
    const [resultTest, setResultTest] = useState({});
    const [testQuestions, setTestQuestions] = useState(Object.entries(switchTest().subtests.items.T1.questions.items));

    useEffect(() => {
        testQuestionsValue(stepT)
        //eslint-disable-next-line
    }, [stepT]);

    // если много субтестов (Т) меняем их
    const testQuestionsValue =(stepT) => {
        setTestQuestions(Object.entries(Object.values(switchTest().subtests.items)[stepT - 1].questions.items))
    };

    //возвращаем нужный тест в зависимости от пути в браузере
    function switchTest () {
        switch(nameTest) {
            case '20210203-170332-8692':
                return tvoi_kod;

            case '20210205-152506-2643':
                return tvoi_vector;

            case '20210305-140818-8208':
                return tvoi_vybor_new;

            default:
                return {};
        }
    }

    //цвет шапки тестов
    const colorTest = () => {
        switch(nameTest) {
            case '20210203-170332-8692':
                return '#AA70CF';

            case '20210205-152506-2643':
                return '#52A0D8';

            case '20210305-140818-8208':
                return '#2C73BF';

            default:
                return '#5C58FF'
        }
    };

    //цветовой тип кнопки
    const colorTypeButton = () => {
        switch(nameTest) {
            case '20210203-170332-8692':
                return 'violet';

            case '20210205-152506-2643':
                return 'lightBlue';

            case '20210305-140818-8208':
                return 'darkBlue';

            default:
                return 'red'
        }
    };

    //какой выбор в тестах мультивыбор или одиночный
    const typeSelection = () => {
        return testQuestions[step - 1][1].type;
    };

    //минимальный и максимальный выбор
    const minMaxValue = () => {
        const values = Object.values(switchTest().subtests.items)[stepT -1].constraints.multipleAnswer.positives;
        return {
            min: typeSelection() === 'multiple' ? values.answersMin : 1,
            max: typeSelection() === 'multiple' ? values.answersMax : 1
        }
    };

    //текст вопроса и другие данные вопроса
    const questionData = () => {
        return testQuestions[step - 1][1]
    };

    //возвращаем символ текущего сабтеста к пример T1
    const Tval = useCallback(() => {
        return Object.keys(switchTest().subtests.items)[stepT - 1];
        //eslint-disable-next-line
    }, [stepT]);

    //получаем ключ вопроса
    const getNameQ = () => {
        return testQuestions[step - 1][0];
    };

    //массив с ответами
    const getAnswers = () => {
        return Object.entries(testQuestions[step - 1][1].answers)
    };

    //обработчик радиокнопок
    const handleChange = (event) => {
        const resultObj = {};

        getAnswers().forEach(item => {
            resultObj[item[0]] = 1
        });

        const prevQuestions = resultTest?.[Tval()]?.questions || {};

        setResultTest(prev => ({
            ...prev,
            [Tval()]: {
                questions: {
                    ...prevQuestions,
                    [event.target.name]: {
                        answers: {
                            ...resultObj,
                            [event.target.value]: 2
                        }
                    }
                }
            }
        }))
    };

    //проставляем value в радиокнопку
    const valueRadioGroup = () => {
        let valueRadio = '';
        const currentAnswers = resultTest?.[`T${stepT}`]?.questions?.[getNameQ()]?.answers;

        if(currentAnswers) {
            Object.entries(currentAnswers).forEach(([key, value]) => {
                if(value === 2) valueRadio = key
            })
        }

        return valueRadio;
    };

    //определяем что вопросы закончились
    const endQuestions = () => {
        if(switchTest().subtests.counter === 1) {
            return step === switchTest().subtests.items.T1.length;
        } else {
            return stepT === switchTest().subtests.counter;
        }
    };

    //клик на кнопк вперед
    const forward = () => {
       if(switchTest().subtests.counter > 1 && step === switchTest().subtests.items[`T${stepT}`].length) {
           setStep(1);
           setStepT(prev => prev  + 1)
       } else {
           setStep(prev => prev  + 1);
           if(backStep.current < 0) backStep.current += 1;
       }
    };

    //отправка данных на сервер
    const forwardFinish = async () =>  {
        try {
            setLoading(true);
            const body = {
                test_answers: {
                    test: switchTest().name,
                    protocol: {
                        subtests: {...resultTest}
                    },
                }
            };
            await postResultTest(body);
            history.push(`/lk/tests/${nameTest}/result`)
        } catch (err) {
            errorHandler(err);
            setLoading(false);
            throw err;
        }
    };

    //клик на кнопку назад
    const back = () => {
        setStep(prev => prev  - 1);
        backStep.current -= 1;
    };

    //обработка события на чекбокс
    const handleChangeCheckbox = (event) => {
        let resultObj = {};

        if(!resultTest?.[Tval()]?.questions?.[getNameQ()]?.answers) {
            getAnswers().forEach(item => {
                resultObj[item[0]] = 1
            });
        } else {
            resultObj = {
                ...resultTest?.[Tval()]?.questions?.[getNameQ()].answers
            }
        }

        const prevQuestions = resultTest?.[Tval()]?.questions || {};

        setResultTest(prev => ({
            ...prev,
            [Tval()]: {
                questions: {
                    ...prevQuestions,
                    [getNameQ()]: {
                        answers: {
                            ...resultObj,
                            [event.target.name]: event.target.checked ? 2 : 1
                        }
                    }
                }
            }
        }));
    };

    //проставляем checked для чекбоксов
    const checkedValue = (key) => {
        return Boolean(resultTest?.[Tval()]?.questions?.[getNameQ()]?.answers?.[key] === 2)
    };

    //проставляем шаг теста
    const stepTest = () => {
        if(switchTest().subtests.counter > 1) {
            return stepT;
        }
        return step;
    };

    //Проставляем количество вопросов
    const countQuestions = () => {
        if(switchTest().subtests.counter > 1) {
            return switchTest().subtests.counter;
        }
        return switchTest().subtests.items.T1.length;
    };

    //условия для блокирования кнопки назад
    const disabledBackButton = () => {
        return step === 1 || backStep.current <= -2 || loading;
    };

    //условия для блокировки кнопки вперед
    const disasbledForwardButton = () => {
        const resultValues = resultTest?.[Tval()]?.questions?.[getNameQ()]?.answers;
        const disF = resultValues && Object.values(resultValues).filter(i => i === 2).length >= minMaxValue().min;
        return !Boolean(disF) || loading;
    };

    //отключение возможности чекнуть в зависимости от условия задачи
    const disabledChecked = (key) => {
        const resultValues = resultTest?.[Tval()]?.questions?.[getNameQ()]?.answers;

        const count = resultValues
            ? Object.values(resultValues).filter(i => i === 2).length
            : 0;

        switch(nameTest) {
            case '20210205-152506-2643':
                if(key === 'A5') { //блок для чека 'ничего из вышеизложенного'
                    return count >= 1
                }

                return resultValues?.['A5'] === 2 || count >= minMaxValue().max;

            default:
                return count >= minMaxValue().max
        }
    };

    return {
        step,
        stepT,
        typeSelection,
        questionData,
        getNameQ,
        getAnswers,
        handleChange,
        valueRadioGroup,
        forward,
        back,
        handleChangeCheckbox,
        checkedValue,
        switchTest,
        stepTest,
        countQuestions,
        disabledBackButton,
        disasbledForwardButton,
        disabledChecked,
        endQuestions,
        forwardFinish,
        colorTest,
        colorTypeButton,
        loading
    }
};