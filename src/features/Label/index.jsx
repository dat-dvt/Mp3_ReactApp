import clsx from 'clsx';
import React from 'react';
import LabelList from './components/LabelList';

function Label({ optionalClass = '', labelList = [], noWrap }) {
	return (
		<div
			className={clsx('row', 'container__section', {
				[optionalClass]: optionalClass.length > 0,
			})}
		>
			<div className="col l-12 m-12 c-12">
				<LabelList labelList={labelList} noWrap={noWrap} hasCreateItem />
			</div>
		</div>
	);
}

export default Label;
