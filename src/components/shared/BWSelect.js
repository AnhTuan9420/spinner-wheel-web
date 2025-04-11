import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const SelectStyle = styled.select`
    color: black !important;
`;

const BWSelect = ({
    list = [],
    placeholder = '--Chọn--',
    className,
    disabled = false,
    field,
    validation,
    allowClear = false,
    showSearch = true,
    defaultValue,
    multiple = false,
    ...props
}) => {
    const methods = useFormContext();
    const { error } = methods.getFieldState(field, methods.formState);

    React.useEffect(() => {
        methods.register(field, validation);
    }, [methods, field, validation]);

    const handleChangeSelect = (e) => {
        methods.clearErrors(field);
        methods.setValue(field, e.target.value);
    };

    return (
        <React.Fragment>
            <div>
                <SelectStyle
                    className={className}
                    placeholder={placeholder}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    value={methods.watch(field)}
                    multiple={multiple}
                    onChange={(e) => handleChangeSelect(e)}
                    {...props}
                >
                    {list?.map((x, index) => (
                        <option key={index} value={x.value}>
                            {x.label}
                        </option>
                    ))}
                </SelectStyle>
                {error && <ErrorMessage message={error?.message} />}
            </div>
        </React.Fragment>
    );
};

BWSelect.propTypes = {
    field: PropTypes.string,
    className: PropTypes.string,
    validation: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    mode: PropTypes.string,
};

BWSelect.defaultValue = {
    bordered: false,
    loading: false,
};

export default BWSelect;
