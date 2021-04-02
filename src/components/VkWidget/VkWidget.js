import React                            from 'react';
import ButtonPixel                      from 'UI/ButtonPixel/ButtonPixel';
import arrowSmall                       from 'images/arrow-small.svg';
import { useStyles }                    from './style';

const VkWidget = ({ stateContext, setOpenDialog }) => {
    const classes = useStyles();
  
    return (
        <>
            {
                !stateContext.vk_id ?
                    <div className={classes.vk_widget}>
                        <div className={classes.vk_widgetContent}>
                            <h3 className={classes.headingWidget}>Привяжи страницу ВКонтакте, будет много интересного!</h3>
                            {/*<p className={classes.widgetText}></p>*/}
                            <ButtonPixel
                                className={classes.buttonPixel}
                                mainColor={'#FFFFFF'}
                                lightColor={'#FFFFFF'}
                                darkColor={'#FAFAFA'}
                                shadowColor={'#2070CC'}
                                onClick={() => setOpenDialog(true)}
                            >
                                Привязать аккаунт
                                <img className={classes.arrowSmall} src={arrowSmall} alt="arrowSmall"/>
                            </ButtonPixel>
                        </div>
                    </div> : null
            }
        </>
    )
};

export default VkWidget;