//const { keys } = require("lodash");

const WithGenericActions = (_) =>
	// eslint-disable-next-line @typescript-eslint/class-name-casing
	class mixin extends _ {
		getIconClassName(webElement) {
			return webElement
				.getAttribute("class")
				.split(" ")
				.filter((e) => /icon-/.test(e))
				.slice(0)
				.toString();
		}

		movePointerToWidget(xOffset = 0, yOffset = 0) {
			this.webElement.moveTo({ xOffset, yOffset });
			return this;
		}

		click(xOffset = 0, yOffset = 0, type = "left") {
			this.webElement.click({ button: type, x: xOffset, y: yOffset });
			return this;
		}

		rightClick(xOffset = 5, yOffset = 5) {
			browser.pause(500);
			this.click(xOffset, yOffset, "right");
			browser.pause(500);

			return this;
		}

		isDisplayedInViewport() {
			return this.webElement.isDisplayedInViewport(this.webElement.selector);
		}

		scrollToLeft(noOfTimes = 1) {
			const scrollBar_LeftButton_WebElement = this.webElement.find(
				".ui-scrollbar-button.ui-scrollbar-button-left .icon-arrow-left"
			);
			scrollBar_LeftButton_WebElement.moveTo();

			do {
				scrollBar_LeftButton_WebElement.click();
				noOfTimes--;
			} while (noOfTimes > 0);

			return this;
		}

		scrollToRight(noOfTimes = 1) {
			const scrollBar_RightButton_WebElement = this.webElement.find(
				".ui-scrollbar-button.ui-scrollbar-button-right .icon-arrow-right2"
			);
			scrollBar_RightButton_WebElement.moveTo();

			do {
				scrollBar_RightButton_WebElement.click();
				noOfTimes--;
			} while (noOfTimes > 0);

			return this;
		}

		scrollUp(noOfTimes = 1) {
			const scrollBar_UpButton_WebElement = this.webElement.find(
				".ui-scrollbar-button.ui-scrollbar-button-up .icon-arrow-up"
			);
			scrollBar_UpButton_WebElement.moveTo();

			do {
				scrollBar_UpButton_WebElement.click();
				noOfTimes--;
			} while (noOfTimes > 0);

			return this;
		}

		scrollDown(noOfTimes = 1) {
			const scrollBar_DownButton_WebElement = this.webElement.findIfAny(
				".ui-scrollbar-button.ui-scrollbar-button-down .icon-arrow-down:isVisible"
			);
			scrollBar_DownButton_WebElement.moveTo();

			do {
				scrollBar_DownButton_WebElement.click();
				noOfTimes--;
			} while (noOfTimes > 0);

			return this;
		}

		// scrollZoomIn(zoomInBy) {
		// 	browser.performActions([
		// 		{
		// 			type: "pointer",
		// 			id: "finger1",
		// 			parameters: { pointerType: "mouse" },
		// 			actions: [
		// 				{ type: "pointerMove", duration: 0, x: 0, y: 0 },
		// 				{ type: "pointerDown", button: 0 },
		// 				{ type: "pause", duration: 200 }, // Optional pause for smoother scrolling
		// 				{
		// 					type: "pointerMove",
		// 					duration: 200,
		// 					origin: "pointer",
		// 					x: 600,
		// 					y: 250,
		// 					deltaY: zoomInBy,
		// 				},
		// 				{ type: "pointerUp", button: 0 },
		// 			],
		// 		},
		// 	]);
		// 	browser.pause(2000);
		// }

		// scrollZoomOut(zoomOutBy) {
		// 	browser.performActions([
		// 		{
		// 			type: "pointer",
		// 			id: "finger1",
		// 			parameters: { pointerType: "mouse" },
		// 			actions: [
		// 				{ type: "pointerMove", duration: 0, x: 0, y: 0 },
		// 				{ type: "pointerDown", button: 0 },
		// 				{ type: "pause", duration: 200 }, // Optional pause for smoother scrolling
		// 				{
		// 					type: "pointerMove",
		// 					duration: 200,
		// 					origin: "pointer",
		// 					x: 650,
		// 					y: 250,
		// 					deltaY: zoomOutBy,
		// 				},
		// 				{ type: "pointerUp", button: 0 },
		// 			],
		// 		},
		// 	]);
		// 	browser.pause(2000);
		// }

		pressKeys(textOrKeys, keyDelay) {
			this.webElement.keys(textOrKeys, keyDelay);
			return this;
		}

		openDropdown() {
			this.pressModifierKeyWith(SPECIAL_KEYS.alt, SPECIAL_KEYS.arrow_down);
		}

		// This function presses a modifier key (like CTRL) plus another key as a combination.
		pressModifierKeyWith(modifierKey, keysToPress = "") {
			// If no key is to be pressed, just press the modifier key AND DO NOT RELEASE!
			if (keysToPress === "") {
				browser.performActions([
					{
						type: "key",
						id: "keyboard",
						actions: [
							{ type: "keyDown", value: modifierKey }, // Press down the modifier key
						],
					},
				]);
			} else {
				const action_sequence = [{ type: "keyDown", value: modifierKey }];
				for (const key of keysToPress) {
					action_sequence.push(
						{ type: "keyDown", value: key },
						{ type: "keyUp", value: key }
					);
				}
				action_sequence.push({ type: "keyUp", value: modifierKey });

				browser.performActions([
					{
						type: "key",
						id: "keyboard",
						actions: action_sequence,
					},
				]);
			}
			return this;
		}

		releaseCtrl() {
			browser.performActions([
				{
					type: "key",
					id: "keyboard",
					actions: [
						{ type: "keyUp", value: SPECIAL_KEYS.control }, // Release the control key
					],
				},
			]);
		}

		pressCtrl(keyToPress = "") {
			this.pressModifierKeyWith(SPECIAL_KEYS.control, keyToPress);
			//in case of an alert to accept and close alert popup
			if (browser.isAlertOpen()) {
				browser.acceptAlert();
			}
		}

		acceptAlert() {
			browser.alertAccept();
		}

		pressShift(keysToPress = "") {
			this.pressModifierKeyWith(SPECIAL_KEYS.left_shift, keysToPress);
		}

		// This function 'CTRL-clicks' the given element
		ctrlClick(element, keepCtrlDown = false) {
			browser.performActions([
				{
					type: "key",
					id: "keyboard",
					actions: [
						{ type: "keyDown", value: SPECIAL_KEYS.control }, // Press down the control key
					],
				},
			]);
			element.click();
			if (!keepCtrlDown) {
				browser.performActions([
					{
						type: "key",
						id: "keyboard",
						actions: [
							{ type: "keyUp", value: SPECIAL_KEYS.control }, // perform control key up
						],
					},
				]);
			}

			return this;
		}

		_getScrollPosition() {
			return browser.execute(() => ({ scrollX: this.scrollX, scrollY: this.scrollY }));
		}

		_getDragCoordinates(scope) {
			scope.scrollIntoView();
			const sourceRect = browser.getElementRect(scope.webElement.elementId);
			const { scrollX, scrollY } = this._getScrollPosition(scope);
			const sourceX = parseInt(sourceRect.x - scrollX + sourceRect.width / 2, 10);
			const sourceY = parseInt(sourceRect.y - scrollY + sourceRect.height / 2, 10);
			const source = {
				X: sourceX,
				Y: sourceY,
			};
			return source;
		}

		_performDrag(sourceX, sourceY, targetX, targetY) {
			browser.performActions([
				{
					type: "pointer",
					id: "finger1",
					parameters: { pointerType: "mouse" },
					actions: [
						{ type: "pointerMove", duration: 0, x: sourceX, y: sourceY },
						{ type: "pointerDown", button: 0 },
						{ type: "pause", duration: 10 }, // emulate human pause
						{ type: "pointerMove", duration: 100, x: targetX, y: targetY },
						{ type: "pointerUp", button: 0 },
					],
				},
			]);
		}

		dragScrollUp(resizeWidth = 40) {
			const dragHandlerElQ = this.webElement.find(
				".scrollable-wrap .antiscroll-scrollbar-vertical"
			);
			dragHandlerElQ.moveTo();
			const source = this._getDragCoordinates(dragHandlerElQ);
			const targetX = source.X;
			const targetY = source.Y - resizeWidth;
			this._performDrag(source.X, source.Y, targetX, targetY);
		}

		dragScrollDown(resizeWidth = 40) {
			const dragHandlerElQ = this.webElement.find(
				".scrollable-wrap .antiscroll-scrollbar-vertical"
			);
			dragHandlerElQ.moveTo();
			const source = this._getDragCoordinates(dragHandlerElQ);
			const targetX = source.X;
			const targetY = source.Y + resizeWidth;
			this._performDrag(source.X, source.Y, targetX, targetY);
		}

		// Gets the respective widget into focus
		// Read here for more info on scrollIntoViewOptions https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
		scrollIntoView(scrollIntoViewOptions = true) {
			$(this.webElement.selector).scrollIntoView(scrollIntoViewOptions);
		}

		/**
		 * Check if container has normal overflow with a visible, standard browser scrollbar by temporarily creating an exagerated scrollbar and sampling
		 * the color of the area that should have scrollbar background
		 * NOTE: Needs at least 2px freely scrollable area left so make sure container has some real overflow and not just a tiny bit
		 * NOTE2: of course does not work if a widget uses custom scrollbars. Those ones use inserted dom elements you might check for instead
		 * @param {number[]} colorToTestFor - defaults to pure purple. Change if needed due to colors present in the widget.
		 * @returns {boolean}
		 */
		hasWorkingStandardVerticalBrowserScrollBar(colorToTestFor = [255, 0, 255]) {
			// insert 2 rules for this class, making scrollbar wide and with a red background for the part that can still be scrolled to
			const tempStylingId = browser.execute(
				// eslint-disable-next-line no-shadow
				({ selector, colorToTestFor }) => {
					/**
					 * Add a new rule to an existing stylesheet. Or a new one if unspecified.
					 * @param selector
					 * @param css - either string or a literal
					 * @param id - optional id to use on stylesheet element if it still needs to be created. Required when stylesheetElement is omitted
					 * @param stylesheetElement - optional when desiring to create a new one
					 * @returns {HTMLStyleElement} the used stylesheet element, for re-use later or for removal
					 */
					// eslint-disable-next-line no-shadow
					const addStylingRule = (selector, css, id, stylesheetElement) => {
						let sheet;
						if (!stylesheetElement) {
							stylesheetElement = document.createElement("style");
							stylesheetElement.setAttribute("id", id);
							sheet = document.head.appendChild(stylesheetElement).sheet;
						} else {
							sheet = stylesheetElement.sheet;
						}

						const propText =
							typeof css === "string"
								? css
								: Object.keys(css)
										.map(
											(p) =>
												p +
												":" +
												(p === "content" ? "'" + css[p] + "'" : css[p])
										)
										.join(";");
						sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);

						return stylesheetElement;
					};

					// set up temporary class to apply style to. Apply class on webElement
					// eslint-disable-next-line no-shadow
					const tempStylingId = `tempStyle_${Date.now()}`;

					const $ = window.jQuery;
					const el = $(selector);
					el.addClass(tempStylingId);
					// eslint-disable-next-line no-shadow
					const tempInsertedLocalStylesheet = addStylingRule(
						`.${tempStylingId}::-webkit-scrollbar-track`,
						{
							"background-color": `rgb(${colorToTestFor[0]},${colorToTestFor[1]},${colorToTestFor[2]})!important`,
						},
						tempStylingId
					);
					addStylingRule(
						`.${tempStylingId}::-webkit-scrollbar`,
						{
							width: "20px!important",
							height: "5px!important",
						},
						tempStylingId,
						tempInsertedLocalStylesheet
					);

					return tempStylingId;
				},
				{ selector: this.webElement.selector, colorToTestFor }
			);

			const containerCoordinates = this.webElement.getBoundingClientRect();
			// Sample bottom right corner, -10, -10px offset, so we are guaranteed to enter the vertical scrollbar area with these coordinates
			const scrollAreaColor = this.pickColor(
				containerCoordinates.width - 10,
				containerCoordinates.height - 10
			);

			// clean up: remove the class and the stylesheet that defined it.
			browser.execute(
				// eslint-disable-next-line no-shadow
				({ selector, tempStylingId }) => {
					const $ = window.jQuery;
					const el = $(selector);
					el.removeClass(tempStylingId);
					const ss = document.getElementById(tempStylingId);
					ss.parentNode.removeChild(ss);
					el.removeClass(tempStylingId);
				},
				{ selector: this.webElement.selector, tempStylingId }
			);

			return (
				scrollAreaColor[0] === colorToTestFor[0] &&
				scrollAreaColor[1] === colorToTestFor[1] &&
				scrollAreaColor[2] === colorToTestFor[2]
			);
		}
	};

module.exports = {
	WithGenericActions,
};
