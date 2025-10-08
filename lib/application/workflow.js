const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");
const $$$ = require("../selenium/3xdollar");
const { waitUntilPageLoaded } = require("../actions.js");

class WorkflowItems extends FrameworkObject {
	constructor() {
		super();
		this.clickFailed = true;
	}

	maximizeWorkflowPanel() {
		const workflowHeader = $$$("body>.workflow-panel.collapse")
			.find(".header .icon")
			.click();
		return workflowHeader;
	}

	collapseWorkflowPanel() {
		const workflowHeaderCollapsed = this._getWorkflowPanel()
			.find(".header .icon")
			.click();
		return workflowHeaderCollapsed;
	}

	getCollapsedData() {
		let workflowDetails = null;
		const workflowContainer = $$$("body>.workflow-panel.collapse:isVisible");

		if (workflowContainer.any()) {
			const workflowElements = workflowContainer.findIfAny(" .steps .step-item");
			const titles = [].concat(workflowElements.findIfAny(" .title").getText());
			const icons = [].concat(
				workflowElements.find(" div.icon:isVisible").getAttribute("class")
			);
			const status = [].concat(workflowElements.getAttribute("class"));
			// eslint-disable-next-line no-confusing-arrow
			const states = status.map((ai) => (ai.includes("inactive") ? "inactive" : "active"));
			const isCurrentStep = status.map((ab) => (ab.includes("current") ? "Yes" : "No"));

			workflowDetails = _.zipWith(
				titles,
				icons,
				states,
				isCurrentStep,
				(title, icon, state, currentStep) => ({
					title,
					icon,
					state,
					currentStep,
				})
			);
		}

		return workflowDetails;
	}

	getData() {
		let workflowDetails = "None";
		const workflowContainer = $$$("body>.workflow-panel:isVisible");

		if (workflowContainer.any()) {
			const workflowElements = workflowContainer.findIfAny(".steps .step-item");
			const titles = [].concat(workflowElements.findIfAny(".title:isVisible").getText());
			const icons = [].concat(
				workflowElements.findIfAny("div.icon:isVisible").getAttribute("class")
			);
			const status = [].concat(workflowElements.getAttribute("class"));
			// eslint-disable-next-line no-confusing-arrow
			const states = status.map((ai) => (ai.includes("inactive") ? "inactive" : "active"));
			const isCurrentStep = status.map((ab) => (ab.includes("current") ? "Yes" : "No"));

			workflowDetails = _.zipWith(
				titles,
				icons,
				states,
				isCurrentStep,
				(title, icon, state, currentStep) => ({
					title,
					icon,
					state,
					currentStep,
				})
			);
		}

		return workflowDetails;
	}

	getChildWorkflowStepsData(parentStepName) {
		let workflowDetails = null;
		const workflowContainer = $$$("body>.workflow-panel:isVisible");

		if (workflowContainer.any()) {
			const workflowElements = workflowContainer.findIfAny(
				`.steps .parent-step[data-page-id=${parentStepName}] .step-item`
			);
			if (!workflowElements.any()) {
				return [];
			}
			const titles = [].concat(workflowElements.findIfAny(".title").getText());
			const icons = [].concat(workflowElements.findIfAny("div.icon").getAttribute("class"));
			const status = [].concat(workflowElements.getAttribute("class"));
			// eslint-disable-next-line no-confusing-arrow
			const states = status.map((ai) => (ai.includes("inactive") ? "inactive" : "active"));
			const isCurrentStep = status.map((ab) => (ab.includes("current") ? "Yes" : "No"));

			workflowDetails = _.zipWith(
				titles,
				icons,
				states,
				isCurrentStep,
				(title, icon, state, currentStep) => ({
					title,
					icon,
					state,
					currentStep,
				})
			);
		}

		return workflowDetails;
	}

	_getWorkflowPanel() {
		return $$$("body>.workflow-panel");
	}

	getWorkflowSteps() {
		const stepsList = this._getWorkflowPanel()
			.find(".steps .step-item .title")
			.getText();
		return stepsList;
	}

	getWorkflowTitleName() {
		const workflowTitle = this._getWorkflowPanel()
			.findIfAny(".header .title")
			.getText();
		return workflowTitle;
	}

	getWorkflowTitleTooltip() {
		this._getWorkflowPanel().moveTo();
		const workflowTitleTooltip = this._getWorkflowPanel()
			.find(".header .title.default-tooltip-preventer-replacement-title.title")
			.getText();
		return workflowTitleTooltip;
	}

	clickOnWorkflowStep(stepName) {
		this._getWorkflowPanel()
			.findIfAny(".steps .step-item .title")
			.webElements.forEach((webElement) => {
				if (webElement.getText() === stepName) {
					webElement.click();
					this.clickFailed = false;
				}
			});

		if (this.clickFailed) {
			throw new Error("Step has not been clicked");
		}
	}

	isStepComplete(stepName) {
		this._getWorkflowPanel()
			.findIfAny(".steps .step-item .title")
			.webElements.forEach((webElement) => {
				if (webElement.getText() === stepName) {
					webElement.click();
					this.clickFailed = false;
				}
			});
	}

	/* eslint-disable-next-line */
	getStepElement(stepName) {
		const step = this._getWorkflowPanel()
			.findIfAny(".steps .step-item")
			.webElements.filter((webElement) => webElement.getText() === stepName);
		const stepElement = _.extend({}, step[0], {
			_getWorkflowStep() {
				return $$$(step[0].selector);
			},

			click({ waitForPageLoad } = { waitForPageLoad: true }) {
				waitForPageLoad = waitForPageLoad ?? true;
				const nextStep = this._getWorkflowStep();
				const nextStepSlug = nextStep.getAttribute("data-page-id");
				nextStep.click();
				waitForPageLoad &&
					waitUntilPageLoaded($$$(`[data-widget\\.uri="${nextStepSlug}"]`).getUrl());
			},

			hover() {
				this._getWorkflowStep().moveTo();
				return this;
			},

			scrollToStep() {
				this._getWorkflowStep().scrollIntoView(true);
			},

			_hasClass(className) {
				return (
					this._getWorkflowStep()
						.webElement.getAttribute("class")
						.split(" ")
						.indexOf(className) !== -1
				);
			},

			isStepError() {
				return this._hasClass("error");
			},

			isStepActive() {
				return this._hasClass("active");
			},

			isStepComplete() {
				return this._hasClass("complete");
			},

			isStepIncomplete() {
				return this._hasClass("incomplete");
			},

			isTheCurrentStep() {
				return this._hasClass("current");
			},

			isStepInactive() {
				return this._hasClass("inactive");
			},

			_getIcon() {
				return this._getWorkflowStep().find(".icon");
			},

			hasIcon() {
				const hasThisIcon = this._getIcon()
					.webElement.getAttribute("class")
					.split(" ")[1];
				return hasThisIcon;
			},
		});
		// console.log(Object.keys(stepElement));
		return stepElement;
	}

	isSubWorkflowExpanded(parentStepName) {
		const workflowContainer = this._getWorkflowPanel().find(
			`.parent-step[data-page-id=${parentStepName}]`
		);

		return workflowContainer.hasClass("open");
	}

	isChevronIconDisplayed(stepName) {
		const chevronLoc = this._getWorkflowPanel().findIfAny(
			`.parent-step[data-page-id=${stepName}] .arrow-btn`
		);

		return chevronLoc.any();
	}

	expandORCollapseParentStep(stepName) {
		this._getWorkflowPanel()
			.findIfAny(`.parent-step[data-page-id=${stepName}] .arrow-btn`)
			.click();
	}

	isStepDisplayedInWorkflowPanel(stepName) {
		const step = this._getWorkflowPanel().findIfAny(
			`.steps .step-item[data-page-id=${stepName}]:isVisible`
		);
		return step.any();
	}
}

module.exports = WorkflowItems;
