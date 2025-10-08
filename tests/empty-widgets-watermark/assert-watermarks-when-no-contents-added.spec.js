/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario("Asserting watermark on the widgets.", () => {
	loadPage("Main Project/Second Page/Widgets Empty Contents");

	closeAppManager();

	findWidget("Barchart").getEmptyWidgetMessage().should.exist;
	findWidget("Barchart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Barchart");
	findWidget("Barchart").emptyWidgetMessageHasIcon("icon-bars").should.be.true;

	findWidget("Linechart").getEmptyWidgetMessage().should.exist;
	findWidget("Linechart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Linechart");
	findWidget("Linechart").emptyWidgetMessageHasIcon("icon-stats").should.be.true;

	findWidget("Piechart").getEmptyWidgetMessage().should.exist;
	findWidget("Piechart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Piechart");
	findWidget("Piechart").emptyWidgetMessageHasIcon("icon-pie").should.be.true;

	findWidget("Treemap").getEmptyWidgetMessage().should.exist;
	findWidget("Treemap")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Treemap");
	findWidget("Treemap").emptyWidgetMessageHasIcon("icon-wall").should.be.true;

	findWidget("List_1").getEmptyWidgetMessage().should.exist;
	findWidget("List_1")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty List");
	findWidget("List_1").emptyWidgetMessageHasIcon("icon-lists").should.be.true;

	findWidget("Bubblechart").getEmptyWidgetMessage().should.exist;
	findWidget("Bubblechart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Bubblechart");
	findWidget("Bubblechart").emptyWidgetMessageHasIcon("icon-bowlingball").should.be.true;

	findWidget("Ganttchart").getEmptyWidgetMessage().should.exist;
	findWidget("Ganttchart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal(
			"Empty ganttchartPlease specify your contents, a reference time, and a time resolution."
		);
	findWidget("Ganttchart").emptyWidgetMessageHasIcon("icon-align-left").should.be.true;

	findWidget("Table").getEmptyWidgetMessage().should.exist;
	findWidget("Table")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty TableNo contents specified");
	findWidget("Table").emptyWidgetMessageHasIcon("icon-table").should.be.true;

	findWidget("barlinechart").getEmptyWidgetMessage().should.exist;
	findWidget("barlinechart")
		.getEmptyWidgetMessage()
		.getText()
		.should.be.equal("Empty Bar-Line Chart");
	findWidget("barlinechart").emptyWidgetMessageHasIcon("icon-stats-up").should.be.true;
});
