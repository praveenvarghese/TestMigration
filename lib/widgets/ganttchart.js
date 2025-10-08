const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());
const { _ } = require("lodash");
const assert = require("assert");
const { Widget } = require("./widget");
const mixin = require("../mixin");
const { WithPartitionOptionEditor } = require("../option-editors/partition-option-editor");
const { ItemActions } = require("../application/item-actions");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const { WithWidgetNamedView } = require("../application/widget-named-view");
const {
	WithGanttchartSettingsOptionEditor,
} = require("../option-editors/ganttchart-settings-option-editor");
const {
	WithGanttchartContentsOptionEditor,
} = require("../option-editors/ganttchart-contents-option-editor");

class Job extends ItemActions {
	/**
	 * For all dragging/movement/sizing operations: the sizings/distances are the (unscaled) values that were deemed to be correct at
	 * the time of creating the test (pre-pageV2 and new pageV1 'open-sidebar-animations")
	 * However, it may need to be corrected due to the fact that, with the sidebar extended, it is scaled down to a certain size.
	 * Correct for that, by determining scaling beforehand
	 */
	scaled(unscaledDimension) {
		return Math.round(this.webElement.getElementScale() * unscaledDimension);
	}

	getTooltip() {
		return this.webElement.getText().replace(/<b>|<\/b>/g, "");
	}

	getAnnotations() {
		return this.webElement.getAttribute("class").split(" ");
	}

	resizeTheJob(resizeWidth) {
		const dragHandlerElQ = this.webElement.find(" ~ g.job-resize-drag-handle");

		$(".tag-ganttchart").moveTo();
		dragHandlerElQ.webElement.moveTo({ xOffset: 0, yOffset: this.scaled(20) });
		browser.buttonDown(0);
		dragHandlerElQ.webElement(this.scaled(resizeWidth), 0);
		browser.buttonUp(0);
	}

	getScrollPosition() {
		return browser.execute(() => ({ scrollX: this.scrollX, scrollY: this.scrollY }));
	}

	getDragCoordinates(scope) {
		scope.scrollIntoView();
		const sourceRect = scope.getBoundingClientRect(scope.webElement.id);
		const { scrollX, scrollY } = this.getScrollPosition(scope);
		const sourceX = parseInt(sourceRect.x - scrollX + sourceRect.width / 2, 10);
		const sourceY = parseInt(sourceRect.y - scrollY + sourceRect.height / 2, 10);
		const source = {
			X: sourceX,
			Y: sourceY,
		};
		return source;
	}

	performDrag(sourceX, sourceY, targetX, targetY) {
		browser.performActions([
			{
				type: "pointer",
				id: "finger1",
				parameters: { pointerType: "mouse" },
				actions: [
					{ type: "pointerMove", duration: 0, x: sourceX, y: sourceY },
					{ type: "pointerDown", button: 0 },
					{ type: "pause", duration: 10 }, // emulate human pause
					{ type: "pointerMove", duration: 100, x: targetX, y: targetY },
					{ type: "pointerUp", button: 0 },
				],
			},
		]);
	}

	rightHandleRightDragOfTheJob(resizeWidth) {
		const dragHandlerElQ = this.webElement.parent().find(".right-drag-handle rect");
		const source = this.getDragCoordinates(dragHandlerElQ);
		const targetX = source.X + this.scaled(resizeWidth);
		const targetY = source.Y;
		this.performDrag(source.X, source.Y, targetX, targetY);
	}

	rightHandleLeftDragOfTheJob(resizeWidth) {
		const dragHandlerElQ = this.webElement.parent().find(".right-drag-handle rect");
		const source = this.getDragCoordinates(dragHandlerElQ);
		const targetX = source.X - this.scaled(resizeWidth);
		const targetY = source.Y;
		this.performDrag(source.X, source.Y, targetX, targetY);
	}

	leftHandleLeftDragOfTheJob(resizeWidth) {
		const dragHandlerElQ = this.webElement.parent().find(".left-drag-handle rect");
		const source = this.getDragCoordinates(dragHandlerElQ);
		const targetX = source.X - this.scaled(resizeWidth);
		const targetY = source.Y;
		this.performDrag(source.X, source.Y, targetX, targetY);
	}

	leftHandleRightDragOfTheJob(resizeWidth) {
		const dragHandlerElQ = this.webElement.parent().find(".left-drag-handle rect");
		const source = this.getDragCoordinates(dragHandlerElQ);
		const targetX = source.X + this.scaled(resizeWidth);
		const targetY = source.Y;
		this.performDrag(source.X, source.Y, targetX, targetY);
	}

	resizeAndHoldTheJob(resizeWidth) {
		const resizeJobElQ = this.webElement.find(" ~ g.job-resize-drag-handle");
		$(".tag-ganttchart").moveTo();
		resizeJobElQ.webElement.moveTo({ xOffset: 0, yOffset: this.scaled(20) });
		browser.buttonDown(0);
		resizeJobElQ.webElement.moveTo({ xOffset: this.scaled(resizeWidth), yOffset: 0 });
	}

	click(xOffset = 2, yOffset = 2) {
		this.webElement.moveTo({ xOffset, yOffset });
		this.webElement.click();
		return this;
	}

	hover(xOffset = 2, yOffset = 2) {
		this.webElement.moveTo({ xOffset, yOffset });
		return this;
	}
	hasClass(className) {
		return this.webElement.hasClass(className);
	}
	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	getIntoViewport() {
		this.webElement.scrollIntoView(true);
	}
}

class Resource {
	constructor(name, jobs) {
		this.name = name;
		this._jobs = jobs;
	}

	getJobs() {
		return this._jobs;
	}

	findJob(jobKey) {
		const foundJob = this.getJobs().find((job) =>
			job.hasClass(`annotation-${jobKey.replace(/\s+/g, "-")}`)
		);
		return foundJob;
	}
}

class GanttChart extends mixin(
	Widget,
	WithPartitionOptionEditor,
	WithIdentifierSettingsOptionEditor,
	WithGenericContentsOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu,
	WithWidgetNamedView,
	WithGanttchartSettingsOptionEditor,
	WithGanttchartContentsOptionEditor
) {
	getResources() {
		const ganttChart = this;
		const { webElement } = ganttChart;
		const resourcesText = [].concat(
			webElement.find(":not(.chart--temporary-pre-render) g.y.axis g text").getText()
		);

		const resourceNames = resourcesText.map((name) =>
			name
				.trim()
				.replace(/^\(|\)$/g, "")
				.split(", ")
				.join("-")
		);
		const resources = resourceNames.map((name) => {
			const elements = webElement.find(`.job.resource-${name.replace(/\s+/g, "-")}`);
			const jobs = elements.webElements.map(
				(element) => new Job(webElement.find(`${element.selector}`))
			);

			return new Resource(name, jobs);
		});
		return resources;
	}

	findResource(resourceKeys) {
		const foundResource = this.getResources().find(
			(resource) => resource.name === resourceKeys.join("-")
		);
		log.debug(`(${resourceKeys}) => ${JSON.stringify(resourceKeys)}`);
		assert(foundResource, `Resource could not be found: ${resourceKeys}`);
		return foundResource;
	}

	getNoOfVisibleResources() {
		const resources = this.webElement.findIfAny(`.background .resource`).webElements;
		const nrOfVisibleResources = resources.reduce((visibleResources, resource) => {
			const widgetContainerRect = this.webElement.getBoundingClientRect();
			const resourceRect = this.webElement.find(resource.selector).getBoundingClientRect();
			if (resourceRect.bottom <= widgetContainerRect.bottom) {
				visibleResources.push(resource);
			}
			return visibleResources;
		}, []).length;
		return nrOfVisibleResources;
	}

	areResourcesAllShownAtOrWithinViewportSize() {
		const resources = this.webElement.findIfAny(`.background .resource`).webElements;
		const nrOfvisibleResources = this.getNoOfVisibleResources();

		return resources.length <= nrOfvisibleResources;
	}

	getEmptyMessage() {
		return this.webElement.find(".empty-widget-message").getText();
	}

	hasNowLine() {
		const timelineElement = this.webElement.findIfAny(".timeline-now");
		return timelineElement.any();
	}

	getNowLine() {
		const timelineElement = this.webElement.findIfAny(".timeline-now");
		return timelineElement.any() ? timelineElement : "None";
	}

	getNowLineInfo() {
		const nowLine_data_starttime = this.getNowLine().getAttribute("data-starttime");
		// eslint-disable-next-line radix
		const nowLineDateTime = new Date(parseInt(nowLine_data_starttime));
		const nowLineInfo = _.extend(
			{},
			{
				getCurrentDate() {
					return (
						nowLineDateTime.getFullYear() +
						"-" +
						(nowLineDateTime.getMonth() + 1) +
						"-" +
						nowLineDateTime.getDate()
					);
				},
				getCurrentTime() {
					// eslint-disable-next-line no-undef
					return getTimeComponent(nowLineDateTime);
				},
				getCurrentDateTime() {
					return this.getCurrentDate() + " " + this.getCurrentTime();
				},
			}
		);
		return nowLineInfo;
	}

	hasTodayLine() {
		const timelineElement = this.webElement.findIfAny(".timeline-today");
		return timelineElement.any();
	}

	hasGuidelines() {
		const guidelineElement = this.webElement.findIfAny(".guidelines");
		return guidelineElement.any();
	}

	getGuidelinesClasses() {
		return this.webElement.find(".guidelines").getAttribute("class") + "";
	}

	getXAxisElements() {
		return this.webElement.find(".x.axis text").getText() + "";
	}

	getSize() {
		const width = this.webElement.find(".resource:first").getAttribute("width");
		const height = this.webElement.find(".resource:first").getAttribute("height");
		return [width, height];
	}

	isChangeStartTimeDisabled() {
		const changeStartTimeDisabled = this.webElement.findIfAny(".change-starttime-disabled");
		return changeStartTimeDisabled.any();
	}

	isChangeDurationDisabled() {
		const changeDurationDisabled = this.webElement.findIfAny(".change-duration-disabled");
		return changeDurationDisabled.any();
	}

	dragJobToResource({ jobKey, sourceResourceName, targetResourceName }) {
		// Find job in the specific source resource
		const sourceResource = this.findResource([sourceResourceName]);
		const job = sourceResource.findJob(jobKey);

		// Find target resource index
		const resources = this.getResources();
		const targetIndex = resources.findIndex((resource) => resource.name === targetResourceName);
		const targetResourceElement = this.webElement.find(`.background .resource`).webElements[
			targetIndex
		];

		// Get coordinates
		const sourceLocation = job.webElement.getLocation();
		const targetLocation = this.webElement.find(targetResourceElement.selector).getLocation();

		const sourceX = Math.round(sourceLocation.x) + 50;
		const sourceY = Math.round(sourceLocation.y) + 25;
		const targetX = Math.round(targetLocation.x) + 100;
		const targetY = Math.round(targetLocation.y) + 73;

		job.performDrag(sourceX, sourceY, targetX, targetY);
	}
}

module.exports = {
	GanttChart,
	onRegisterWidgetTypes(registry) {
		registry["ganttchart"] = GanttChart;
	},
};
