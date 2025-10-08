const $$$ = require("../selenium/3xdollar");
const url = require("url");
const { RootAction } = require("yemen");
const { appNameAndVersion } = require("../globals");

const getCurrentPage = () => {
	const urlObj = new url.URL(browser.getUrl());
	const sep = `/${appNameAndVersion}/`;
	return decodeURI(urlObj.pathname.split(sep)[1]);
};

const getAppName = () => $$$(".page-section-wrap .page-section .pages .app-name").getText();

const getTabsCount = () => browser.getWindowHandles().length;

const getCurrentPageRoot = new RootAction("getCurrentPage", getCurrentPage);
const getAppNameRoot = new RootAction("getAppName", getAppName);
const getTabsCountRoot = new RootAction("getTabsCount", getTabsCount);

module.exports = {
	getCurrentPage,
	getAppName,
	getTabsCount,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getCurrentPageRoot, getAppNameRoot, getTabsCountRoot);
	},
};
