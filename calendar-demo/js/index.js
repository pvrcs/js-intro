import {initUtils} from './util';
import {renderCalendar} from './view';
import {Event} from './event';

initUtils();

renderCalendar([
	new Event(
		new Date(2018, 11, 2, 16, 30),
		new Date(2018, 11, 2, 17, 30)
	),
	new Event(
		new Date(2018, 11, 2, 1, 30),
		new Date(2018, 11, 2, 2, 30)
	),
	new Event(
		new Date(2018, 11, 5, 13, 30),
		new Date(2018, 11, 5, 15, 45)
	),
	new Event(
		new Date(2018, 11, 5, 16, 30),
		new Date(2018, 11, 5, 17, 45)
	)
]);
