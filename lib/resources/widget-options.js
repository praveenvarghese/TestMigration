const options = require("./option-editor-options");

function getOptions(arrayArgs) {
	return arrayArgs.reduce((acc, value) => {
		const option = options[value];
		if (option) {
			acc.push(option);
		}
		return acc;
	}, []);
}

const barChartWidgetOptions = () => {
	const barChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_BAR_CHART_SETTINGS",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(barChartOptionsList, { options });
};

const lineChartWidgetOptions = () => {
	const lineChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_LINE_CHART_SETTINGS",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(lineChartOptionsList, { options });
};
const barLineChartWidgetOptions = () => {
	const barLineChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_BARLINE_CHART_SETTINGS",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(barLineChartOptionsList, { options });
};

const bubbleChartWidgetOptions = () => {
	const bubbleChartOptionsList = [
		//"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CHANGE_TYPE_FIRST",
		"OPTION_PIVOT",
		"OPTION_BUBBLE_CHART_SETTINGS",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(bubbleChartOptionsList, { options });
};

const comboChartWidgetOptions = () => {
	const comboChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_INDEX_SETTINGS",
		"OPTION_CHART_SETTINGS",
		"OPTION_PIVOT",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(comboChartOptionsList, { options });
};

const ganttChartWidgetOptions = () => {
	const ganttChartOptionsList = [
		"OPTION_WIDGET_VIEWS",
		"OPTION_CHANGE_TYPE_FIRST",
		"OPTION_PIVOT",
		"OPTION_GANTT_CHART_SETTINGS",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(ganttChartOptionsList, { options });
};

const legendWidgetOptions = () => {
	const legendOptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(legendOptionsList, { options });
};

const multiSelectWidgetOptions = () => {
	const multiSelectOptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(multiSelectOptionsList, { options });
};

const sliderWidgetOptions = () => {
	const sliderOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(sliderOptionsList, { options });
};

const listWidgetOptions = () => {
	const listOptionsList = [
		"OPTION_LIST_SETTINGS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(listOptionsList, { options });
};

const mapWidgetOptions = () => {
	const mapOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_NODE_SET_SETTINGS_FIRST",
		"OPTION_ARC_SET_SETTINGS",
		"OPTION_HEAT_MAP_SETTINGS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(mapOptionsList, { options });
};

const pieChartWidgetOptions = () => {
	const pieChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(pieChartOptionsList, { options });
};

const tableWidgetOptions = () => {
	const tableOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(tableOptionsList, { options });
};

const tableV2WidgetOptions = () => {
	const tableOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(tableOptionsList, { options });
};

const treeMapChartWidgetOptions = () => {
	const treeMapChartOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(treeMapChartOptionsList, { options });
};

const scalarWidgetOptions = () => {
	const scalarOptionsList = [
		"OPTION_WIDGET_TEMPLATES",
		"OPTION_WIDGET_VIEWS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_PIVOT",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(scalarOptionsList, { options });
};

const selectionBoxWidgetOptions = () => {
	const selectionBoxOptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_CHANGE_TYPE",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(selectionBoxOptionsList, { options });
};

const selectionBoxV2WidgetOptions = () => {
	const selectionBoxV2OptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_IDENTIFIER_SETTINGS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(selectionBoxV2OptionsList, { options });
};

const buttonWidgetOptions = () => {
	const buttonOptionsList = ["OPTION_ACTION", "OPTION_MISCELLANIOUS", "OPTION_ADVANCED"];
	return getOptions(buttonOptionsList, { options });
};

const downloadWidgetOptions = () => {
	const downloadOptionsList = ["OPTION_ACTION", "OPTION_MISCELLANIOUS", "OPTION_ADVANCED"];
	return getOptions(downloadOptionsList, { options });
};

const uploadWidgetOptions = () => {
	const uploadOptionsList = ["OPTION_ACTION", "OPTION_MISCELLANIOUS", "OPTION_ADVANCED"];
	return getOptions(uploadOptionsList, { options });
};

const imageWidgetOptions = () => {
	const imageOptionsList = ["OPTION_MISCELLANIOUS_FIRST", "OPTION_ADVANCED"];
	return getOptions(imageOptionsList, { options });
};

const labelWidgetOptions = () => {
	const labelOptionsList = ["OPTION_MISCELLANIOUS_FIRST", "OPTION_ADVANCED"];
	return getOptions(labelOptionsList, { options });
};

const textWidgetOptions = () => {
	const textOptionsList = ["OPTION_MISCELLANIOUS_FIRST", "OPTION_ADVANCED"];
	return getOptions(textOptionsList, { options });
};

const diagramWidgetOption = () => {
	const diagramOptionsList = [
		"OPTION_NODE_SETS",
		"OPTION_CONTENTS_FIRST",
		"OPTION_PIVOT",
		"OPTION_STORE_FOCUS",
		"OPTION_TOTALS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(diagramOptionsList, { options });
};

const tabbedPagesWidgetOptions = () => {
	const tabbedPagesOptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(tabbedPagesOptionsList, { options });
};

const ganttchartV2WidgetOptions = () => {
	const ganttchartv2OptionsList = [
		"OPTION_CONTENTS_FIRST",
		"OPTION_INDEX_SETTINGS",
		"OPTION_PIVOT",
		"OPTION_GANTT_CHART_SETTINGS",
		"OPTION_WIDGET_EXTENSIONS",
		"OPTION_MISCELLANIOUS",
		"OPTION_ADVANCED",
	];
	return getOptions(ganttchartv2OptionsList, { options });
};

module.exports = {
	barChartWidgetOptions,
	lineChartWidgetOptions,
	barLineChartWidgetOptions,
	bubbleChartWidgetOptions,
	buttonWidgetOptions,
	comboChartWidgetOptions,
	downloadWidgetOptions,
	ganttChartWidgetOptions,
	imageWidgetOptions,
	labelWidgetOptions,
	legendWidgetOptions,
	listWidgetOptions,
	mapWidgetOptions,
	multiSelectWidgetOptions,
	pieChartWidgetOptions,
	scalarWidgetOptions,
	selectionBoxWidgetOptions,
	selectionBoxV2WidgetOptions,
	sliderWidgetOptions,
	tableWidgetOptions,
	textWidgetOptions,
	treeMapChartWidgetOptions,
	uploadWidgetOptions,
	diagramWidgetOption,
	tableV2WidgetOptions,
	tabbedPagesWidgetOptions,
	ganttchartV2WidgetOptions,
};
