/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"On the Sidepanel, right-click on Line Chart point and assert respective item actions are shown.",
	() => {
		loadPage("Main Project/Item Actions");

		// Wait for background operations to complete and Busy message bar to go off
		waitForBackgroundActionToComplete();

		// Open Sidepanel tab with Line Charts
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Line Chart");

		/*
		With no Item actions data configured.
		Right-click and assert no item actions are shown.
		*/

		// Right click on a Line Chart point on the Sidepanel
		findWidget("SP_LineChart")
			.findPoint("MB,Scalar,IA_Copy_JobStart")
			.rightClick(0, 0);

		// Assert item actions are not available
		findWidget("SP_LineChart")
			.getItemActions()
			.isItemActionDisplayed().should.be.false;

		// Right click on another Line Chart point on the Sidepanel
		findWidget("SP_LineChart")
			.findPoint("MR,Tree Map,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		findWidget("SP_LineChart")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{
					title: "Show Domain Knowledge rating for this combo.",
					icon: "aimms-rulers",
					state: "active",
				},
			]);

		// Get the item actions context-menu off
		// findWidget("SP_LineChart").pressKeys([SPECIAL_KEYS.tab, SPECIAL_KEYS.escape]);
		findWidget("SP_LineChart")
			.findPoint("MR,Tree Map,IA_Copy_JobDuration")
			.click(0, 0);

		// Right click on another Line Chart point on the Sidepanel
		findWidget("SP_LineChart")
			.findPoint("EN,List,IA_Copy_JobDuration")
			.rightClick(0, 0);

		// Assert respective item actions are available
		findWidget("SP_LineChart")
			.getItemActions()
			.getData();

		findWidget("SP_LineChart")
			.getItemActions()
			.getData()
			.should.beEqualTo([
				{
					title: "Show Domain Knowledge rating for this combo.",
					icon: "aimms-rulers",
					state: "active",
				},
			]);

		findWidget("SP_LineChart")
			.findPoint("EN,List,IA_Copy_JobDuration")
			.click(0, 0);

		// Open another Sidepanel tab and assert store-focus entries are updated
		findWidget("item_actions")
			.getSidepanels()
			.openSidepanelTab("Chart Settings");
		findWidget("Store Focus_1")
			.getValue("SelectedIdentifier")
			.should.be.equal("IA_Copy_JobDuration");
		findWidget("Store Focus_1")
			.getValue("SelectedTeamMember1")
			.should.be.equal("EN");
		findWidget("Store Focus_1")
			.getValue("SelectedWidget1")
			.should.be.equal("List");
	}
);
