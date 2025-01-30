//Activity#2 - 1/30/2025
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [Name, onChangeName] = React.useState('');
  const [AGE, onChangeAge] = React.useState('');
  const [Address, onChangeAddress] = React.useState('');
  const [School, onChangeSchool] = React.useState('');
  const [Course, onChangeCourse] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [Contact, onChangeContact] = React.useState('');
   const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="Name:"
          value={Name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={AGE}
          placeholder="AGE:"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeAddress={onChangeAddress}
          value={Address}
          placeholder="Address:"
          keyboardType=":Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={School}
          placeholder="School:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={Course}
          placeholder="Course:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={Contact}
          placeholder="Contact:"
        />
            <SafeAreaView
            style={[
              styles.container,
              {
                backgroundColor: value,
                borderWidth: 1,
                margin:12,
              },
            ]}>
            <TextInput
              placeholder="About Me:"
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => onChangeText(text)}
              value={value}
              style={styles.textInput}
            />
          </SafeAreaView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;