const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneWeek = oneDay * 7;

function clearTime() {
	var midNight = new Date( this );
	midNight.setHours(0, 0, 0, 0);
	return midNight;
}

function add( entity, measure ) {
	measure = Number( measure );
	if ( isNaN( measure )
	    || ( ( measure |= 0 ) === 0 )
	    	|| typeof entity !== 'string' ) {
		return this;
	}

	return _getResultDate( this, entity.toLowerCase(), measure );
}

function _getResultDate( dateObj, entity, measure ) {

	var resultDate,
		year = dateObj.getFullYear(),
		month = dateObj.getMonth(),
		date = dateObj.getDate();
	switch ( entity ) {
		case 'y': {
			resultDate = dateObj.getFirstDayOfMonth();
			resultDate.setFullYear( year + measure );
			resultDate.setDate( Math.min( resultDate.getLastDayOfMonth().getDate(), date ) );

			break;
		}
		case 'mo': {
			resultDate = dateObj.getFirstDayOfMonth();
			resultDate.setMonth( month + measure );
			resultDate.setDate( Math.min( resultDate.getLastDayOfMonth().getDate(), date ) );

			break;
		}
		case 'we': {
			resultDate = new Date( dateObj.valueOf() + ( oneWeek * measure ) );
			break;
		}
		case 'd': {
			resultDate = new Date( dateObj.valueOf() + ( oneDay * measure ) );
			break;
		}
		case 'h': {
			resultDate = new Date( dateObj.valueOf() + ( oneHour * measure ) );
			break;
		}
		case 'mi': {
			resultDate = new Date( dateObj.valueOf() + ( oneMinute * measure ) );
			break;
		}
		case 's': {
			resultDate = new Date( dateObj.valueOf() + ( oneSecond * measure ) );
			break;
		}
		case 'ms': {
			resultDate = new Date( dateObj.valueOf() +  measure );
			break;
		}
		default: {
			resultDate = dateObj;
			break;
		}
	}

	return resultDate;
}

export const initUtils = () => {
	Date.prototype.add = add;
	Date.prototype.clearTime = clearTime;
};
