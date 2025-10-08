/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Demand_Forecasting_2020-12-21/Demand_Forecasting_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Demand Forecasting Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Forecast/Summary Totals");
	findWidget("review_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Summary Totals");
	loadPage("Main Project/Forecast/Summary Totals");
	findWidget("review_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Summary Totals");
	loadPage("Main Project/Forecast/Summary Totals");
	findWidget("review_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Summary Totals");

	loadPage("Main Project/Forecast Setup/Forecast Methods");
	findWidget("forecast_methods");
	getCurrentPage().should.be.equal("Main Project/Forecast Setup/Forecast Methods");
	loadPage("Main Project/Forecast Setup/Forecast Methods");
	findWidget("forecast_methods");
	getCurrentPage().should.be.equal("Main Project/Forecast Setup/Forecast Methods");
	loadPage("Main Project/Forecast Setup/Forecast Methods");
	findWidget("forecast_methods");
	getCurrentPage().should.be.equal("Main Project/Forecast Setup/Forecast Methods");
});
