import React                                        from 'react';
import { Autocomplete }                             from 'UI/Autocomplete';
import { Fieldset }                                 from 'UI/Fieldset'
import {GRADES, LITERA, TEST_POSITIONS}             from '../../../CONSTANTS';

const FieldsForRoles = ({ roleId, errors, handleCompleteChange }) => {

    const render = () => {
        switch(roleId) {
            case 1:
                return (
                    <>
                        <Fieldset
                            title='Класс'
                            error={errors?.school?.class}
                        >
                            <Autocomplete
                                options={GRADES}
                                required
                                error={errors?.school?.class}
                                onChange={(e, newObj) => handleCompleteChange('grade', newObj)}
                                getOptionLabel={(o) => String(o)}
                                name='grade'
                            />
                        </Fieldset>

                        <Fieldset
                            title='Литера класса'
                            subtitle={'(необязательно)'}
                            error={errors?.school?.char}
                        >
                            <Autocomplete
                                error={errors?.school?.char}
                                options={LITERA}
                                required
                                onChange={(e, newObj) => handleCompleteChange('litera', newObj)}
                                getOptionLabel={(o) => o}
                                name='litera'
                            />
                        </Fieldset>
                    </>
                );

            case 2:
                return (
                    <Fieldset
                        title='Должность'
                        error={errors?.school?.post}
                    >
                        <Autocomplete
                            error={errors?.school?.post}
                            required
                            options={TEST_POSITIONS}
                            onChange={(e, newObj) => handleCompleteChange('position', newObj)}
                            name='position'
                        />
                    </Fieldset>
                );

            case 9:
                return (
                    <Fieldset
                        title='Курс'
                        error={errors?.school?.course}
                    >
                        <Autocomplete
                            error={errors?.school?.course}
                            required
                            options={[
                                {id: 1, title: '1'},
                                {id: 2, title: '2'},
                                {id: 3, title: '3'},
                                {id: 4, title: '4'}
                            ]}
                            onChange={(e, newObj) => handleCompleteChange('course', newObj)}
                            name='position'
                        />
                    </Fieldset>
                );
            default:
                return null;
        }
    };

    return (
        <> { render() }</>
    )
};

export default FieldsForRoles;