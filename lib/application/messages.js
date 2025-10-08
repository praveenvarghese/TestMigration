const $$$ = require("../selenium/3xdollar");
const { RootAction } = require("yemen");
const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");
const mixin = require("../mixin");
const { WithGenericActions } = require("../widgets/traits/generic-actions");
class LogMessage extends mixin(FrameworkObject, WithGenericActions) {
	openList() {
		if (!this.isLogMessagesWindowOpen()) {
			this.webElement.click();
		}
		return this;
	}

	// MB: this function used to have the '.unread' criterion as well, next to the '.log-list'. However, I found that by opening the list (which is needed to access it for calling getCount()!),
	//     the .unread was removed from the messages (opening = reading, apparently). Therefore, I remove the .unread.
	getCount() {
		this.openList(); // MB: added the openList, as this is what you always want to do before being able to count at all

		const unreadLogMessages = this.webElement.findIfAny(".log-list li");
		const message_count = unreadLogMessages.any() ? unreadLogMessages.length : 0;

		this.closeList(); // MB: and close again.

		return message_count;
	}

	getErrorCount() {
		this.openList(); // MB: added the openList, as this is what you always want to do before being able to count at all

		const unreadErrorMessages = this.webElement.findIfAny(".log-list li .icon-warning2");
		const message_count = unreadErrorMessages.any() ? unreadErrorMessages.length : 0;

		this.closeList(); // MB: and close again.

		return message_count;
	}

	isLogMessagesWindowOpen() {
		return (
			this.webElement
				.getAttribute("class")
				.split(" ")
				.indexOf("open") !== -1
		);
	}

	getLastReportedLogMessage(index = 0) {
		this.openList();
		const logMessage = this.webElement.findIfAny(`.log-list li:eq(${index})`);
		const messageText = logMessage.any() ? logMessage.getText() : "";
		return messageText;
	}

	getUnreadMessagesCount() {
		const unreadMessages = this.webElement.findIfAny(".log-list li.unread");
		const unreadMessages_count = unreadMessages.any() ? unreadMessages.length : 0;

		return unreadMessages_count;
	}

	closeList() {
		if (this.isLogMessagesWindowOpen()) {
			this.webElement.click();
		}
	}

	getMessages() {
		const logListContainer = jQuery(this.webElement.find(".log-list-container").getHTML());
		const isLogListCollapsed = logListContainer.attr("class").includes("collapsed");
		if (isLogListCollapsed) {
			throw new Error("Log list is collapsed. Cannot read the messages.");
		}
		const messages = [];
		const logMessageCount = logListContainer.find(`.log-list li`).length;
		for (let index = 0; index < logMessageCount; index++) {
			// Get the LogMessage WebElement
			const logMessageWebElement = logListContainer.find(`.log-list li:eq(${index})`);

			// Status
			const status = logMessageWebElement.attr("class") === "unread" ? "Unread" : "Read";

			// // Time
			// const time = logMessageWebElement.find(`.time`).text();

			// Icon
			const icon_class = this.getIconClassName(logMessageWebElement.find(`i`)[0]);

			// Header
			const header = logMessageWebElement.contents().get(3).textContent;

			// Message
			const message = logMessageWebElement.contents().get(5).textContent;

			messages.push({
				Header: header,
				Message: message,
				Icon: icon_class,
				Status: status,
				//Time: time,
			});
		}

		return messages;
	}
}

LogMessage._get = () => new LogMessage($$$(".logging-button"));

const getLogMessage = new RootAction("getLogMessage", () => LogMessage._get());

module.exports = {
	LogMessage,
	onRegisterActions: (actionRegistry) => {
		actionRegistry.push(getLogMessage);
	},
};
