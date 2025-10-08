const { Widget } = require("./widget");
const mixin = require("../mixin");
const { WithPartitionOptionEditor } = require("../option-editors/partition-option-editor");
const { ItemActions } = require("../application/item-actions");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings");
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
const $$$ = require("../selenium/3xdollar");

class Job extends ItemActions {
	getAnnotations() {
		return this.webElement.getAttribute("class").split(" ");
	}

	click() {
		const jobElement = this.webElement.find("rect[data-job-id]");
		jobElement.moveTo();
		jobElement.click();
		return this;
	}

	hover(xOffset = 2, yOffset = 2) {
		this.webElement.find("rect").moveTo({ xOffset, yOffset });
		return this;
	}
	hasClass(className) {
		return this.webElement.hasClass(className);
	}
	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	getIntoViewport() {
		this.webElement.find("rect").scrollIntoView(true);
	}

	getInlineLabelText() {
		return this.webElement.findIfAny(".label").getText();
	}
}

class Resource {
	constructor(resourceId, jobs, ganttChartWebElement) {
		this.resourceId = resourceId;
		this._jobs = jobs;
		this.ganttChartWebElement = ganttChartWebElement;
	}

	getJobs() {
		return this._jobs;
	}

	findJob(jobKey) {
		const el = this.ganttChartWebElement.find(
			`g.chart-item[data-resource-id="${this.resourceId}"][data-job-id="${jobKey}"]`
		);
		return new Job(el);
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
	findResource(resourceId) {
		const jobs = [];

		// Find all job elements with the specified data-resource-id
		const jobElements = this.webElement.findIfAny(`g[data-resource-id="${resourceId}"]`);

		for (let i = 0; i < jobElements.length; i++) {
			const jobElement = jobElements[i];
			jobs.push(new Job(jobElement));
		}

		if (jobs.length === 0) {
			return null;
		}

		return new Resource(resourceId, jobs, this.webElement);
	}

	getJobAnnotations(resourceId, jobId) {
		const jobElement = this.webElement.findIfAny(
			`g[data-resource-id="${resourceId}"][data-job-id="${jobId}"]`
		);

		if (jobElement.any()) {
			return jobElement.webElement.getAttribute("class").split(" ");
		}

		return [];
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

	getNoOfJobs() {
		return this.webElement.findIfAny(`.highcharts-series rect.chart-item`).length;
	}

	getVisibleNoOfJobsInViewPort() {
		return this.webElement.findIfAny(`.highcharts-series rect.chart-item:isVisible`).length;
	}

	areResourcesAllShownAtOrWithinViewportSize() {
		const resources = this.webElement.findIfAny(`.background .resource`).webElements;
		const nrOfvisibleResources = this.getNoOfVisibleResources();

		return resources.length <= nrOfvisibleResources;
	}

	getEmptyMessage() {
		return this.webElement.find(".empty-widget-message").getText();
	}

	getTopXAxisElements() {
		return (
			this.webElement
				.find("g.highcharts-axis-labels.highcharts-xaxis-labels:eq(0) text")
				.getText() + ""
		);
	}

	getFirstTopXAxisLabel() {
		const firstLabel = this.webElement.find(
			"g.highcharts-axis-labels.highcharts-xaxis-labels:eq(0)"
		);
		return firstLabel.find("text:eq(0)").getText();
	}

	getBottomXAxisElements() {
		return (
			this.webElement
				.find("g.highcharts-axis-labels.highcharts-xaxis-labels:eq(1) text")
				.getText() + ""
		);
	}

	getYAxisElements() {
		return (
			this.webElement
				.find("g.highcharts-axis-labels.highcharts-yaxis-labels.highcharts-grid-axis text")
				.getText() + ""
		);
	}

	getSize() {
		const width = this.webElement.find(".resource:first").getAttribute("width");
		const height = this.webElement.find(".resource:first").getAttribute("height");
		return [width, height];
	}

	getHighlightedJob() {
		const highlightedJobElement = this.webElement.findIfAny(
			`.highcharts-series .chart-item:last-child`
		);
		const attrDataResourceId = highlightedJobElement.getAttribute("data-resource-id");
		const attrDataJobId = highlightedJobElement.getAttribute("data-job-id");

		return `(${attrDataResourceId}, ${attrDataJobId})`;
	}

	getSelectedJob() {
		const highlightedJobElement = this.webElement.findIfAny(
			`.highcharts-series .chart-item.selected.is-active rect[data-job-id]`
		);
		const attrDataResourceId = highlightedJobElement.getAttribute("data-resource-id");
		const attrDataJobId = highlightedJobElement.getAttribute("data-job-id");

		return `(${attrDataResourceId}, ${attrDataJobId})`;
	}

	getTooltip() {
		return $$$(".highcharts-tooltip-container text")
			.getText()
			.replace(/<b>|<\/b>/g, "")
			.trim();
	}
}

module.exports = {
	GanttChart,
	onRegisterWidgetTypes(registry) {
		registry["ganttchart-v2"] = GanttChart;
	},
};
