const { FrameworkObject } = require("../framework-object");

class DateTime {
	constructor(dateTime) {
		const dateAndTime = dateTime.split(" ");
		const dateFragments = dateAndTime[0].split("-");
		let hour = null;
		let minute = null;

		if (dateAndTime[1]) {
			const timeFragments = dateAndTime[1].split(":");
			hour = timeFragments[0];
			minute = timeFragments[1] ? timeFragments[1] : null;
		}

		return {
			Year: dateFragments[0],
			Month: dateFragments[1] ? dateFragments[1] : null,
			Day: dateFragments[2] ? dateFragments[2] : null,
			Hour: hour,
			Minute: minute,
		};
	}
}

class Calender extends FrameworkObject {
	setCalender(calendarInput) {
		switch (calendarInput.toUpperCase()) {
			case "TODAY": {
				const todayElement = this.webElement.find(".dp_footer .dp_today");
				todayElement.click();
				break;
			}
			case "CLEAR": {
				const todayElement = this.webElement.find(".dp_footer .dp_clear");
				todayElement.click();
				break;
			}
			default: {
				this.setDateTime(calendarInput);
				break;
			}
		}
		return this;
	}

	_dpCaptionElement() {
		const dpCaptionElement = this.webElement.findIfAny(".dp_header .dp_caption");

		if (!dpCaptionElement.any()) {
			throw new Error("Could not locate header caption element on the calendar.");
		}

		return dpCaptionElement;
	}

	setDateTime(dateTimeInput) {
		const dateTimeObject = new DateTime(dateTimeInput);
		const calendarCaption = this._dpCaptionElement().getText();

		// Check if the current year on the calendar header is that as wanted
		// If yes, skip selecting year
		if (calendarCaption.indexOf(dateTimeObject.Year) === -1) {
			// Go to year picker screen
			let triesToGetYearPicker = 2;
			while (!this._isYearPickerVisible() || triesToGetYearPicker > 0) {
				this._dpCaptionElement().click();
				triesToGetYearPicker--;
			}
		}

		// set the year on the year picker screen
		if (this._isYearPickerVisible()) {
			this._setYearEntry(dateTimeObject.Year);
		}

		// If month is to be selected, and it's not the month picker screen
		if (dateTimeObject.Month && !this._isMonthPickerVisible()) {
			this._dpCaptionElement().click();
		}

		// set the month on the month picker screen
		if (this._isMonthPickerVisible()) {
			this._setMonthEntry(dateTimeObject.Month);
		}

		// set the day on the day picker screen
		if (this._isDayPickerVisible()) {
			this._setDayEntry(dateTimeObject.Day);
		}

		if (this._isTimePickerVisible()) {
			if (dateTimeObject.Hour) {
				this._setTimeHHEntry(dateTimeObject.Hour);
			}
			if (dateTimeObject.Minute) {
				this._setTimeMMEntry(dateTimeObject.Minute);
			}

			const datetimeConfirmElement = this.webElement.find(".dp_footer .dp_confirm");
			datetimeConfirmElement.click();
		}
	}

	_isDayPickerVisible() {
		const daypickerVisible = this.webElement.findIfAny(".dp_daypicker:isVisible");
		return daypickerVisible.any();
	}

	_isMonthPickerVisible() {
		const monthpickerVisible = this.webElement.findIfAny(".dp_monthpicker:isVisible");
		return monthpickerVisible.any();
	}

	_isYearPickerVisible() {
		const yearpickerVisible = this.webElement.findIfAny(".dp_yearpicker:isVisible");
		return yearpickerVisible.any();
	}

	_isTimePickerVisible() {
		const timepickerVisible = this.webElement.findIfAny(".dp_timepicker:isVisible");
		return timepickerVisible.any();
	}

	_setDayEntry(day) {
		this.webElement
			.find(`.dp_daypicker td:not(.dp_not_in_month):textMatches(/^${day}$/)`)
			.click();
		return this;
	}

	_setMonthEntry(month) {
		const zerobasedMonth = month - 1;
		this.webElement.find(`.dp_monthpicker .dp_month_${zerobasedMonth}`).click();
		return this;
	}

	_setYearEntry(year) {
		const yearToSelect = this.webElement.findIfAny(
			`.dp_yearpicker td:textMatches(/^${year}$/)`
		);

		if (yearToSelect.any()) {
			yearToSelect.click();
		} else {
			const firstYearInList = this._getFirstYearInList();
			if (firstYearInList > year) {
				this._reduceYearRange();
			} else {
				this._increaseYearRange();
			}

			this._setYearEntry(year);
		}

		return this;
	}

	_setTimeHHEntry(hh) {
		const hourToSet = parseInt(hh, 10);
		const currentSelectedHH = this._getCurrentSelectedHH();
		if (currentSelectedHH !== hourToSet) {
			if (currentSelectedHH > hourToSet) {
				this._reduceHour(currentSelectedHH - hourToSet);
			} else {
				this._increaseHour(hourToSet - currentSelectedHH);
			}
		}
	}

	_setTimeMMEntry(mm) {
		const minuteToSet = parseInt(mm, 10);
		const currentSelectedMM = this._getCurrentSelectedMM();
		if (currentSelectedMM !== minuteToSet) {
			if (currentSelectedMM > minuteToSet) {
				this._reduceMinute(currentSelectedMM - minuteToSet);
			} else {
				this._increaseMinute(minuteToSet - currentSelectedMM);
			}
		}
	}

	_getFirstYearInList() {
		const firstYearInList = this.webElement.find(`.dp_yearpicker td:first`);
		return parseInt(firstYearInList.getText(), 10);
	}

	_getLastYearInList() {
		const lastYearInList = this.webElement.find(`.dp_yearpicker td:last`);
		return parseInt(lastYearInList.getText(), 10);
	}

	_getCurrentSelectedHH() {
		const currentSelectedHH = this.webElement.find(
			`.dp_timepicker .dp_time_segments .dp_time_hours`
		);
		return parseInt(currentSelectedHH.getText(), 10);
	}

	_getCurrentSelectedMM() {
		const currentSelectedMM = this.webElement.find(
			`.dp_timepicker .dp_time_segments .dp_time_minutes`
		);
		return parseInt(currentSelectedMM.getText(), 10);
	}

	_increaseYearRange() {
		const increaseYearRangeElement = this.webElement.find(`.dp_header .dp_next`);
		increaseYearRangeElement.click();
	}

	_reduceYearRange() {
		const increaseYearRangeElement = this.webElement.find(`.dp_header .dp_previous`);
		increaseYearRangeElement.click();
	}

	_increaseHour(increaseByCount) {
		while (increaseByCount > 0) {
			const increaseHourElement = this.webElement.find(
				`.dp_timepicker .dp_time_controls_increase .dp_time_hour`
			);
			increaseHourElement.click();
			increaseByCount--;
		}
	}

	_increaseMinute(increaseByCount) {
		while (increaseByCount > 0) {
			const increaseMinuteElement = this.webElement.find(
				`.dp_timepicker .dp_time_controls_increase .dp_time_minute`
			);
			increaseMinuteElement.click();
			increaseByCount--;
		}
	}

	_reduceHour(reduceByCount) {
		while (reduceByCount > 0) {
			const reduceHourElement = this.webElement.find(
				`.dp_timepicker .dp_time_controls_decrease .dp_time_hour`
			);
			reduceHourElement.click();
			reduceByCount--;
		}
	}

	_reduceMinute(reduceByCount) {
		while (reduceByCount > 0) {
			const reduceMinuteElement = this.webElement.find(
				`.dp_timepicker .dp_time_controls_decrease .dp_time_minute`
			);
			reduceMinuteElement.click();
			reduceByCount--;
		}
	}

	selectCurrentDateTime() {
		this.webElement.find(`.dp_current`).click();
		this.webElement.find(`.dp_confirm`).click();
		return this;
	}

	selectHighlightDateTime() {
		this.webElement.find(`.dp_selected`).click();
		this.webElement.find(`.dp_confirm`).click();
		return this;
	}

	checkForTimeIcon() {
		const timeIcon = this.webElement.findIfAny(".dp_view_toggler:isVisible");
		return timeIcon.any();
	}
	checkForMinuteGranularity() {
		this.webElement.findIfAny(".dp_view_toggler:isVisible").click();
		const hourTimer = this.webElement.findIfAny(".dp_time_hours:isVisible");
		return hourTimer.any();
	}

	checkForHourGranularity() {
		this.webElement.findIfAny(".dp_view_toggler:isVisible").click();
		const minuteTimer = this.webElement.findIfAny(".dp_time_minutes:isVisible");
		return minuteTimer.any();
	}

	checkForDayGranularity() {
		return this._isDayPickerVisible() && !this.checkForTimeIcon();
	}

	checkForMonthGranularity() {
		let result = false;
		this.webElement.find(`.dp_selected`).click();
		if (this._isMonthPickerVisible()) {
			this.webElement.find(`.dp_monthpicker .dp_month_0`).click();

			result = !this._isDayPickerVisible() && !this.checkForTimeIcon();
		}
		return result;
	}

	checkForYearGranularity() {
		let result = false;
		if (this._isYearPickerVisible) {
			this.webElement.find(`.dp_selected`).click();
			result =
				!this._isDayPickerVisible() &&
				!this.checkForTimeIcon() &&
				!this._isMonthPickerVisible();
		}
		return result;
	}

	checkCalenderRange(day) {
		const calRange = this.webElement
			.find(`.dp_daypicker td:not(.dp_not_in_month):textMatches(/^${day}$/)`)
			.hasClass("dp_disabled");
		return calRange;
	}

	checkCalenderDateSelected(day) {
		const selectedDate = this.webElement
			.find(`.dp_daypicker td:not(.dp_not_in_month):textMatches(/^${day}$/)`)
			.hasClass("dp_selected");
		return selectedDate;
	}
}

module.exports = {
	Calender,
};
