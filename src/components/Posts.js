import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	componentDidMount () {
		this.props.fetchPosts();
	}
	// componentDidUpdate (prevProps) {
	// 	if (this.props.newPost !== prevProps.newPost) {
	// 		this.props.posts.unshift(this.props.newPost);
	// 	}
	// }

	render () {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h3>Posts</h3>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts : PropTypes.func.isRequired,
	posts      : PropTypes.array.isRequired,
	newPost    : PropTypes.object
};
const mapStateToProps = (state) => ({
	posts   : state.letter.items,
	newPost : state.letter.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
