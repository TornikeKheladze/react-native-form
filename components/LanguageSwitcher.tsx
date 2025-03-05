import {useTranslation} from 'react-i18next';
import DropdownComponent from './DropdownComponent';

const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lang: 'en' | 'ka') => {
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownComponent
      data={[
        {id: 'en', name: 'English'},
        {id: 'ka', name: 'ქართული'},
      ]}
      value={i18n.language}
      setValue={changeLanguage}
      label={t('change_language')}
    />
  );
};

export default LanguageSwitcher;
