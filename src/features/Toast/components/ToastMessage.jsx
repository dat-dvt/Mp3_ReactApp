import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeFirstToast } from '../toastSlice';

function ToastMessage(props) {
	const {
		type = 'info',
		message = '',
		duration = 3000,
		icon = 'bi bi-check2-circle',
	} = props;
	const dispatch = useDispatch();
	const timerId = useRef();

	const delay = useMemo(() => (duration / 1000).toFixed(2), [duration]);
	const fadeOutTime = useMemo(
		() => (duration / 1000 / 2).toFixed(2),
		[duration]
	);
	useEffect(() => {
		timerId.current = setTimeout(() => {
			dispatch(removeFirstToast());
		}, duration + duration / 2);

		// eslint-disable-next-line
	}, []);

	const handleCloseToast = () => {
		dispatch(removeFirstToast());
	};
	return (
		<div
			className={`toast toast--${type}`}
			style={{
				animation: `slideInleft ease 0.3s, fadeOut ${fadeOutTime}s ${delay}s forwards`,
			}}
		>
			<div className="toast__icon">
				<i className={icon}></i>
			</div>
			<div className="toast__body">
				<p className="toast__msg">{message}</p>
			</div>
			<div className="toast__close" onClick={handleCloseToast}>
				<i className="bi bi-x-lg"></i>
			</div>
		</div>
	);
}

export default ToastMessage;
