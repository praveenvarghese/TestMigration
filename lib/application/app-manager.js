const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { PageManager } = require("./page-manager");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");
const { Select2 } = require("../misc/select2");
const { waitUntilPageLoaded } = require("../actions.js");
const { findSlug } = require("../pages-info.js");
const { asKeys } = require("../input-util");

jQuery.fn.any = function() {
	return this.length > 0;
};
class DraggableWidgetHandle extends FrameworkObject {
	constructor(webElement, appManager) {
		super(webElement);
		this.appManager = appManager;
	}

	asChildOf({ pagePath }) {
		const pcWebElement = this.appManager.webElement;
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		const nodeToDropAfter = pcWebElement.find(
			`.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"]):isVisible`
		);

		this.webElement.dnd({
			dropAfter: nodeToDropAfter.cssSelector,
			dropOffset: {
				x: 10,
			},
		});
	}

	toPage({ pagePath }) {
		const pcWebElement = this.appManager.webElement;
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		const nodeToDropAfter = pcWebElement.find(
			`.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"]):isVisible`
		);

		this.webElement.dnd({
			dropAfter: nodeToDropAfter.cssSelector,
			dropOffset: {
				y: 10,
			},
		});
	}

	toWidgetContainer({ pagePath }) {
		const pcWebElement = this.appManager.webElement;
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		const widgetContainerSlug = `${getPageSlugFromWebUIJSON}-widget-container`;
		const nodeToDropAfter = pcWebElement.find(
			`.node[data-node-id="${widgetContainerSlug}"]:not([data-node-type="widget"]):isVisible`
		);

		this.webElement.dnd({
			dropAfter: nodeToDropAfter.cssSelector,
			dropOffset: {
				y: 10,
			},
		});
	}

	asElderSiblingOf({ widgetName }) {
		const pcWebElement = this.appManager.webElement;
		const nodeToDropAfter = pcWebElement.find(
			`.node[data-node-id="${widgetName}"][data-node-type="widget"]:isVisible`
		);

		this.webElement.dnd({
			dropBefore: nodeToDropAfter.cssSelector,
		});
	}

	asSiblingOf({ widgetName }) {
		const pcWebElement = this.appManager.webElement;
		const nodeToDropAfter = pcWebElement.find(
			`.node[data-node-id="${widgetName}"][data-node-type="widget"]:isVisible`
		);

		this.webElement.dnd({
			dropAfter: nodeToDropAfter.cssSelector,
		});
	}
}

class DeletePageDialog extends FrameworkObject {
	actionYes() {
		return this.webElement.find(".ui-dialog-buttonset button.action-yes");
	}

	actionNo() {
		return this.webElement.find(".ui-dialog-buttonset button.action-no");
	}

	getDialogInfo() {
		const title = this.webElement.find(`.ui-dialog-titlebar .ui-dialog-title`).getText();
		const confirmationMessage = this.webElement.find(`.ui-dialog-content p`).getText();

		const buttons = [];
		this.webElement
			.findIfAny(`.ui-dialog-buttonpane .ui-dialog-buttonset button`)
			.webElements.forEach((button) => {
				buttons.push(button.getText());
			});

		return {
			Title: title,
			ConfirmationMessage: confirmationMessage,
			Buttons: buttons,
		};
	}
}

class PageVisibilityOptionEditor extends FrameworkObject {
	getOptionsInfo() {
		const options = [];

		const openOptionDialog = jQuery(this.webElement.getHTML());
		const optionEditorsCount = openOptionDialog.find(`[data-option-index="0"]`).length;
		for (let index = 0; index < optionEditorsCount; index++) {
			// Get the Option WebElement
			const optionWebElement = openOptionDialog.find(`[data-option-index="0"]:eq(${index})`);

			// Option Name
			const optionName = optionWebElement.find(`label:first`).text();

			// Is New or Old Option Type
			const isNewOptionType = !optionWebElement
				.attr("class")
				.includes("old-literal-or-aimms-single-line-option-editor");

			// Value
			let option_ValueSet = "";
			if (isNewOptionType) {
				const literalInput = optionWebElement.find(`input.literal-input`);
				if (optionWebElement.attr("class").includes("from-model")) {
					option_ValueSet = literalInput.attr("title");
				} else {
					option_ValueSet = literalInput.attr("value");
					if (
						literalInput.attr("class").includes("literal-type-checkbox") &&
						option_ValueSet === ""
					) {
						option_ValueSet = "false";
					}
				}
			} else {
				option_ValueSet = optionWebElement
					.find(`input:last`)
					.attr("value")
					.replace(/identifier:/, "")
					.replace(/literal:/, "");
			}

			options.push({
				Name: optionName,
				NewOptionType: isNewOptionType,
				Value: option_ValueSet,
				Index: index,
			});
		}

		return options;
	}
	setValue({ value, optionValueType }) {
		const valueTypeSelector =
			optionValueType && optionValueType.toUpperCase() === "IDENTIFIER"
				? '[class*="identifier-"]'
				: ".literal";

		const indexSelector = new Select2(
			this.webElement.find(
				`[data-option-name="visible"] .dropdown-literal-or-identifier-selector`
			),
			(itemName) =>
				$$$(
					`.select2-drop .select2-result-label ${valueTypeSelector}:textMatches(/^${itemName}(: .*)?$/)`
				)
		);
		indexSelector.search(value).select(value);

		return this;
	}

	clearValue() {
		this.webElement
			.find(
				`[data-option-name="visible"] .dropdown-literal-or-identifier-selector .select2-search-choice-close`
			)
			.click();
	}
}

class FlyoutMenu extends FrameworkObject {
	getContextMenuOptions() {
		const contextMenuItems = [];
		let index = 0;

		this.webElement
			.findIfAny(`.flyout__menu .flyout__menu-item:visible`)
			.webElements.forEach((menuItem) => {
				const contextMenuItem_icon = menuItem
					.getAttribute("class")
					.replace(/(flyout__menu-item )/, "");
				const contextMenuItem_Text = menuItem.getText();

				contextMenuItems.push({
					Order: index,
					DisplayText: contextMenuItem_Text,
					Icon: contextMenuItem_icon,
				});
				index++;
			});
		return contextMenuItems;
	}

	// clickOnAddClassicPage() {
	// 	this.webElement
	// 		.find(`.flyout__menu .flyout__menu-item[data-id="add-classic-page"]`)
	// 		.click();
	// 	return this;
	// }

	// clickOnAddClassicSidepanelPage() {
	// 	this.webElement
	// 		.find(`.flyout__menu .flyout__menu-item[data-id="add-classic-side-panel-page"]`)
	// 		.click();
	// 	return this;
	// }

	// clickOnAddClassicDialogPage() {
	// 	this.webElement
	// 		.find(`.flyout__menu .flyout__menu-item[data-id="add-classic-dialog-page"]`)
	// 		.click();
	// 	return this;
	// }

	clickOnAddPage() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="add-page"]`).click();
		return this;
	}

	clickOnAddSidepanelPage() {
		this.webElement
			.find(`.flyout__menu .flyout__menu-item[data-id="add-side-panel-page"]`)
			.click();
		return this;
	}

	clickOnAddDialogPage() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="add-dialog-page"]`).click();
		return this;
	}

	clickOnRename() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="rename"]`).click();
		return this;
	}

	clickOnVisibility() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="visibility"]`).click();
		return new PageVisibilityOptionEditor($$$(".awf-optiondialog.open"));
	}

	clickOnDelete() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="delete"]`).click();
		return new DeletePageDialog($$$(`.ui-dialog.ui-widget-content`));
	}

	clickOnCopy() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="copy"]`).click();
	}

	clickOnRemoveWizard() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="remove-wizard"]`).click();
	}

	clickOnCut() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="cut"]`).click();
	}

	clickOnPasteWidget() {
		this.webElement.find(`.flyout__menu .flyout__menu-item[data-id="paste-widget"]`).click();
	}

	enterName(name) {
		this.webElement.keys(asKeys(name, SPECIAL_KEYS.enter));
		return this;
	}

	pressKeys(textOrKeys, keyDelay) {
		this.webElement.keys(textOrKeys, keyDelay);
		return this;
	}
}

const appManagerContainerSelector = ".application-tree";

class AppManager extends PageManager {
	scrollToTop() {
		$$$(appManagerContainerSelector).scrollIntoView(true);

		return this;
	}

	scrollUp({ instances = 1 } = {}) {
		for (let count = instances; count > 0; count--) {
			$$$(`${appManagerContainerSelector} .node:first`).scrollIntoView(true);
		}

		return this;
	}

	scrollDown({ instances = 1 } = {}) {
		for (let count = instances; count > 0; count--) {
			$$$(`${appManagerContainerSelector} .node:last`).scrollIntoView(false);
		}

		return this;
	}

	getAppManagerInfo() {
		const appManagerInfo = [];

		// Go to App Manager section if not already in.
		if (!this.isAppNavigatorTabSelected()) {
			this.getAppNavigatorTab().click();
		}

		const pagesTree = jQuery(this.webElement.find(appManagerContainerSelector).getHTML());
		const pageNodes = pagesTree.find(".node").length;
		for (let index = 0; index < pageNodes; index++) {
			const node = pagesTree.find(`.node:eq(${index})`);

			// Node Type
			let nodeType = node.attr("data-node-type");
			nodeType = nodeType[0].toUpperCase() + nodeType.slice(1);

			// Name
			const name = node.find(`.rowLabel .rowTitle`).text();

			// Node URI
			const nodeSlug = node.attr("data-node-id");

			// Tooltip
			const title = node.find(`.rowLabel`).attr("title");

			// Node Classes
			const nodeClasses = node.attr("class");

			if (nodeType === "Widget") {
				// WidgetState like Cut/Copied
				const widgetState = nodeClasses
					.split(" ")
					.filter((e) => /c/.test(e))
					.slice(0)
					.toString();

				appManagerInfo.push({
					Name: name,
					Slug: nodeSlug,
					NodeType: nodeType,
					Tooltip: title,
					WidgetState: widgetState,
				});
			} else {
				// is current node selected
				const nodeSelected =
					nodeClasses.split(" ").filter((e) => /selected-node/.test(e)).length > 0;

				// is Page tree unfolded
				let pageNodeUnfolded = "";
				if (!node.find(`no-btn-arrow`).any()) {
					pageNodeUnfolded = node.find(`button:first`).attr("aria-label");

					switch (pageNodeUnfolded) {
						case "Collapse":
							pageNodeUnfolded = "Expanded";
							break;
						default:
							pageNodeUnfolded = "Collapsed";
							break;
					}
				}

				// Is Hidden
				const nodeWithHiddenIndication = node.find(`.node-visibility-hidden`).any();

				// Page Icon
				let icon = node.find(`.node-icon`).attr("class");
				icon =
					icon !== undefined
						? icon
								.split(" ")
								.slice(-1)
								.toString()
						: "";

				let nodeInfo;
				if (nodeType === "Container") {
					const widgetCount = node.find(`.rowLabel .node-child-count`).text();
					nodeInfo = {
						Name: name,
						WidgetsCount: widgetCount,
						Slug: nodeSlug,
						NodeType: nodeType,
						Tooltip: title,
						NodeState: pageNodeUnfolded,
						Icon: icon,
						IsNodeSelected: nodeSelected,
						NodeHasHiddenIndication: nodeWithHiddenIndication,
					};
				} else {
					nodeInfo = {
						Name: name,
						Slug: nodeSlug,
						NodeType: nodeType,
						Tooltip: title,
						NodeState: pageNodeUnfolded,
						Icon: icon,
						IsNodeSelected: nodeSelected,
						NodeHasHiddenIndication: nodeWithHiddenIndication,
					};
				}
				appManagerInfo.push(nodeInfo);
			}
		}
		return appManagerInfo;
	}

	getAppManagerStylesInfo() {
		const appManagerInfo = [];

		// Go to App Manager section if not already in.
		if (!this.isAppNavigatorTabSelected()) {
			this.getAppNavigatorTab().click();
		}

		const pagesTree = jQuery(this.webElement.find(appManagerContainerSelector).getHTML());

		const pageNodes = pagesTree.find(".node").length;
		for (let index = 0; index < pageNodes; index++) {
			const node = pagesTree.find(`.node:eq(${index})`);

			// Node Type
			let nodeType = node.attr("data-node-type");
			nodeType = nodeType[0].toUpperCase() + nodeType.slice(1);

			// is current node selected
			const nodeSelected = node.attr("class").split("selected-node").length > 1;

			// Name
			const name = node.find(`.rowLabel .rowTitle`).text();

			// Node URI
			const nodeSlug = node.attr("data-node-id");

			// Node CSS Selector
			const nodeSelector = `${appManagerContainerSelector} .node:nth-child(${index + 1})`;

			// Node Background-Color CSS Style
			const backgroundColor = this._getCSSStyleProperty(nodeSelector, "background-color");

			// Node Text Contents Color CSS Style
			const rowContentsSelector = `${nodeSelector} .rowContents`;

			const textColor = this._getCSSStyleProperty(rowContentsSelector, "color");

			appManagerInfo.push({
				Name: name,
				Slug: nodeSlug,
				NodeType: nodeType,
				IsNodeSelected: nodeSelected,
				ContentsColor: textColor,
				BackgroundColor: backgroundColor,
			});
		}
		return appManagerInfo;
	}

	_getCSSStyleProperty(locator, property) {
		const value = browser.execute(
			({ selector, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(selector).css(propertyIn);
				} else {
					throw new Error("jQuery is not available in the browser context.");
				}
				return propertyValue;
			},
			{ selector: locator, propertyIn: property }
		);

		if (value === null) {
			throw new Error(
				"Error while trying to remotely execute 'css style property': " + property
			);
		}
		return value;
	}

	_nodeControl({ pagePath, widgetName, isItForWidgetContainer = false }) {
		this.getPageNodeIntoViewport(pagePath);
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		let nodeSelector = `.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"])`;

		if (isItForWidgetContainer) {
			const widgetContainerSlug = `${getPageSlugFromWebUIJSON}-widget-container`;
			nodeSelector = `.node[data-node-id="${widgetContainerSlug}"]:not([data-node-type="widget"])`;
		}

		if (widgetName !== undefined) {
			this._scrollToGetNodeIntoViewport(widgetName, true);
			nodeSelector = `.node[data-node-id="${widgetName}"][data-node-type="widget"]`;
		}

		return $$$(nodeSelector);
	}

	navigateToPage(pagePath) {
		this._nodeControl({ pagePath }).click();

		return this;
	}

	navigateToPageWithRedirect({ initialUri, finalUri }) {
		this.navigateToPage(initialUri);
		waitUntilPageLoaded(finalUri);

		return this;
	}

	navigateToPageWithError({ initialUri, finalUri }) {
		this.navigateToPageWithRedirect({ initialUri, finalUri });

		return this;
	}

	hoverANode({ pagePath, widgetName }) {
		this._nodeControl({ pagePath, widgetName }).moveTo();

		return this;
	}

	hoverWidgetContainer({ pagePath }) {
		this._nodeControl({ pagePath, isItForWidgetContainer: true }).moveTo();

		return this;
	}

	_unfoldANode(slug) {
		const appManagerContainer = jQuery($$$(appManagerContainerSelector).getHTML());
		const dataNodeName = appManagerContainer.find(`.node[data-node-id="${slug}"]`);
		if (!dataNodeName.any()) {
			throw new Error(`Could not locate node with "${slug}" Data-Node-ID.`);
		}
		const collapsedNodeControl = dataNodeName.find(`button[aria-label="Expand"]`);

		// If the Selected PageName node is collapsed, then unfold it.
		if (collapsedNodeControl.any()) {
			browser.execute((selector) => {
				const $ = window.jQuery;
				$(selector).click();
			}, collapsedNodeControl.selector);
		}
	}

	_scrollToGetNodeIntoViewport(slug, isNodeOfWidget = false) {
		let tries = 10;
		let nodeIsVisible = false;
		do {
			const appManagerContainer = jQuery($$$(appManagerContainerSelector).getHTML());

			const nodeSelector = isNodeOfWidget
				? `.node[data-node-id="${slug}"][data-node-type="widget"]`
				: `.node[data-node-id="${slug}"]:not([data-node-type="widget"])`;

			nodeIsVisible = appManagerContainer.find(nodeSelector).any();

			if (!nodeIsVisible) {
				this.scrollDown();
				tries--;
				this.scrollDown(1);
			}
		} while (!nodeIsVisible && tries > 0);

		if (!nodeIsVisible) {
			throw new Error(`Could not locate node with "${slug}" Data-Node-ID.`);
		}
	}

	unfoldPageNodes(nodesPath) {
		nodesPath.forEach((nodePath) => {
			let pageTree = "";
			nodePath.split("/").forEach((nodePathChunk) => {
				pageTree += `/${nodePathChunk}`;
				const getPageSlugFromWebUIJSON = findSlug(pageTree);
				this._unfoldANode(getPageSlugFromWebUIJSON);
			});
		});
		return this;
	}

	unfoldWidgetContainers(nodesPath) {
		nodesPath.forEach((nodePath) => {
			this.unfoldPageNodes([nodePath]);
			const pageTree = `/${nodePath}`;
			const getPageSlugFromWebUIJSON = findSlug(pageTree);
			const widgetContainerSlug = `${getPageSlugFromWebUIJSON}-widget-container`;
			this._unfoldANode(widgetContainerSlug);
		});
		return this;
	}

	// This is to get a requested Node into Viewport
	getPageNodeIntoViewport(nodePath) {
		// Start from top of Page Tree
		this.scrollToTop();
		let pageTree = "";

		const paths = nodePath.split("/");
		const lastPageToVisit = paths.slice(-1).toString();
		paths.forEach((nodePathChunk) => {
			// While we are going over page path chunks. We need to join them back to get the page Slug.
			pageTree += `/${nodePathChunk}`;
			const getPageSlugFromWebUIJSON = findSlug(pageTree);
			this._scrollToGetNodeIntoViewport(getPageSlugFromWebUIJSON);
			// Find the page slug and get the page into viewport, until the last entry in the page node path.
			if (lastPageToVisit !== nodePathChunk) {
				this._unfoldANode(getPageSlugFromWebUIJSON);
			}
		});

		return this;
	}

	hasPages(nodePaths) {
		return this._checkExistance(nodePaths, true);
	}

	hasNotPages(nodePaths) {
		return this._checkExistance(nodePaths, false);
	}

	_checkExistance(nodePaths, expectedOutcome) {
		let actualOutcome = true;
		nodePaths.forEach((nodePath) => {
			this.getPageNodeIntoViewport(nodePath);
			const getPageSlugFromWebUIJSON = findSlug(nodePath);
			const nodeSelector = `.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"])`;
			const nodeExists = $$$("body").exists(`${nodeSelector}`);
			actualOutcome = actualOutcome && nodeExists;
		});
		return actualOutcome === expectedOutcome;
	}

	_getPrefix(slug) {
		const parts = slug.split("::");
		return parts.length > 1 ? parts[0] : "";
	}

	getFlyoutMenu({ pagePath, widgetName }) {
		this.getPageNodeIntoViewport(pagePath);
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		const libraryPrefix = this._getPrefix(getPageSlugFromWebUIJSON);

		let nodeSelector = `.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"])`;

		if (widgetName !== undefined) {
			this._unfoldANode(getPageSlugFromWebUIJSON);
			const widgetContainerId = `${getPageSlugFromWebUIJSON}-widget-container`;
			this._unfoldANode(widgetContainerId);
			if (libraryPrefix !== "") {
				widgetName = libraryPrefix + "::" + widgetName;
			}

			this._scrollToGetNodeIntoViewport(widgetName, true);
			nodeSelector = `.node[data-node-id="${widgetName}"][data-node-type="widget"]`;
		}
		const node = $$$(nodeSelector);
		node.moveTo();
		node.find(`.toolbarButton .options-btn`).click();
		return new FlyoutMenu($$$(`.flyout.flyout--open`));
	}

	getHighlightedNode() {
		const appManagerContainer = jQuery($$$(appManagerContainerSelector).getHTML());
		const highlightedNode = appManagerContainer.find(`.node.selected-node`);

		return highlightedNode.any() ? highlightedNode : null;
	}

	getHighlightedNodeInfo() {
		const highlightedNode = this.getHighlightedNode();

		if (highlightedNode === null) {
			throw new Error("There are no nodes that is highlighted.");
		}
		const highlightedNodeName = highlightedNode.attr(`data-node-name`);
		const highlightedNodeType = highlightedNode.attr(`data-node-type`);
		return { NodeName: highlightedNodeName, NodeType: highlightedNodeType };
	}

	dragPage({ pagePath }) {
		this.getPageNodeIntoViewport(pagePath);
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		const nodeToBeDragged = this.webElement.find(
			`.node[data-node-id="${getPageSlugFromWebUIJSON}"]:not([data-node-type="widget"])`
		);

		return new DraggableWidgetHandle(nodeToBeDragged, this);
	}

	dragWidget({ pagePath, widgetName }) {
		this.getPageNodeIntoViewport(pagePath);
		const getPageSlugFromWebUIJSON = findSlug(pagePath);
		this._unfoldANode(getPageSlugFromWebUIJSON);
		const widgetContainerId = `${getPageSlugFromWebUIJSON}-widget-container`;
		this._unfoldANode(widgetContainerId);
		this._scrollToGetNodeIntoViewport(widgetName, true);

		const nodeToBeDragged = this.webElement.find(
			`.node[data-node-id="${widgetName}"][data-node-type="widget"]`
		);

		return new DraggableWidgetHandle(nodeToBeDragged, this);
	}

	collapseAllNodes() {
		const appManagerContainer = jQuery($$$(appManagerContainerSelector).getHTML());
		const nodesToCollapse = appManagerContainer.find(
			`.node:not([data-node-name="Main Project"]) button[aria-label="Collapse"]`
		);
		if (nodesToCollapse.any()) {
			browser.execute((selector) => {
				document.querySelectorAll(selector).forEach((el) => {
					requestAnimationFrame(() => el.click());
				});
			}, nodesToCollapse.selector);
		}

		return this;
	}
}

AppManager.get = () => {
	const appManager = new AppManager($$$(".page-navigator-addon.open"));
	return appManager;
};

AppManager.open = () => {
	const pageManager = PageManager.open();
	pageManager.getAppNavigatorTab().click();

	const appManager = new AppManager($$$(".page-navigator-addon.open"));
	return appManager;
};

AppManager.close = () => {
	PageManager.close();
};

const getAppManager = new RootAction("getAppManager", () => AppManager.get());
const openAppManager = new RootAction("openAppManager", () => AppManager.open());
const closeAppManager = new RootAction("closeAppManager", () => AppManager.close());

module.exports = {
	AppManager,
	FlyoutMenu,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getAppManager, openAppManager, closeAppManager);
	},
};
