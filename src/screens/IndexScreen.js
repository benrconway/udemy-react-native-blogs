import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(()=> {
    getBlogPosts();

    // this addListener returns a listener that we want to clean up to remove a source of  memory leaks
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // this function will be called if this version of IndexScreen is ever completely removed.
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
      data={state}
      keyExtractor={blogPost => `${blogPost.id}`}
      renderItem={({ item })=> {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Show', {
            id: item.id
           })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity
              onPress={() => deleteBlogPost(item.id)}
              >
                <Feather name="trash" style={styles.icon}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
      <Feather name="plus" size={30} style={{ marginRight: 20 }} />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
  }
});

export default IndexScreen;