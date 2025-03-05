import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {View, Button, Alert, StyleSheet} from 'react-native';
import Input from './Input';
import {FormData} from '../types/common';
import {useTranslation} from 'react-i18next';
import {useSchema} from '../schemas/schema';
import FormDropdown from './FormDropdown';
import DatePicker from './DatePicker';
import RadioButtons from './RadioButtons';
import {RadioButtonProps} from 'react-native-radio-buttons-group';

const Form = () => {
  const schema = useSchema();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const {t} = useTranslation();

  const onSubmit = (data: FormData) => {
    Alert.alert('Form Data', JSON.stringify(data));
  };

  const radioButtons: RadioButtonProps[] = [
    {
      id: '1',
      label: t('yes'),
    },
    {
      id: '0',
      label: t('no'),
    },
  ];

  const formDropdownData = [
    {id: 'male', name: t('male')},
    {id: 'female', name: t('female')},
  ];

  return (
    <View style={styles.container}>
      <Input name="name" control={control} error={errors.name} />
      <Input name="surname" control={control} error={errors.surname} />
      <Input name="email" control={control} error={errors.email} />
      <Input
        name="phone"
        control={control}
        error={errors.phone}
        keyboardType="numeric"
      />
      <FormDropdown data={formDropdownData} name="gender" control={control} />
      <DatePicker control={control} name="birthDate" />
      <RadioButtons control={control} name="hadPaid" data={radioButtons} />
      <Button
        color={'green'}
        title={t('submit')}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, width: '100%'},
  error: {color: 'red'},
});

export default Form;
