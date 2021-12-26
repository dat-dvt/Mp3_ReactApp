import React from 'react';
import { useSelector } from 'react-redux';
import PostList from './components/PostList';
import './Post.scss';

function Post() {
	const { listPosts } = useSelector(state => state.post);
	return (
		<div className="row container__section">
			<div className="col l-12 m-12 c-12">
				<div className="row">
					{listPosts.map((listPost, postIndex) => (
						<PostList key={postIndex} listPost={listPost} postIndex={postIndex} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Post;
