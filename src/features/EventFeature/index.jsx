import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import React from 'react';
import EventList from './components/EventList';
import './Event.scss';

function Event({ optionalClass = '', eventList = [], noWrap, sectionName = '', navigable = false }) {
	return (
		<div
			className={clsx('row', 'container__section', {
				[optionalClass]: optionalClass.length > 0,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					listLength={eventList.length}
					noWrap={noWrap}
					sectionName={sectionName}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<EventList eventList={eventList} noWrap={noWrap} />
			</div>
		</div>
	);
}

export default Event;
