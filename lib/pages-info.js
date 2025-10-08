/* global AWF */
const visit = (prefix, node, pagePath) => {
	prefix += `/${node.name}`;

	const slug =
		prefix.slice(1) === pagePath
			? node.slug
			: node.children.reduce((r, c) => r || visit(prefix, c, pagePath), undefined);

	return slug;
};

const findSlug = (pagePath) => {
	const webuiJsonParsed = browser.execute(() => AWF.webuiJson);

	pagePath = pagePath[0] === "/" ? pagePath.substring(1) : pagePath;
	let libraryName = pagePath.split("/")[0];

	// It looks like only Main Project is being stored without spaces in its folder name on disk. For other libraries,
	// the spaces are not removed. So make an exception for this case.
	if (libraryName === "Main Project") {
		libraryName = "MainProject";
	}

	let slug = "main_project";
	if (webuiJsonParsed[libraryName].application.pages) {
		slug = visit(
			"",
			webuiJsonParsed[libraryName].application.pages.literal.children[0],
			pagePath
		);
	} else {
		slug = pagePath.includes("home") ? "home" : slug;
	}
	return slug;
};

module.exports = {
	findSlug,
};
