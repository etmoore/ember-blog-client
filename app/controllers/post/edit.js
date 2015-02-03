import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editPost: function() {
      var title = this.get('title');
      var body = this.get('body');
      var post = this.get('model');
      post.set({title: title, body: body});
      post.save().then(function() {
        this.transitionToRoute('post', post)
      }.bind(this));
    }
  }
});
