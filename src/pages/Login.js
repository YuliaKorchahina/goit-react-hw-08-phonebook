import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { logIn } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
// import PropTypes from 'prop-types';

const initialValues = {
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  console.log(isLogin);
  const onLogin = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

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
        <button type="submit">
          <span>Login</span>
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
