import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownComponentTypes} from '../types/common';
import {useTranslation} from 'react-i18next';

const DropdownComponent: React.FC<DropdownComponentTypes> = ({
  data,
  label,
  value,
  setValue,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocus && styles.textFocus]}>{label}</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.dropdownFocus]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="name"
        valueField="id"
        placeholder={!isFocus ? t('select') : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.id);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 16,
    paddingBottom: 16,
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },

  textFocus: {color: 'blue'},
  dropdownFocus: {borderColor: 'blue'},
});
