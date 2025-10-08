/*!
 * @AIMMS_FILE=models/Bugs/GL1222-ConventionsNotShowing/dists.aimms
 */

scenario("GL1222 - Conventions were not showing in a scalar dropdown widget", () => {
	loadPage("Main Project/home");

	// Check whether the cv_Metric convention is showing in the scalar upon start.
	findWidget("convsel")
		.getValue("ep_UIConvention")
		.should.be.equal("cv_Metric");

	// Change the value into cv_Imperial.
	findWidget("convsel").setValue("cv_Imperial");

	// Change the value into cv_Imperial.
	findWidget("convsel")
		.getValue("ep_UIConvention")
		.should.be.equal("cv_Imperial");
});
