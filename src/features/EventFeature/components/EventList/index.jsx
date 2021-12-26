import clsx from 'clsx';
import React from 'react';
import EventItem from '../EventItem';

function EventList({ eventList = [], noWrap = false }) {
	return (
		<div
			className={clsx('row', 'event--container', {
				'no-wrap': noWrap,
			})}
		>
			{eventList.map((event, index) => (
				<div key={index} className="col l-4 m-6 c-12">
					<EventItem event={event} />
				</div>
			))}
		</div>
	);
}

export default EventList;
