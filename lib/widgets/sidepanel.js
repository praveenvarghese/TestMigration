const mixin = require("../mixin");
const { Page } = require("./page");
const jQuery = require("jquery-node");
const { makeArray } = jQuery;

class Sidepanel extends mixin(Page) {}

class SidepanelV2 extends Sidepanel {
	getWidgetAreas() {
		const widgetAreaListConfiguratorStub = jQuery(
			this.webElement
				.find(
					".pagev2__grid-container:not(.pagev2__grid-container--sidepanel-gapless-wrapper)"
				)
				.getHTML()
		);

		const widgetAreas = makeArray(
			widgetAreaListConfiguratorStub.find(".pagev2__widget-area")
		).map((elem) => {
			const elQ = jQuery(elem);
			const widgets = makeArray(elQ.find(".widgetdiv .aimms-widget")).map((elem2) =>
				jQuery(elem2).attr("data-widget.uri")
			);

			return {
				areaName: elQ.find("> .pagev2__widget-area-name").text(),
				widgets,
			};
		});

		return widgetAreas;
	}
}

module.exports = {
	Sidepanel,
	onRegisterWidgetTypes(registry) {
		registry["sidepanel"] = Sidepanel;
		registry["pagev2-grid-sidepanel"] = SidepanelV2;
	},
};
