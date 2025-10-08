const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const waitFor = require("../waitFor");
const { waitUntilPageLoaded } = require("../actions.js");
const jQuery = require("jquery-node");
const { appNameAndVersion } = require("../globals");

const loadPageWaitFor = process.env.LOADPAGE_WAITFOR
	? Number.parseInt(process.env.LOADPAGE_WAITFOR, 10)
	: 5000;

class PageMenu extends FrameworkObject {
	getCurrentPageName() {
		const pageMenu = this;
		pageMenu._opensMenu();
		return this.webElement.find("li.current").getText();
	}

	getCurrentPageV2Name() {
		return this.getCurrentPageName();
	}

	getName() {
		return this.webElement.find(".menu-bar .menu-btn").getText();
	}

	hasPages(pageNames) {
		return this._checkIfExist(pageNames, true);
	}

	hasNotPages(pageNames) {
		return this._checkIfExist(pageNames, false);
	}

	_checkIfExist(pagePaths, shouldExist) {
		const pageMenu = this;

		pageMenu._opensMenu();
		return pagePaths
			.map((pagePath) =>
				pageMenu.webElement.exists(
					`li .page-link[href="/${appNameAndVersion}/${pagePath}"]:isVisible`
				)
			)
			.every((hasPage) => hasPage === shouldExist);
	}

	_navigateToUri(pageUri) {
		const pageMenu = this;
		pageMenu._opensMenu();
		const node = pageMenu._getNodeFromPath(pageUri);
		if (node.any()) {
			node.click();
		} else {
			throw new Error(`navigateToPage(${pageUri}): Cannot find ${pageUri} page in page menu`);
		}
	}

	navigateToPage(pageUri) {
		const pageMenu = this;
		pageMenu._navigateToUri(pageUri);
		waitUntilPageLoaded(pageUri);
		return pageMenu;
	}

	navigateToPageWithRedirect({ initialUri, finalUri }) {
		const pageMenu = this;
		pageMenu._navigateToUri(initialUri);
		waitUntilPageLoaded(finalUri);
		return pageMenu;
	}

	navigateToPageWithError({ initialUri, finalUri }) {
		const pageMenu = this;
		pageMenu._navigateToUri(initialUri);
		waitUntilPageLoaded(finalUri);
		return pageMenu;
	}

	_getNodeFromPath(path) {
		const pageMenu = this;
		const elQ = pageMenu.webElement.findIfAny(`a[href="/${appNameAndVersion}/${path}"]`);
		return elQ;
	}

	_opensMenu() {
		const pageMenu = this;
		if (!pageMenu.isMenuOpen()) {
			pageMenu.toggleMenu();
		}
		return pageMenu;
	}

	toggleMenu() {
		const pageMenu = this;
		pageMenu.webElement.find(".menu-bar .menu-btn").click();
		// Wait for the menu bar animation to complete after its opened/ closed
		waitFor(pageMenu.webElement, 200, loadPageWaitFor);
		return pageMenu;
	}

	isMenuOpen() {
		const visibleMenuLinks = this.webElement.findIfAny(`.menu-list [data-slug]:isVisible`);
		return this.webElement.hasClass("active") && visibleMenuLinks.any();
	}

	isMenuBarVisible() {
		const menuButton = this.webElement.findIfAny(".menu-bar .menu-btn:isVisible");
		return menuButton.any();
	}

	/**
	 * Returns true if link is visible on the viewport
	 * @param {String} pagePath Relative path from appname onwards
	 */
	isMenuLinkVisible(pagePath) {
		const pageMenu = this;
		const link = pageMenu.webElement.find(
			`.menu-list a[href="/${appNameAndVersion}/${pagePath}"]`
		);
		return link.isDisplayedInViewport();
	}

	/**
	 * Click on MORE or LESS link that is the direct child of the link,
	 * whose path is passed as an argument.
	 * @param {String} pagePath Relative path of parent link of MORE or LESS
	 */
	toggleMoreItems(pagePath) {
		const pageMenu = this;
		const currentLink = pageMenu.webElement.find(
			`.menu-list a[href="/${appNameAndVersion}/${pagePath}"]`
		);

		currentLink
			.parent()
			.find("~ .more-link")
			.click();
		return pageMenu;
	}

	/**
	 * Click on Down-arrow or Up-arrow link that is the direct child of the link,
	 * whose path is passed as an argument.
	 * @param {String} pagePath Relative path of link on which the toggle button is present
	 */
	toggleSubMenu(pagePath) {
		const pageMenu = this;
		const currentLink = pageMenu.webElement.find(
			`.menu-list a[href="/${appNameAndVersion}/${pagePath}"]`
		);

		currentLink.find("+ .icon-arrow-down2").click();
		return pageMenu;
	}

	pressKeys(textOrKeys, keyDelay) {
		return this.webElement.keys(textOrKeys, keyDelay);
	}

	closeMenu() {
		const pageMenu = this;
		if (pageMenu.isMenuOpen()) {
			pageMenu.toggleMenu();
		}
		return pageMenu;
	}

	mouseHover() {
		return this.webElement.moveTo();
	}

	getMenuLinksInfo() {
		const menuItemsInfo = [];
		//Open Menu
		this.toggleMenu();

		this.webElement.findIfAny(`.menu-list li`).webElements.forEach((menuItem) => {
			const menuItemElement = jQuery($$$(menuItem.selector).getHTML());
			const menuItemClasses = menuItemElement.attr("class").split(" ");
			const menuItemLink = menuItemElement.find(".page-link:first");

			// Page Slug Attribute
			const slug = menuItemElement.attr("data-slug");

			// Page Currently Selected Attribute
			const isSelected = menuItemClasses.indexOf("current") !== -1 ? true : false;

			// Page Type
			const pageType = menuItemClasses[0];

			// Page Currently Selected Attribute
			const hasChildren = menuItemClasses.indexOf("hasChildren") !== -1 ? true : false;

			// Display Name
			const name = menuItemLink.text();

			// Menu link
			const rawHref = menuItemLink.attr("href");
			const link = rawHref ? rawHref.replace(/.+?(?=Main)/, "") : null;

			//Active
			const isActive = !menuItemLink.hasClass("inactive");

			//get Tooltip
			const tooltip = menuItemLink.attr("title") || "";

			menuItemsInfo.push({
				DisplayName: name,
				Slug: slug,
				Tooltip: tooltip,
				PageType: pageType,
				Link: link,
				IsSelected: isSelected,
				HasChildren: hasChildren,
				IsActive: isActive,
			});
		});
		return menuItemsInfo;
	}
}

PageMenu._get = () => {
	const pageMenuExists = $$$("body").exists(".menu-holder .menu-bar .menu-btn:isVisible");
	return pageMenuExists ? new PageMenu($$$(".menu-holder")) : "None";
};

PageMenu.open = () => {
	$$$(".menu-bar:not(.sticky) .menu-btn").click();
	return new PageMenu($$$(".menu-holder.active"));
};

const getPageMenu = new RootAction("getPageMenu", () => PageMenu._get());
const openPageMenu = new RootAction("openPageMenu", () => PageMenu.open());

module.exports = {
	PageMenu,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getPageMenu, openPageMenu);
	},
};
