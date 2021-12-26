import HeartButton from 'components/IconButton/HeartButton';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PlaylistItemInfo from '../PlaylistItemInfo';

function PlaylistItem({ playlist, playlistIndex, onChangePlaylist }, ref) {
	const { image } = playlist;
	const itemRef = useRef();

	const handleChangePlaylist = () => {
		if (onChangePlaylist) onChangePlaylist(playlistIndex);
	};

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--playlist" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="row__item-display br-5">
					<div
						className="row__item-img img--square"
						style={{
							background: `url('${image}') no-repeat center center / cover`,
						}}
					></div>
					<div className="row__item-actions">
						<HeartButton primary optionalClass="action-btn" />
						<div className="btn--play-playlist" onClick={handleChangePlaylist}>
							<div className="control-btn btn-toggle-play">
								<i className="bi bi-play-fill"></i>
							</div>
						</div>
						<div className="action-btn">
							<i className="btn--icon bi bi-three-dots"></i>
						</div>
					</div>
					<div className="overlay"></div>
				</div>
				<PlaylistItemInfo playlist={playlist} />
			</div>
		</div>
	);
}

export default forwardRef(PlaylistItem);
