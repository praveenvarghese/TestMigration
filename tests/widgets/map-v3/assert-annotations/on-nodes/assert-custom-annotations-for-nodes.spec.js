/*!
 * @AIMMS_FILE=models/Islands with new table MapV2/Islands.aimms
 */

scenario(
	"With multiple node-sets added to MapV3 widget, check for custom annotations and custom ASR being applied for the nodes",
	// not all default colors/fill/strokes are being overruled by the custom annotation, so these tests are a bit of a mishmash.
	// I (EN, 2022-06-09) did not take the time to find out why sometimes fill and sometimes stroke or both were custom or not.
	() => {
		loadPage("Main Project/MapV3 Test Page");

		const mapV3 = findWidget("MapV3Test");

		const tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");
		tripura0.hasClass("annotation-NIND_F").should.be.equal(true);
		tripura0.getCSSStyleProperty("fill").should.be.equal(colors.colorPureYellow.rgb);
		tripura0.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord1.rgb);

		const karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");
		karnataka0.hasClass("annotation-SIND_F").should.be.equal(true);
		karnataka0.getCSSStyleProperty("fill").should.be.equal(colors.colorNeonBlue.rgb);
		karnataka0.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord1.rgb);

		const tamilNadu0 = mapV3.getNodeSet(0).getPoint("Tamil Nadu");
		tamilNadu0.hasClass("annotation-SIND_F").should.be.equal(true);
		tamilNadu0.getCSSStyleProperty("fill").should.be.equal(colors.colorNeonBlue.rgb);
		tamilNadu0.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord1.rgb);

		const haryana0 = mapV3.getNodeSet(0).getPoint("Haryana");
		haryana0.hasClass("annotation-NIND_F").should.be.equal(true);
		haryana0.getCSSStyleProperty("fill").should.be.equal(colors.colorPureYellow.rgb);
		haryana0.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord1.rgb);

		const maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");
		maharashtra0.hasClass("annotation-WIND_F").should.be.equal(true);
		maharashtra0.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord1.rgb);
		maharashtra0.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord1.rgb);

		const karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");
		karnataka3.hasClass("annotation-SIND").should.be.equal(true);
		karnataka3.hasClass("annotation-SIND_Q").should.be.equal(true);
		karnataka3.getCSSStyleProperty("fill").should.be.equal(colors.colorPureYellow.rgb);
		karnataka3.getCSSStyleProperty("stroke").should.be.equal(colors.colorPureBlack.rgb);

		const chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");
		chhattisgarh3.hasClass("annotation-EIND").should.be.equal(true);
		chhattisgarh3.hasClass("annotation-EIND_Q").should.be.equal(true);
		chhattisgarh3.getCSSStyleProperty("fill").should.be.equal(colors.colorPureRed.rgb);
		chhattisgarh3.getCSSStyleProperty("stroke").should.be.equal(colors.colorPureRed.rgb);

		const karnataka5 = mapV3.getNodeSet(5).getPoint("Karnataka");
		karnataka5.hasClass("annotation-SIND_DC").should.be.equal(true);
		karnataka5
			.getCSSStyleProperty("fill")
			.should.be.equal(colors.colorNonStandardDarkGreen.rgb);
		karnataka5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const tamilNadu5 = mapV3.getNodeSet(5).getPoint("Tamil Nadu");
		tamilNadu5.hasClass("annotation-SIND_DC").should.be.equal(true);
		tamilNadu5
			.getCSSStyleProperty("fill")
			.should.be.equal(colors.colorNonStandardDarkGreen.rgb);
		tamilNadu5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const haryana5 = mapV3.getNodeSet(5).getPoint("Haryana");
		haryana5.hasClass("annotation-NIND_DC").should.be.equal(true);
		haryana5.getCSSStyleProperty("fill").should.be.equal(colors.colorPureRed.rgb);
		haryana5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");
		maharashtra5.hasClass("annotation-WIND_DC").should.be.equal(true);
		maharashtra5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		maharashtra5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const tripura5 = mapV3.getNodeSet(5).getPoint("Tripura");
		tripura5.hasClass("annotation-EIND_DC").should.be.equal(true);
		tripura5.getCSSStyleProperty("fill").should.be.equal(colors.colorPureYellow.rgb);
		tripura5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");
		telangana5.hasClass("annotation-SIND_DC").should.be.equal(true);
		telangana5
			.getCSSStyleProperty("fill")
			.should.be.equal(colors.colorNonStandardDarkGreen.rgb);
		telangana5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const madhyaPradesh5 = mapV3.getNodeSet(5).getPoint("Madhya Pradesh");
		madhyaPradesh5.hasClass("annotation-WIND_DC").should.be.equal(true);
		madhyaPradesh5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		madhyaPradesh5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const chhattisgarh5 = mapV3.getNodeSet(5).getPoint("Chhattisgarh");
		chhattisgarh5.hasClass("annotation-EIND_DC").should.be.equal(true);
		chhattisgarh5.getCSSStyleProperty("fill").should.be.equal(colors.colorPureYellow.rgb);
		chhattisgarh5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const bhitarwar5 = mapV3.getNodeSet(5).getPoint("Bhitarwar, Madhya Pradesh");
		bhitarwar5.hasClass("annotation-WIND_DC").should.be.equal(true);
		bhitarwar5.getCSSStyleProperty("fill").should.be.equal(colors.colorMod16Ord6.rgb);
		bhitarwar5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);

		const chandoor5 = mapV3.getNodeSet(5).getPoint("Chandoor, Telangana");
		chandoor5.hasClass("annotation-SIND_DC").should.be.equal(true);
		chandoor5.getCSSStyleProperty("fill").should.be.equal(colors.colorNonStandardDarkGreen.rgb);
		chandoor5.getCSSStyleProperty("stroke").should.be.equal(colors.colorMod16Ord6.rgb);
	}
);
