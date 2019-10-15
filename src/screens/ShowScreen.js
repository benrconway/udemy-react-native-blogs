import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(post => post.id === navigation.getParam('id'));
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
      <FontAwesome name="pencil" size={30} style={{ marginRight: 20 }} />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({});

export default ShowScreen;