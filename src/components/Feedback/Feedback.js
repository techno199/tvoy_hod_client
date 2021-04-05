import React from 'react';
import happyStudents from 'images/happyStudents.png'
import happyStudentsNoStars from 'images/happyStudentsNoStars.png'/* 
import pixelPhone from 'images/pixelPhone.svg'
import pixelGmail from 'images/pixelGmail.png' */
import { useStyles } from './style';
import {Hidden} from "@material-ui/core";

const Feedback = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.Feedback}>
           <div className={classes.textBlock}>
                <h3 className={classes.heading}>Остались вопросы? <br/>Позвони или напиши нам!</h3>

               <Hidden mdUp>
                   <div className={classes.imgBlock1}>
                       <img src={happyStudentsNoStars} alt=""/>
                   </div>
               </Hidden>

               {/* <div className={classes.contacts}>
                   <a href="tel:+78003506383" className={classes.textLink}>
                       <Hidden mdDown>
                           <img alt={'телефон'} src={pixelPhone} className={`${classes.feedbackIcon} ${classes.phone}`} />
                       </Hidden>
                       +7 800 350 63 83
                   </a>
                   <span className={`${classes.title} ${classes.titleTop}`}>Для звонков по России</span>
               </div>

               <div className={classes.contacts}>
                   <a className={classes.textLink} href="mailto:help@bolshayaperemena.online">
                       <Hidden mdDown>
                           <img alt={'почта'} src={pixelGmail} className={`${classes.feedbackIcon} ${classes.gmail}`} />
                       </Hidden>
                       help@bolshayaperemena.online
                   </a>
                   <span className={`${classes.title} ${classes.titleBottom}`}>Для вопросов и обращений</span>
               </div> */}
           </div>

            <Hidden smDown>
                <div className={classes.imgBlock}>
                    <img src={happyStudents} alt=""/>
                </div>
            </Hidden>
        </div>
    )
};

export default Feedback;