App.QuestionsIndexController = Ember.ArrayController.extend({
  queryParams: ['page', 'pagesize', 'site'],
  site: 'stackoverflow',
  page: 1,
  pagesize: 60
});
