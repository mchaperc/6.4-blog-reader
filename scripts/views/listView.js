export default Backbone.View.extend({

	template: JST.blogList,

	tagName: 'ul',
	className: 'blog-list',

	events: {
		'click .blog-list-item': 'showPost',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	showPost: function() {
		console.log(this);
	}

});