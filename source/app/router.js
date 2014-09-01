App.Router.map(function () {
  this.resource('users', function () {
    this.route('show', { path: '/:id' });
  });
  this.resource('questions', function () {
    this.route('show', { path: '/:id' });
  });
  this.route('authentication');
});
