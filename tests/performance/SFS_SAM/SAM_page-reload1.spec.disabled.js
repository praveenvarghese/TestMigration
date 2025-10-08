/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SFS_SAM_2020-07-08/SFS_SAM_2020-07-08.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

// first page load is cold start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// second page load is warm start: Cube-Engine, Nodejs, Browser JS/CSS Cache, Browser Widget Fragment Cache
// third page load is second measurement for warm start

scenario("SAM Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");
	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");
	loadPage("Main Project/Landing Page");
	findWidget("landing_page");
	getCurrentPage().should.be.equal("Main Project/Landing Page");

	loadPage("Main Project/Negotiator Screen - Top Page");
	findWidget("negotiator_screen");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Top Page");
	loadPage("Main Project/Negotiator Screen - Top Page");
	findWidget("negotiator_screen");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Top Page");
	loadPage("Main Project/Negotiator Screen - Top Page");
	findWidget("negotiator_screen");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Top Page");

	loadPage("Main Project/Negotiator Screen - Top Page/MasterqueueOfClient");
	findWidget("masterqueueofclient_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/MasterqueueOfClient"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/MasterqueueOfClient");
	findWidget("masterqueueofclient_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/MasterqueueOfClient"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/MasterqueueOfClient");
	findWidget("masterqueueofclient_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/MasterqueueOfClient"
	);

	loadPage("Main Project/Negotiator Screen - Top Page/Customized Payments");
	findWidget("customized_payments");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/Customized Payments"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/Customized Payments");
	findWidget("customized_payments");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/Customized Payments"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/Customized Payments");
	findWidget("customized_payments");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/Customized Payments"
	);

	loadPage("Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable");
	findWidget("popupverticalpaymentstable_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable");
	findWidget("popupverticalpaymentstable_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable"
	);
	loadPage("Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable");
	findWidget("popupverticalpaymentstable_1");
	getCurrentPage().should.be.equal(
		"Main Project/Negotiator Screen - Top Page/PopUpVerticalPaymentsTable"
	);

	loadPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");
	loadPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");
	loadPage("Main Project/Negotiator Screen - Bottom Page");
	findWidget("negotiator_screen_bottompage");
	getCurrentPage().should.be.equal("Main Project/Negotiator Screen - Bottom Page");
});
