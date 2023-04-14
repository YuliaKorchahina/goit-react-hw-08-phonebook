import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { register } from 'redux/auth/auth-operations';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
// import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  // const isLogin = useAuth;

  const onRegister = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  // if (isLogin) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={(values, actions) => {
      //   console.log(values);
      //   dispatch(register(values));
      //   actions.resetForm();
      // }}
      onSubmit={onRegister}
    >
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
          email
          <ErrorMessage name="password" component="input" />
        </label>
        <Field
          name="email"
          type="email"
          autoComplete="off"
          autoFocus
          placeholder="Enter email"
        />
        <label>password</label>
        <Field
          name="password"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter password (min 6 symbols)"
        />
        <button type="submit">
          <span>Register</span>
        </button>
      </Form>
    </Formik>
  );
};

export default Register;
