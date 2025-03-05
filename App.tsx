import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Form from './components/Form';

function App(): React.JSX.Element {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.langSwitcher}>
        <LanguageSwitcher />
      </View>
      <Form />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  langSwitcher: {height: 50, width: 200},
});

export default App;
