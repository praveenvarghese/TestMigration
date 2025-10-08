// This file is used as preparation for playwright migration

const isEndUserMode = global.isEndUserMode ?? false;
const isEndUserSpec = global.isEndUserSpec ?? false;
const isTabletSpec = global.isTabletSpec ?? false;
const isProSpec = global.isProSpec ?? false;
const isDndSpec = global.isDndSpec ?? false;

const appName = global.appName ?? "app";
const appVersion = global.appVersion ?? "1.0";
const appNameAndVersion =
	isEndUserMode || isEndUserSpec || isTabletSpec ? `${appName}/${appVersion}` : appName;

module.exports = {
	isEndUserMode,
	isEndUserSpec,
	isTabletSpec,
	isProSpec,
	isDndSpec,
	appName,
	appVersion,
	appNameAndVersion,
};
