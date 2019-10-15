import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Save"/>
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

export default BlogPostForm;