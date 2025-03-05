import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Form from './components/Form';

function App(): React.JSX.Element {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LanguageSwitcher />
      <Form />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default App;
