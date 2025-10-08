/*!
 * @AIMMS_FILE=models/PageV2/SidepanelExample Pagev2/SidepanelExample.aimms
 */

scenario(
	"Test asserting the Row and Column sizes of the Dialog, when its size is modified.",
	() => {
		loadPage("Main Project/classicDIalogPage");

		// #region Classic Layout Dialog Page
		// Validate the dialog page dimension for small
		findWidget("classicdialogpage_1")
			.getSelectedDialogPageSize()
			.should.eql("Small");
		findWidget("classicdialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "2", MaxColumns: "3" });

		// Change Dialog size to Medium and assert its Row and Column dimensions
		findWidget("classicdialogpage_1").selectSizeOfDialogPage("medium");
		findWidget("classicdialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "3", MaxColumns: "6" });

		// Change Dialog size to Large and assert its Row and Column dimensions
		findWidget("classicdialogpage_1").selectSizeOfDialogPage("large");
		findWidget("classicdialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "3", MaxColumns: "8" });
		// #endregion

		// #region Grid Layout  Dialog Page
		loadPage("Main Project/standardDialogPage");

		// Assert Row and Column dimension of the Large sized Dialog page
		findWidget("standarddialogpage_1")
			.getSelectedDialogPageSize()
			.should.eql("Medium");
		findWidget("standarddialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "3", MaxColumns: "6" });

		// Change Dialog size to Small and assert its Row and Column dimensions
		findWidget("standarddialogpage_1").selectSizeOfDialogPage("small");
		findWidget("standarddialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "2", MaxColumns: "3" });

		// Change Dialog size to Large and assert its Row and Column dimensions
		findWidget("standarddialogpage_1").selectSizeOfDialogPage("large");
		findWidget("standarddialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "3", MaxColumns: "8" });

		// Change Dialog size to Custom and assert its Row and Column dimensions
		findWidget("standarddialogpage_1").selectSizeOfDialogPage("custom");
		findWidget("standarddialogpage_1")
			.getRowColumnSize()
			.should.eql({ MaxRows: "3", MaxColumns: "8" });
		// #endregion
	}
);
