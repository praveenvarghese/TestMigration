const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const _ = require("lodash");
const $$$ = require("../selenium/3xdollar");
const { Widget } = require("./widget");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");
const mixin = require("../mixin");
const { WithPartitionOptionEditor } = require("../option-editors/partition-option-editor");
const { Cell } = require("../misc/cell");
const {
	WithGenericContentsOptionEditor,
} = require("../option-editors/generic-contents-option-editor");
const { WithIdentifierSettingsOptionEditor } = require("../option-editors/identifier-settings/");
const {
	WithWidgetExtensionsOptionEditor,
} = require("../option-editors/widget-extensions-option-editor");
const { WithWidgetActions } = require("../application/widget-actions");
const { WithWidgetMenu } = require("../application/widget-menu");
const { WithWidgetNamedView } = require("../application/widget-named-view");
const { ItemActions } = require("../application/item-actions");
const { WithTableContentsOptionEditor } = require("../option-editors/table-contents-option-editor");
const { WithIndexSettingsOptionEditor } = require("../option-editors/index-settings-option-editor");

jQuery.fn.any = function() {
	return this.length > 0;
};

class HeaderCell extends FrameworkObject {
	getStyle() {
		const style = super.getStyle();
		const innerCellWrapperComputedStyle = this.webElement
			.find(".cell-wrapper")
			.getComputedStyle();

		style["text-align"] = innerCellWrapperComputedStyle["textAlign"];

		return style;
	}
	getText() {
		return this.webElement.find("label").getText();
	}

	getHeaderText() {
		return this.webElement.find("label span").getText();
	}

	getParentTooltip() {
		return this.webElement.getAttribute("data-old-title");
	}

	getChildTooltip() {
		return this.webElement.find("div.title").getText();
	}

	getTitleHeaderTooltip() {
		return this.webElement.find("title").getText();
	}

	hasFlags(flags) {
		const self = this;
		return flags.every((flagName) => self.webElement.hasClass("flag-" + flagName));
	}

	hasAnnotations(annotations) {
		const self = this;
		return annotations.every((annotationName) =>
			self.webElement.hasClass("annotation-" + annotationName)
		);
	}

	mouseHover() {
		this.webElement.find("div").moveTo();
	}

	click() {
		this.webElement.find("div").click();
	}

	rightClick(xOffset = 5, yOffset = 5) {
		const itemActionContainerLoc = $$$("body").exists(
			".react-contextmenu .react-contextmenu-item-container"
		);
		if (itemActionContainerLoc) {
			browser.pause(500);
			browser.keys([SPECIAL_KEYS.escape]);
			$$$(".app-name").click();
			browser.pause(500);
		}
		this.webElement.click({ button: "right", x: xOffset, y: yOffset });
		return new ItemActions();
	}

	hasMenuIndicator() {
		const indicator = this.webElement.findIfAny(`.default-tooltip-preventer-replacement-title`);
		return indicator.any();
	}
}

class SearchContainer extends FrameworkObject {
	_searchIcon() {
		return this.webElement.find(".aimms-search.search-icon");
	}
	search(serachValue) {
		this.webElement.find(".search-group input").keys(serachValue);
		return this._searchIcon().click();
	}
	clearSearch() {
		return this.webElement.find(".search-clear-icon:isVisible").click();
	}

	closeSearch() {
		return this.webElement.find(".search-cancel:isVisible").click();
	}

	serachUp() {
		return this.webElement.find(".search-up:isVisible").click();
	}

	serachDown() {
		return this.webElement.find(".search-down:isVisible").click();
	}

	caseSensitiveSearch(serachValue) {
		this.webElement.find(".search-case:isVisible").click();
		return this.search(serachValue);
	}

	getMatchingCount() {
		return this.webElement.find(".search-matching-count:isVisible").getText();
	}
}

class HeaderMenu extends FrameworkObject {
	open() {
		const self = this;
		this.webElement.find("div").doubleClick();
		return self;
	}

	setSorting(option) {
		const self = this;
		$$$(`.popup-menu-container .header-menu .sorting-pane .${option}`).click();
		return self;
	}

	openFilterDialog() {
		const self = this;
		$$$(`.popup-menu-container .header-menu .sorting-pane .filter-items`).click();
		return self;
	}
}

// Note: Columns are virtual constructs that have no counterpart in the DOM, and so are not a FrameworkObject
class Column {
	constructor(table, colId) {
		this.table = table;
		this.colId = colId;
		this.cssSelector = `.colheader-viewport .cell.row0.col${this.colId}`;
	}

	resizeBy(amountInPx) {
		this.table.webElement.find(this.cssSelector).dnd({
			dragOffset: {
				anchor: "center-right",
			},
			dragTo: { "delta-x": amountInPx, "delta-y": 0 },
		});

		return this;
	}

	getSize() {
		return this.table.webElement.find(this.cssSelector).getBoundingClientRect().width;
	}
}

// The getViewPortRegion function only gives info about the "visible" elements of the table. Doesn't take under accound the
// rendered elements.
const getViewPortRegion = (webElement, type) => {
	try {
		return JSON.parse(
			webElement
				.findIfAny(`.table-wrap:not(.double-buffer) .${type}-viewport`)
				.getAttribute("data-viewport-region")
		);
	} catch (e) {
		log.debug(e);
		return {
			numRows: -1,
			numCols: -1,
		};
	}
};

class Table extends mixin(
	Widget,
	WithPartitionOptionEditor,
	WithIdentifierSettingsOptionEditor,
	WithGenericContentsOptionEditor,
	WithWidgetExtensionsOptionEditor,
	WithWidgetActions,
	WithWidgetMenu,
	WithWidgetNamedView,
	WithTableContentsOptionEditor,
	WithIndexSettingsOptionEditor
) {
	/**
	 * For all dragging/movement/sizing operations: the sizings/distances are the (unscaled) values that were deemed to be correct at
	 * the time of creating the test (pre-pageV2 and new pageV1 'open-sidebar-animations")
	 * However, it may need to be corrected due to the fact that, with the sidebar extended, it is scaled down to a certain size.
	 * Correct for that, by determining scaling beforehand
	 */
	scaled(unscaledDimension) {
		return Math.round(this.webElement.getElementScale() * unscaledDimension);
	}

	/**
	 * For all dragging/movement/sizing operations: the sizings/distances are the (unscaled) values that were deemed to be correct at
	 * the time of creating the test (pre-pageV2 and new pageV1 'open-sidebar-animations")
	 * However, it may need to be corrected due to the fact that, with the sidebar extended, it is scaled down to a certain size.
	 * Correct for that, by determining scaling beforehand
	 */
	unscaled(scaledDimension) {
		return Math.round(scaledDimension / this.webElement.getElementScale());
	}
	getNumRowsInGridViewport() {
		return Math.min(
			this.webElement.findIfAny(".table-wrap:not(.double-buffer) .grid-viewport tr").length,
			getViewPortRegion(this.webElement, "grid").numRows
		);
	}
	getNumColsInGridViewport() {
		return Math.min(
			this.webElement.findIfAny(".table-wrap:not(.double-buffer) .grid-viewport tr:first td")
				.length,
			getViewPortRegion(this.webElement, "grid").numCols
		);
	}
	getCell(row, col) {
		const cellWebElement = this.webElement.find(
			`:not(.double-buffered-div) .grid-viewport .row${row}.col${col}`
		);
		return new Cell(cellWebElement);
	}
	getCol(col) {
		return new Column(this, col);
	}

	doubleClickCell(row, col) {
		const cellWebElement = this.webElement.find(
			`:not(.double-buffered-div) .grid-viewport .row${row}.col${col}`
		);
		return new Cell(cellWebElement).doubleClick();
	}

	getNumRowsInColHeaderViewport() {
		const colheaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .colheader-viewport"
		);

		return colheaderViewport.isDisplayed()
			? Math.min(
					colheaderViewport.findIfAny(
						".tile-container .tile.startRow0.startCol0 tbody>tr"
					).length,
					getViewPortRegion(this.webElement, "colheader").numRows
			  )
			: 0;
	}
	getNumColsInColHeaderViewport() {
		const colheaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .colheader-viewport"
		);

		return colheaderViewport.isDisplayed()
			? Math.min(
					colheaderViewport.findIfAny("tr:first td").length,
					getViewPortRegion(this.webElement, "colheader").numCols
			  )
			: 0;
	}
	getColHeaderCell(row, col) {
		const cellWebElement = this.webElement.find(
			`:not(.double-buffered-div) .colheader-viewport .row${row}.col${col}`
		);
		return new HeaderCell(cellWebElement);
	}

	getColHeaderCells(row, colFrom, colTo) {
		const cells = [];
		for (let col = colFrom; col <= colTo; col++) {
			cells.push(this.getColHeaderCell(row, col).getText());
		}

		return cells;
	}

	getRowHeaderCells(col, rowFrom, rowTo) {
		const cells = [];
		for (let row = rowFrom; row <= rowTo; row++) {
			cells.push(this.getRowHeaderCell(row, col).getText());
		}

		return cells;
	}

	_getHeaderTitles(type) {
		const headerTitleElements = this.webElement.findIfAny(
			`.table-wrap:not(.double-buffer) .titleheader-viewport .header-titles .${type}header-title div`
		);

		return headerTitleElements.length ? headerTitleElements.getText() : [];
	}

	getColHeaderTitles() {
		return this._getHeaderTitles("col");
	}

	getRowHeaderTitles() {
		return this._getHeaderTitles("row");
	}

	getNumRowsInRowHeaderViewport() {
		const rowheaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .rowheader-viewport"
		);

		return rowheaderViewport.isDisplayed()
			? Math.min(
					rowheaderViewport.findIfAny("tr").length,
					getViewPortRegion(this.webElement, "rowheader").numRows
			  )
			: 0;
	}
	getNumColsInRowHeaderViewport() {
		const rowheaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .rowheader-viewport"
		);

		return rowheaderViewport.isDisplayed()
			? Math.min(
					rowheaderViewport.findIfAny("tr:first td").length,
					getViewPortRegion(this.webElement, "rowheader").numCols
			  )
			: 0;
	}
	getApproximateRowHeaderViewportWidth() {
		return this.unscaled(
			_.get(this.webElement.find(".rowheader-viewport").getBoundingClientRect(), "width")
		);
	}
	hasNavigationControls() {
		const hasControls =
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf("focused") !== -1;
		return hasControls;
	}
	getRowHeaderCell(row, col) {
		const cellWebElement = this.webElement.find(
			`:not(.double-buffered-div) .rowheader-viewport .row${row}.col${col}`
		);
		return new HeaderCell(cellWebElement);
	}

	// Returns the width of the col-th column of the row header.
	getRowHeaderWidth(col) {
		return this.unscaled(
			_.get(
				this.webElement.find(`.rowheader-viewport .row0.col${col}`).getBoundingClientRect(),
				"width"
			)
		);
	}

	getRefreshButton() {
		const refreshButton = this.webElement.findIfAny(".refresh-view-button--table-edited");
		return refreshButton.any() ? refreshButton : "None";
	}

	getFocusedCellPosition() {
		const classes = this.webElement
			.find(".grid-viewport .cell.focus-cell")
			.getAttribute("class")
			.split(" ");
		const row = Number(classes.find((c) => /^row\d+$/.test(c)).replace("row", ""));
		const col = Number(classes.find((c) => /^col\d+$/.test(c)).replace("col", ""));
		return [row, col];
	}

	getTitleHeaderValues() {
		browser.pause(5000);
		const titleHeaderViewport = jQuery(
			this.webElement.find(".table-wrap:not(.double-buffer) .titleheader-viewport").getHTML()
		);
		const numRows = titleHeaderViewport.find(".cell.col0").length;
		const numCols = titleHeaderViewport.find(".cell.row0").length;
		const titleHeaderValues = [];
		for (let row = 0; row < numRows; row++) {
			titleHeaderValues.push([]);
			for (let col = 0; col < numCols; col++) {
				const value = titleHeaderViewport
					.find(`.cell.row${row}.col${col} div label`)
					.text();
				titleHeaderValues[row].push(value !== undefined ? value : "");
			}
		}
		return titleHeaderValues;
	}

	getColumnsHeaderValues() {
		const colHeaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .colheader-viewport"
		);
		const colheaderViewport_jQuery = jQuery(colHeaderViewport.getHTML());

		if (!colheaderViewport_jQuery.any() || !colHeaderViewport.isDisplayed()) {
			return [];
		}

		const numRows = colheaderViewport_jQuery.find(".cell.col0").length;
		const numCols = colheaderViewport_jQuery.find(".cell.row0").length;
		const colHeaderValues = [];
		for (let row = 0; row < numRows; row++) {
			colHeaderValues.push([]);
			for (let col = 0; col < numCols; col++) {
				const value = colheaderViewport_jQuery
					.find(`.cell.row${row}.col${col}`)
					.attr("data-old-title");
				colHeaderValues[row].push(value !== undefined ? value : "");
			}
		}
		return colHeaderValues;
	}

	getRowsHeaderValues() {
		const rowheaderViewport = this.webElement.findIfAny(
			".table-wrap:not(.double-buffer) .rowheader-viewport"
		);
		const rowheaderViewport_jQuery = jQuery(rowheaderViewport.getHTML());

		if (!rowheaderViewport_jQuery.any() || !rowheaderViewport.isDisplayed()) {
			return [];
		}

		const numRows = rowheaderViewport_jQuery.find(".cell.col0").length;
		const numCols = rowheaderViewport_jQuery.find(".cell.row0").length;
		const rowHeaderValues = [];
		for (let row = 0; row < numRows; row++) {
			rowHeaderValues.push([]);
			for (let col = 0; col < numCols; col++) {
				rowHeaderValues[row].push(
					rowheaderViewport_jQuery
						.find(`.cell.row${row}.col${col}`)
						.attr("data-old-title")
				);
			}
		}
		return rowHeaderValues;
	}

	getGridValues() {
		const gridViewport = jQuery(
			this.webElement.find(".table-wrap:not(.double-buffer) .grid-viewport").getHTML()
		);
		// We dont use the getNumColsInGridViewport, getNumRowsInGridViewport because it is slower
		const numRows = gridViewport.find(".cell.col0").length;
		const numCols = gridViewport.find(".cell.row0").length;
		const gridValues = [];
		for (let row = 0; row < numRows; row++) {
			gridValues.push([]);
			for (let col = 0; col < numCols; col++) {
				let value = gridViewport.find(`.cell.row${row}.col${col} input`).attr("value");
				if (value == null) {
					value = gridViewport.find(`.cell.row${row}.col${col}`).attr("data-old-title");
				}
				gridValues[row].push(value);
			}
		}
		return gridValues;
	}

	getRowValues(rowId) {
		const gridViewport = jQuery(
			this.webElement.find(".table-wrap:not(.double-buffer) .grid-viewport").getHTML()
		);
		// We dont use the getNumColsInGridViewport, getNumRowsInGridViewport because it is slower
		const numCols = gridViewport.find(`.cell.row${rowId}`).length;
		const rowValues = [];
		rowValues.push([]);
		for (let col = 0; col < numCols; col++) {
			rowValues[0].push(
				gridViewport.find(`.cell.row${rowId}.col${col}`).attr("data-old-title")
			);
		}
		return rowValues;
	}

	// Get all values in a selection created by calling addSelection below
	getSelectionValues(startRow, startCol, endRow, endCol) {
		const gridViewport = jQuery(
			this.webElement.find(".table-wrap:not(.double-buffer) .grid-viewport").getHTML()
		);
		const selectionValues = [];
		const numRows = endRow - startRow + 1;
		const numCols = endCol - startCol + 1;
		for (let row = 0; row < numRows; row++) {
			selectionValues.push([]);
			for (let col = 0; col < numCols; col++) {
				const cellValue = gridViewport
					.find(`.cell.row${row + startRow}.col${col + startCol} input`)
					.attr("value");
				if (cellValue == null) {
					selectionValues[row].push(
						gridViewport
							.find(`.cell.row${row + startRow}.col${col + startCol}`)
							.attr("data-old-title")
					);
				} else {
					selectionValues[row].push(cellValue);
				}
			}
		}
		return selectionValues;
	}

	isEmpty() {
		return this.webElement.findIfAny(".empty-widget-message").length > 0;
	}

	sortColumn(col, option) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .colheader-viewport tr:last-child .col${col}.cell`
		);
		new HeaderMenu(colHeaderMenuContainer).open().setSorting(option);
	}

	sortColumnHeader(row, col, option) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .titleheader-viewport .row${row}.col${col}.colheader-title`
		);
		new HeaderMenu(colHeaderMenuContainer).open().setSorting(option);
	}

	sortRow(row, option) {
		const rowHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .rowheader-viewport tr .row${row}.cell:last-child`
		);
		new HeaderMenu(rowHeaderMenuContainer).open().setSorting(option);
	}

	sortRowHeader(row, col, option) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .titleheader-viewport .row${row}.col${col}.rowheader-title`
		);
		new HeaderMenu(colHeaderMenuContainer).open().setSorting(option);
	}

	getRowFilter(row) {
		const rowHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .rowheader-viewport tr .row${row}.cell:last-child`
		);
		new HeaderMenu(rowHeaderMenuContainer).open().openFilterDialog();
	}

	getRowHeaderFilter(row, col) {
		const headerTitle = this.webElement.findIfAny(
			`.table-wrap:not(.double-buffer) .titleheader-viewport .header-titles .cell.row${row}.col${col}.rowheader-title`
		);
		new HeaderMenu(headerTitle).open().openFilterDialog();
	}

	getColFilter(col) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .colheader-viewport tr:last-child .col${col}.cell`
		);
		new HeaderMenu(colHeaderMenuContainer).open().openFilterDialog();
	}

	getColHeaderFilter(row, col) {
		const headerTitle = this.webElement.findIfAny(
			`.table-wrap:not(.double-buffer) .titleheader-viewport .header-titles .cell.row${row}.col${col}.colheader-title`
		);
		new HeaderMenu(headerTitle).open().openFilterDialog();
	}

	_getTitleHeaderCell(row, col) {
		const titleHeaderCellContainer = this.webElement.findIfAny(
			`.table-wrap:not(.double-buffer) .titleheader-viewport tr td.cell.row${row}.col${col}`
		);

		if (!titleHeaderCellContainer.any()) {
			throw new Error("Could not locate title header (row${row},col${col}) cell.");
		}

		return titleHeaderCellContainer;
	}

	getDataHeaderCell(row, col) {
		return new HeaderCell(this._getTitleHeaderCell(row, col));
	}

	getDataHeaderFilter(row, col) {
		new HeaderMenu(this._getTitleHeaderCell(row, col)).open().openFilterDialog();
	}

	closePane() {
		$$$(`.popup-menu-container .header-menu .sorting-pane`).click();
	}

	isRowSortOptionDisplayed(row) {
		const rowHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .rowheader-viewport tr .row${row}.cell:last-child`
		);
		new HeaderMenu(rowHeaderMenuContainer).open();
		const sortOpt = $$$(`.sorting-pane`).exists(".sort-items");
		return sortOpt;
	}

	isColSortOptionDisplayed(col) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .colheader-viewport tr:last-child .col${col}.cell`
		);
		new HeaderMenu(colHeaderMenuContainer).open();
		const sortOpt = $$$(`.sorting-pane`).exists(".sort-items");
		return sortOpt;
	}

	isRowFilterOptionDisplayed(row) {
		const rowHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .rowheader-viewport tr .row${row}.cell:last-child`
		);
		new HeaderMenu(rowHeaderMenuContainer).open();
		const filterOpt = $$$(
			`.popup-menu-container .header-menu .sorting-pane .filter-items`
		).isDisplayed();
		return filterOpt;
	}

	isColFilterOptionDisplayed(col) {
		const colHeaderMenuContainer = this.webElement.find(
			`:not(.double-buffered-div) .colheader-viewport tr:last-child .col${col}.cell`
		);
		new HeaderMenu(colHeaderMenuContainer).open();
		const filterOpt = $$$(
			`.popup-menu-container .header-menu .sorting-pane .filter-items`
		).isDisplayed();
		return filterOpt;
	}

	setSelection(startRow, startCol, endRow, endCol, dropOffset) {
		const startCell = this.webElement.find(
			`.grid-viewport .cell.row${startRow}.col${startCol}`
		);

		const endCell = this.webElement.find(`.grid-viewport .cell.row${endRow}.col${endCol}`);

		startCell.dnd({
			dropOnTopOf: endCell.cssSelector,
			dropOffset, // <-- added line, optional offset support
		});

		return;
	}

	// Caution: this function only works well when using only cell ranges (so, ranges of length 2) or 1 rectangular block followed
	// by one or more cell ranges. Somehow, the CTRL seems to get de-pressed between rectangular selections.
	setScatterSelection(rangeList) {
		// Loop over all the cells or ranges and select them.
		for (let range = 0; range < rangeList.length; range++) {
			// Check if the range is just a single cell. This is the case if 2 coordinates are given instead of 4
			const isCell = rangeList[range].length === 2;
			if (isCell) {
				const cellElement = this.webElement.find(
					`.grid-viewport .cell.row${rangeList[range][0]}.col${rangeList[range][1]}`
				);
				//cellElement.click();
				this.ctrlClick(cellElement); // Keep CTRL pressed down
			} else {
				this.pressCtrl();
				// We're dealing with a range as opposed to a single cell
				this.setSelection(
					rangeList[range][0],
					rangeList[range][1],
					rangeList[range][2],
					rangeList[range][3]
				);
				this.releaseCtrl();
			}
		}

		return;
	}

	// This function copies a single cell
	copyCell(row, col) {
		this.setSelection(row, col, row, col);
		this.pressCtrl("c");
	}

	// This function copies a block selection
	copyBlockSelection(startRow, startCol, endRow, endCol) {
		this.setSelection(startRow, startCol, endRow, endCol);
		this.pressCtrl("c");
	}

	// This function pastes the actual copied selection to the cell specified
	pasteToCell(row, col) {
		this.setSelection(row, col, row, col);
		this.pressCtrl("v");
	}

	pasteToBooleanCell(row, col) {
		this.setSelection(row, col, row, col, {
			anchor: "center",
			x: -6, // always move 6px left
			y: 0,
		});
		this.pressCtrl("v");
	}

	// This function pastes the actual copied selection to a scatter selection
	pasteToScatterSelection(rangeList) {
		this.setScatterSelection(rangeList);
		this.pressCtrl("v");
	}

	// This function pastes the actual copied selection to a block selection
	pasteToBlockSelection(startRow, startCol, endRow, endCol) {
		this.setSelection(startRow, startCol, endRow, endCol);
		this.pressCtrl("v");
	}

	getTableSearchButton() {
		this.webElement.moveTo();
		const isSearchBoxOpened = $$$("body").exists(".search-box.show");
		if (!isSearchBoxOpened) {
			this.webElement.find(".aimms-search.search-button").click();
		}
		const searchButtonDialog = $$$(".search-box.show");
		return new SearchContainer(searchButtonDialog);
	}

	getCurrentFocussedCellValue() {
		return this.webElement.find(".focus-cell").getAttribute("data-old-title");
	}

	getSearchedCellsData() {
		let searchedCellsValue = null;
		const searchedCellSel = this.webElement.findIfAny(".selection-overlay").parent();
		searchedCellsValue = searchedCellSel.getAttribute("data-old-title");
		return searchedCellsValue;
	}

	getSearchedCellsDataCount() {
		return this.webElement.find(".selection-overlay").length;
	}

	// Only call this function when .OpenDropdown has been called on the Table before.
	getAllOptions() {
		const jQdom = jQuery($$$(`.select2-drop-active`).getHTML());
		return jQuery
			.makeArray(jQdom.find("li .select2-result-label"))
			.map((elem) => jQuery(elem).text());
	}

	// This function returns true if the current Table has a cell with the blue focus box around it (so no just the grey one)
	isFocused() {
		return this.webElement.hasClass(`focused`);
		// const focusClass = this.webElement.findIfAny(`.focused`);
		// if (focusClass.any()) {
		// 	return true;
		// }
		// return false;
	}
}

module.exports = {
	Table,
	Cell,
	onRegisterWidgetTypes(registry) {
		registry["table"] = Table;
		registry["table-v2"] = Table;
	},
};
