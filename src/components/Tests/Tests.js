import React, { useEffect, useContext,
    useState }                          from 'react';
import { useParams, Redirect }          from 'react-router-dom'
import { Fade }                         from '@material-ui/core';
import CircularProgress                 from '@material-ui/core/CircularProgress';
import OneTest                          from 'components/OneTest/OneTest';
import PassingTest                      from 'components/PassingTest/PassingTest';
import { TEST_ONLINE }                  from '../../CONSTANTS';
import { LkContext }                    from 'context/LkContext/LkContext';
import { AuthContext }                  from 'context/AuthContext/AuthContext';
import { visibleTest }                  from 'utils/visibleTest';
import { useStyles }                    from './style';

const Tests = () => {
    const { completedTests, passedTests } = useContext(LkContext);
    const { state : stateContext } = useContext(AuthContext);

    const classes = useStyles();
    const { nameTest } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(visibleTest(stateContext)) {
            (async function() {
                try {
                    await completedTests();
                    setLoading(false)
                } catch (err) {
                    setLoading(false);
                    throw err;
                }
            })();
        }
        //eslint-disable-next-line
    }, []);

    if(!visibleTest(stateContext)) {
        return <Redirect to={'/lk'} />
    }

    if(loading) {
        return (
            <div className={classes.loadingPage}>
                <CircularProgress disableShrink  size={50}/>;
            </div>
        )
    }

    if(nameTest) {
        return (
            <PassingTest nameTest={nameTest} />
        )
    }

    return (
        <Fade in timeout={800}>
            <div>
                <h3 className={classes.heading}>Мои тесты</h3>

                <div className={classes.wrap}>
                    {
                        TEST_ONLINE.map((item, ind) => (
                            <OneTest
                                dateStart={item.dateStart}
                                key={item.id}
                                link={item.link}
                                img={item.img}
                                title={item.title}
                                descriptions={item.descriptions}
                                time={item.time}
                                completed={Object.keys(passedTests)}
                                ind={ind + 1}
                            />
                        ))
                    }
                </div>
            </div>
        </Fade>
    )
};

export default Tests;