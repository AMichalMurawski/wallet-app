import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  email: string().email().required('Email required'),
  password: string()
    .required('Password required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
      'Must contain 6-12 characters in this at least one upercase, one lowercase, one number and one special case character (@$!%*?&)'
    ),
});

const SingupSchema = SingupSchema.concat(
  Yup.object().shape({
    userName: string()
      .required()
      .matches(/^[a-zA-Z0-9]{3,12}$/),
  })
);

const TransactionSchema = Yup.object().shape({
  date: date().max(new Date()).required(),
  type: mixed().oneOf(['expense', 'income']).required(),
  categoryId: number().required(),
  comment: string(),
  sum: number().required,
});

const TransactionIdSchema = TransactionSchema.concat(
  Yup.object().shape({
    id: string().required(),
  })
);

export default {
  SingupSchema,
  SigninSchema,
  TransactionSchema,
  TransactionIdSchema,
};
