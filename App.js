import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  console.log(text);
  console.log(email);
  console.log(username);
  return (
    <View style={styles.container}>
      <Header title={'GrowPath'} />
      <TextInput
              value={text}
              onChangeText={text => setText(text)}
              placeholder='Email'
           />
      <TextInput
              value={email}
              onChangeText={email => setEmail(email)}
              placeholder='password'
           />
      <TextInput
              value={username}
              onChangeText={username => setUsername(username)}
              placeholder='username'
           />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
});

export default App;