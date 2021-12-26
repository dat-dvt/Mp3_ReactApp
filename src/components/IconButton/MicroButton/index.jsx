import clsx from 'clsx';
import React, { useState } from 'react';
import '../SongIconButton.scss';

function MicroButton({ primary = false }) {
	const [isPrimary, setIsPrimary] = useState(primary);

	const handleChangePrimary = () => {
		setIsPrimary(!isPrimary);
	};

	return (
		<div className="option-btn hide-on-mobile" onClick={handleChangePrimary}>
			<i
				className={clsx('btn--icon', 'icon--mic', 'bi', 'bi-mic-fill', {
					primary: isPrimary,
				})}
			></i>
		</div>
	);
}

export default MicroButton;
