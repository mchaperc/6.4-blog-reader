export default Backbone.View.extend({

	template: JST.blogRead,

	tagName: 'div',
	className: 'container',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model));
	}

});