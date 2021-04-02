import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    usersAdmin: {
        paddingBottom: 50,
        background: '#F6F6F6',
        height: '100%',

        '& table': {
            tableLayout: 'fixed',

            '& thead': {
                '& tr': {
                    '& th': {
                        '&:first-child': {
                            paddingLeft: 30,
                            width: 100,
                        },
                        '&:nth-child(2)': {
                            width: 300
                        }
                    }
                }
            },
            '& tbody': {
                '& tr': {
                    '& td': {
                        '&:first-child': {
                            paddingLeft: 30
                        }
                    }
                }
            }
        }
    },
    school_data: {
        maxWidth: 200
    }
});