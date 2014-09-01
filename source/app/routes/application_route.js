App.ApplicationRoute = Ember.Route.extend({
  actions: {
    openModal: function(modalName, model) {
      if (model) this.controllerFor(modalName).set('model', model);
      return this.render(modalName, {
        into: 'authentication',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        into: 'authentication',
        outlet: 'modal'
      });
    },

    loading: function() {
      var view = this.container.lookup('view:loading').append();
      this.router.one('didTransition', view, 'destroy');
    }
  }
});
