App.UsersIndexRoute = App.Route.extend({
  queryParams: {
    inname: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.findQuery('user', params);
    // return this.store.find('user');
  }
});
