import React  from 'react';

import { FormGroup, Label, Button } from 'reactstrap';

import  { Field, reduxForm } from 'redux-form';

const validateForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'incorrect email address';
  }
  if(!values.password) {
    errors.password = 'required'
  }
  return errors;
};

const showField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <FormGroup bssize="large">
  <Label>{label}</Label>
  <input
  className="form-control"
  {...input}
  
   placeholder={label}
   type={type}
   />
   {touched &&
   (error && <span className="text-danger">{error}</span>)
  }
  </FormGroup>
);

const LoginForm = ({
  handleSubmit,
  submitLabel = 'Login',
  isFetch,
  message,
}) => (
  <form onSubmit={handleSubmit}>
    <Field name="email" type="email" component={showField} label="Email" />
    <Field
      name="password"
      type="password"
      component={showField}
      label="Password"
    />
    {message && (
      <span
        className="text-danger"
        style={{ marginBottom: '20px', display: 'block' }}>
        {message}
      </span>
    )}
    <Button block bssize="large" type="submit" disabled={isFetch}>
      {submitLabel}
    </Button>
  </form>
);

export default reduxForm({
  form: 'login',
  validateForm,
})(LoginForm);