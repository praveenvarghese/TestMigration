/*!
 * @AIMMS_FILE=models/GC-StoreFocus/GC_Annotations.aimms
 */

scenario("Check for focus support behaviour on Gantt chart v2.", () => {
	loadPage("Main Project/home");

	findWidget("Store Focus Stuff")
		.getValue("TheCountry")
		.should.be.equal("");

	findWidget("Store Focus Stuff")
		.getValue("TheResource")
		.should.be.equal("");

	findWidget("Store Focus Stuff")
		.getValue("TheJob")
		.should.be.equal("");

	findWidget("Store Focus Stuff")
		.getValue("GC_Duration")
		.should.be.equal("0.00");

	findWidget("Store Focus Stuff")
		.getValue("WeGC_Start")
		.should.be.equal("0.00");

	findWidget("GCV2")
		.findResource("(ET_Resource-3, ET_Germany)")
		.findJob("ET_Job-3")
		.click();

	findWidget("GCV2")
		.getSelectedJob()
		.should.eql("((ET_Resource-3, ET_Germany), ET_Job-3)");

	findWidget("Store Focus Stuff")
		.getValue("TheCountry")
		.should.be.equal("ET_Germany");

	findWidget("Store Focus Stuff")
		.getValue("TheResource")
		.should.be.equal("ET_Resource-3");

	findWidget("Store Focus Stuff")
		.getValue("TheJob")
		.should.be.equal("ET_Job-3");

	findWidget("Store Focus Stuff")
		.getValue("GC_Duration")
		.should.be.equal("0.61");

	findWidget("Store Focus Stuff")
		.getValue("WeGC_Start")
		.should.be.equal("0.36");

	findWidget("GCV2")
		.findResource("(ET_Resource-2, ET_India)")
		.findJob("ET_Job-2")
		.click();

	findWidget("GCV2")
		.getSelectedJob()
		.should.eql("((ET_Resource-2, ET_India), ET_Job-2)");

	findWidget("Store Focus Stuff")
		.getValue("TheCountry")
		.should.be.equal("ET_India");

	findWidget("Store Focus Stuff")
		.getValue("TheResource")
		.should.be.equal("ET_Resource-2");

	findWidget("Store Focus Stuff")
		.getValue("TheJob")
		.should.be.equal("ET_Job-2");

	findWidget("Store Focus Stuff")
		.getValue("GC_Duration")
		.should.be.equal("0.59");

	findWidget("Store Focus Stuff")
		.getValue("WeGC_Start")
		.should.be.equal("0.43");

	findWidget("GCV2").goInFullScreenMode();

	findWidget("GCV2")
		.getSelectedJob()
		.should.eql("((ET_Resource-2, ET_India), ET_Job-2)");

	findWidget("GCV2").exitFullScreenMode();

	findWidget("GCV2")
		.getSelectedJob()
		.should.eql("((ET_Resource-2, ET_India), ET_Job-2)");

	findWidget("Store Focus Stuff")
		.getValue("TheCountry")
		.should.be.equal("ET_India");

	findWidget("Store Focus Stuff")
		.getValue("TheResource")
		.should.be.equal("ET_Resource-2");

	findWidget("Store Focus Stuff")
		.getValue("TheJob")
		.should.be.equal("ET_Job-2");

	findWidget("Store Focus Stuff")
		.getValue("GC_Duration")
		.should.be.equal("0.59");

	findWidget("Store Focus Stuff")
		.getValue("WeGC_Start")
		.should.be.equal("0.43");
});
