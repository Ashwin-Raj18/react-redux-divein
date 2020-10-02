import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
	constructor (props) {
		super(props);
		this.state = {
			title : '',
			body  : ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange (e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit (e) {
		e.preventDefault();
		const post = {
			...this.state
		};

		this.props.createPost(post);
	}
	render () {
		return (
			<div>
				<h1>Add post</h1>
				<form>
					<div>
						<label>Title:</label>
						<br />
						<input
							name="title"
							type="text"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<div>
						<label>Body:</label>
						<br />
						<textarea name="body" value={this.state.body} onChange={this.onChange} />
					</div>
					<br />
					<button type="submit" onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

Postform.propTypes = {
	createPost : PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
