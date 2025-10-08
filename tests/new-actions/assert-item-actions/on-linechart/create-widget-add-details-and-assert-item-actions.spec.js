/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 * @HARDWARE_SHARE=medium
 * @DURATION=medium
 */

scenario(
	"Create a Line Chart widget. On right-click over a Line Chart point, assert respective item actions are shown only when Item actions is configured.",
	() => {
		loadPage("Main Project/Item Actions");

		// Wait for background operations to complete and Busy message Line to go off
		waitForBackgroundActionToComplete();

		// Disable default browser context menu on the page
		findWidget("item_actions").unBindBrowserContextmenu();

		// Create a Line Chart widget
		createWidget("LineChart", [], "IALineChart", 8, 3);
		closeWidgetManager();

		// Add contents to Line Chart
		findWidget("IALineChart")
			.getContentsOptionEditor()
			.setContents("IA_Copy_JobStart");
		// Close option Editor
		findWidget("IALineChart").closeOptionDialog();

		// Configure Store Focus elements for Line Chart
		findWidget("IALineChart")
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

		findWidget("IALineChart").closeOptionDialog();

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// // Hover on a Line Chart point, and then right-click.
		// findWidget("IALineChart")
		// 	.findPoint("2,MKG,Map,IA_Copy_JobStart")
		// 	.hover();
		findWidget("IALineChart")
			.findPoint("2,MKG,Map,IA_Copy_JobStart")
			.rightClick(1, 1);

		// Assert item actions are not available
		findWidget("IALineChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// // Assert UI behaviour of the right-clicked Line Chart point
		// let barChartElement = findWidget("IALineChart").findPoint("2,MKG,Map,IA_Copy_JobStart");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		// barChartElement.getCSSStyleProperty("border").should.contain("1px");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement = findWidget("IALineChart").findPoint("3,MKG,Bar Chart,IA_Copy_JobStart");
		// barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.9");
		// barChartElement.hasClass("is-active").should.be.equal(false);
		// barChartElement.getCSSStyleProperty("border").should.contain("0px");

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

		//Configure Item actions to Line Chart
		findWidget("IALineChart")
			.openWidgetExtensionsOptionEditor()
			.setWidgetExtensions([
				{
					name: "Item Actions",
					value: "ItemActionsInfo",
				},
			]);

		findWidget("IALineChart").closeOptionDialog();

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

		// Right click on a Line Chart point.
		findWidget("IALineChart")
			.findPoint("2,MKG,Map,IA_Copy_JobStart")
			.rightClick(2, 2);

		// Assert UI behaviour of the right-clicked Line Chart point
		let barChartElement = findWidget("IALineChart").findPoint("2,MKG,Map,IA_Copy_JobStart");
		barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		barChartElement.getCSSStyleProperty("border").should.contain("2px");
		barChartElement.hasClass("is-active").should.be.equal(true);
		barChartElement = findWidget("IALineChart").findPoint("3,MKG,Bar Chart,IA_Copy_JobStart");
		barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.7");
		barChartElement.hasClass("is-active").should.be.equal(false);
		barChartElement.getCSSStyleProperty("border").should.contain("0px");

		// Though item actions are configured. Because of no item action data.
		// Assert item actions are not available
		findWidget("IALineChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MKG");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Map");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();

		/*
		  Unfold the Secondary page actions
		  Click on action that clears of data from configured Store Focus elements
		  Click on action that updates Item actions data for Line Chart
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

		// If earlier right-clicked chart point is right-clicked again, the store focus entries are not updated.
		// Hence, Right click on another Line Chart point.
		findWidget("IALineChart")
			.findPoint("3,MKG,Bar Chart,IA_Copy_JobStart")
			.rightClick(2, 2);

		// Get the item actions context-menu off
		// findWidget("IALineChart").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("IALineChart")
			.findPoint("3,MKG,Bar Chart,IA_Copy_JobStart")
			.click(2, 2);

		// Right click on Line Chart point.
		findWidget("IALineChart")
			.findPoint("2,MKG,Map,IA_Copy_JobStart")
			.rightClick(2, 2);

		// Assert UI behaviour of the right-clicked Line Chart elements
		barChartElement = findWidget("IALineChart").findPoint("2,MKG,Map,IA_Copy_JobStart");
		barChartElement.getCSSStyleProperty("opacity").should.be.equal("1");
		barChartElement.getCSSStyleProperty("border").should.contain("2px");
		barChartElement.hasClass("is-active").should.be.equal(true);
		barChartElement = findWidget("IALineChart").findPoint("3,MKG,Bar Chart,IA_Copy_JobStart");
		barChartElement.getCSSStyleProperty("opacity").should.be.equal("0.7");
		barChartElement.hasClass("is-active").should.be.equal(false);
		barChartElement.getCSSStyleProperty("border").should.contain("0px");

		// Assert respective item actions are available
		const itemActions = findWidget("IALineChart")
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
		findWidget("IALineChart")
			.findPoint("2,MKG,Map,IA_Copy_JobStart")
			.click(2, 2);

		// Open Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobStart");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember")
			.should.be.equal("MKG");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget")
			.should.be.equal("Map");
		findWidget("item_actions")
			.getSidepanels()
			.closeSidepanelTab();
	}
);
