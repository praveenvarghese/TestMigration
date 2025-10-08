const { Widget } = require("./widget");
const { _ } = require("lodash");
const mixin = require("../mixin");
const { WithTabbedPagesOptionEditor } = require("../option-editors/tabbed-pages-option-editor");

class TabbedPages extends mixin(Widget, WithTabbedPagesOptionEditor) {
	getTabbedPagesInfo() {
		let tabbedPagesInfo = [];

		const tabbedPagesContainer = this.webElement.findIfAny(".tabbed-pages__tab-bar");

		if (tabbedPagesContainer.any()) {
			const tabElements = tabbedPagesContainer.findIfAny(".tabbed-pages__tab-bar-tab");
			const titles = [].concat(tabElements.getText());

			const status = [].concat(tabElements.getAttribute("class"));
			// eslint-disable-next-line no-confusing-arrow
			const states = status.map((ai) => (ai.includes("disabled") ? "inactive" : "active"));
			const isCurrentTab = status.map((ab) => (ab.includes("selected") ? "Yes" : "No"));

			const slug = [].concat(tabElements.getAttribute(`data-pageuri`));
			tabbedPagesInfo = _.zipWith(
				titles,
				slug,
				states,
				isCurrentTab,

				(Name, Slug, State, CurrentTab) => ({
					Name,
					Slug,
					State,
					CurrentTab,
				})
			);
		}

		return tabbedPagesInfo;
	}

	navigateToTabbedPage(tabName) {
		return this.webElement
			.find(`.tabbed-pages__tabs .tabbed-pages__tab-bar-tab-text:contains("${tabName}")`)
			.click();
	}

	getTabErrorConfigurationMessage() {
		return this.webElement.find(".empty-widget-message").getText();
	}
}

module.exports = {
	TabbedPages,
	onRegisterWidgetTypes(registry) {
		registry["tabbedpages"] = TabbedPages;
	},
};
