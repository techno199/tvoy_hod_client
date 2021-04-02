import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    school: {
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
    nameSchool: {
        maxWidth: 200
    },
    director_fio: {
        textTransform: 'capitalize'
    }
});