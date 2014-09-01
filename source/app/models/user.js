App.User = DS.Model.extend({
  account_id: DS.attr('number'),
  age: DS.attr('number'),
  website_url: DS.attr('string'),
  profile_image: DS.attr('string'),
  badge_counts: DS.attr(),
  display_name: DS.attr('string'),
  link: DS.attr('string'),
  location: DS.attr('string'),
});

App.UserSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    return this._super(store, type, { users: payload.items });
  },
  normalizeHash: {
    users: function(hash) {
      hash.id = hash.user_id;
      if (!hash.age) hash.age = 0;
      if (!hash.website_url) hash.website_url = '#';
      if (!hash.location) hash.location = '-';

      return hash;
    }
  }
});
