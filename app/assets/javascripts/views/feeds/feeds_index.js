NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({
  className: 'feed-index',
  template: JST['feeds/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync add', this.render);
    this.listenTo(this.collection, 'add', this.addFeed);
    this.collection.each(this.addFeed.bind(this));
    this.listenTo(this.collection, 'remove', this.removeFeed);
  },

  events: {
    'click .delete-feed': 'deleteFeed'
  },

  render: function() {
    var feedsContent = this.template();
    this.$el.html(feedsContent);
    this.attachSubviews();
    return this;
  },

  addFeed: function(feed) {
    var feedView = new NewsReader.Views.FeedItem({ model: feed });
    this.addSubview('.feeds', feedView);
  },

  removeFeed: function(feed) {
    this.removeModelSubview('.feeds', feed);
  }

});
