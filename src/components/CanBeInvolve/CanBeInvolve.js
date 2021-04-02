import React from 'react'
import {useStyles} from './style'
import {FilledPixelBox} from "UI/FilledPixelBox/FilledPixelBox";

export const CanBeInvolved = () => {
    const classes = useStyles();

    return(
        <section>
            <h3 className={classes.heading}>
                <span> Ты можешь </span>&nbsp;стать участником,&nbsp;<br/>
                если ты...
            </h3>

            <div className={classes.involedWrapper} >
                <FilledPixelBox
                    inner={<div>Гражданин России </div>}
                    color={'#1F62AB'}
                    shadow={'rgba(31,98,171,0.35)'}
                />
                <FilledPixelBox
                    inner={<div>Ученик школы <br/> 5-10 классов </div>}
                    color={'rgb(110,221,158)'}
                    shadow={'rgba(110,221,158,0.35)'}
                />
                <FilledPixelBox
                    inner={<div>Студент <br/> СПО </div>}
                    color={'rgb(242,172,205)'}
                    shadow={'rgba(242,172,205,0.35)'}
                />
            </div>
        </section>
    )
}