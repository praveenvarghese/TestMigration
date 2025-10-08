const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");

class PageManager extends FrameworkObject {
	// _createPage(parentPath, pageName, pageType = "CLASSIC PAGE") {
	// 	const pageManager = this;

	// 	// Go to App section if not already in.
	// 	if (!this.getPagesTree()) {
	// 		this.getAppNavigatorTab().click();
	// 	}

	// 	const parentElQ = pageManager._getNodeFromPath(parentPath);
	// 	if (parentElQ) {
	// 		if (parentPath.split("/").length > 1) {
	// 			const parentNodeElQ = pageManager._getNodeFromPath(parentPath);
	// 			const pageOptionDialog = pageManager._openPageOptionDialog(parentNodeElQ);
	// 			this._createChildPage(pageOptionDialog, pageName, pageType);
	// 		} else {
	// 			new FrameworkObject(parentElQ);
	// 			this._createPageAtTopLevel(parentElQ, pageName, pageType);
	// 		}
	// 	}

	// 	return pageManager;
	// }

	// _createPageAtTopLevel(parentElQ, pageName, pageType) {
	// 	const f = new FrameworkObject(parentElQ);
	// 	f.webElement.find(".jstree-wholerow .icon-menu2.action-button:first").click();
	// 	switch (pageType.toUpperCase()) {
	// 		case "CLASSIC PAGE":
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-classic-page.action-button:first")
	// 				.click();
	// 			break;
	// 		case "CLASSIC SIDEPANEL PAGE":
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-classic-sidepanel-page.action-button:first")
	// 				.click();
	// 			break;
	// 		case "CLASSIC DIALOG PAGE":
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-classic-dialog-page.action-button:first")
	// 				.click();
	// 			break;
	// 		case "PAGE":
	// 			f.webElement.find(".jstree-wholerow .action-add-page.action-button:first").click();
	// 			break;
	// 		case "DIALOG PAGE":
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-dialog-page.action-button:first")
	// 				.click();
	// 			break;
	// 		case "SIDEPANEL PAGE":
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-sidepanel-page.action-button:first")
	// 				.click();
	// 			break;
	// 		default:
	// 			f.webElement
	// 				.find(".jstree-wholerow .action-add-classic-page.action-button:first")
	// 				.click();
	// 	}
	// 	f.webElement.keys(asKeys(pageName, SPECIAL_KEYS.enter));
	// }

	// _createChildPage(pageOptionDialog, pageName, pageType) {
	// 	switch (pageType.toUpperCase()) {
	// 		case "CLASSIC PAGE":
	// 			pageOptionDialog.createSubClassicPage(pageName);
	// 			break;
	// 		case "CLASSIC SIDEPANEL PAGE":
	// 			pageOptionDialog.createSubClassicSidePanelPage(pageName);
	// 			break;
	// 		case "CLASSIC DIALOG PAGE":
	// 			pageOptionDialog.createSubClassicDialogPage(pageName);
	// 			break;
	// 		case "PAGE":
	// 			pageOptionDialog.createSubPage(pageName);
	// 			break;
	// 		case "DIALOG PAGE":
	// 			pageOptionDialog.createSubDialogPage(pageName);
	// 			break;
	// 		case "SIDEPANEL PAGE":
	// 			pageOptionDialog.createSubSidePanelPage(pageName);
	// 			break;
	// 		default:
	// 			pageOptionDialog.createSubPage(pageName);
	// 	}
	// }

	// deletePage(pagePath) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (pageElQ) {
	// 		const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 		pageOptionDialog.deletePage();
	// 	} else {
	// 		throw new Error(`deletePage(${pagePath}): Cannot find page in page manager`);
	// 	}

	// 	return pageManager;
	// }

	// renamePage(oldPagePath, newPageName) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(oldPagePath);
	// 	if (pageElQ) {
	// 		const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 		pageOptionDialog.renamePage(newPageName);
	// 	} else {
	// 		throw new Error(
	// 			`renamePage(${oldPagePath}, ${newPageName}): Cannot find ${oldPagePath} page in page manager`
	// 		);
	// 	}

	// 	return pageManager;
	// }

	// setWizard(pagePath, options) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (pageElQ) {
	// 		const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 		pageOptionDialog.setWizard(options);
	// 	} else {
	// 		throw new Error(`setWizard(${pagePath}): Cannot find ${pagePath} page in page manager`);
	// 	}

	// 	return pageManager;
	// }

	// deleteWizard(pagePath) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (pageElQ) {
	// 		const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 		pageOptionDialog.deleteWizard();
	// 	} else {
	// 		throw new Error(
	// 			`deleteWizard(${pagePath}): Cannot find ${pagePath} page in page manager`
	// 		);
	// 	}

	// 	return pageManager;
	// }

	// setPageVisibility(pagePath, value) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (pageElQ) {
	// 		const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 		pageOptionDialog.setVisibility(value);
	// 	} else {
	// 		throw new Error(
	// 			`setPageVisibility(${pagePath}, ${value}): Cannot find ${pagePath} page in page manager`
	// 		);
	// 	}

	// 	return pageManager;
	// }

	// getPageVisibility(pagePath) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (!pageElQ) {
	// 		throw new Error(
	// 			`getPageVisibility(${pagePath}): Cannot find ${pagePath} page in page manager`
	// 		);
	// 	}
	// 	return pageManager._openPageOptionDialog(pageElQ).getVisibility();
	// }

	// hasVisiblePages(pageNames) {
	// 	return this._checkVisibility(pageNames, true);
	// }

	// hasHiddenPages(pageNames) {
	// 	return this._checkVisibility(pageNames, false);
	// }

	// _checkVisibility(pagePaths, shouldBeVisible) {
	// 	const pageManager = this;
	// 	const checkVisibility = (value) => {
	// 		let isVisible = value !== "rgba(255,255,255,1)";
	// 		if (shouldBeVisible) {
	// 			isVisible = value === "rgba(255,255,255,1)";
	// 		}
	// 		return isVisible;
	// 	};

	// 	return pagePaths
	// 		.map((pagePath) => {
	// 			const node = pageManager._getNodeFromPath(pagePath);
	// 			if (node === null) {
	// 				throw new Error(`Cannot find page with path "${pagePath}"`);
	// 			}
	// 			return node.findIfAny(`.jstree-anchor:first`).getCSSProperty("color");
	// 		})
	// 		.every((cssColor) => checkVisibility(cssColor.value));
	// }

	// _openPageOptionDialog(parentNodeElQ) {
	// 	parentNodeElQ.find(".icon-menu2.action-button:first").click();
	// 	return new PageOptionDialog($$$(".action-buttons.active"));
	// }

	// expandParentNode(pageName) {
	// 	const pageManager = this;
	// 	const parent = pageManager._getNodeFromPath(pageName);
	// 	if (!parent.hasClass("jstree-open")) {
	// 		parent.find("i.jstree-icon:first").click();
	// 	}

	// 	return pageManager;
	// }

	// isPageHighlighted(pageName) {
	// 	const pageManager = this;
	// 	const parent = pageManager._getNodeFromPath(pageName);
	// 	const value = parent.getAttribute("aria-selected");
	// 	return value;
	// }

	// _navigateToUri(pageUri) {
	// 	const pageManager = this;
	// 	const node = pageManager._getNodeFromPath(pageUri);
	// 	node.findIfAny(".jstree-anchor:first").click();
	// }

	// navigateToPage(pageUri) {
	// 	const pageManager = this;
	// 	pageManager._navigateToUri(pageUri);
	// 	waitUntilPageLoaded(pageUri);
	// 	return pageManager;
	// }

	// navigateToPageWithRedirect({ initialUri, finalUri }) {
	// 	const pageManager = this;
	// 	pageManager._navigateToUri(initialUri);
	// 	waitUntilPageLoaded(finalUri);
	// 	return pageManager;
	// }

	// navigateToPageWithError({ initialUri, finalUri }) {
	// 	const pageManager = this;
	// 	pageManager._navigateToUri(initialUri);
	// 	waitUntilPageLoaded(finalUri);
	// 	return pageManager;
	// }

	// hasPages(pagePaths) {
	// 	return this._checkExistance(pagePaths, true);
	// }

	// hasNotPages(pagePaths) {
	// 	return this._checkExistance(pagePaths, false);
	// }

	// _checkExistance(pagePaths, shouldExist) {
	// 	const pageManager = this;
	// 	return pagePaths
	// 		.map((path) => !!pageManager._getNodeFromPath(path))
	// 		.every((exists) => exists === shouldExist);
	// }

	// _getNodeFromPath(path) {
	// 	const pageManager = this;
	// 	const pathInChunks = path.split("/");

	// 	const findNode = (chunks, elQ = $$$(".view.page-navigator-addon.open")) => {
	// 		let value;
	// 		if (elQ === null) {
	// 			value = false;
	// 		} else if (chunks.length === 1) {
	// 			const leafExists = elQ.exists(`.jstree-anchor[title^="${chunks[0]}"]`);
	// 			if (leafExists) {
	// 				value = elQ.find(`.jstree-anchor[title^="${chunks[0]}"]`).parent();
	// 			} else {
	// 				value = null;
	// 			}
	// 		} else {
	// 			const nextPathChunk = chunks[0];
	// 			pageManager.expandParentNode(nextPathChunk);
	// 			const pendingPathChunks = chunks.slice(1, chunks.length);
	// 			const cssSelector = `.jstree-anchor[title^="${nextPathChunk}"]`;
	// 			const _elQ = elQ
	// 				.find(cssSelector)
	// 				.parent()
	// 				.exists(".jstree-children")
	// 				? elQ
	// 					.find(cssSelector)
	// 					.parent()
	// 					.find(".jstree-children")
	// 				: null;

	// 			value = findNode(pendingPathChunks, _elQ);
	// 		}

	// 		return value;
	// 	};

	// 	return findNode(pathInChunks);
	// }

	// getPageOptions(pagePath) {
	// 	const pageManager = this;
	// 	const pageElQ = pageManager._getNodeFromPath(pagePath);
	// 	if (!pageElQ) {
	// 		throw new Error(
	// 			`getPageEditorOptions(${pagePath}): Cannot find ${pagePath} page in page manager`
	// 		);
	// 	}
	// 	const pageOptionDialog = pageManager._openPageOptionDialog(pageElQ);
	// 	return pageOptionDialog.pageOptions();
	// }

	// getPagesInfo() {
	// 	const pagesInfo = [];

	// 	// Go to App section if not already in.
	// 	if (!this.getPagesTree()) {
	// 		this.getAppNavigatorTab().click();
	// 	}

	// 	this.getPagesTree()
	// 		.findIfAny(`li[role="treeitem"]`)
	// 		.webElements.forEach((pageInfo) => {
	// 			const pageWebElement = $$$(pageInfo.selector);
	// 			const pageNodeClasses = pageWebElement.getAttribute("class").split(" ");
	// 			const element_Has_Visibility_And_ActionButtons_Info = pageWebElement.find(
	// 				".jstree-wholerow:first"
	// 			);
	// 			const pageLinkWebElement = pageWebElement.find(".jstree-anchor:first");

	// 			// Page Hidden Attribute
	// 			const isHiddenPage =
	// 				pageWebElement.getAttribute("data-hidden") === "false" ? false : true;

	// 			// Page Currently Selected Attribute
	// 			const isSelected =
	// 				pageWebElement.getAttribute("aria-selected") === "true" ? true : false;

	// 			// Page Slug Attribute
	// 			const slug = pageWebElement.getAttribute("data-slug");

	// 			// Visibility
	// 			const hiddenIndicationWebElement = element_Has_Visibility_And_ActionButtons_Info.findIfAny(
	// 				".icon-eye-blocked"
	// 			);
	// 			const hiddenIndicationShown = hiddenIndicationWebElement.any();

	// 			// Action Buttons
	// 			const actionButtonWebElement = element_Has_Visibility_And_ActionButtons_Info.findIfAny(
	// 				".action-buttons"
	// 			);
	// 			const hasActionButton = actionButtonWebElement.any();

	// 			// Page has child(s)
	// 			const hasChild = pageNodeClasses.indexOf("jstree-leaf") !== -1 ? false : true;

	// 			// Page Type
	// 			const pageType = pageNodeClasses[1];

	// 			// Page Name
	// 			const name = pageLinkWebElement.getText();

	// 			// Page Tooltip
	// 			const tooltip = pageLinkWebElement.getAttribute("title");

	// 			const icon = pageLinkWebElement
	// 				.find(".jstree-icon")
	// 				.getAttribute("class")
	// 				.replace(/jstree-icon/, "")
	// 				.replace(/jstree-themeicon-custom/, "")
	// 				.replace(/jstree-themeicon/, "")
	// 				.replace(/no-icon/, "")
	// 				.replace(/ /g, "");

	// 			pagesInfo.push({
	// 				DisplayName: name,
	// 				Slug: slug,
	// 				PageType: pageType,
	// 				Tooltip: tooltip,
	// 				Icon: icon,
	// 				IsHiddenPage: isHiddenPage,
	// 				HiddenIndicationShown: hiddenIndicationShown,
	// 				IsSelected: isSelected,
	// 				HasChild: hasChild,
	// 				HasActionButton: hasActionButton,
	// 			});
	// 		});
	// 	return pagesInfo;
	// }

	getNavigatorTabs() {
		const pageNavigatorTabsElements = this.webElement.find(
			`.page-navigator__tab-header .page-navigator__tab`
		);
		const pageNavigatorTabs = [].concat(pageNavigatorTabsElements.getText());
		return pageNavigatorTabs;
	}

	getPageLayoutConfigurator() {
		const pageLayoutConfiguratorElement = this.webElement.findIfAny(
			`.page-navigator__tab-container--page .page-configurator:isVisible`
		);

		return pageLayoutConfiguratorElement.any() ? pageLayoutConfiguratorElement : "None";
	}

	getPagesTree() {
		const pagesTreeWebElement = this.webElement.findIfAny(
			`.page-navigator__tab-container--app .app-management-container .application-tree:isVisible`
		);

		return pagesTreeWebElement.any() ? pagesTreeWebElement : "None";
	}

	isAppNavigatorTabSelected() {
		return $$$(
			`.page-navigator__tab-header .page-navigator__tab.page-navigator__tab--app`
		).isVisible();
	}

	getAppNavigatorTab() {
		return this.webElement.find(
			`.page-navigator__tab-header .page-navigator__tab.page-navigator__tab--app:isVisible`
		);
	}

	getPageNavigatorTab() {
		return this.webElement.find(
			`.page-navigator__tab-header .page-navigator__tab.page-navigator__tab--page:isVisible`
		);
	}
}

PageManager.open = () => {
	const isPageManagerOpen = $$$("body").exists(".view.page-navigator-addon.open");
	if (!isPageManagerOpen) {
		$$$(".page-navigator-addon-btn").click();
	}
	const pageManager = new PageManager($$$(".page-navigator-addon.open"));

	return pageManager;
};

PageManager.close = () => {
	const isPageManagerOpen = $$$("body").exists(".view.page-navigator-addon.open");
	if (isPageManagerOpen) {
		$$$(".sidebar-container.open .icon-close").click();
	}
};

const getPageManager = new RootAction("getPageManager", () => PageManager.open());
const closePageManager = new RootAction("closePageManager", () => PageManager.close());

module.exports = {
	PageManager,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getPageManager, closePageManager);
	},
};
