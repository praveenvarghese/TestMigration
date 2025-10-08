const { FrameworkObject } = require("../framework-object");
const { _ } = require("lodash");
const $$$ = require("../selenium/3xdollar");

class PageAction extends FrameworkObject {
	constructor(webElement, displayOrder) {
		super(webElement);
		this.displayOrder = displayOrder;
	}

	getButton() {
		const selector = `.page-action-${this.displayOrder}.visible`;
		const pageActionElement = this.webElement.findIfAny(selector);
		return pageActionElement.any() ? pageActionElement : "None";
	}

	_getButton() {
		const selector = `.page-action-${this.displayOrder}.visible`;
		const pageActionElement = this.webElement.findIfAny(selector);
		return pageActionElement.any() ? pageActionElement : null;
	}

	_actionButtonObject() {
		const actionButton = this._getButton();
		if (!actionButton) {
			throw new Error(`Cannot find the action button.`);
		}
		return actionButton;
	}

	isActionButtonVisible() {
		const thisActionButton = this._getButton();
		return thisActionButton ? thisActionButton.isDisplayed() : false;
	}

	getTitle() {
		const thisActionButton = this._actionButtonObject();
		return thisActionButton.findIfAny(".page-action-name").any()
			? thisActionButton.find(".page-action-name").getText()
			: "";
	}

	_getIcon() {
		return this._actionButtonObject().find(".page-action-icon");
	}

	hasIcon(icon) {
		const hasThisIcon =
			this._getIcon()
				.webElement.getAttribute("class")
				.split(" ")
				.indexOf(`${icon}-icon`) !== -1;
		return hasThisIcon;
	}

	hasIconV2(icon) {
		const hasThisIcon = this._getIcon().hasClass(icon);
		return hasThisIcon;
	}

	click() {
		this._actionButtonObject().click();
	}
}

class PageActions extends FrameworkObject {
	getHamburgerButton() {
		const pageActionHamburgerMenu = this.webElement.findIfAny(".page-action-menu:isVisible");
		return pageActionHamburgerMenu.any() ? pageActionHamburgerMenu : "None";
	}

	_getHamburgerButton() {
		const pageActionHamburgerMenu = this.webElement.findIfAny(".page-action-menu:isVisible");
		return pageActionHamburgerMenu.any() ? pageActionHamburgerMenu : null;
	}

	getPageActionV2HamburgerButton() {
		return this._getHamburgerButton();
	}

	clickHamburgerButton() {
		const hamburgerButton = this._getHamburgerButton();
		if (hamburgerButton) {
			hamburgerButton.click();
		} else {
			throw new Error(`Cannot find Hamburger-icon button in Action Menu`);
		}
	}

	isHamburgerButtonExpanded() {
		return (
			this._getHamburgerButton()
				.getAttribute("class")
				.split(" ")
				.indexOf("open") !== -1
		);
	}

	singlePageAction() {
		const singlePageActionElement = this.webElement.findIfAny(
			".page-action-holder .page-action-item.visible.single-page-action:isVisible"
		);
		let singlePageActionDetails = "None";
		if (singlePageActionElement.any()) {
			singlePageActionDetails = _.extend({}, singlePageActionElement, {
				_getSinglePageAction() {
					if (!singlePageActionElement) {
						throw new Error(`Cannot find Single Secondary page action.`);
					}
					return singlePageActionElement;
				},
				getTitle() {
					const getSinglePageActionTitle = this._getSinglePageAction().findIfAny(
						".page-action-name"
					);
					return getSinglePageActionTitle.any() ? getSinglePageActionTitle.getText() : "";
				},

				hasIcon(icon) {
					return (
						this._getSinglePageAction()
							.find(".page-action-icon")
							.getAttribute("class")
							.split(" ")
							.indexOf(icon) !== -1
					);
				},

				isActiveSinglePageAction() {
					return (
						this._getSinglePageAction()
							.getAttribute("class")
							.split(" ")
							.indexOf("page-action-inactive") === -1
					);
				},

				click() {
					this._getSinglePageAction().click();
				},
			});
		}
		return singlePageActionDetails;
	}

	_isASinglePageAction() {
		const singlePageAction = this.webElement.findIfAny(
			".page-action-holder .page-action-item.visible.single-page-action"
		);
		return singlePageAction.any();
	}

	getPageActionsCount() {
		let count = 0;
		if (!this._isASinglePageAction()) {
			const pageActions = this.webElement.findIfAny(
				".page-action-holder .page-action-item.visible[class*='page-action-item-order']:isVisible"
			);
			count = pageActions.any() ? pageActions.webElements.length : 0;
		} else {
			count = 1;
		}

		return count;
	}

	getActivePageActionsCount() {
		const activePageActions = this.webElement.findIfAny(
			".page-action-holder .page-action-item.visible:not(.page-action-inactive):isVisible"
		);

		return activePageActions.any() ? activePageActions.webElements.length : 0;
	}

	getInactivePageActionsCount() {
		const inactivePageActions = this.webElement.findIfAny(
			".page-action-holder .page-action-item.visible.page-action-inactive:isVisible"
		);

		return inactivePageActions.any() ? inactivePageActions.webElements.length : 0;
	}

	getPageActionDetails(displayOrder) {
		return new PageAction(this.webElement.find(".page-action-holder"), displayOrder);
	}

	getPageActionV2Details(displayOrder) {
		const secondaryPageActionElement = this.webElement.findIfAny(
			`.page-action-holder .page-action-item.visible:eq(${displayOrder})`
		);

		const pageActionDetails = _.extend({}, secondaryPageActionElement, {
			getTitle() {
				const secondaryPageActiontitle = secondaryPageActionElement.findIfAny(
					".page-action-name"
				);
				return secondaryPageActiontitle.any() ? secondaryPageActiontitle.getText() : "";
			},

			hasIcon(icon) {
				return (
					secondaryPageActionElement
						.find(".page-action-icon")
						.getAttribute("class")
						.split(" ")
						.indexOf(icon) !== -1
				);
			},

			isActivePageAction() {
				return (
					secondaryPageActionElement
						.getAttribute("class")
						.split(" ")
						.indexOf("page-action-inactive") === -1
				);
			},

			click() {
				secondaryPageActionElement.click();
			},
		});
		return pageActionDetails;
	}

	getSecondaryPageActionsDetails() {
		const secondaryPageActionDetails = [];
		this.webElement
			.findIfAny(".page-action-holder .page-action-item")
			.webElements.forEach((pageActionElement) => {
				// Get the Secondary Page Action WebElement
				const secondaryPageActionWebElement = $$$(pageActionElement.selector);

				const state =
					secondaryPageActionWebElement
						.getAttribute("class")
						.split(" ")
						.indexOf("page-action-inactive") !== -1
						? "Active"
						: "Inactive";

				const secondaryPageAction_displayTextWebElement = secondaryPageActionWebElement.findIfAny(
					".page-action-name"
				);
				const displayText = secondaryPageAction_displayTextWebElement.any()
					? secondaryPageAction_displayTextWebElement.getText()
					: "";

				const secondaryPageAction_IconWebElement = secondaryPageActionWebElement.findIfAny(
					".page-action-icon"
				);

				const secondaryPageAction_IconWebElement_Classes = secondaryPageAction_IconWebElement
					.getAttribute("class")
					.split(" ");

				const icon =
					secondaryPageAction_IconWebElement_Classes.indexOf("letter-icon") !== -1
						? secondaryPageAction_IconWebElement.getText()
						: secondaryPageAction_IconWebElement_Classes.slice(-1).toString();

				secondaryPageActionDetails.push({
					State: state,
					Icon: icon,
					DisplayText: displayText,
				});
			});
		return secondaryPageActionDetails;
	}
}

module.exports = PageActions;
