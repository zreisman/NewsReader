NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/feeds/',
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var collection = this;
    var feed = collection.get(id);
    if (feed) {
      feed.fetch();
    } else {
      feed = new NewsReader.Models.Feed({ id: id });
      feed.fetch({
        success: function() {
          collection.add(feed);
        }
      });
    }
    return feed;
  }

});
