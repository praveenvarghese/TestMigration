const mixin = require("../mixin");
const { FrameworkObject } = require("../framework-object");
const { Widget } = require("./widget");
const { _ } = require("lodash");
const $$$ = require("../selenium/3xdollar");
const {
	WithDiagramWidgetNodeSetSettingsOptionEditor,
} = require("../option-editors/diagram-node-set-settings-option-editor.js");
const {
	WithDiagramWidgetArcSettingsOptionEditor,
} = require("../option-editors/diagram-arc-settings-option-editor.js");
const { ItemActions } = require("../application/item-actions");
const { WithWidgetActions } = require("../application/widget-actions");

class Nodes extends FrameworkObject {
	constructor(node, nodeType) {
		super(node);
		this.node = node;
		this.nodeType = nodeType;
	}

	/** hover over center of node */
	hoverOnNode() {
		this.node.webElement.moveTo();
		return this;
	}

	// editNodeInfo() {
	// 	this.hoverOnNode();
	// 	const nodeInfo = $$$(
	// 		`.joint-tool.joint-theme-default[model-id="${this.nodeType}"][data-tool-name="button"] circle:nth(1)`
	// 	);
	// 	nodeInfo.moveTo();
	// 	nodeInfo.click();
	// }

	// deleteNode() {
	// 	this.hoverOnNode();
	// 	const deleteNode = $$$(
	// 		`.joint-tool.joint-theme-default[model-id="${this.nodeType}"][data-tool-name="button"] circle:nth(0)`
	// 	);
	// 	deleteNode.moveTo();
	// 	deleteNode.click();
	// 	return !this.nodeIsVisibleOnDiagram();
	// }

	// modifyNodeDetails(nodeName, nodeCount) {
	// 	this.editNodeInfo();
	// 	const nameLocator = $$$(`.scalar-dialog-wrapper .scalar-table-wrap .row_0 input:isVisible`);
	// 	const countLocator = $$$(
	// 		`.scalar-dialog-wrapper .scalar-table-wrap .row_1 input:isVisible`
	// 	);
	// 	nameLocator.setValue(nodeName);
	// 	nameLocator.keys(SPECIAL_KEYS.enter);
	// 	browser.pause(300);
	// 	countLocator.setValue(nodeCount);
	// 	nameLocator.keys(SPECIAL_KEYS.enter);
	// 	$$$(".ui-dialog-buttonpane .ui-dialog-buttonset button.action-ok").click();
	// }

	nodeIsVisibleOnDiagram() {
		return this.webElement
			.findIfAny(`.joint-type-aimms-element[model-id=${this.nodeType}]`)
			.any();
	}

	nodeExist() {
		return this.node.any();
	}

	getNodeDetails(nodeName) {
		let nodeDetails = null;
		const node = $$$.findIfAny(`.diagram-widget__node-html-container[model-id=${nodeName}]`);

		const nodeTitle = [].concat(
			node.findIfAny(`.diagram-widget__node-identifier[data-attribute*='Name']`).getText()
		);
		const nodeIcon = [].concat(node.findIfAny("i i").getAttribute("class"));
		const nodeCount = [].concat(
			node.findIfAny(`.diagram-widget__node-identifier[data-attribute*='Count']`).getText()
		);

		nodeDetails = _.zipWith(nodeTitle, nodeIcon, nodeCount, (title, icon, count) => ({
			title,
			icon,
			count,
		}));

		return nodeDetails;
	}

	dragNdropNode(offsetX = 0, offsetY = 0) {
		// Move to the source element
		this.node.webElement.moveTo();
		this.node.webElement.dragAndDrop({ x: offsetX, y: offsetY });
	}

	getNodePosition() {
		return this.node.webElement.getAttribute("transform").replace(/translate|\(|\)/g, "");
	}

	getNodeSize() {
		const style = this.node.getBoundingClientRect();
		const width = Number(style.width);
		const height = Number(style.height);
		return [width, height];
	}

	// right-click where the cursor is located (and offset from there if needed)
	rightClickOnNode(xOffset = 5, yOffset = 5) {
		this.webElement.keys(SPECIAL_KEYS.escape);
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return new ItemActions();
	}

	// click where the cursor is located (and offset from there if needed)
	click(xOffset = 15, yOffset = 15) {
		this.webElement.click({
			button: "left",
			x: xOffset,
			y: yOffset,
		});
	}

	performDrag(sourceX, sourceY, targetX, targetY) {
		browser.performActions([
			{
				type: "pointer",
				id: "finger1",
				parameters: { pointerType: "mouse" },
				actions: [
					{ type: "pointerMove", duration: 0, x: sourceX, y: sourceY },
					{ type: "pointerDown", button: 0 },
					{ type: "pause", duration: 10 }, // emulate human pause
					{ type: "pointerMove", duration: 100, x: targetX, y: targetY },
					{ type: "pointerUp", button: 0 },
				],
			},
		]);
	}

	// drawArcToNode(node) {
	// 	this.performDrag(386, 88, 650, 240);
	// 	// this.node.webElement.click();
	// 	// this.node.webElement.dragAndDrop({ x: 105, y: 40 });
	// }
} // Class Nodes

class Arcs extends FrameworkObject {
	constructor(arc, source, target) {
		super(arc);
		this.arc = arc;
		this.source = source;
		this.target = target;
	}

	hoverOnArc() {
		this.arc.moveTo();
		return this;
	}

	select(xOffset = 15, yOffset = 2) {
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		browser.pause(500);

		return this;
	}

	clickWithALTPressed(xOffset = 15, yOffset = 2) {
		// Press down the alt key
		browser.performActions([
			{
				type: "key",
				id: "keyboard",
				actions: [{ type: "keyDown", value: SPECIAL_KEYS.alt }],
			},
		]);

		// Do the click, while ALT is still pressed
		browser.pause(500);
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });

		return this;
	}

	rightClickOnArc(xOffset = 15, yOffset = 2) {
		this.webElement.keys(SPECIAL_KEYS.escape);
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return new ItemActions();
	}

	// deleteArc() {
	// 	this.hoverOnArc();
	// 	const removeButton = this.arc.find(`.link-tool .tool-remove`);
	// 	removeButton.moveTo();
	// 	removeButton.click();
	// 	return this;
	// }

	showArcDialog(sourceNode, targetNode) {
		this.hoverOnArc();
		const iButton = $$$(`.joint-${sourceNode}.joint-${targetNode} circle`);
		iButton.moveTo();
		iButton.click();
		return this;
	}

	// updateArcLabel(field, fieldValue) {
	// 	const fieldsCount = $$$(".scalar-dialog-wrapper .scalar-table-wrap [class*=row]").length;
	// 	let fieldLocator;
	// 	switch (field) {
	// 		case "Field 1":
	// 			fieldLocator = $$$(
	// 				`.scalar-dialog-wrapper .scalar-table-wrap .row_${fieldsCount -
	// 					3} input:isVisible`
	// 			);
	// 			break;
	// 		case "Field 2":
	// 			fieldLocator = $$$(
	// 				`.scalar-dialog-wrapper .scalar-table-wrap .row_${fieldsCount -
	// 					2} input:isVisible`
	// 			);
	// 			break;
	// 		case "Label":
	// 		default:
	// 			fieldLocator = $$$(
	// 				`.scalar-dialog-wrapper .scalar-table-wrap .row_${fieldsCount -
	// 					1} input:isVisible`
	// 			);
	// 			break;
	// 	}

	// 	fieldLocator.setValue(fieldValue);
	// 	fieldLocator.keys(SPECIAL_KEYS.enter);

	// 	$$$(".ui-dialog .action-ok").click();
	// }

	arcLabelIsVisible() {
		return this.arc.findIfAny(`.labels .diagram-widget__arc-label`).any();
	}

	getArcLabelName() {
		return this.arc.findIfAny(`.labels .diagram-widget__arc-label`).getText();
	}

	getAnnotations() {
		// Locate the path element of this arc
		const path = this.arc.find("path.connection");

		// Locate all class attributes of the found path
		let classes = path.getAttribute("class");

		// Make all found classes an array
		classes = classes.split(" ");

		// Only keep all element starting with 'annotation-'
		const annotations = [];
		for (let i = 0; i < classes.length; i++) {
			if (classes[i].startsWith("annotation-")) {
				annotations.push(classes[i]);
			}
		}

		return annotations;
	}
}

class DiagramWidget extends mixin(
	Widget,
	WithDiagramWidgetNodeSetSettingsOptionEditor,
	WithDiagramWidgetArcSettingsOptionEditor,
	WithWidgetActions
) {
	getNumberOfNodes() {
		const numberOfNodes = this.webElement.findIfAny(
			'.joint-type-aimms-element[data-type="aimms.Element"]'
		).length;
		return numberOfNodes;
	}

	getNumberOfArcs() {
		const numberOfArcs = this.webElement.findIfAny(".joint-type-aimms-link").length;
		return numberOfArcs;
	}

	isNodeSetPlaceHolderVisible() {
		const nodeTypes = this.webElement.findIfAny(
			".diagram-widget__control-group-container--node-creation-buttons"
		).length;
		return nodeTypes > 0 ? true : false;
	}

	getNodeSetTypeDetails() {
		let nodeSet = null;
		let nodeIcons = [];
		const nodePlaceholder = this.webElement.findIfAny(
			".diagram-widget__control-group-container--node-creation-buttons .diagram-widget__button"
		);
		if (nodePlaceholder.any()) {
			const nodeTitles = [].concat(nodePlaceholder.getText());
			const nodesetIconLocator = nodePlaceholder.findIfAny("i i");
			if (nodesetIconLocator.any()) {
				nodeIcons = [].concat(nodesetIconLocator.getAttribute("class"));
			}

			nodeSet = _.zipWith(nodeTitles, nodeIcons, (nodeTitle, nodeIcon) => ({
				nodeTitle,
				nodeIcon,
			}));
		}

		return nodeSet;
	}

	getInactiveNodeSetTypeButtons() {
		const nodePlaceholder = this.webElement.findIfAny(
			".diagram-widget__control-group-container--node-creation-buttons .diagram-widget__button.diagram-widget__button--disabled"
		);
		if (nodePlaceholder.any()) {
			const inactiveNodeSets = [].concat(nodePlaceholder.getText());
			return inactiveNodeSets;
		}

		return [];
	}

	getNodeTypeDetails(nodeSetType) {
		let nodeSetDetails = null;
		let nodeIcons = [];
		const nodeTypes = $$$.findIfAny(`.diagram-widget__node-html-container.${nodeSetType}`);
		if (nodeTypes.any()) {
			const nodeNames = [].concat(
				nodeTypes.find(`.diagram-widget__node-identifier[data-attribute*='Name']`).getText()
			);
			const nodeTypesIconLocator = nodeTypes.findIfAny("i i");
			if (nodeTypesIconLocator.any()) {
				nodeIcons = [].concat(nodeTypesIconLocator.getAttribute("class"));
			}
			const nodeCounts = [].concat(
				nodeTypes
					.find(`.diagram-widget__node-identifier[data-attribute*='Count']`)
					.getText()
			);

			nodeSetDetails = _.zipWith(
				nodeNames,
				nodeIcons,
				nodeCounts,
				(nodeName, nodeIcon, nodeCount) => ({
					nodeName,
					nodeIcon,
					nodeCount,
				})
			);
		} else {
			nodeSetDetails = "None";
		}

		return nodeSetDetails;
	}

	getNodeDetails() {
		let nodeDetails = null;
		let nodeIcons = [];
		const nodeTypes = $$$.findIfAny(`.diagram-widget__node-html-container`);
		if (nodeTypes.any()) {
			const nodeNames = [].concat(
				nodeTypes
					.find(
						`.diagram-widget__node-identifier[data-attribute*='Name'], .diagram-widget__node-identifier[data-attribute*='elementtext']`
					)
					.getText()
			);
			const nodeTypesIconLocator = nodeTypes.findIfAny("i i");
			if (nodeTypesIconLocator.any()) {
				nodeIcons = [].concat(nodeTypesIconLocator.getAttribute("class"));
			}
			// const nodeCounts = [].concat(
			// 	nodeTypes
			// 		.find(`.diagram-widget__node-identifier[data-attribute*='Count']`)
			// 		.getText()
			// );

			nodeDetails = _.zipWith(
				nodeNames,
				nodeIcons,
				//				nodeCounts,
				// (nodeName, nodeIcon, nodeCount) => ({
				(nodeName, nodeIcon) => ({
					nodeName,
					nodeIcon,
					// nodeCount,
				})
			);
		} else {
			nodeDetails = "None";
		}

		return nodeDetails;
	}

	getNodeCoordinates(nodeName) {
		// Construct the selector based on the provided nodeName
		const selector = "g[model-id='" + nodeName + "'] rect";

		// Find the matching element using querySelector
		const rectElement = this.webElement.findIfAny(selector);

		// Check if the element exists
		if (rectElement.any()) {
			// Get the width and height attributes
			const width = rectElement.getAttribute("width");
			const height = rectElement.getAttribute("height");

			// Convert the attributes to numbers and return as a tuple
			return [parseInt(width, 10), parseInt(height, 10)];
		}

		// Return null or handle the case when the element is not found
		return null;
	}

	findNode(nodeType) {
		const node = this.webElement.findIfAny(`.joint-type-aimms-element[model-id=${nodeType}]`);

		return new Nodes(node, nodeType);
	}

	getItemActions() {
		return new ItemActions();
	}

	findArc(source, target) {
		const arc = this.webElement.find(
			`.joint-type-aimms-link:has(.connection[data-arc-source="${source}"][data-arc-target="${target}"])`
		);

		return new Arcs(arc, source, target);
	}

	drawAnArc(source, target) {
		const sourceNode = this.webElement.findIfAny(
			`.joint-type-aimms-element[model-id=${source}]`
		);

		const targetNode = this.webElement.findIfAny(
			`.joint-type-aimms-element[model-id=${target}]`
		);
		const sourceNodeXY = sourceNode.getLocation();
		const targetNodeXY = targetNode.getLocation();

		// Simulate a drag by moving the mouse
		browser.performActions([
			{
				type: "pointer",
				id: "finger1",
				parameters: { pointerType: "mouse" },
				actions: [
					{
						type: "pointerMove",
						duration: 1000,
						x: Math.round(sourceNodeXY.x) + 130,
						y: Math.round(sourceNodeXY.y) + 2,
					},
					{ type: "pointerDown", button: 0 },
					{ type: "pause", duration: 1000 }, // Adjust the duration as needed
					{
						type: "pointerMove",
						duration: 1000,
						x: Math.round(targetNodeXY.x) + 30,
						y: Math.round(targetNodeXY.y) + 30,
					}, // Adjust the coordinates for the drag
					{ type: "pointerUp", button: 0 },
				],
			},
		]);
	}

	getAllArcsInfo() {
		const allArcs = $$$(`.joint-type-aimms-link`);

		if (allArcs.any()) {
			const arcs = allArcs.findIfAny(`.joint-type-aimms-link .connection`);
			const sources = arcs.any() ? [].concat(arcs.getAttribute("data-arc-source")) : [];
			const targets = arcs.any() ? [].concat(arcs.getAttribute("data-arc-target")) : [];

			const numberOfArcs = arcs.length;
			const info = [];
			for (let i = 0; i < numberOfArcs; i++) {
				info.push({ source: sources[i], target: targets[i] });
			}
			return info;
		}
		return null;
	}

	addNode(nodeSetType, nodeDropXPosition, nodeDropYPosition, noOfNodes = 1) {
		const sourceNode = this.webElement.find(
			`.diagram-widget__control-group-container--node-creation-buttons .${nodeSetType}`
		);
		const sourceNodeXY = sourceNode.getLocation();

		do {
			// Simulate a drag and drop by moving the mouse
			browser.performActions([
				{
					type: "pointer",
					id: "finger1",
					parameters: { pointerType: "mouse" },
					actions: [
						{
							type: "pointerMove",
							duration: 1000,
							x: Math.round(sourceNodeXY.x) + 15,
							y: Math.round(sourceNodeXY.y) + 15,
						},
						{ type: "pointerDown", button: 0 },
						{ type: "pause", duration: 1000 }, // Adjust the duration as needed
						{
							type: "pointerMove",
							duration: 1000,
							x: nodeDropXPosition,
							y: nodeDropYPosition,
						}, // Adjust the coordinates for the drag
						{ type: "pointerUp", button: 0 },
					],
				},
			]);
			noOfNodes--;
		} while (noOfNodes > 0);
	}

	diagramZoomIn(zoomLevel) {
		do {
			this.webElement.find(".diagram-widget__zoom-button--zoom-in").click();
			browser.pause(1000);
			zoomLevel--;
		} while (zoomLevel > 0);
	}

	diagramZoomOut(zoomLevel) {
		do {
			this.webElement.find(".diagram-widget__zoom-button--zoom-out").click();
			zoomLevel--;
		} while (zoomLevel > 0);
	}

	panDiagram(panReleaseXPosition, panReleaseYPosition) {
		// Simulate a drag and drop by moving the mouse for panning the diagram whiteboard area
		browser.performActions([
			{
				type: "pointer",
				id: "finger1",
				parameters: { pointerType: "mouse" },
				actions: [
					{
						type: "pointerMove",
						duration: 1000,
						x: 100,
						y: 130,
					},
					{ type: "pointerDown", button: 0 },
					{ type: "pause", duration: 1000 }, // Adjust the duration as needed
					{
						type: "pointerMove",
						duration: 1000,
						x: panReleaseXPosition,
						y: panReleaseYPosition,
					}, // Adjust the coordinates for the drag
					{ type: "pointerUp", button: 0 },
				],
			},
		]);
	}
}

module.exports = {
	DiagramWidget,
	Nodes,
	onRegisterWidgetTypes(registry) {
		registry["diagram"] = DiagramWidget;
	},
};
