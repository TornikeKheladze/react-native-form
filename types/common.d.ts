import {RadioButtonProps} from 'react-native-radio-buttons-group';

export type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  birthDate?: date;
  gender?: string;
};

export type InputProps = {
  name: keyof FormData;
  error?: FieldError;
  control: Control<FormData, any>;
  keyboardType?: KeyboardTypeOptions | undefined;
};

export type DropdownComponentTypes = {
  data: {id: string; name: string}[];
  label: string;
  value: number | undefined | string;
  setValue: Dispatch<SetStateAction<undefined | string>>;
};

export type FormDropdownProps = {
  control: Control<FormData, any>;
  data: {id: string; name: string}[];
  name: string;
  error?: FieldError;
};

export type DatePickerProps = {
  control: Control<FormData, any>;
  name: string;
};

export type RadioButtonComponentProps = {
  control: Control<FormData, any>;
  name: string;
  data: RadioButtonProps[];
};
