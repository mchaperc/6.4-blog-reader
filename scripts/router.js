import ListView from './views/listView';
import {Post, PostCollection} from './models/listModel';
import PostView from './views/postView';

var Router = Backbone.Router.extend({

	routes: {

		'': 'index',
		':id': 'showBlog',

	},

	initialize: function() {

		this.posts = new PostCollection();

	  	this.posts.fetch().then(function() {
			var blogList = new ListView({collection: this.posts});
		  	$('#app-side').html(blogList.el);
	  	}.bind(this));

	},

	index: function() {
		$('#app-main').html('');
	},

	showBlog: function(id) {
		// Show the blog post that was just clicked on; hide any previously shown blog posts
		this.posts.fetch().then(function(posts) {
			return _.filter(posts, function(item) {
				if (item._id === id) {
					var blogView = new PostView({model: item});
					$('#app-main').html(blogView.el);			
				}
			});
		});
	}

});

var router = new Router();

export default router;