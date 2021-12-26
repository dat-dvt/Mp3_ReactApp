import React from 'react';
import PostItem from '../PostItem';

function PostList({ listPost = [], postIndex = 0 }) {
	return (
		<div className="col l-6 m-6 c-12 story--container">
			{listPost.map((post, index) => (
				<PostItem key={index} post={post} postIndex={postIndex} index={index} />
			))}
		</div>
	);
}

export default PostList;
