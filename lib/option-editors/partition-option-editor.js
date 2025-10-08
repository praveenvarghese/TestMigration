const autoLogia = require("../auto-logia");
const log = require("../log")(autoLogia());

const jQuery = require("jquery-node");
const $$$ = require("../selenium/3xdollar");
const { FrameworkObject } = require("../framework-object");
const { generateOptionEditorConstructs } = require("./option-editor");

class DraggableCubeIndex extends FrameworkObject {
	constructor(webElement, partitionOptionEditor) {
		super(webElement);
		this.partitionOptionEditor = partitionOptionEditor;
	}
	dropBefore(indexName) {
		const poeWebElement = this.partitionOptionEditor.webElement;
		const indexNameElement = poeWebElement.find(`.items .item:textMatches(/^${indexName}$/)`);

		this.__performDnD(this.webElement, indexNameElement, "dropBefore");

		// For chaining multiple drag-n-drops:
		return this.partitionOptionEditor;
	}
	dropAfter(indexName) {
		const poeWebElement = this.partitionOptionEditor.webElement;
		const indexNameElement = poeWebElement.find(`.items .item:textMatches(/^${indexName}$/)`);

		this.__performDnD(this.webElement, indexNameElement, "dropAfter");

		// For chaining multiple drag-n-drops:
		return this.partitionOptionEditor;
	}
	dropIn(binName) {
		const poeWebElement = this.partitionOptionEditor.webElement;
		const binNameElement = poeWebElement.find(
			`.bin:has(>.title:textMatches(/^${binName}:/i)) .items`
		);

		this.__performDnD(this.webElement, binNameElement, "dropAfter");

		// For chaining multiple drag-n-drops:
		return this.partitionOptionEditor;
	}

	// private
	__performDnD(dragElement, targetElement, dropAction) {
		const poeWebElement = this.partitionOptionEditor.webElement;
		log.debug(`(${dragElement.selector}, ${targetElement.selector}, ${dropAction})`);
		// In order for things like focus and blur to work during the DnD simulation,
		// we have to send a click on the draggable cube index element from out-
		// side the sandbox in which simsort is executed. Hence, we do it here.
		this.webElement.click();
		poeWebElement.simsort({
			drag: $$$(dragElement.origCssSelector).selector,
			[dropAction]: $$$(targetElement.origCssSelector).selector,
		});
	}
}

const { WithPartitionOptionEditor } = generateOptionEditorConstructs({
	name: "Partition",
	editorButtonSelector: ".dialog-pivot-control.toolbar-button",
	editorSelector: ".dialog-pivot-container.open",
	mainMethodName: "dragIndex",
	mixinClass: (_) =>
		class extends _ {
			dragIndex(indexName) {
				return new DraggableCubeIndex(
					this.webElement.find(`.items .item:textMatches(/^${indexName}$/)`),
					this
				);
			}
			getBins() {
				const $ = jQuery;
				const jQdom = $(this.webElement.getHTML());

				const bins = $.makeArray(jQdom.find(".pivot .bins .bin")).map((elem) => {
					const elQ = $(elem);

					return {
						partName: elQ.attr("data-bin-name"),
						binTitle: elQ.find(".title").text(),
						items: $.makeArray(elQ.find(".item")).map((itemElem) => {
							const itemElQ = $(itemElem);

							return {
								itemName: itemElQ.attr("data-item-name"),
								itemTitle: itemElQ.attr("title"),
								itemText: itemElQ.text(),
							};
						}),
					};
				});

				return bins;
			}
		},
});

module.exports = {
	WithPartitionOptionEditor,
};
