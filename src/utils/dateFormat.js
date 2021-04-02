export const getBirthDate = (birth_date) => {
    if(birth_date) {
        return birth_date.split('-').reverse().join('.')
    }

    return ''
};

export const getBirthDateReverse = (birth_date) => {
    if(birth_date) {
        return birth_date.split('.').reverse().join('-')
    }

    return ''
};