NewsReader.Views.FeedForm = Backbone.View.extend({
  template: JST['feeds/form'],

  events: {
    'submit .create-feed': 'createFeed'
  },

  render: function() {
    var formContent = this.template();
    this.$el.html(formContent);
    return this;
  },

  createFeed: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON(); // dl this
    var newFeed = new NewsReader.Models.Feed(params);
    newFeed.save();
    Backbone.history.navigate('#', { trigger: true });
  }


});
