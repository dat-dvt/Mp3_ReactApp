import React from 'react';
import { useSelector } from 'react-redux';
import ToastMessage from './components/ToastMessage';
import './Toast.scss';

function Toast() {
	const { listToast, icons } = useSelector(state => state.toast);

	return (
		<div id="toast">
			{listToast.map((toast, index) => (
				<ToastMessage
					key={index}
					type={toast.type}
					message={toast.message}
					duration={toast.duration}
					icon={icons[toast.type]}
				/>
			))}
		</div>
	);
}

export default Toast;
