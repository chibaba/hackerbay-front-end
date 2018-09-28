// @flow

import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Icon
} from 'antd';
import { renderField } from '../../components/common/form/field';
import FormInfo from '../../components/common/form/info';
import { required, minLength, email } from '../../utils/validation';

const { Item: FormItem } = Form;
const minLength8 = minLength(8);

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

const SignupButton = styled(Button)`
  width: 100%;
`;

type Props = {
  handleSubmit: Function,
  pristine: boolean,
  submitting: boolean,
  signupFormData: { error: string }
}

const Signup = (props: Props) => {
  const { handleSubmit, pristine, submitting, signupFormData: { error } } = props;
  return (
    <React.Fragment>
      <Heading>Signup</Heading>
      {error && <FormInfo message={error} type="error" />}
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Field
            name="email"
            label="Please enter your email"
            type="text"
            validate={[required, email]}
            component={renderField}
            Prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            fieldTouched={!pristine}/>
        </FormItem>
        <FormItem>
          <Field
            name="password"
            label="Please enter your password"
            type="password"
            validate={[required, minLength8]}
            component={renderField}
            Prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            fieldTouched={!pristine}/>
        </FormItem>
        <FormItem>
          <SignupButton type="primary" htmlType="submit" disabled={pristine || submitting}>
            Singup
          </SignupButton>
          Already have an account <Link to="/login">Login</Link>
        </FormItem>
      </form>
    </React.Fragment>
  )
};

export default reduxForm({
  form: 'signup-form'
})(Signup);

