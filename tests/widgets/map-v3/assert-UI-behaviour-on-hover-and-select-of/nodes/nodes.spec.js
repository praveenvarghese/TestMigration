/*!
 * @AIMMS_FILE=models/MapV3Model/MapV3Model.aimms
 */

scenario(
	"With multiple node-sets configured on the MapV3 widget, check for Hover and Select UI behaviour for these nodes.",
	() => {
		loadPage("Main Project/MapV3 Page/Node sets Ordering");

		let mapV3 = findWidget("MapV3_1");

		let tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		let karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka0.hasClass("is-hover").should.be.equal(false);
		karnataka0.hasClass("selected-node").should.be.equal(false);

		let chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		chhattisgarh3.hasClass("is-hover").should.be.equal(false);
		chhattisgarh3.hasClass("selected-node").should.be.equal(false);

		let karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		let maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		let maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		let telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.hasClass("is-hover").should.be.equal(false);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(3)
			.getPoint("Chhattisgarh")
			.hover();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka0.hasClass("is-hover").should.be.equal(false);
		karnataka0.hasClass("selected-node").should.be.equal(false);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("1px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(true);
		chhattisgarh3.hasClass("selected-node").should.be.equal(false);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.hasClass("is-hover").should.be.equal(false);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(3)
			.getPoint("Chhattisgarh")
			.click();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka0.hasClass("is-hover").should.be.equal(false);
		karnataka0.hasClass("selected-node").should.be.equal(false);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(true);
		chhattisgarh3.hasClass("selected-node").should.be.equal(true);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.hasClass("is-hover").should.be.equal(false);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(0)
			.getPoint("Karnataka")
			.hover();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		karnataka0.getCSSStyleProperty("stroke-width").should.be.equal("1px");
		karnataka0.hasClass("is-hover").should.be.equal(true);
		karnataka0.hasClass("selected-node").should.be.equal(false);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(false);
		chhattisgarh3.hasClass("selected-node").should.be.equal(true);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.hasClass("is-hover").should.be.equal(false);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(0)
			.getPoint("Karnataka")
			.click();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		karnataka0.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		karnataka0.hasClass("is-hover").should.be.equal(true);
		karnataka0.hasClass("selected-node").should.be.equal(true);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(false);
		chhattisgarh3.hasClass("selected-node").should.be.equal(true);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.hasClass("is-hover").should.be.equal(false);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(5)
			.getPoint("Telangana")
			.hover();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		karnataka0.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		karnataka0.hasClass("is-hover").should.be.equal(false);
		karnataka0.hasClass("selected-node").should.be.equal(true);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(false);
		chhattisgarh3.hasClass("selected-node").should.be.equal(true);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("0.8");
		telangana5.getCSSStyleProperty("stroke-width").should.be.equal("1px");
		telangana5.hasClass("is-hover").should.be.equal(true);
		telangana5.hasClass("selected-node").should.be.equal(false);

		findWidget("MapV3_1")
			.getNodeSet(5)
			.getPoint("Telangana")
			.click();

		mapV3 = findWidget("MapV3_1");

		tripura0 = mapV3.getNodeSet(0).getPoint("Tripura");

		tripura0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		tripura0.hasClass("is-hover").should.be.equal(false);
		tripura0.hasClass("selected-node").should.be.equal(false);

		karnataka0 = mapV3.getNodeSet(0).getPoint("Karnataka");

		karnataka0.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		karnataka0.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		karnataka0.hasClass("is-hover").should.be.equal(false);
		karnataka0.hasClass("selected-node").should.be.equal(true);

		chhattisgarh3 = mapV3.getNodeSet(3).getPoint("Chhattisgarh");

		chhattisgarh3.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		chhattisgarh3.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		chhattisgarh3.hasClass("is-hover").should.be.equal(false);
		chhattisgarh3.hasClass("selected-node").should.be.equal(true);

		karnataka3 = mapV3.getNodeSet(3).getPoint("Karnataka");

		karnataka3.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		karnataka3.hasClass("is-hover").should.be.equal(false);
		karnataka3.hasClass("selected-node").should.be.equal(false);

		maharashtra0 = mapV3.getNodeSet(0).getPoint("Maharashtra");

		maharashtra0.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		maharashtra0.hasClass("is-hover").should.be.equal(false);
		maharashtra0.hasClass("selected-node").should.be.equal(false);

		maharashtra5 = mapV3.getNodeSet(5).getPoint("Maharashtra");

		maharashtra5.getCSSStyleProperty("fill-opacity").should.be.equal("0.6");
		maharashtra5.hasClass("is-hover").should.be.equal(false);
		maharashtra5.hasClass("selected-node").should.be.equal(false);

		telangana5 = mapV3.getNodeSet(5).getPoint("Telangana");

		telangana5.getCSSStyleProperty("fill-opacity").should.be.equal("1");
		telangana5.getCSSStyleProperty("stroke-width").should.be.equal("3px");
		telangana5.hasClass("is-hover").should.be.equal(true);
		telangana5.hasClass("selected-node").should.be.equal(true);
	}
);
