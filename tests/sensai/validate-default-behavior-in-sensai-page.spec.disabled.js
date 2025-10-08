/*!
 * @AIMMS_FILE=models/scn-new/SC Navigator/SC Navigator.aimms
 * @HARDWARE_SHARE=large
 */

scenario("Test to verify widgets and feedback mechanism in Senasi chat", () => {
	loadPage("Main Project/Control Panel");

	waitForBackgroundActionToComplete();

	getPageHeader()
		.getButtons()
		.getChatUIButton()
		.click();

	findWidget("chat")
		.getWidgets()
		.should.eql(["chat-history", "chat-request", "chat-send"]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActions()
		.should.beEqualTo([
			{ title: "This answer is helpful.", icon: "icon aimms-thumbs-up2", state: "active" },
			{
				title: "This answer is not very helpful.",
				icon: "icon aimms-thumbs-down2",
				state: "active",
			},
		]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionsStyles()
		.should.beEqualTo([
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
		]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionsStyles()
		.should.beEqualTo([
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
		]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionItem(0)
		.click();

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionsStyles()
		.should.beEqualTo([
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgb(255, 255, 255)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
		]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionItem(1)
		.click();

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionsStyles()
		.should.beEqualTo([
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgb(255, 255, 255)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
		]);

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionItem(1)
		.click();

	findWidget("chat-history")
		.getListGroup(0)
		.getListItem(0)
		.hover()
		.getInlineActionsStyles()
		.should.beEqualTo([
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgba(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
			{
				InlineActionBackgroundColor: "rgba(0, 0, 0, 0)",
				iconColor: "rgb(255, 255, 255, 0.64)",
				displayTextColor: "rgb(31, 52, 102)",
				cursorStyle: "pointer",
			},
		]);
});
