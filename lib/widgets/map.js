const { flatten, _ } = require("lodash");
const { FrameworkObject } = require("../framework-object");
const $$$ = require("../selenium/3xdollar");
const url = require("url");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const mixin = require("../mixin");
const { Widget } = require("./widget");
const {
	WithMapV3NodeSetsOptionEditor,
} = require("../option-editors/map-v3-node-sets-option-editor");
const { ItemActions } = require("../application/item-actions");
const {
	WithMapV3ArcSetsOptionEditor,
} = require("../option-editors/map-v3-arcs-sets-option-editor");

const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const {
	WithMapV3HeatMapSetOptionEditor,
} = require("../option-editors/map-v3-heat-map-set-option-editor");
const { WithWidgetNamedView } = require("../application/widget-named-view");

const MapLeafletLocatorsMap = {
	"all-nodes-locator": "path.node",
	"specific-node-locator": `path.node.annotation-##nodeName##`,
	"specific-node-based-on-name-locator": `.leaflet-pane.leaflet-nodes-##nodeSetsIndexNumber##-pane path.node.annotation-##nodeName##`,
	"arc-locator": "polyline[stroke-opacity='0.9'] desc",
	"all-arcs-locator": "path.arc",
	"zoom-locator": ".leaflet-control-zoom-",
	"nodes-z-index-locator": `.leaflet-pane.leaflet-nodes-##nodeSetsIndexNumber##-pane`,
	"node-radius-locator": "data-radius",
	"arc-set-locator": ".leaflet-arcs-##arcSetsIndexNumber##-pane",
};

const MapOpenStreetLocatorsMap = {
	"all-nodes-locator": "circle[title]",
	"specific-node-locator": `circle[title="##nodeName##"]`,
	"arc-locator": "polyline[stroke-opacity='0.9'] desc",
	"all-arcs-locator": "polyline[title]",
	"zoom-locator": ".olControlZoom",
	"yellow-colored-nodes-locator": "circle[title].annotation-capacity_bounded",
	"node-radius-locator": "r",
	"arc-set-locator": "MapOpenStreetLocatorsMap",
};

const MapV1LocatorsMap = {
	"all-nodes-locator": "circle[title]",
	"specific-node-locator": `circle[title="##nodeName##"]`,
	"arc-locator": "polyline[title][stroke-opacity=1]",
	"all-arcs-locator": "polyline[title]",
	"zoom-locator": ".olControlZoom",
	"yellow-colored-nodes-locator": "circle[title].annotation-capacity_bounded",
	"node-radius-locator": "r",
};

class ArcLabel extends mixin(ItemActions) {
	getArcLabelContent() {
		return this.webElement.getText();
	}

	hover(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo({ xOffset, yOffset });
		browser.pause(5000);
		return this;
	}

	click(xOffset = 0, yOffset = 0) {
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		return this;
	}

	_hasClass(className) {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}

	isHovered() {
		return this._hasClass("hovered-arc");
	}
}

class HeatMapLegend extends FrameworkObject {
	getMinDataValue() {
		return this.webElement.find(" .heatmap-min").getText();
	}

	getMaxDataValue() {
		return this.webElement.find(" .heatmap-max").getText();
	}
}
class Arc extends mixin(ItemActions) {
	constructor(webElement, arcId) {
		super(webElement);
		this.arcId = arcId;
	}

	getArcLabel() {
		const getMarkerEndAttribute = this.webElement.getAttribute("marker-end");
		const widgetURI = getMarkerEndAttribute
			.replace(/url\(#map_/, "")
			.replace(`_${this.arcId})`, "");

		return new ArcLabel(
			$$$(`[data-widget\\.uri = "${widgetURI}"] [data-target-arc-id = ${this.arcId}]`)
		);
	}

	hover(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo(xOffset, yOffset);
		browser.pause(600);
		return this;
	}

	click(xOffset, yOffset) {
		this.webElement.click({ button: "left", x: xOffset, y: yOffset });
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	getAnnotations() {
		const getMarkerEndAttribute = this.webElement.getAttribute("marker-end");
		const arcsArrowHeadMarkerID = getMarkerEndAttribute.replace(/url\(#/, "").replace(/\)/, "");
		const widgetURI = getMarkerEndAttribute
			.replace(/url\(#map_/, "")
			.replace(`_${this.arcId})`, "");

		const { arcAnnotations } = flatten([this.webElement.getAttribute("class")]).reduce(
			(res, cur) => {
				cur.split(/\s/).forEach((cssClass) => {
					if (cssClass.startsWith("annotation-")) {
						res.arcAnnotations.push(cssClass.replace(/annotation-/, ""));
					}
				});
				return res;
			},
			{ arcAnnotations: [] }
		);

		// Check for ArcLabels. If present, then fetch its annotations else default to [].
		const arcLabelSelector = `[data-widget\\.uri = "${widgetURI}"] [data-target-arc-id = ${this.arcId}]`;

		const { arcLabelAnnotations } = $$$(`body`).exists(arcLabelSelector)
			? flatten([$$$(arcLabelSelector).getAttribute("class")]).reduce(
					(res, cur) => {
						cur.split(/\s/).forEach((cssClass) => {
							if (cssClass.startsWith("annotation-")) {
								res.arcLabelAnnotations.push(cssClass.replace(/annotation-/, ""));
							}
						});
						return res;
					},
					{ arcLabelAnnotations: [] }
			  )
			: [];

		const { arcMarkerAnnotations } = flatten([
			// eslint-disable-next-line prettier/prettier
			$$$(`#${arcsArrowHeadMarkerID} polyline`).getAttribute("class"),
		]).reduce(
			(res, cur) => {
				cur.split(/\s/).forEach((cssClass) => {
					if (cssClass.startsWith("annotation-")) {
						res.arcMarkerAnnotations.push(cssClass.replace(/annotation-/, ""));
					}
				});
				return res;
			},
			{ arcMarkerAnnotations: [] }
		);

		return _.zipWith([1], () => ({
			arcAnnotations,
			arcLabelAnnotations,
			arcMarkerAnnotations,
		}));
	}

	getArcsCSSOpacity() {
		const getMarkerEndAttribute = this.webElement.getAttribute("marker-end");
		const arcsArrowHeadMarkerID = getMarkerEndAttribute.replace(/url\(#/, "").replace(/\)/, "");
		const widgetURI = getMarkerEndAttribute
			.replace(/url\(#map_/, "")
			.replace(`_${this.arcId})`, "");

		// For Arcs we check "stroke-opacity"
		const arcsCSSStyleProperty = browser.execute(
			({ elementId, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(`#${elementId}`).css(propertyIn);
				}
				// browser context - you may not access client or console
				return propertyValue;
			},
			{
				elementId: this.webElement.getAttribute("id"),
				propertyIn: "stroke-opacity",
			}
		);

		// Check for ArcLabels. If present, then fetch its CSS Style Properties. else default to 0.
		// For Arc-Labels we check "opacity"
		const arcLabelSelector = `[data-widget\\.uri = "${widgetURI}"] [data-target-arc-id = ${this.arcId}]`;
		let arcLabelCSSStyleProperty = "0";
		if ($$$(`body`).exists(arcLabelSelector)) {
			arcLabelCSSStyleProperty = browser.execute(
				({ elementId, propertyIn }) => {
					const $ = window.jQuery;
					let propertyValue;
					if ($) {
						propertyValue = $(`#${elementId}`).css(propertyIn);
					}
					// browser context - you may not access client or console
					return propertyValue;
				},
				{
					elementId: $$$(arcLabelSelector).getAttribute("id"),
					propertyIn: "opacity",
				}
			);
		}

		// For Arc-Arrow-head-Marker we check "stroke-opacity"
		const arcMarkerCSSStyleProperty = browser.execute(
			({ elementId, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(`#${elementId}`).css(propertyIn);
				}
				// browser context - you may not access client or console
				return propertyValue;
			},
			{
				elementId: $$$(`#${arcsArrowHeadMarkerID} polyline`).getAttribute("id"),
				propertyIn: "stroke-opacity",
			}
		);

		if (
			arcsCSSStyleProperty === null ||
			arcLabelCSSStyleProperty === null ||
			arcMarkerCSSStyleProperty === null
		) {
			throw new Error(
				// eslint-disable-next-line no-undef
				"Error while trying to remotely executing 'css style property': " + property
			);
		}

		return _.zipWith([1], () => ({
			arcsCSSStyleProperty,
			arcLabelCSSStyleProperty,
			arcMarkerCSSStyleProperty,
		}));
	}

	_hasClass(className) {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}

	isHovered() {
		return this._hasClass("hovered-arc");
	}
}

class PointIcon extends FrameworkObject {
	click() {
		this.webElement.find(" .node-icon").moveTo();
		this.webElement.find(" .node-icon").click({ x: 0, y: 0 });
		return this;
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	hasClass(className) {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}

	hover() {
		this.webElement.moveTo();
		return this;
	}

	isIconClassApplied() {
		const iconLoc = this.webElement.findIfAny(`.node-icon`);
		if (iconLoc !== undefined && iconLoc.length > 0) {
			return true;
		}
		return false;
	}
}

class Point extends mixin(ItemActions) {
	constructor(webElement, mapSelectors) {
		super(webElement);
		this.mapSelectors = mapSelectors;
	}

	click() {
		this.webElement.moveTo();
		this.webElement.click({ x: 0, y: 0 });
		return this;
	}

	getRadius() {
		return this.webElement.getAttribute(this.mapSelectors["node-radius-locator"]);
	}

	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	hasClass(className) {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf(className) !== -1
		);
	}

	getAnnotations() {
		return [].concat(this.webElement.getAttribute("class"));
	}

	hover() {
		this.webElement.moveTo();
		return this;
	}
}

class ArcSet extends FrameworkObject {
	constructor(webElement, mapSelectors) {
		super(webElement);
		this.mapSelectors = mapSelectors;
	}

	getArcsCount() {
		const arcs = this.webElement.findIfAny(this.mapSelectors["all-arcs-locator"]);
		return arcs.any() ? arcs.length : 0;
	}

	isDynamicWidthOptionApplied() {
		const dynamicWidth = this.webElement
			.find("path.leaflet-interactive")
			.getAttribute("stroke-width");

		return dynamicWidth[0] === "1.7" ? false : true;
	}
	getCSSStyleProperty(property) {
		return this.webElement.getCSSStyleProperty(property);
	}

	isStraightLineOptionApplied() {
		const straightLineElement = this.webElement
			.find("path.leaflet-interactive")
			.getAttribute("d")[0]
			.indexOf("L");

		return straightLineElement !== -1 ? true : false;
	}

	getArc(from, to) {
		const arcRoute = from.replace(/ /, "_") + "-" + to.replace(/ /, "_");
		const arcLoc = this.webElement.find(`[data-arc-route = ${arcRoute}]`);
		const arcId = arcLoc.getAttribute("data-arc-id");
		return new Arc(arcLoc, arcId);
	}
}

class NodeSet extends FrameworkObject {
	constructor(webElement, mapSelectors) {
		super(webElement);
		this.mapSelectors = mapSelectors;
	}

	getNodesCount() {
		const nodes = this.webElement.findIfAny(this.mapSelectors["all-nodes-locator"]);
		return nodes.any() ? nodes.length : 0;
	}

	getPoint(nodeName) {
		const withOutSpaceNodeName = nodeName.replace(/ /g, "-").replace(/,/g, "\\,");
		const pointElement = this.webElement.findIfAny(
			this.mapSelectors["specific-node-locator"].replace(/##nodeName##/, withOutSpaceNodeName)
		);

		return pointElement.any() ? new Point(pointElement, this.mapSelectors) : "None";
	}
}

class Map extends mixin(
	Widget,
	WithIdentifierSettingsOptionEditor,
	WithGenericContentsOptionEditor,
	WithMapV3NodeSetsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu,
	WithWidgetExtensionsOptionEditor,
	WithMapV3ArcSetsOptionEditor,
	WithMapV3HeatMapSetOptionEditor,
	WithWidgetNamedView
) {
	constructor(webElement, widgetUri, widgetType) {
		super(webElement, widgetUri, widgetType);

		if (this.webElement) {
			this.setSelectors();
		}
	}

	setSelectors() {
		const mapVersion = this.webElement.getAttribute("data-version");
		const widgetUri = this.webElement.getAttribute("data-aimms.widget.type")
			? this.webElement
					.getAttribute("data-aimms.widget.type")
					.replace(/[^:]*:["']([^"']*)["'].*/, "$1")
			: "";

		if (mapVersion === "3" && widgetUri === "map-v2") {
			this.mapSelectors = MapLeafletLocatorsMap;
		} else if (widgetUri === "map") {
			this.mapSelectors = MapV1LocatorsMap;
		} else {
			this.mapSelectors = MapOpenStreetLocatorsMap;
		}
	}

	getPoints(nodeSetIndexNumber = -1) {
		let nodesSelector = this.mapSelectors["all-nodes-locator"];
		if (nodeSetIndexNumber !== -1) {
			nodesSelector =
				this.mapSelectors["nodes-z-index-locator"].replace(
					/##nodeSetsIndexNumber##/,
					nodeSetIndexNumber
				) +
				" " +
				nodesSelector;
		}
		const pointElements = this.webElement.find(nodesSelector);
		const labels = [].concat(pointElements.getAttribute("title"));
		const sizes = [].concat(pointElements.getAttribute("data-radius"));
		const annotations = [].concat([].concat(pointElements.getAttribute("class")));

		const points = _.zipWith(
			labels,
			sizes,
			annotations,
			pointElements.webElements,
			(label, size, annotation, webElement) => ({
				label,
				size,
				annotation,
				webElement: this.webElement.find(webElement.selector),
			})
		);

		return points;
	}

	getPoint(nodeName) {
		const withOutSpaceNodeName = nodeName.replace(/ /g, "-").replace(/,/g, "\\,");
		const pointElement = this.webElement.findIfAny(
			this.mapSelectors["specific-node-locator"].replace(/##nodeName##/, withOutSpaceNodeName)
		);
		return pointElement.any() ? new Point(pointElement, this.mapSelectors) : "None";
	}

	getIconPointSet(nodeSet) {
		const pointSet = this.webElement.find(`.leaflet-nodes-${nodeSet}-pane`);
		return new PointIcon(pointSet, this.mapSelectors);
	}

	getIcon(nodeName) {
		const nodeId = this.webElement
			.find(this.mapSelectors["specific-node-locator"].replace(/##nodeName##/, nodeName))
			.getAttribute("data-node-id");

		return new PointIcon(this.webElement.find(`[data-target-node-id = ${nodeId}]`));
	}

	getCSSStyleProperty(nodeName, property) {
		const value = browser.execute(
			({ elementId, propertyIn }) => {
				const $ = window.jQuery;
				let propertyValue;
				if ($) {
					propertyValue = $(`#${elementId}`).css(propertyIn);
				}
				return propertyValue;
			},
			{
				elementId: this.webElement
					.find(
						this.mapSelectors["specific-node-locator"].replace(/##nodeName##/, nodeName)
					)
					.getAttribute("id"),
				propertyIn: property,
			}
		);

		if (value === null) {
			throw new Error(
				"Error while trying to remotely executing 'css style property': " + property
			);
		}
		return value;
	}

	getNodesCount(nodeSetIndexNumber = -1) {
		let nodesSelector = this.mapSelectors["all-nodes-locator"];

		if (nodeSetIndexNumber !== -1) {
			nodesSelector =
				this.mapSelectors["nodes-z-index-locator"].replace(
					/##nodeSetsIndexNumber##/,
					nodeSetIndexNumber
				) +
				" " +
				nodesSelector;
		}
		const nodes = this.webElement.findIfAny(nodesSelector);
		return nodes.any() ? nodes.length : 0;
	}

	getNodeSet(nodeSetIndexNumber) {
		const nodeSetElement = this.webElement.find(
			this.mapSelectors["nodes-z-index-locator"].replace(
				/##nodeSetsIndexNumber##/,
				nodeSetIndexNumber
			)
		);
		return new NodeSet(nodeSetElement, this.mapSelectors);
	}

	getNoOfYellowColoredNodes() {
		const nodes = this.webElement.findIfAny(this.mapSelectors["yellow-colored-nodes-locator"]);
		return nodes.any() ? nodes.length : 0;
	}

	_getArcElement() {
		return this.webElement.find(this.mapSelectors["arc-locator"]);
	}

	getArcs(arcSetIndexNumber = -1) {
		let arcsSelector = this.mapSelectors["all-arcs-locator"];
		if (arcSetIndexNumber !== -1) {
			arcsSelector =
				this.mapSelectors["arc-set-locator"].replace(
					/##arcSetsIndexNumber##/,
					arcSetIndexNumber
				) +
				" " +
				arcsSelector;
		}
		const arcElements = this.webElement.find(arcsSelector);

		//MapV2 specific
		//MapV2 has identifier names as text
		const identifierNames = [].concat(arcElements.getText());
		//MapV2 labels
		const textElements = this.webElement.find("text");
		const labels = [].concat(textElements.getText());

		return _.zipWith(identifierNames, labels, (identifierName, label) => ({
			identifierName,
			label,
		}));
	}

	getArcsCount(arcSetIndexNumber = -1) {
		let arcsSelector = this.mapSelectors["all-arcs-locator"];
		if (arcSetIndexNumber !== -1) {
			arcsSelector =
				this.mapSelectors["arc-set-locator"].replace(
					/##arcSetsIndexNumber##/,
					arcSetIndexNumber
				) +
				" " +
				arcsSelector;
		}
		const arcs = this.webElement.findIfAny(arcsSelector);
		return arcs.any() ? arcs.length : 0;
	}

	getArcSet(arcSetIndexNumber) {
		const arcSetElement = this.webElement.findIfAny(
			this.mapSelectors["arc-set-locator"].replace(
				/##arcSetsIndexNumber##/,
				arcSetIndexNumber
			)
		);
		return arcSetElement.any() ? new ArcSet(arcSetElement, this.mapSelectors) : null;
	}

	hover(xOffset = 0, yOffset = 0) {
		this.webElement.moveTo(xOffset, yOffset);
		browser.pause(6000);
		return this;
	}

	// (xPos, yPos): position relative to the whole viewport (so, not that of the map itself!)
	// zoomAmount: the higher, the 'deeper'
	// zoomIn: true to zoom in, false to zoom out.
	mouseWheelZoom(xPos, yPos, zoomAmount, zoomIn = true) {
		browser.performActions([
			{
				type: "wheel",
				id: "mouseWheel",
				actions: [
					{
						type: "scroll",
						x: xPos,
						y: yPos,
						deltaX: 0,
						deltaY: zoomIn ? -zoomAmount : zoomAmount,
						duration: 500,
					},
				],
			},
		]);
	}

	_zoom(zoomControl) {
		let zoomInButtonElement = this.webElement.find(
			this.mapSelectors["zoom-locator"] + zoomControl
		);
		zoomInButtonElement = _.extend({}, zoomInButtonElement, {
			click() {
				this.webElement.click();
			},
			clickWithShift() {
				// Press down the SHIFT key
				browser.performActions([
					{
						type: "key",
						id: "keyboard",
						actions: [{ type: "keyDown", value: SPECIAL_KEYS.shift }],
					},
				]);

				// Do the click, while SHIFT is still pressed
				browser.pause(500);
				this.webElement.click({ button: "left" });
			},
		});
		return zoomInButtonElement;
	}

	zoomIn() {
		return this._zoom("in");
	}

	zoomOut() {
		return this._zoom("out");
	}

	getFooterText() {
		return this.webElement.find(`.leaflet-control-attribution`).getText();
	}

	getTileImageUrl() {
		const tileImageURL = new url.URL(
			this.webElement.find("#map_Regions .olTileImage").getAttribute("src")
		);
		return tileImageURL.pathname;
	}

	getNodeSetZIndex(nodeSetsIndexNumber) {
		const leafletNodeSetClassName = this.mapSelectors["nodes-z-index-locator"].replace(
			/##nodeSetsIndexNumber##/,
			nodeSetsIndexNumber
		);
		const leafletNodeSetElement = this.webElement.findIfAny(leafletNodeSetClassName);
		let nodeSetZIndex = "";

		if (leafletNodeSetElement.any()) {
			nodeSetZIndex = leafletNodeSetElement.getAttribute("style").replace(/z-index: /, "");
		} else {
			throw new Error(`Could not locate 'nodes-${nodeSetsIndexNumber}' node set.`);
		}

		return nodeSetZIndex;
	}

	isHideLabelOptionApplied(arcSet) {
		return !this.webElement
			.findIfAny(`.leaflet-arcs-${arcSet}-pane .leaflet-marker-icon`)
			.any();
	}

	getTooltip() {
		const tooltipElement = this.webElement.findIfAny(".leaflet-tooltip-pane .leaflet-tooltip");
		let tooltip = tooltipElement.any() ? tooltipElement : "None";

		if (tooltipElement.any()) {
			tooltip = _.extend({}, tooltipElement, {
				getText() {
					return this.webElement.getText();
				},
				isLeftAligned() {
					return (
						this.webElement
							.getAttribute("class")
							.split(" ")
							.indexOf("leaflet-tooltip-left") !== -1
					);
				},
				isRightAligned() {
					return (
						this.webElement
							.getAttribute("class")
							.split(" ")
							.indexOf("leaflet-tooltip-right") !== -1
					);
				},
			});
		}
		return tooltip;
	}

	isHeatMapDisplayed() {
		return this.webElement.findIfAny(".heatmap-canvas").any();
	}

	getHeapMapLegend() {
		const legendElement = this.webElement.find(".legend-area");
		return new HeatMapLegend(legendElement);
	}

	getMapV1EmptyWidgetMessage() {
		return this.webElement.findIfAny(".empty-widget-message").getText();
	}
}

module.exports = {
	Map,
	Point,
	Arc,
	PointIcon,
	ArcLabel,
	ArcSet,
	HeatMapLegend,
	onRegisterWidgetTypes(registry) {
		registry["map"] = Map;
		registry["map-v3"] = Map;
		registry["map-v2"] = Map;
	},
};
