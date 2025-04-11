import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import styled from 'styled-components';
import 'dayjs/locale/vi';
import locale from 'antd/locale/vi_VN'; 

const DatePickerStyle = styled(DatePicker)`
  .ant-picker-input input {
    color: black !important;
  }
`;

dayjs.locale('vi');

const FormDatePicker = ({
  field,
  validation,
  placeholder,
  disabled = false,
  style,
  format = 'DD/MM/YYYY', // Default format for Vietnamese
  bordered,
  allowClear,
  ...props
}) => {
  // #region use-form
  const methods = useFormContext();
  const { error } = methods.getFieldState(field, methods.formState);

  React.useEffect(() => {
    methods.register(field, validation);
  }, [methods, field, validation]);
  // #endregion

  const handleDateChange = (date, dateString) => {
    if (dayjs(dateString, format, true).isValid()) {
      methods.clearErrors(field);
      methods.setValue(field, dateString);
    } else {
      methods.setValue(field, '');
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <React.Fragment>
        <DatePickerStyle
          bordered={bordered}
          allowClear={allowClear}
          disabled={disabled}
          placeholder={placeholder}
          value={methods.watch(field) ? dayjs(methods.watch(field), format) : null}
          onChange={(date, dateString) => handleDateChange(date, dateString)}
          format={format}
          style={style}
          {...props}
        />
        {error && <ErrorMessage message={error?.message} />}
      </React.Fragment>
    </ConfigProvider>
  );
};

FormDatePicker.propTypes = {
  field: PropTypes.string,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  allowClear: PropTypes.bool,
  bordered: PropTypes.bool,
};

export default FormDatePicker;
