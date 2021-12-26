import clsx from 'clsx';
import React from 'react';
import LabelItem from '../LabelItem';

function LabelList({ labelList = [], noWrap = false }) {
	return (
		<div
			className={clsx('row', 'label--container', {
				'no-wrap': noWrap,
			})}
		>
			{labelList.map((label, index) => (
				<div key={index} className="col l-4 m-4 c-6 mb-30">
					<LabelItem label={label} />
				</div>
			))}
		</div>
	);
}

export default LabelList;
