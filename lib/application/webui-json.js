const { RootAction } = require("yemen");

// eslint-disable-next-line no-undef
const readWebuiJson = () => AWF.webuiJson;

class WebuiJson {
	load() {
		return this.getWebuiJson();
	}

	getWebuiJson() {
		this.json = browser.execute(readWebuiJson).MainProject;
		return this;
	}

	containFragments(keys) {
		keys = Array.isArray(keys) ? keys : [keys];
		for (const key of keys) {
			if (!(key in this.json)) return false;
		}
		return true;
	}

	containVisibilityInfo(keys) {
		keys = Array.isArray(keys) ? keys : [keys];
		for (const key of keys) {
			if (!(key in this.json?.application)) return false;
		}
		return true;
	}

	getWidgetsOfAPage(pageUri) {
		const page = this.json[`pages/${pageUri}`] ?? { widgets: { literal: [] } };
		const widgets = page?.["widgets"]?.literal ?? [];
		return widgets;
	}

	getWidgetsOfAGroupWidget(groupWidgetUri) {
		const groupWidget = this.json[`widgets/${groupWidgetUri}`] ?? { widgets: { literal: [] } };
		return groupWidget?.["widgets"]?.literal;
	}
}

const getWebuiJson = new RootAction("getWebuiJson", () => new WebuiJson().getWebuiJson());
const getCachedWebuiJson = new RootAction("getCachedWebuiJson", () => new WebuiJson());

module.exports = {
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getWebuiJson, getCachedWebuiJson);
	},
};
