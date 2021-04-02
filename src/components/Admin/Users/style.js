import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    users: {
        paddingBottom: 50,
        background: '#F6F6F6',
        height: '100%',

        '& table': {
            '& thead': {
                '& tr': {
                    '& th': {
                        '&:first-child': {
                            paddingLeft: 30
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