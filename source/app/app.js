window.App = Ember.Application.create({
  ready: function () {
    this.register('session:current', App.Session, {
      singleton: true
    });

    this.inject('route', 'session', 'session:current');
    this.inject('controller', 'session', 'session:current');
    this.inject('view', 'session', 'session:current');
  }
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://api.stackexchange.com',
  namespace: '2.2',
  findQuery: function(store, type, query) {
    if (query.id) {
      url = this.buildURL(type.typeKey, query.id);
      delete query.id;
    } else {
      url = this.buildURL(type.typeKey);
    }

    return this.ajax(url, 'GET', { data: query });
  }
});
// App.ApplicationAdapter = DS.FixtureAdapter;

App.Session = Em.Object.extend({
  init: function() {
    var self = this,
        string = localStorage.getItem('isAuthenticated') || '';

    switch (string.toLowerCase()) {
    case "true":
    case "yes":
    case "1":
      return self.set('isAuthenticated', true);
    case "false":
    case "no":
    case "0":
    case null:
      return self.set('isAuthenticated', false);
    default:
      return self.set('isAuthenticated',Boolean(string));
    }
  },

  authChanged: function () {
    localStorage.setItem('isAuthenticated', this.get('isAuthenticated'));
  }.observes('isAuthenticated')
});

App.Route = Ember.Route.extend({
  lock: true,
  actions: {
    willTransition: function(transition) {
      var self = this;

      if (this.lock) {
        transition.abort();
        this.lock = false;
        this.get('controller').set('isOpen', false);
        setTimeout(function() {
          transition.retry();
        }, 500);
      } else {
        self.lock = true;
      }
    }
  }
});

App.View = Ember.View.extend({
  didInsertElement: function () {
    this.addObserver('controller.isOpen', this.isOpenDidChange);
    this.set('controller.isOpen', true);
  },
  isOpenDidChange: function () {
    var isOpen = this.get('controller.isOpen'),
        self = this;

    if (isOpen) {
      setTimeout(function() {
        self.$('.content').addClass('open');
      }, 0);
    } else {
      this.$('.content').removeClass('open');
    }
  }
});

if (Modernizr.touch) {
  window.addEventListener('load', function () {
    new FastClick(document.body);
  }, false);
}
