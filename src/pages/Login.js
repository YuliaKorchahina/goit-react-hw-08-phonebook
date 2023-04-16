import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const initialValues = {
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const onLogin = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onLogin}>
      <Form>
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
          placeholder="Enter password"
        />
        <Button
          size="20px"
          type="submit"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default Register;
