NewsReader.Views.FeedItem = Backbone.View.extend({
  className: 'feed-item',
  template: JST['feeds/item'],

  initialize: function() {

  },

  events: {
    'click .delete-feed': 'deleteFeed'
  },

  render: function() {
    var feedItemContent = this.template({ feed: this.model });
    this.$el.html(feedItemContent);
    return this;
  },

  deleteFeed: function() {
    this.model.destroy();
    this.remove();
  }

});
