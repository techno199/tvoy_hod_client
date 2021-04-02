import React, { useState, useContext, useEffect }   from 'react';
import { Switch, Route, useRouteMatch, Redirect }   from 'react-router-dom';
import DialogCustom                                 from 'components/DialogCustom';
import NoSchoolData                                 from 'components/NoSchoolData/NoSchoolData';
import { FRoute }                                   from 'HOC/Route';
import { Certificate }                              from 'components/Certificate';
import { Sidebar }                                  from 'components/Sidebar';
import Profile                                      from 'components/Profile';
import Settings                                     from 'components/Settings';
import Development                                  from 'components/Development';
import Training                                     from 'components/Training';
import Tests                                        from 'components/Tests/Tests';
import ResultTest                                   from 'components/ResultTest/ResultTest';
import Contests                                     from 'components/Contests/Contests';
import Introduction                                 from 'components/Introduction/Introduction';
import { AuthContext }                              from 'context/AuthContext/AuthContext';
import { doRequest }                                from 'hooks/doRequest';
import { useStyles }                                from './style';

export default function Lk  () {
    let { path } = useRouteMatch();
    const classes = useStyles();
    const { certificate, getCertificate,
        setLoadingSert, state : stateContext } = useContext(AuthContext);

    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        if(!stateContext.educational_institution_info_id) {
            setOpenDialog(true);
        }

        if (!certificate) {
            (async function() {
                try {
                    await doRequest(getCertificate);
                    setLoadingSert(false)
                } catch (err) {
                    setLoadingSert(false);
                    throw err
                }
            })();
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className={classes.wrapLk} id={'wrapLk'}>
            <Sidebar />

            <div className={classes.content} id={'page'}>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Redirect to={`${path}/profile`} />
                    </Route>
                    <FRoute path={`${path}/profile`} Component={Profile} />
                    <FRoute path={`${path}/settings`} Component={Settings} />
                    <FRoute path={`${path}/certificate`} Component={Certificate} />
                    <FRoute path={`${path}/training`} Component={Training} />
                    <FRoute path={`${path}/tests/:nameTest/result`} Component={ResultTest} />
                    <FRoute path={`${path}/tests/:nameTest?`} Component={Tests} />
                    <FRoute path={`${path}/contests`} Component={Contests} />
                    <FRoute path={`${path}/introduction`} Component={Introduction} />
                    <FRoute path={'*'} Component={Development} />
                </Switch>
            </div>

            <DialogCustom
                widthDialog={1003}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                scroll={'body'}
                disableBackdropClick
            >
               <NoSchoolData setOpenDialog={setOpenDialog}/>
            </DialogCustom>
        </div>
    )
};
