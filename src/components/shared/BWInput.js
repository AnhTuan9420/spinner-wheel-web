import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
// import ErrorMessage from "./ErrorMessage";

const BWInput = ({
    field,
    validation,
    type = 'text',
    placeholder,
    className,
    disabled,
    valueRadio,
    ...props
}) => {
    const methods = useFormContext();
    // const { error } = methods.getFieldState(field, methods.formState);
    React.useEffect(() => {
        methods.register(field, validation);
    }, [methods, field, validation]);

    const handleChange = (e) => {
        methods.clearErrors(field);
        methods.setValue(
            field,
            type === 'checkbox' ? (e.target.checked ? 1 : null) : e.target.value
        );
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            disabled={disabled}
            value={type === 'radio' ? valueRadio : methods.watch(field) ?? ''}
            checked={
                type === 'checkbox'
                    ? Boolean(methods.watch(field))
                    : type === 'radio' && +methods.watch(field) === +valueRadio
            }
            onChange={handleChange}
            style={{ lineHeight: 1, color: 'black' }}
            {...props}
        />
    );
};

BWInput.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.string,
    validation: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

BWInput.defaultProps = {
    type: 'text',
    className: '',
};

export default BWInput;
