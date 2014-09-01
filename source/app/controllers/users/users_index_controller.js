App.UsersIndexController = Ember.ArrayController.extend({
  queryParams: ['site', 'inname'],
  site: 'stackoverflow',
  inname: null,
  search: '',

  actions: {
    query: function() {
      var query = this.get('search');
      alert(query);
    }
  }
});
