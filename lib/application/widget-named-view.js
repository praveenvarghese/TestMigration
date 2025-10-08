const { FrameworkObject } = require("../framework-object");
const { mixable } = require("../mixin");
const { Widget } = require("../widgets/widget");
const $$$ = require("../selenium/3xdollar");
``;
const { _ } = require("lodash");

class NamedViewItem extends FrameworkObject {
	_getWidgetMenuItem() {
		return $$$(this.webElement.selector);
	}

	click() {
		this._getWidgetMenuItem().click();
	}

	scroll() {
		this._getWidgetMenuItem().scrollIntoView(true);
	}

	getTooltipText() {
		return this._getWidgetMenuItem().getAttribute("title");
	}

	hasIcon(icon) {
		return this._getWidgetMenuItem()
			.find("i")
			.hasClass(icon);
	}

	getTitleText() {
		return this._getWidgetMenuItem()
			.find(".title")
			.getText();
	}

	hover() {
		this._getWidgetMenuItem().moveTo();
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}
}

const WithWidgetNamedView = mixable(
	Widget,
	(__) =>
		class Mixin extends __ {
			getWidgetNamedViewButton() {
				const namedViewButton = this.webElement.findIfAny(".select-view-button:isVisible");
				let namedView;
				if (namedViewButton.any()) {
					namedView = _.extend({}, namedViewButton, {
						click() {
							this.webElement.click();
						},
					});
				}
				return namedView;
			}

			isWidgetNamedViewButtonDisplayed() {
				let isWidgetNamedViewDisplayed = true;
				const widgetNamedViewLoc = this.getwidegtMenuButton();
				if (widgetNamedViewLoc === undefined) {
					isWidgetNamedViewDisplayed = false;
				}
				return isWidgetNamedViewDisplayed;
			}

			getNamedViewDetails() {
				let namedViewList = null;

				const namedViewContainer = $$$(".select-named-views__items-wrapper:isVisible");

				if (namedViewContainer.any()) {
					const namedViewElements = namedViewContainer.findIfAny(
						`.select-named-views__item`
					);

					const titles = [].concat(namedViewElements.find(`[class="title"]`).getText());
					const icons = [].concat(namedViewElements.find("i").getAttribute("class"));

					const isSelectedStatus = icons.map((ai) => {
						if (ai.includes("aimms-bookmark2")) {
							return "yes";
						}

						return "no";
					});

					namedViewList = titles.map((title, index) => ({
						title,
						isSelected: isSelectedStatus[index],
					}));
				}

				return namedViewList;
			}

			getNamedViewItem(index) {
				const namedView = $$$(`.szh-menu__item.select-named-views__item:eq(${index})`);

				if (!namedView.any()) {
					throw new Error(`Could not find the ${index} named view item.`);
				}

				return new NamedViewItem(namedView);
			}

			getNamedViewList() {
				const widgetMenu = this.webElement.findIfAny(`.widget-menu-button`);

				if (!widgetMenu.any()) {
					throw new Error(`Could not find the widget menu.`);
				}

				return new NamedViewItem();
			}
		}
);

module.exports = { WithWidgetNamedView };
