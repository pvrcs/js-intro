import { weekConfigs, genericConfigs } from './config';

const getY = (date) => {
	const multiple = (date.getHours() * 60 + date.getMinutes()) / weekConfigs.tdUnitInMinutes;
	return multiple * (weekConfigs.unitHeightPerColumn + 3) + (weekConfigs.headerHeight + 3);
};

export class Event {
	constructor(start, end) {
		this.start = start;
		this.end = end;
		
	}

	get x() {
		const multiple = this.start.getDay() - weekConfigs.weekStart;
		return (multiple + 1) * (weekConfigs.colWidth - 12);
	}

	get y() {
		return getY(this.start);
	}

	get height() {
		return getY(this.end) - this.y;
	}

	get width() {
		return weekConfigs.colWidth - 15;
	}

	renderedEventElement(calendar) {
		const {offsetTop, offsetLeft} = calendar;
		const top = this.y + offsetTop;
		const left = this.x + offsetLeft;
		const width = this.width;
		const height = this.height;

		return `<div style="position: absolute;
								height: ${height}px;
								width: ${width}px;
								top: ${top}px;
								left: ${left}px;
								background-color: blue;">
					</div>`;
	}
}