import React                    from 'react';
import { Link }                 from 'react-router-dom';
import ButtonPixel              from 'UI/ButtonPixel/ButtonPixel';
import CornerPixelSlice         from 'components/CornerPixelSlice/CornerPixelSlice';
import CornerPixel              from 'UI/CornerPixel/CornerPixel';
import girlTraining             from 'images/girlTraining.png';
import cert                     from 'images/cert.svg';
import { useStyles }            from './style';

const ProfileCertificateAndStudy = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.ProfileCertificateAndStudy}>
            <div className={classes.myTraining}>
                <CornerPixelSlice  size={13}/>
                <div className={classes.leftBlock}>
                    <h3 className={classes.headingLeftPart}>Мое обучение</h3>
                    <p className={classes.textLeftPart}>Скоро здесь появятся результаты твоих успехов в обучении. Начать обучение можешь уже сейчас!</p>

                    <Link to={'/lk/training'} style={{textDecoration: 'none'}}>
                        <ButtonPixel shadowColor={'#1A2054'}>
                            Перейти в раздел
                        </ButtonPixel>
                    </Link>
                </div>

                <img className={classes.girlTraining} src={girlTraining} alt="girlTraining"/>
            </div>

            <div className={classes.myCert}>
                <CornerPixel color={'#272C5B'} />
                <div className={classes.leftCert}>
                    <h3 className={classes.certHeading}>Мой сертификат</h3>
                    <p className={classes.certText}>Сертификат участника конкурса “Большая перемена-2020” </p>
                    <Link to={'/lk/certificate'} style={{textDecoration: 'none'}}>
                        <ButtonPixel shadowColor={'#E0E0E0'}>
                            Перейти в раздел
                        </ButtonPixel>
                    </Link>
                </div>

                <div className={classes.rightCert}>
                    <img src={cert} alt="cert"/>
                </div>
            </div>


        </div>
    )
};

export default ProfileCertificateAndStudy;