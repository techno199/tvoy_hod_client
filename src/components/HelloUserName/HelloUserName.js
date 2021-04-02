import React                            from 'react';
// import helloUser                     from 'images/helloUser.png';
// import heart                         from 'images/heart.png';
import bannerSchool                     from './bannerSchool.svg';
import bannerSchoolMob                  from './bannerSchoolMob.svg';
import useMediaQuery                    from "@material-ui/core/useMediaQuery";
import { useStyles }                    from './style';


const HelloUserName = ({ stateContext }) => {
    const classes = useStyles();
    const isMob = useMediaQuery('(max-width:580px)');
  
    return (
        <>
            {
                stateContext.role.find(i => i.role_id === 1) && [5,6,7].includes(stateContext?.educationalInstitutionInfo?.grade) ?
                    <img src={isMob ? bannerSchoolMob : bannerSchool } className={classes.bannerSchool} alt="bannerSchool"/>
                     : null
            }
        </>
    )
};

export default HelloUserName;