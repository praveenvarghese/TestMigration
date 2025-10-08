/*!
 * @AIMMS_FILE=models/PageV2/AppManager/DialogPagev2.aimms
 */

scenario(
	"Post deleting few of Standard and Custom Grid-Layout Dialog Pages, asserting data on App Manager.",
	() => {
		loadPage("Main Project/home?aimms_only_persistence.write=true");

		// Unfold few of the pages
		openAppManager().unfoldPageNodes([
			"Main Project/Standard Grid Layout Dialogs/Grid Layout 11 Dialog/Dummy Grid Layout Dialog",
			"Main Project/Standard Grid Layout Dialogs/Another Grid Layout 11 Dialog",
			"Main Project/Custom Grid Layout Dialog/Custom Grid Layout Dialog 2",
			"Main Project/Custom Grid Layout Dialog/Another Custom Grid Layout Dialog",
		]);

		getAppManager()
			.getAppManagerInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					Tooltip: "Main Project",
					NodeState: "Expanded",
					Icon: "",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					Tooltip: "home [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Standard Grid Layout Dialogs",
					Slug: "standard_grid_layout_dialogs",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Standard Grid Layout Dialogs [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "standard_grid_layout_dialogs-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Grid Layout 11 Dialog",
					Slug: "grid_layout_11_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Grid Layout 11 Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "grid_layout_11_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dummy Grid Layout Dialog",
					Slug: "dummy_grid_layout_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Dummy Grid Layout Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "dummy_grid_layout_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Another Grid Layout 11 Dialog",
					Slug: "another_grid_layout_11_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Another Grid Layout 11 Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "1",
					Slug: "another_grid_layout_11_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Custom Grid Layout Dialog",
					Slug: "custom_grid_layout_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Custom Grid Layout Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "custom_grid_layout_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Custom Grid Layout Dialog 2",
					Slug: "custom_grid_layout_dialog_2",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Custom Grid Layout Dialog 2 [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "custom_grid_layout_dialog_2-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Another Custom Grid Layout Dialog",
					Slug: "another_custom_grid_layout_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Another Custom Grid Layout Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "2",
					Slug: "another_custom_grid_layout_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Standard Grid Layout Dialogs/Another Grid Layout 11 Dialog",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getFlyoutMenu({
				pagePath:
					"Main Project/Custom Grid Layout Dialog/Another Custom Grid Layout Dialog",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getAppManagerInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					Tooltip: "Main Project",
					NodeState: "Expanded",
					Icon: "",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					Tooltip: "home [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Standard Grid Layout Dialogs",
					Slug: "standard_grid_layout_dialogs",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Standard Grid Layout Dialogs [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "standard_grid_layout_dialogs-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Grid Layout 11 Dialog",
					Slug: "grid_layout_11_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Grid Layout 11 Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "grid_layout_11_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Dummy Grid Layout Dialog",
					Slug: "dummy_grid_layout_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Dummy Grid Layout Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "dummy_grid_layout_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Custom Grid Layout Dialog",
					Slug: "custom_grid_layout_dialog",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Custom Grid Layout Dialog [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "custom_grid_layout_dialog-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Custom Grid Layout Dialog 2",
					Slug: "custom_grid_layout_dialog_2",
					NodeType: "Pagev2-grid-dialog",
					Tooltip: "Custom Grid Layout Dialog 2 [ Dialog ]",
					NodeState: "Expanded",
					Icon: "pagev2-grid-dialog",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "Widgets on page",
					WidgetsCount: "3",
					Slug: "custom_grid_layout_dialog_2-widget-container",
					NodeType: "Container",
					Tooltip: "Widgets on page",
					NodeState: "Collapsed",
					Icon: "aimms-cube2",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
			]);

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Standard Grid Layout Dialogs",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getFlyoutMenu({
				pagePath: "Main Project/Custom Grid Layout Dialog",
			})
			.clickOnDelete()
			.actionYes()
			.click();

		getAppManager()
			.getAppManagerInfo()
			.should.eql([
				{
					Name: "Main Project",
					Slug: "main_project",
					NodeType: "Pagev2-grid",
					Tooltip: "Main Project",
					NodeState: "Expanded",
					Icon: "",
					IsNodeSelected: false,
					NodeHasHiddenIndication: false,
				},
				{
					Name: "home",
					Slug: "home",
					NodeType: "Page",
					Tooltip: "home [ Classic Page ]",
					NodeState: "Collapsed",
					Icon: "icon-home",
					IsNodeSelected: true,
					NodeHasHiddenIndication: false,
				},
			]);
	}
);
