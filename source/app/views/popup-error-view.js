App.PopupErrorView = Ember.View.extend({
  layoutName: 'popup/index',
  classNames: ['popup-error'],
  didInsertElement: function () {
    var self = this;
    setTimeout(function() { self.$().find('.popup').addClass('show'); }, 0);
  }
});
