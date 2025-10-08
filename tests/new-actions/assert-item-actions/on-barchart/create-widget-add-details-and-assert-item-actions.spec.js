/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"Create a Bar Chart widget. On right-click over a bar element, assert respective item actions are shown only when Item actions is configured.",
	() => {
		loadPage("Main Project/Item Actions");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Disable default browser context menu on the page
		findWidget("item_actions").unBindBrowserContextmenu();

		// Create a Bar Chart widget
		createWidget("BarChart", [], "IABarChart", 8, 3);

		// Add contents to Bar Chart
		findWidget("IABarChart")
			.getContentsOptionEditor()
			.setContents("IA_JobStart"); // Close option Editor
		findWidget("IABarChart").closeOptionDialog();

		// Configure Store Focus elements for Bar Chart
		findWidget("IABarChart")
			.openStoreFocusOptionEditor()
			.setStoreFocusSetting({
				name: "<IDENTIFIER-SET>",
				value: "SelectedIdentifier",
				type: "identifier",
			})
			.setStoreFocusSetting({
				name: "Team",
				value: "SelectedTeamMember",
				type: "identifier",
			})
			.setStoreFocusSetting({
				name: "Widget",
				value: "SelectedWidget",
				type: "identifier",
			});

		findWidget("IABarChart").closeOptionDialog();

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// // Hover on a Bar Chart element, and then right-click.
		// findWidget("IABarChart")
		// 	.findBar("IA_JobStart,1,PV,List")
		// 	.hover();
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,PV,List")
			.rightClick(2, 2);

		// Assert item actions are not available
		findWidget("IABarChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// // Assert UI behaviour of the right-clicked Bar Chart element
		// let barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,PV,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("1px");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,MKG,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.9");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("0px");

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();

		//Configure Item actions to Bar Chart
		findWidget("IABarChart")
			.openWidgetExtensionsOptionEditor()
			.setWidgetExtensions([
				{
					name: "Item Actions",
					value: "ItemActionsInfo",
				},
			]);

		findWidget("IABarChart").closeOptionDialog();

		// Unfold the Secondary page actions and click on action that clears of data from configured Store Focus elements
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// Right click on a Bar Chart element.
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,PV,List")
			.rightClick(2, 2);

		// // Assert UI behaviour of the right-clicked Bar Chart element
		// let barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,PV,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("2px");
		// barChartElement.hasClass("is-active").should.be.equal(true);
		// barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,MKG,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.7");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("0px");

		// Though item actions are configured. Because of no item action data.
		// Assert item actions are not available
		findWidget("IABarChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("PV");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("List");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();

		/*
		  Unfold the Secondary page actions
		  Click on action that clears of data from configured Store Focus elements
		  Click on action that updates Item actions data for Bar Chart
		*/
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.getPageActionV2Details(0)
			.click();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.getPageActionV2Details(4)
			.click();
		findWidget("item_actions")
			.getSecondaryPageActions()
			.clickHamburgerButton();

		// If earlier right-clicked Bar chart element is right-clicked again, the store focus entries are not updated.
		// Right click on another Bar Chart element.
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,MKG,List")
			.rightClick(2, 2);

		// Get the item actions context-menu off
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,MKG,List")
			.click(2, 2);

		// Right click on Bar Chart element.
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,PV,List")
			.rightClick(2, 2);

		// // Assert UI behaviour of the right-clicked Bar Chart elements
		// barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,PV,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("2px");
		// barChartElement.hasClass("is-active").should.be.equal(true);
		// barChartElement = findWidget("IABarChart").findBar("IA_JobStart,1,MKG,List");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.7");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement.getCSSStyleProperty("stroke-width").should.be.equal("0px");

		// Assert respective item actions are available
		const itemActions = findWidget("IABarChart")
			.getItemActions()
			.getData();

		itemActions.should.exist;
		// Assert there are 3 item actions. Assert the details.
		itemActions.should.have.numberOfItems.equal(3);
		itemActions.should.beEqualTo([
			{
				title: "More Info on this Widget.",
				icon: "aimms-info",
				state: "active",
			},
			{
				title: "Hide this Widget Info.",
				icon: "aimms-toggle-off",
				state: "inactive",
			},
			{
				title: "Bugs Trend for this Widget.",
				icon: "aimms-stats-dots",
				state: "active",
			},
		]);

		// Get the item actions context-menu off
		findWidget("IABarChart")
			.findBar("IA_JobStart,1,PV,List")
			.click(2, 2);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("PV");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("List");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();
	}
);
