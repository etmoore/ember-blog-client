import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newPost: function() {
      var title = this.get('postTitle');
      var body = this.get('postBody');
      var post = this.store.createRecord('post', { title: title, body: body });
      this.set('postTitle', '');
      this.set('postBody', '');
      post.save();
    },
  },
});
