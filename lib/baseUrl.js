const fs = require("fs");
const { appNameAndVersion } = require("./globals");

const host = process.env.WEBUI_HOST ?? "127.0.0.1";
const port = process.env.WEBUI_PORT ?? "12001";

let baseUrl = `http://${host}:${port}/${appNameAndVersion}`;

if (fs.existsSync(".base-url")) {
	try {
		baseUrl = (fs.readFileSync(".base-url", { encoding: "utf8" }) || "").trim();
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(e);
	}
}

module.exports = baseUrl;
