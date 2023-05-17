import { IconSVG } from '../icons/IconSVG/IconSVG';
import scss from './RegistrationForm.module.scss';
import { Field, Form, Formik } from 'formik';

export const RegistrationForm = () => {
  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={scss.form}>
        <label>
          <IconSVG
            name="email"
            width="24px"
            height="24px"
            fill="--icon-nonactive"
          />
          <Field name="email" type="email" placeholder="E-mail" />
        </label>
        <label>
          <IconSVG
            name="lock"
            width="24px"
            height="24px"
            fill="--icon-nonactive"
          />
          <Field name="password" type="password" placeholder="Password" />
        </label>
        <label>
          <IconSVG
            name="lock"
            width="24px"
            height="24px"
            fill="--icon-nonactive"
          />
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
        </label>
        <label>
          <IconSVG
            name="user"
            width="24px"
            height="24px"
            fill="--icon-nonactive"
          />
          <Field name="userName" type="text" placeholder="User name" />
        </label>
        <div>
          <button type="submit" disabled={true}>
            Register
          </button>
          <button type="button">Log in</button>
        </div>
      </Form>
    </Formik>
  );
};
