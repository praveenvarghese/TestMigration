/*!
 * @AIMMS_FILE=models/MealsRus/MealsRus.aimms
 */

scenario("48 - Having class annotations in the multiselect widget options  ", () => {
	loadPage("Main Project/Selection Widgets/Multiselect");

	findWidget("multiselect_parameter").hasParticularClass("Italian", "annotation-Ord1").should.be
		.true;

	findWidget("CousineSelected_MultiSelect").hasParticularClass("Turkish", "annotation-Ord9")
		.should.be.true;
});
