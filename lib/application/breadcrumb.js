const { FrameworkObject } = require("../framework-object");
const jQuery = require("jquery-node");

class Breadcrumb extends FrameworkObject {
	getBreadcrumbLink(index = 0) {
		return this.webElement.find(`li:eq(${index}) a`);
	}

	getBreadcrumbsInfo() {
		const breadcrumbLinks = [];
		const breadcrumb = jQuery(this.webElement.getHTML());
		const breadcrumbLinksCount = breadcrumb.find("li").length;
		for (let index = 0; index < breadcrumbLinksCount; index++) {
			const breadcrumbElement = breadcrumb.find(`li:eq(${index})`);

			// Bread Crumb Text
			const text = breadcrumbElement.text();

			// Bread Crumb Link
			const link = breadcrumbElement.find(`a`).attr("href");
			breadcrumbLinks.push({
				Index: index,
				Name: text,
				Link: link,
			});
		}

		return breadcrumbLinks;
	}
}

module.exports = Breadcrumb;
