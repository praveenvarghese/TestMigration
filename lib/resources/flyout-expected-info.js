// TODO: move those mapping inside lib folder to hide such details from the spec files!

const pageList = [
	{ DisplayText: "Add Page", Icon: "aimms-grid7" },
	{
		DisplayText: "Add Dialog Page",
		Icon: "aimms-grid7 pagev2-grid-dialog",
	},
	{
		DisplayText: "Add Side Panel Page",
		Icon: "aimms-square-left pagev2-grid-sidepanel",
	},
];

const classicPageList = [
	{ DisplayText: "Add Page", Icon: "aimms-file-plus" },
	{ DisplayText: "Add Dialog Page", Icon: "aimms-popout" },
	{
		DisplayText: "Add Side Panel Page",
		Icon: "aimms-square-left",
	},
];

const pageOperationVisibility = { DisplayText: "Visibility", Icon: "aimms-eye" };
const pageOperationRename = { DisplayText: "Rename", Icon: "aimms-pencil6" };
const pageOperationDelete = { DisplayText: "Delete", Icon: "aimms-bin2" };

const pageOperations = [pageOperationRename, pageOperationVisibility, pageOperationDelete];
const pageOperationsWithNoVisiblity = [pageOperationRename, pageOperationDelete];
const pageOperationsAppManagerV1 = [
	"Add Page",
	"Add Dialog Page",
	"Add Sidepanel Page",
	"Rename Page",
	"Set Visibility",
	"Delete Page",
];

const pageOperationsAppManagerV1NoEditing = ["Add Page", "Add Dialog Page", "Add Sidepanel Page"];

const widgetOperationPaste = {
	DisplayText: "Paste Widget",
	Icon: "aimms-paste flyout__menu-item-with-divider",
};
const widgetOperationCopy = { DisplayText: "Copy", Icon: "aimms-copy3" };
const widgetOperationCut = { DisplayText: "Cut", Icon: "aimms-scissors" };
const widgetOperationRename = { DisplayText: "Rename", Icon: "aimms-pencil6" };
const widgetOperationDelete = { DisplayText: "Delete", Icon: "aimms-bin2" };

const widgetOperations = [
	widgetOperationCopy,
	widgetOperationCut,
	widgetOperationRename,
	widgetOperationDelete,
];

const widgetOperationsWithPaste = [...widgetOperations, widgetOperationPaste];

const getExpected = (...items) =>
	items.flat().map((item, i) => {
		item.Order = i;
		return item;
	});

module.exports = {
	pageList,
	classicPageList,
	pageOperations,
	pageOperationsWithNoVisiblity,
	pageOperationsAppManagerV1,
	pageOperationsAppManagerV1NoEditing,
	widgetOperationPaste,
	widgetOperations,
	widgetOperationsWithPaste,
	getExpected,
};
