const pad = (num) => Number(num) < 10 ? `0${num}` : num;

const genericConfigs = {
	views: ['month', 'week'],
	formatDate: (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
};

const weekConfigs = {
	daysPerWeek: 7,
	tdUnitInMinutes: 30,
	unitHeightPerColumn: 30,
	colWidth: 100,
	headerHeight: 30,
	weekStart: 0,
	dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	timeFormat: (date) => `${pad((date.getHours() + 11) % 12 + 1)} ${pad(date.getMinutes())} ${date.getHours() < 12 ? 'AM': 'PM'}`,
};

export { weekConfigs, genericConfigs };