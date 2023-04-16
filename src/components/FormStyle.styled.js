import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 450px;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #b3cde0;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Input = styled.input`
margin-left: 10px;
border: 2px solid #005b96;
border-radius: 5px;
`;
