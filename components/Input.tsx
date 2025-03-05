import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TextInput} from 'react-native';
import {InputProps} from '../types/common';

const Input: React.FC<InputProps> = ({
  name,
  error,
  control,
  keyboardType = 'default',
}) => {
  const {t} = useTranslation();

  const onChangeText = (input: string, onChange: (...event: any[]) => void) => {
    if (keyboardType === 'numeric') {
      const filteredText = input.replace(/\D/g, '');
      onChange(filteredText);
    } else {
      const filteredText = input.replace(/[0-9]/g, '');
      onChange(filteredText);
    }
  };

  return (
    <>
      <Text>{t(name)}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={input => onChangeText(input, onChange)}
            value={value}
            keyboardType={keyboardType}
          />
        )}
        name={name}
        defaultValue=""
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 10,
  },
  error: {color: 'red'},
});

export default Input;
