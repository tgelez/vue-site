// Internal routing to server

import Api from '@/services/Api';

export default {
  fetchPosts() {
    return Api().get('cellar');
  },

  addPost(params) {
    return Api().post('cellar', params);
  },

  updatePost(params) {
    return Api().put('cellar/bottle/' + params.id, params);
  },

  getPost(params) {
    return Api().get('cellar/bottle/' + params.id);
  },

  deletePost(id) {
    return Api().delete('cellar/bottle/' + id);
  }
};
