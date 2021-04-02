import React, { useState }          from 'react';
import ButtonPixel                  from 'UI/ButtonPixel/ButtonPixel';
import DialogCustom                 from 'components/DialogCustom';
import ModalChangeChallenge         from 'components/ModalChangeChallenge/ModalChangeChallenge';
import { useStyles }                from './style';

const ChangeChallenge = ({ typesThinking, colorLine, activeChallenge }) => {
    const classes = useStyles();

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className={classes.changeChallenge}>
            <h4 className={classes.headingChangeChallenge}>Твой выбор</h4>
            <p className={classes.changeChallengeText}>Вызов определяет направление заданий, которые ты будешь решать в конкурсе.</p>
            <p className={classes.changeChallengeText}>Ты можешь поменять вызов, предложенный тебе по результатам теста, в любой момент до отправки на проверку задания "Представь себя".</p>

            <div className={classes.buttonBlock}>
                <ButtonPixel
                    colorType='red'
                    onClick={() => setOpenDialog(true)}
                >
                    Поменять вызов
                </ButtonPixel>
            </div>

            <DialogCustom
                widthDialog={1000}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                noFullScreen
                //scroll={'body'}
            >
                <ModalChangeChallenge
                    typesThinking={typesThinking}
                    colorLine={colorLine}
                    activeChallenge={activeChallenge}
                    setOpenDialog={setOpenDialog}
                />
            </DialogCustom>
        </div>
    )
};

export default ChangeChallenge;