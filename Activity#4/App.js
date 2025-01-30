import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Activity4 = () => {
  const [Name, onChangeName] = React.useState('');
  const [Age, onChangeAge] = React.useState('');
  const [Address, onChangeAddress] = React.useState('');
  const [School, onChangeSchool] = React.useState('');
  const [Course, onChangeCourse] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [Contact, onChangeComment] = React.useState('');
  const [AboutMe, onChangeAboutMe] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://iconape.com/wp-content/files/kx/369859/svg/name-logo-icon-png-svg.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={Name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://cdn-icons-png.flaticon.com/512/7527/7527115.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={Age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://www.kindpng.com/picc/m/705-7056384_address-png-file-address-icon-png-transparent-png.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={Address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require('@expo/snack-static/react-native-logo.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={School}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://static.vecteezy.com/system/resources/previews/000/592/910/original/vector-school-icon.jpg'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={Course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://purepng.com/public/uploads/large/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/OIP.a9fENmm_b5XFRWLjZDV7TwHaHa?rs=1&pid=ImgDetMain'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={Contact}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://icon-library.com/images/about-me-icon-png/about-me-icon-png-14.jpg'}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={AboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
    backgroundColor: 'lightgray',
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});


export default Activity4;