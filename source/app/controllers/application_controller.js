App.ApplicationController = Ember.ObjectController.extend({
  actions: {
    logout: function() {
      this.session.set('isAuthenticated', false);
      this.transitionToRoute('/');
    }
  }
});
