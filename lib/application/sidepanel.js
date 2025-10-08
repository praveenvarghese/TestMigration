const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");

class Sidepanel extends FrameworkObject {
	getTabDisplayName() {
		const sidepanelTabs = this.webElement.findIfAny(".sidepanel-tab");
		let tabs = [];
		if (sidepanelTabs.any()) {
			tabs = this.webElement.find(".sidepanel-tab:isVisible").getText();
		}
		return tabs;
	}

	getCountOfTabs() {
		const sidepanelTabs = this.webElement.findIfAny(".sidepanel-tab:isVisible");
		const tabs_count = sidepanelTabs.any() ? sidepanelTabs.length : 0;
		return tabs_count;
	}

	getTabToolTip() {
		const sidepanelTabs = this.webElement.findIfAny(".sidepanel-tab");
		let titles = [];
		if (sidepanelTabs.any()) {
			titles = this.webElement.find(".sidepanel-tab:isVisible").getAttribute("title");
		}
		return titles;
	}

	getTabSlug() {
		const sidepanelTabs = this.webElement.findIfAny(".sidepanel-tab");
		let sidepanelSlugs = [];
		if (sidepanelTabs.any()) {
			sidepanelSlugs = this.webElement
				.find(".sidepanel-tab:isVisible")
				.getAttribute("data-sidepanel-slug");
		}
		return sidepanelSlugs;
	}

	openSidepanelTab(tabName) {
		const sidepanelElement = this.webElement;
		const sidepanelTab = sidepanelElement.findIfAny(
			`.sidepanel-tab[data-displaytext="${tabName}"]`
		);
		if (sidepanelTab.any()) {
			sidepanelTab.click();
		} else {
			throw new Error("Expected Sidepanel tab could not be found.");
		}
		return this;
	}

	closeSidepanelTab() {
		const sidePanelCloseButton = this.webElement.findIfAny(
			".sidepanel-content-container .sidepanel-header .icon-close:isVisible"
		);
		if (sidePanelCloseButton.any()) {
			sidePanelCloseButton.click();
		} else {
			throw new Error("No sidepanel is open to close it.");
		}

		return this;
	}

	isSidepanelTabOpened() {
		return this.webElement.findIfAny(" .sidepanel-content-container h3").any();
	}

	getSidePanelTabInfo() {
		const sidepanelTabInfo = [];
		const sidePanelContainer = jQuery(this.webElement.getHTML());

		// Loop through each of the Side Panel Tab and extract its details.
		const noOfSidePanelTabs = sidePanelContainer.find(".sidepanel-tab").length;
		for (let index = 0; index < noOfSidePanelTabs; index++) {
			// Get the Side Panel Tab WebElement
			const sidePanelTab = sidePanelContainer.find(`.sidepanel-tab:eq(${index})`);

			// Display Text
			const displayText = sidePanelTab.find(`span`).text();

			// is Tab Active/Open
			// const tabActive = sidePanelTab.attr("class").split("active").length > 1;

			// Tootlip
			const tooltip = sidePanelTab.attr(`title`);

			// SidePanel Slug
			const slug = sidePanelTab.attr(`data-sidepanel-slug`);

			// Icon
			const icon = sidePanelTab
				.find(`i`)
				.attr(`class`)
				.split(" ")
				.filter((e) => /aimms-/.test(e))
				.slice(0)
				.toString();

			// IconColor
			const iconColor =
				sidePanelTab
					.find(`i`)
					.attr(`style`)
					?.replace(/color: /, "") ?? "";

			const sidePanelInfo = {
				Name: displayText,
				Slug: slug,
				Tooltip: tooltip,
				Icon: icon,
				IconColor: iconColor,
			};

			// if (tabActive) {
			// 	Object.defineProperty(sidePanelInfo, "Status", { value: true });
			// }

			sidepanelTabInfo.push(sidePanelInfo);
		}

		return sidepanelTabInfo;
	}
}

module.exports = Sidepanel;
