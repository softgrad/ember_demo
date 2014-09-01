App.UsersShowRoute = App.Route.extend({
  model: function(params) {
    return this.store.findQuery('user', params);
    // return this.store.find('user', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', model.get('content')[0]);
  }
});
