import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { register } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const onRegister = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onRegister}>
      <Form>
        <label>
          Name
          <Field
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter name"
          />
        </label>
        <label>
          Email
          <ErrorMessage name="password" component="input" />
        </label>
        <Field
          name="email"
          type="email"
          autoComplete="off"
          autoFocus
          placeholder="Enter email"
        />
        <label>Password</label>
        <Field
          name="password"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Password (min 6 symbols)"
        />
        <Button
          size="20px"
          type="submit"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default Register;
