import * as Yup from 'yup';

const SigninSchema = Yup.object({
  email: Yup.string().email().required('Email required'),
  password: Yup.string()
    .required('Password required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
      '6-12 characters (min one upercase, lowercase, number and special case character)'
    ),
});

const SignupSchema = SigninSchema.concat(
  Yup.object({
    userName: Yup.string()
      .required('User name required')
      .matches(
        /^[a-zA-Z0-9]{3,12}$/,
        "Must containe 3-12 alphanumeric's characters"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password required'),
  })
);

const TransactionSchema = Yup.object().shape({
  date: Yup.date().max(new Date()).required(),
  type: Yup.mixed().oneOf(['expense', 'income']).required(),
  categoryId: Yup.number().required(),
  comment: Yup.string(),
  sum: Yup.number().required,
});

const TransactionIdSchema = TransactionSchema.concat(
  Yup.object().shape({
    id: Yup.string().required(),
  })
);

export { SignupSchema, SigninSchema, TransactionSchema, TransactionIdSchema };
