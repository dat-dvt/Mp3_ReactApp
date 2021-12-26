import MvList from 'features/Mv/components/MvList';
import React from 'react';
import { useSelector } from 'react-redux';

function TabMv() {
	const mvList = useSelector(state => state.personalMv.list);

	return (
		<div className="grid container__tab tab-mv">
			<div className="container__section row">
				<div className="col l-12 m-12 c-12 mb-16">
					<div className="container__header">
						<div className="container__header-title">
							<h3>MV&nbsp;</h3>
						</div>
						<h3 className="container__header-subtitle">MV</h3>
					</div>
				</div>
				<div className="col l-12 m-12 c-12">
					<MvList mvList={mvList} optionalClass="mb-30" />
				</div>
			</div>
		</div>
	);
}

export default TabMv;
