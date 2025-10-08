/*!
 * @AIMMS_FILE=models/BooksAndAuthors/TableFilteringTest.aimms
 * @HARDWARE_SHARE=medium
 */

scenario(
	"For a table having data from Element-Text and translation files. Asserting the title, column and row headers on a table.",
	() => {
		loadPage("Main Project/Filters/c3314");

		// Assert the Title headers on the table
		findWidget("TestData")
			.getTitleHeaderValues()
			.should.be.shallowDeepEqual([
				["", "", "Set03"],
				["", "", "TF_Set04"],
				["Identifier", "Set01", "TF_Set02"],
			]);

		// Assert the Column headers on the table
		findWidget("TestData")
			.getColumnsHeaderValues()
			.should.be.shallowDeepEqual([
				[
					"TF_S3E1",
					"TF_S3E1",
					"TF_S3E1",
					"TF_S3E1",
					"TF_S3E1",
					"ET_S3E2",
					"ET_S3E2",
					"ET_S3E2",
					"ET_S3E2",
					"ET_S3E2",
					"Set03Element3",
					"Set03Element3",
					"Set03Element3",
					"Set03Element3",
					"Set03Element3",
					"Set03Element4",
					"Set03Element4",
					"Set03Element4",
					"Set03Element4",
					"Set03Element4",
					"Set03Element5",
					"Set03Element5",
					"Set03Element5",
					"Set03Element5",
					"Set03Element5",
				],
				[
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"Set04Element4",
					"Set04Element5",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"Set04Element4",
					"Set04Element5",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"Set04Element4",
					"Set04Element5",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"Set04Element4",
					"Set04Element5",
					"ET_S4E1",
					"TF_S4E2",
					"Set04Element3",
					"Set04Element4",
					"Set04Element5",
				],
			]);

		// Assert the Row headers on the table
		findWidget("TestData")
			.getRowsHeaderValues()
			.should.be.shallowDeepEqual([
				["MKGTesting", "ET_S1E1", "Set02Element1"],
				["MKGTesting", "ET_S1E1", "ET_S2E2"],
				["MKGTesting", "ET_S1E1", "ET_S2E3"],
				["MKGTesting", "ET_S1E1", "TF_S2E4"],
				["MKGTesting", "ET_S1E1", "TF_S2E5"],
				["MKGTesting", "TF_S1E2", "Set02Element1"],
				["MKGTesting", "TF_S1E2", "ET_S2E2"],
				["MKGTesting", "TF_S1E2", "ET_S2E3"],
				["MKGTesting", "TF_S1E2", "TF_S2E4"],
				["MKGTesting", "TF_S1E2", "TF_S2E5"],
				["MKGTesting", "ET_S1E3", "Set02Element1"],
				["MKGTesting", "ET_S1E3", "ET_S2E2"],
				["MKGTesting", "ET_S1E3", "ET_S2E3"],
				["MKGTesting", "ET_S1E3", "TF_S2E4"],
				["MKGTesting", "ET_S1E3", "TF_S2E5"],
				["MKGTesting", "Set01Element4", "Set02Element1"],
				["MKGTesting", "Set01Element4", "ET_S2E2"],
				["MKGTesting", "Set01Element4", "ET_S2E3"],
				["MKGTesting", "Set01Element4", "TF_S2E4"],
				["MKGTesting", "Set01Element4", "TF_S2E5"],
				["MKGTesting", "Set01Element5", "Set02Element1"],
				["MKGTesting", "Set01Element5", "ET_S2E2"],
				["MKGTesting", "Set01Element5", "ET_S2E3"],
				["MKGTesting", "Set01Element5", "TF_S2E4"],
				["MKGTesting", "Set01Element5", "TF_S2E5"],
			]);
	}
);
