/*!
 * @AIMMS_FILE=models/StoreFocusInListWidget/StoreFocusInListWidget.aimms
 */

scenario(
	"Asserting store focus is set on click of list item and list header, also validate Annotations for the header and list item",
	() => {
		loadPage("Main Project/home");

		findWidget("Storfocusdetails")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "headerfocus", value: "<empty>" },
				{ label: "itemfocus", value: "<empty>" },
			]);

		findWidget("FIrst List Widget")
			.getListGroup(0)
			.getHeader()
			.click();

		findWidget("Storfocusdetails")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "headerfocus", value: "1.00" },
				{ label: "itemfocus", value: "<empty>" },
			]);

		findWidget("FIrst List Widget")
			.getListGroup(0)
			.getListItem(1)
			.getItem()
			.click();

		findWidget("Storfocusdetails")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "headerfocus", value: "1.00" },
				{ label: "itemfocus", value: "2.00" },
			]);

		findWidget("FIrst List Widget")
			.getListGroup(1)
			.getHeader()
			.click();

		findWidget("Storfocusdetails")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "headerfocus", value: "2.00" },
				{ label: "itemfocus", value: "2.00" },
			]);

		findWidget("FIrst List Widget")
			.getListGroup(1)
			.getListItem(0)
			.getItem()
			.click();

		findWidget("Storfocusdetails")
			.getAllMultiContentScalarData()
			.should.be.shallowDeepEqual([
				{ label: "headerfocus", value: "2.00" },
				{ label: "itemfocus", value: "1.00" },
			]);

		findWidget("FIrst List Widget")
			.getListGroup(1)
			.getAnnotations()
			.should.include.something.like("annotation-header1");

		findWidget("FIrst List Widget")
			.getListGroup(1)
			.getListItem(0)
			.getAnnotations()
			.should.include.something.like("annotation-list1");
	}
);
