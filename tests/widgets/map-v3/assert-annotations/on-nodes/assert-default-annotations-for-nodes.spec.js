/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"With multiple node-sets added to MapV3 widget, check for default annotations being applied for the nodes.",
	() => {
		loadPage("Main Project/MapV3 Page/Node sets Ordering");

		const mapV3 = findWidget("MapV3_1");

		const tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		tripura0.hasClass("annotation-Tripura").should.be.equal(true);
		tripura0.hasClass("annotation-FactoriesInIndia").should.be.equal(true);
		tripura0.hasClass("annotation-Ord1").should.be.equal(true);

		const karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		karnataka0.hasClass("annotation-Karnataka").should.be.equal(true);
		karnataka0.hasClass("annotation-FactoriesInIndia").should.be.equal(true);
		karnataka0.hasClass("annotation-Ord1").should.be.equal(true);

		const tamilNadu0 = mapV3.getNodeSet(0).getPoint("Tamil Nadu");

		tamilNadu0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		tamilNadu0.hasClass("annotation-Tamil-Nadu").should.be.equal(true);
		tamilNadu0.hasClass("annotation-FactoriesInIndia").should.be.equal(true);
		tamilNadu0.hasClass("annotation-Ord1").should.be.equal(true);

		const haryana0 = mapV3.getNodeSet(0).getPoint("Haryana");

		haryana0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		haryana0.hasClass("annotation-Haryana").should.be.equal(true);
		haryana0.hasClass("annotation-FactoriesInIndia").should.be.equal(true);
		haryana0.hasClass("annotation-Ord1").should.be.equal(true);

		const maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		maharashtra0.hasClass("annotation-Maharashtra").should.be.equal(true);
		maharashtra0.hasClass("annotation-FactoriesInIndia").should.be.equal(true);
		maharashtra0.hasClass("annotation-Ord1").should.be.equal(true);

		const karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");
		karnataka3.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord4.rgb); //"rgb(93, 170, 215)"
		karnataka3.hasClass("annotation-Karnataka").should.be.equal(true);
		karnataka3.hasClass("annotation-QualityCheckBranchesInIndia").should.be.equal(true);
		karnataka3.hasClass("annotation-Ord4").should.be.equal(true);

		const chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");
		chhattisgarh3.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord4.rgb);
		chhattisgarh3.hasClass("annotation-Chhattisgarh").should.be.equal(true);
		chhattisgarh3.hasClass("annotation-QualityCheckBranchesInIndia").should.be.equal(true);
		chhattisgarh3.hasClass("annotation-Ord4").should.be.equal(true);

		const karnataka5 = mapV3.getNodeSet(5).getPoint("Karnataka");
		karnataka5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb); //"rgb(163, 198, 123)"
		karnataka5.hasClass("annotation-Karnataka").should.be.equal(true);
		karnataka5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		karnataka5.hasClass("annotation-Ord6").should.be.equal(true);

		const tamilNadu5 = mapV3.getNodeSet(5).getPoint("Tamil Nadu");
		tamilNadu5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		tamilNadu5.hasClass("annotation-Tamil-Nadu").should.be.equal(true);
		tamilNadu5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		tamilNadu5.hasClass("annotation-Ord6").should.be.equal(true);

		const haryana5 = mapV3.getNodeSet(5).getPoint("Haryana");
		haryana5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		haryana5.hasClass("annotation-Haryana").should.be.equal(true);
		haryana5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		haryana5.hasClass("annotation-Ord6").should.be.equal(true);

		const maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");
		maharashtra5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		maharashtra5.hasClass("annotation-Maharashtra").should.be.equal(true);
		maharashtra5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		maharashtra5.hasClass("annotation-Ord6").should.be.equal(true);

		const tripura5 = mapV3.getNodeSet(5).getPoint("Tripura");
		tripura5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		tripura5.hasClass("annotation-Tripura").should.be.equal(true);
		tripura5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		tripura5.hasClass("annotation-Ord6").should.be.equal(true);

		const telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");
		telangana5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		telangana5.hasClass("annotation-Telangana").should.be.equal(true);
		telangana5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		telangana5.hasClass("annotation-Ord6").should.be.equal(true);

		const madhyaPradesh5 = mapV3.getNodeSet(5).getPoint("Madhya Pradesh");
		madhyaPradesh5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		madhyaPradesh5.hasClass("annotation-Madhya-Pradesh").should.be.equal(true);
		madhyaPradesh5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		madhyaPradesh5.hasClass("annotation-Ord6").should.be.equal(true);

		const chhattisgarh5 = mapV3.getNodeSet(5).getPoint("Chhattisgarh");
		chhattisgarh5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		chhattisgarh5.hasClass("annotation-Chhattisgarh").should.be.equal(true);
		chhattisgarh5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		chhattisgarh5.hasClass("annotation-Ord6").should.be.equal(true);

		const bhitarwar5 = mapV3.getNodeSet(5).getPoint("Bhitarwar, Madhya Pradesh");
		bhitarwar5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		bhitarwar5.hasClass("annotation-Bhitarwar,-Madhya-Pradesh").should.be.equal(true);
		bhitarwar5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		bhitarwar5.hasClass("annotation-Ord6").should.be.equal(true);

		const chandoor5 = mapV3.getNodeSet(5).getPoint("Chandoor, Telangana");
		chandoor5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		chandoor5.hasClass("annotation-Chandoor,-Telangana").should.be.equal(true);
		chandoor5.hasClass("annotation-DistributionCentresInIndia").should.be.equal(true);
		chandoor5.hasClass("annotation-Ord6").should.be.equal(true);
	}
);
