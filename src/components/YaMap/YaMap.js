import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import {ARRAY_FOR_MAP} from '../../CONSTANTS';
import { createHint } from 'utils/createHint'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './style';

const YaMap = () => {
    const classes = useStyles();
    const map = React.useRef(null);
    const isMob = useMediaQuery('(max-width:1200px)');

   return (
        <div className={classes.YaMap}>
            <YMaps //обертка для карты
                key={isMob}
                query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты
                    ns: 'use-load-option',
                    apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
                    load: 'package.full'
                }}
            >
                <Map //сама карта
                    className={classes.vp_mapContainer} //задали класс через который я проставил ширину и высоту.
                    state={{
                        center: [69, 100], //центр карты
                        zoom: 3, //масштаб
                        controls: [] //контролы. Скрыли все контролы
                    }}
                    options={{
                        suppressMapOpenBlock: true, //скрываем метку "Открыть в яндекс картах"
                        balloonPanelMaxMapArea: 0, //привязка балуна к метке (Infinity -привязки нет) 0 - привязка всегда, можно другие цифры
                    }}
                    instanceRef={yaMap => {
                        if(yaMap) {
                            map.current = yaMap;
                            //yaMap.controls.get('zoomControl').options.set({size: 'small'});
                            yaMap.behaviors.disable('scrollZoom');  //отключили zoom на колесико мыши
                            if(!isMob) {
                                yaMap.behaviors.disable('drag'); // отключили перетаскивание карты
                            }
                        }
                    }}
                    onLoad={ymaps => { //console.log('yamaps', ymaps.ready) //ymaps.ready(init); - ymaps тот же что и в обычном жс
                        let pane = new ymaps.pane.StaticPane(map.current, {
                            zIndex: 100, css: {
                                width: '100%', height: '100%', backgroundColor: '#ffffff'
                            }
                        });
                        map.current.panes.append('white', pane);
                        let objectManager = new ymaps.ObjectManager();

                        ymaps.borders.load('RU', {
                            lang: 'ru',
                            quality: 2
                        }).then((result) => {
                            let regions = result.features.map(function (feature) {
                                const regId = feature['properties']['iso3166'];
                                const dataReg = ARRAY_FOR_MAP[regId];
                                // Добавим ISO код региона в качестве feature.id для objectManager.
                                let iso = feature.properties.iso3166;
                                feature.id = iso;
                                // Добавим опции региона по умолчанию.
                                feature.options = {
                                    fillColor: '#E9E9E9',
                                    fillOpacity: 1,
                                    strokeColor: '#FFF',
                                    strokeOpacity: 1
                                };
                                if(!isMob) {
                                    feature.properties.hintContent = createHint(dataReg);
                                } else {
                                    delete feature.properties.hintContent;
                                    feature.properties.balloonContent = createHint(dataReg)
                                }
                                return feature;
                            });

                            objectManager.add(regions);

                            /*objectManager.objects.events.add(['click'], function(e) {
                                const objectId = e.get('objectId');
                                const coords = e.get('target').getById(objectId).getData()
                            });*/

                            objectManager.objects.events.add(['mouseenter'], function(e) {
                                const objectId = e.get('objectId');
                                objectManager.objects.setObjectOptions(objectId, {
                                    fillColor: '#FFD339'
                                });
                            });

                            objectManager.objects.events.add(['mouseleave'], function(e) {
                                const objectId = e.get('objectId');

                                objectManager.objects.setObjectOptions(objectId, {
                                    fillColor: '#E9E9E9'
                                });
                            });

                            map.current.geoObjects.add(objectManager);
                        });
                    }}
                >
                </Map>
            </YMaps>
        </div>
  )
};

export default YaMap;