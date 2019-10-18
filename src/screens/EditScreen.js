import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(post => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(id, title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate('Index');
        })
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;