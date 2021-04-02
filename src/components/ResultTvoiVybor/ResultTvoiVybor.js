import React, { useRef }                                from 'react';
import ColorLine                                        from 'components/ColorLine/ColorLine';
import ResultDescriptions                               from 'components/ResultDescriptions/ResultDescriptions';
import ChangeChallenge                                  from 'components/ChangeChallenge/ChangeChallenge';
import DescriptionChallenge                             from 'components/DescriptionChallenge/DescriptionChallenge';
import { IconResultTvori }                              from 'svgComponents/IconResultTvori';
import { IconResultPoznRus }                            from 'svgComponents/IconResultPoznRus';
import { IconResultDobro }                              from 'svgComponents/IconResultDobro';
import { IconResultGlavnoe }                            from 'svgComponents/IconResultGlavnoe';
import { IconResultPomni }                              from 'svgComponents/IconResultPomni';
import { IconResultPriroda }                            from 'svgComponents/IconResultPriroda';
import { IconResultZdorovie }                           from 'svgComponents/IconResultZdorovie';
import { IconResultFuture }                             from 'svgComponents/IconResultFuture';
import { IconResultWorld }                              from 'svgComponents/IconResultWorld';
import { IconResultNew }                                from 'svgComponents/IconResultNew';
import { IconSluziOtechestvu }                          from 'svgComponents/IconSluziOtechestvu';
import { IconPredprinimai }                             from 'svgComponents/IconPredprinimai';

const ResultTvoiVybor = ({ typesThinking, fillSvgPercent, activeChallenge, resultScales }) => {

    const colorLine = useRef({
        S1: {
            bgColor: '#A683BB',
            text: 'Это направление для тех, кто смело называет себя “творческой личностью”, у кого душа поет, тело танцует, а разум сочиняет мелодичные стихи.',
            icon: IconResultTvori
        },
        S2: {
            bgColor: '#7FEBAE',
            text: 'Это направление для тех, кто заботится об окружающей среде, знает, какие виды пластика не пойдут на переработку, и всегда ходит в магазин с экосумкой.',
            icon: IconResultPriroda,
        },
        S3: {
            bgColor: '#F1884B',
            text: 'Это направление для тех, кто, знает, почему некоторые города называются «умными», что такое 5G, smart grid и энергонулевые дома, и в путешествиях всегда обращает внимание на архитектуру.',
            icon: IconResultWorld
        },
        S4: {
            bgColor: '#FC7472',
            text: 'Это направление для тех, кто ведёт здоровый образ жизни, увлечённо следит за открытиями в области медицины, а на уроках биологии и химии поднимает руку ещё до того, как учитель закончил вопрос.',
            icon: IconResultZdorovie,
        },
        S5: {
            bgColor: '#6AB4E8',
            text: 'Это направление для тех, кто влюблён в науку, следит за инновациями и представляет, насколько большими могут быть данные.',
            icon: IconResultFuture,
        },
        S6: {
            bgColor: '#2D456E',
            text: 'Это направление для тех, кто мечтает стать журналистом, завести свой блог с миллионами подписчиков или просто делать отличный контент, который будет разлетаться по всему интернету.',
            icon: IconResultGlavnoe,
        },
        S7: {
            bgColor: '#F385B7',
            text: 'Это направление для тех, кто неравнодушен к проблемам окружающих, регулярно участвует в социальных акциях и делает добрые дела, не ожидая наград.',
            icon: IconResultDobro
        },
        S8: {
            bgColor: '#F8E95F',
            text: 'Это направление для тех, кто обожает путешествовать, изучать новые страны и города, погружаться в культуру и традиции разных народов.',
            icon: IconResultPoznRus,
        },
        S9: {
            bgColor: '#2C73BF',
            text: 'Это направление для тех, кто обожает уроки истории и с особой гордостью участвует в проектах и акциях, посвященных важным историческим событиям и праздникам.',
            icon: IconResultPomni,
        },
        S10: {
            bgColor: '#91D0D7',
            text: 'Направление, связанное с развитием образовательных технологий.',
            icon: IconResultNew
        },
        S11: {
            bgColor: '#863685',
            text: 'Вызов «Предпринимай!» создан для тех, кто стремится открыть свое дело и хочет превратить бизнес-идею в реальный проект. Цель направления — развитие детского социального и коммерческого предпринимательства. Его участники составят бизнес-план по реализации проекта и найдут тех, кто поможет реализовать его. Лучшие профессионалы отрасли окажут ребятам экспертную поддержку.',
            icon: IconPredprinimai
        },
        S12: {
            bgColor: '#FC3239',
            text: 'Вызов «Служи Отечеству!» создан для тех, кому близко чувство патриотизма. Его выберут активные школьники, которые любят свою Родину, имеют гражданскую позицию и волнуются о других жителях страны. Участники направления больше узнают о защите государства, познакомятся с единомышленниками и воспитают в себе командный дух.',
            icon: IconSluziOtechestvu
        },
    });

    return (
        <>
            <ColorLine
                colorLine={colorLine}
                typesThinking={typesThinking}
            />
            <ResultDescriptions
                fillSvgPercent={fillSvgPercent}
                typesThinking={typesThinking}
                activeChallenge={activeChallenge}
                resultScales={resultScales}
            />
            <ChangeChallenge
                typesThinking={typesThinking}
                colorLine={colorLine}
                activeChallenge={activeChallenge}
            />
            <DescriptionChallenge
                typesThinking={typesThinking}
                resultScales={resultScales}
                colorLine={colorLine}
            />
        </>
    )
};

export default React.memo(ResultTvoiVybor);