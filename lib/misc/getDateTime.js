const _now = () => new Date();

const getTodaysDate = () => {
	const now = _now();
	const date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
	return date;
};

const getCurrentTime = () => {
	const now = _now();
	const time = now.getHours() + ":" + now.getMinutes();
	return time;
};

const getCurrentTimeHour = () => {
	const now = _now();
	const time = now.getHours();
	return time;
};

const getCurrentDateTime = () => getTodaysDate() + " " + getCurrentTime();

const getYesterdaysDate = () => {
	const dateObject = new Date(Date.now() - 1000 * 60 * 60 * 24);
	const yesterdaysDate =
		dateObject.getFullYear() + "-" + (dateObject.getMonth() + 1) + "-" + dateObject.getDate();
	return yesterdaysDate;
};

const getTomorrowsDate = () => {
	const dateObject = new Date(Date.now() + 1000 * 60 * 60 * 24);
	const tomorrowsDate =
		dateObject.getFullYear() + "-" + (dateObject.getMonth() + 1) + "-" + dateObject.getDate();
	return tomorrowsDate;
};

const getYesterdaysDateTime = () => getYesterdaysDate() + " " + getCurrentTime();

const getTomorrowsDateTime = () => getTomorrowsDate() + " " + getCurrentTime();

const getCurrentTimeZone = () => /\((.*)\)/.exec(new Date().toString())[1];

const getTimeComponent = (datetime) => {
	const hours = datetime.getHours() > 9 ? datetime.getHours() : "0" + datetime.getHours();
	const minutes = datetime.getMinutes() > 9 ? datetime.getMinutes() : "0" + datetime.getMinutes();

	return hours + ":" + minutes;
};

const getCurrentTimeBasedOnTimezoneOffset = (offset) => {
	// create Date object for current location
	const d = _now();

	// convert to msec
	// add local time zone offset
	// get UTC time in msec
	const utc = d.getTime() + d.getTimezoneOffset() * 60000;

	// create new Date object for different city
	// using supplied offset
	const currentDateTimeBasedOnTimezoneOffset = new Date(utc + 3600000 * offset);
	const currentDateTimeMinus2Minutes = new Date(
		currentDateTimeBasedOnTimezoneOffset.getTime() - 120000
	);
	const currentDateTimeMinus1Minute = new Date(
		currentDateTimeBasedOnTimezoneOffset.getTime() - 60000
	);
	const currentDateTimePlus1Minute = new Date(
		currentDateTimeBasedOnTimezoneOffset.getTime() + 60000
	);
	const currentDateTimePlus2Minutes = new Date(
		currentDateTimeBasedOnTimezoneOffset.getTime() + 120000
	);

	const currentTimePlusMinusBasedOnTimeZoneOffset = new RegExp(
		"(" +
			getTimeComponent(currentDateTimeMinus2Minutes) +
			"|" +
			getTimeComponent(currentDateTimeMinus1Minute) +
			"|" +
			getTimeComponent(currentDateTimeBasedOnTimezoneOffset) +
			"|" +
			getTimeComponent(currentDateTimePlus1Minute) +
			"|" +
			getTimeComponent(currentDateTimePlus2Minutes) +
			")"
	);
	// eslint-disable-next-line no-console
	console.log(
		"currentTimePlusMinusBasedOnTimeZoneOffset",
		currentTimePlusMinusBasedOnTimeZoneOffset
	);
	return currentTimePlusMinusBasedOnTimeZoneOffset;
};

module.exports = {
	_now,
	getTodaysDate,
	getCurrentTime,
	getCurrentTimeHour,
	getCurrentDateTime,
	getYesterdaysDate,
	getTomorrowsDate,
	getYesterdaysDateTime,
	getTomorrowsDateTime,
	getCurrentTimeZone,
	getCurrentTimeBasedOnTimezoneOffset,
	getTimeComponent,
};
