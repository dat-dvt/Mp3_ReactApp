import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import '../SongIconButton.scss';

function HeartButton({ primary: isPrimary = false, hideOnMobile = false, optionalClass = '' }) {
	const [primary, setPrimary] = useState(isPrimary);
	const heartIcon = useMemo(() => (primary ? 'bi-heart-fill' : 'bi-heart'), [primary]);

	const handleChangePrimary = () => {
		setPrimary(!primary);
	};

	return (
		<div
			className={clsx(optionalClass, {
				'hide-on-mobile': hideOnMobile,
			})}
			onClick={handleChangePrimary}
		>
			<i
				className={clsx('btn--icon', 'icon--heart', 'bi', heartIcon, {
					primary: primary,
				})}
			></i>
		</div>
	);
}

export default HeartButton;
