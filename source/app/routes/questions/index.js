App.QuestionsIndexRoute = App.Route.extend({
  queryParams: {
    site: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('question', params);
    // return this.store.find('question');
  }
});
