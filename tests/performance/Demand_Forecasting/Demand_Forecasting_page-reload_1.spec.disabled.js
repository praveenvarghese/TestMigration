/*!
 * @AIMMS_FILE=models/webui-e2e-customer-models/models/SCNav_Apps_For_Performance_Tests_2020-12-21/Demand_Forecasting_2020-12-21/Demand_Forecasting_2020-12-21.aimms
 * @TEST_TYPE=performance
 * @HARDWARE_SHARE=large
 */

scenario("Demand Forecasting Model Page Reload - Performance Measuring", () => {
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");
	loadPage("Main Project/Home");
	findWidget("home_2");
	getCurrentPage().should.be.equal("Main Project/Home");

	loadPage("Main Project/Forecast/Data Cleaning");
	findWidget("data_cleaning_1");
	getCurrentPage().should.be.equal("Main Project/Forecast/Data Cleaning");
	loadPage("Main Project/Forecast/Data Cleaning");
	findWidget("data_cleaning_1");
	getCurrentPage().should.be.equal("Main Project/Forecast/Data Cleaning");
	loadPage("Main Project/Forecast/Data Cleaning");
	findWidget("data_cleaning_1");
	getCurrentPage().should.be.equal("Main Project/Forecast/Data Cleaning");

	loadPage("Main Project/Forecast/Forecast Review");
	findWidget("forecast_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Forecast Review");
	loadPage("Main Project/Forecast/Forecast Review");
	findWidget("forecast_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Forecast Review");
	loadPage("Main Project/Forecast/Forecast Review");
	findWidget("forecast_results");
	getCurrentPage().should.be.equal("Main Project/Forecast/Forecast Review");
});
