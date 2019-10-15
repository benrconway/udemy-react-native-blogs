import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random()* 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'edit_blogpost':
      const newState = state.filter(blogPost => blogPost.id !== action.payload.id);
      const { id, title, content } = action;
      return [...newState, { id, title, content}]
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: {title, content} });
    callback();
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id})
  }
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: {id, title, content} });
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
   },
  [{ title: 'Test Post', content: 'Test Content', id: 1992 }]
)