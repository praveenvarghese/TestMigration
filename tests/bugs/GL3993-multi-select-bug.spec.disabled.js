/*!
 * @AIMMS_FILE=models/Bugs/GL3993-multiselectBug/GL3993-multiselectBug.aimms
 */

scenario(
	"GL3993 validate when data is readonly check select None and Select All are disabled",
	() => {
		loadPage("Main Project/home");

		findWidget("Cuisines").isSelectAllDisabled().should.be.true;

		findWidget("Cuisines").isSelectNoneDisabled().should.be.true;

		findWidget("cricketTeams").isSelectAllDisabled().should.be.true;

		findWidget("cricketTeams").isSelectNoneDisabled().should.be.true;

		findWidget("authors").isSelectAllDisabled().should.be.true;

		findWidget("authors").isSelectNoneDisabled().should.be.true;

		findWidget("enbleMultiSelect").setValue(" ");

		findWidget("Cuisines").isSelectAllDisabled().should.be.false;

		findWidget("Cuisines").isSelectNoneDisabled().should.be.false;

		findWidget("enbleMultiSelect").setValue("readonly");

		findWidget("Cuisines").isSelectAllDisabled().should.be.true;

		findWidget("Cuisines").isSelectNoneDisabled().should.be.true;
	}
);
