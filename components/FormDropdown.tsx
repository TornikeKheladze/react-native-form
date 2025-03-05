import {Controller} from 'react-hook-form';
import {FormDropdownProps} from '../types/common';
import DropdownComponent from './DropdownComponent';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';

const FormDropdown: React.FC<FormDropdownProps> = ({
  control,
  data,
  name,
  error,
}) => {
  const {t} = useTranslation();
  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <DropdownComponent
            value={value}
            label={t(name)}
            data={data}
            setValue={onChange}
          />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {color: 'red'},
});

export default FormDropdown;
