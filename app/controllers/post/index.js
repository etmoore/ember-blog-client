import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deletePost: function(post) {
      post.destroyRecord().then(function() {
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }
});
