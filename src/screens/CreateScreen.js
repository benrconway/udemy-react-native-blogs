import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { state } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.inputStyle} title={title} onChangeText={setTitle}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.inputStyle} title={content} onChangeText={setContent}/>
      <Button title="Add Blog Post"/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle:{
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    fontSize: 18,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  }
});

export default CreateScreen;