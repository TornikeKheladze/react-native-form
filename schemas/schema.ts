import * as yup from 'yup';
import {useTranslation} from 'react-i18next';

export const useSchema = () => {
  const {t} = useTranslation();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, t('errors.alphabetic_only'))
      .required(t('errors.name_required')),
    surname: yup.string().required(t('errors.surname_required')),
    email: yup
      .string()
      .email(t('errors.invalid_email'))
      .required(t('errors.email_required')),
    phone: yup
      .string()
      .matches(/^\d+$/, t('errors.phone_numbers_only'))
      .required(t('errors.phone_required')),
    birthDate: yup.date().optional(),
  });
  return schema;
};
