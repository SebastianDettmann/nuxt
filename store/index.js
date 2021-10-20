import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          vuexContext.commit('setPosts', [
            {
              id: '1',
              author: 'metze',
              thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              title: 'Post Title 1',
              content: 'Post preview text 1'
            },
            {
              id: '2',
              author: 'me to',
              thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              title: 'Post Title 2',
              content: 'Post preview text 3'
            },
            {
              id: '3',
              author: 'also me',
              thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              title: 'Post Title 3',
              content: 'Post preview text 3'
            }
          ]);
          resolve();
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  });
}

export default createStore
