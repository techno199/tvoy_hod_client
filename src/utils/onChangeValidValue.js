export const onChangeValidValue = ({formik, state, setState, setError}) => (event) => {
    const { value, name } = event.target;
    const caretStart = event.target.selectionStart;
    const caretEnd = event.target.selectionEnd;
    if(setError) {
        setError(prev => ({...prev, [name]: false}))
    }

    if((formik && value.length > formik.values[name].length) || state) { //набор символов
        //eslint-disable-next-line
        const regExp = /^[а-яё\.\s-]+$/msiu;
        const oldValue = formik ? formik.values[name] : state[name];
        const valueResult = regExp.test(value) ? value : oldValue;
        (formik?.setValues || setState)(prev => ({
            ...prev,
            [name]: value.trim() ? titleCase(valueResult) : value
        }));

        if (setError && !regExp.test(value) && value.trim()) {
            setError(prev => ({...prev, [name]: 'Используйте только кириллицу'}))
        }
    } else { //на стирание символов
        formik
            ? formik.handleChange(event)
            : setState(prev => ({...prev, [name]: value}))
    }

    setTimeout(() => {
        event.target.setSelectionRange(caretStart, caretEnd);
    }, 1)
};

function titleCase(str) {
    return str.split(' ')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
}