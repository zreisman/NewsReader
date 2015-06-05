NewsReader.Routers.Feeds = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = new NewsReader.Collections.Feeds();
  },

  routes: {
    "": "index",
    'feeds/new': 'new',
    'feeds/:id': 'feedShow'
  },

  index: function() {
    this.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({collection: this.feeds});
    this.$rootEl.html(indexView.render().$el);
  },

  feedShow: function(id) {
    var feed = this.feeds.getOrFetch(id);
    var showView = new NewsReader.Views.FeedShow({ model: feed });
    this.$rootEl.html(showView.render().$el);
  },

  new: function() {
    var feedFormView = new NewsReader.Views.FeedForm();
    this.$rootEl.html(feedFormView.render().$el);
  }
});
