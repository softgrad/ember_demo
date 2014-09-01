App.Question = DS.Model.extend({
  title: DS.attr('string'),
  tags: DS.attr(),
  link: DS.attr('string'),
  is_answered: DS.attr('string'),
  answer_count: DS.attr('number')
});

App.QuestionSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    return this._super(store, type, { question: payload.items });
  },
  normalizeHash: {
    question: function(hash) {
      hash.id = hash.question_id;
      return hash;
    }
  }
});
