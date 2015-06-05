NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  tagName: 'ul',
  className: 'feed-show',
  template: JST['feeds/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.entries(), 'add', this.addEntryView);
    this.listenTo(this.model.entries(), 'remove', this.removeEntryView);
    this.model.entries().each(this.addEntryView.bind(this));

  },

  events: {
    'click .reload-button': 'reloadFeed'
  },

  render: function() {
    var feedContent = this.template({ feed: this.model });
    this.$el.html(feedContent);
    this.attachSubviews();

    return this;
  },

  reloadFeed: function() {
    var that = this;
    that.model.fetch({
      success: function () {
        that.render();
      }
    });
  },

  addEntryView: function (entry) {
    var entryView = new NewsReader.Views.EntriesIndex({ model: entry });
    this.addSubview('.feed-show', entryView);
  },

  removeEntryView: function(entry) {
    this.removeModelSubview('.feed-show', entry);
  }

});
