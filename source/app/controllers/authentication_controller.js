App.AuthenticationController = Ember.ObjectController.extend({
  model: ['login', 'password'],

  actions: {
    login: function() {
      var data = { login: this.get('login'), password: this.get('password') };

      this.session.set('isAuthenticated', true);
      this.transitionToRoute('/');
    }
  }
});
