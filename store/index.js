import Vuex from 'vuex'
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, newPost) {
        state.loadedPosts.push(newPost)
      },
      editPost(state, editedPost) {
        console.log(' editedPost');
        console.log( editedPost);
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        console.log('postIndex');
        console.log(postIndex);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
         return axios.get(process.env.baseUrl + '/posts.json')
          .then(response => {
            const postArray = [];
            for (const key in response.data) {
              postArray.push({ ...response.data[key], id: key})
            }
             vuexContext.commit('setPosts', postArray)
          })
          .catch(error => context.error(error))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, newPost) {
        const createdPost = {
          ...newPost,
          updatedDate: new Date()
        };
        return axios.post(process.env.baseUrl + '/posts.json', createdPost)
          .then(response => {
            vuexContext.commit('addPost', {...createdPost, id: response.data.name});
          })
          .catch(error => console.log(error));
      },
      editPost(vuexContext, editedPost) {
        editedPost.updatedDate = new Date();
        return axios.put(process.env.baseUrl + '/posts/' + editedPost.id + '.json', editedPost)
          .then(response => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(error => console.log(error))
      },

    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  });
}

export default createStore
