import React from 'react';
import {Controller} from 'react-hook-form';
import RadioGroup from 'react-native-radio-buttons-group';
import {RadioButtonComponentProps} from '../types/common';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const RadioButtons: React.FC<RadioButtonComponentProps> = ({
  control,
  name,
  data,
}) => {
  const {t} = useTranslation();

  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View style={styles.container}>
          <Text>{t(name)}</Text>
          <RadioGroup
            radioButtons={data}
            onPress={onChange}
            selectedId={value}
          />
        </View>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadioButtons;
