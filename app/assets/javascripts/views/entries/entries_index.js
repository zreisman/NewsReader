NewsReader.Views.EntriesIndex = Backbone.View.extend({
  tagName: 'li',
  template: JST['entries/index'],

  render: function() {
    var entryContent = this.template({ entry: this.model });
    this.$el.html(entryContent);
    return this;
  }

});
