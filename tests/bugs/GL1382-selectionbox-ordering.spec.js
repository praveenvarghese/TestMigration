/*!
 * @AIMMS_FILE=models/Bugs/GL1382-SelectionBoxOrdering/SelectionBoxOrdering.aimms
 */

scenario(
	"GL1382 - The ordering of the items for a selectionbox was off for the 'special element' called 'All Years' in S&OP.",
	() => {
		loadPage("Main Project/home");

		findWidget("PeriodSelector").click();

		findWidget("PeriodSelector").pressKeys([
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.arrow_down,
			SPECIAL_KEYS.enter,
		]);

		findWidget("PeriodSelector")
			.getValue()
			.should.be.equal("All Years");
	}
);
