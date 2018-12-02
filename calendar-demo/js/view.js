import { weekConfigs, genericConfigs } from './config';

const getTableHead = (viewStartDate) => {
	const cols = [
		`<th></th>`
	];
	for (let i = 0; i < weekConfigs.daysPerWeek; i++) {
		const date = viewStartDate.add('d', i);
		cols.push(`<th>${weekConfigs.dayNames[date.getDay()]}</th>`);
	}
	return cols.join('');
};

const getTableBody = (viewStartDate) => {
	const max = (24 * 60/weekConfigs.tdUnitInMinutes);
	const rows = [];
	for (let i = 0; i < max; i++) {
		const mins = i * weekConfigs.tdUnitInMinutes;
		const date = viewStartDate.add('mi', mins);
		rows.push(
			`<tr>${getTds(date, mins)}</tr>`
			);
	}
	return rows.join('');
};

const getTds = (date, mins) => {
	const cols = [
		`<td>${getFormattedTime(mins)}</td>`
	];
	for (let i = 0; i < weekConfigs.daysPerWeek; i++) {
		cols.push(`<td 
			data-date="${genericConfigs.formatDate(date.add('d', i))}" 
			data-mins="${mins}">
			</td>`);
	}
	return cols.join('');
};

const clearDate = (date) => {
	const _date = date instanceof Date ? date : new Date();
	return _date.clearTime();
}

const getFormattedTime = (mins) => {
    const date = clearDate();
    date.setMinutes(mins);
    return weekConfigs.timeFormat(date);
};

const getTable = (viewStartDate) => {
	return `
		<table>
			<thead>${getTableHead(viewStartDate)}</thead>
			<tbody>${getTableBody(viewStartDate)}</tbody>
		</table>
	`;
};

export const renderCalendar = (eventsArray) => {
	const today = clearDate();
	const diff = weekConfigs.weekStart - today.getDay();
	const viewStartDate = today.add('d', diff);
	const calendar = document.getElementById('calendar');
	calendar.innerHTML = getTable(viewStartDate);
	const renderedEventElements = eventsArray.map((ev) => ev.renderedEventElement(calendar));
	calendar.innerHTML += renderedEventElements.join('');
}
