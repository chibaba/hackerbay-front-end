// @flow
import * as React from 'react';
import styled from 'styled-components';
import {
  Input
} from 'antd';

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.danger };
  line-height: 1.5;
  -webkit-transition: color .3s cubic-bezier(.215,.61,.355,1);
  transition: color .3s cubic-bezier(.215,.61,.355,1);
  margin-top: -2px;
  clear: both;
`;

// Field with message
type fieldProps = {
  input: Object ,
  meta: { error: any },
  Prefix: React.Node,
  Suffix: React.Node,
  type: string,
  label: string,
  fieldTouched: boolean
};

export const renderField =  ({
                               input ,
                               meta: { error },
                               Prefix,
                               Suffix,
                               type,
                               label,
                               fieldTouched
                             }: fieldProps)  =>  (
    <React.Fragment>
      <Input
        {...input}
        placeholder={label}
        prefix={Prefix}
        Suffix={Suffix}
        type={type}
      />
      { fieldTouched && error && <ErrorMessage>{error}</ErrorMessage>}
    </React.Fragment>
  );

