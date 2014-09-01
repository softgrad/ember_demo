App.IndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.transitionTo('users');
  }
});
