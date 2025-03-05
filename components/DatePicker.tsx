import {useState} from 'react';
import {Button, Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Controller} from 'react-hook-form';
import {DatePickerProps} from '../types/common';
import {useTranslation} from 'react-i18next';

export const DatePicker: React.FC<DatePickerProps> = ({control, name}) => {
  const {t} = useTranslation();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Controller
      control={control}
      render={({field: {onChange}}) => (
        <SafeAreaView style={styles.container}>
          <Text>{date?.toLocaleString()}</Text>
          {show ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date || new Date()}
              onChange={(event, dateTime) => {
                onDateChange(event, dateTime);
                onChange(dateTime);
              }}
              display={Platform.OS === 'android' ? 'default' : 'inline'}
            />
          ) : (
            <Button onPress={showDatepicker} title={t(name)} />
          )}
        </SafeAreaView>
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
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default DatePicker;
