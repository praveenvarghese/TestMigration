/*!
 * @AIMMS_FILE=models/GanttTests-v2/GanttTests.aimms
 */
scenario(
	"By changing pivoting settings,Validate that the jobs displayed are correct and validate zero duration jobs",
	() => {
		loadPage("Main Project/GanttV2Page");

		findWidget("FIrstGanttV2")
			.getNoOfJobs()
			.should.be.equal(35);

		findWidget("FIrstGanttV2")
			.findResource("MachineOne")
			.getJobs()
			.should.have.numberOfItems(5);

		findWidget("FIrstGanttV2")
			.getTopXAxisElements()
			.should.be.equal(
				"Wed 02:00,Wed 03:00,Wed 04:00,Wed 05:00,Wed 06:00,Wed 07:00,Wed 08:00,Wed 09:00,Wed 10:00,Wed 11:00,Wed 12:00,Wed 13:00,Wed 14:00,Wed 15:00,Wed 16:00,Wed 17:00,Wed 18:00,Wed 19:00,Wed 20:00,Wed 21:00,Wed 22:00,Wed 23:00,Thu 00:00,Thu 01:00Thu …"
			);

		findWidget("FIrstGanttV2")
			.getBottomXAxisElements()
			.should.be.equal("Wed May 17 2017,Thu May 18 2017");

		findWidget("FIrstGanttV2")
			.getYAxisElements()
			.should.be.equal(
				"MachineOne,MachineTwo,MachineThree,MachineFour,MachineFive,MachineSix,MachineSeven"
			);

		getPageMenu().navigateToPage("Main Project/ZeroDurationGanttChartPage");

		findWidget("ZeroDuration")
			.getNoOfJobs()
			.should.be.equal(0);

		findWidget("ZeroDuration")
			.getTopXAxisElements()
			.should.be.equal("Thu 01:00");

		findWidget("ZeroDuration")
			.getBottomXAxisElements()
			.should.be.equal("Thu Jan 01 1970");

		findWidget("ZeroDuration")
			.getYAxisElements()
			.should.be.equal(
				"MachineOne,MachineTwo,MachineThree,MachineFour,MachineFive,MachineSix,MachineSeven"
			);
	}
);
