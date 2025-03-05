import * as yup from 'yup';
import {useTranslation} from 'react-i18next';

export const useSchema = () => {
  const {t} = useTranslation();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(t('errors.name_required'))
      .matches(/^[A-Za-z\s]+$/, t('errors.alphabetic_only')),
    surname: yup.string().required(t('errors.surname_required')),
    email: yup
      .string()
      .email(t('errors.invalid_email'))
      .required(t('errors.email_required')),
    phone: yup
      .string()
      .required(t('errors.phone_required'))
      .matches(/^\d+$/, t('errors.phone_numbers_only')),
    birthDate: yup.date().optional(),
    gender: yup.string().optional(),
    hasPaid: yup.string().optional(),
  });
  return schema;
};
