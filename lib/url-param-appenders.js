const { isWdioRunningInsideDocker } = require("../config/wdio/wdio.env.conf.js");
const dndServer = require("../config/wdio/wdio.dnd.conf.js");
const { isDndSpec, isProSpec, isTabletSpec, isEndUserMode } = require("./globals");

const appenders = [
	function appendTelemetry(url) {
		if (
			process.env.CI_JOB_NAME &&
			process.env.CI_JOB_NAME.startsWith("perf_e2e_test") === true
		) {
			const telemetryParams = require("./telemetry-params");
			Object.keys(telemetryParams).forEach((k) => {
				if (telemetryParams[k] && telemetryParams[k] !== "") {
					url.searchParams.append(k, telemetryParams[k]);
				}
			});
		}
		return url;
	},

	function appendPro(url) {
		if (isProSpec && !isEndUserMode) {
			url.searchParams.append("mode", "server");
		}
		return url;
	},

	function appendTablet(url) {
		if (isTabletSpec && !isEndUserMode) {
			url.searchParams.append("mode", "server");
		}
		return url;
	},

	function appendFeatureWritePersistence(url) {
		// If a test explicitly states it needs to write to disk, don't make the test unstable by incurring
		// a debounce timeout penalty in awf.state.m.js
		if (url.searchParams.get("_aimms_only_persistence.write") === "true") {
			url.searchParams.append("STATE_DEBOUNCE_TIMEOUT_MS", "0");
		}
		return url;
	},

	function appendFeatureMapproxy(url) {
		if (
			isWdioRunningInsideDocker &&
			url.searchParams.get("_aimms_only_osm_mapproxy") === null
		) {
			url.searchParams.append("_aimms_only_osm_mapproxy", "true");
		}
		return url;
	},

	function appendFeatureNoDeprecationDialog(url) {
		if (url.searchParams.get("_aimms_only_no_deprecation_dialog") === null) {
			url.searchParams.append("_aimms_only_no_deprecation_dialog", "true");
		}
		return url;
	},

	function appendFeatureIgnoreClassicThemePresenceDialog(url) {
		if (url.searchParams.get("_aimms_only_no_classic_theme_dialog") === null) {
			url.searchParams.append("_aimms_only_no_classic_theme_dialog", "true");
		}
		return url;
	},

	function appendDnd(url) {
		if (isDndSpec) {
			if (url.searchParams.get("dnd") === null) {
				url.searchParams.append("dnd", "true");
			}
		}
		return url;
	},

	function appendDnDHost(url) {
		if (isDndSpec) {
			if (url.searchParams.get("_aimms_only_dnd_server_host") === null) {
				url.searchParams.append("_aimms_only_dnd_server_host", dndServer.host);
			}
		}
		return url;
	},

	function appendDnDScheme(url) {
		if (isDndSpec) {
			if (url.searchParams.get("_aimms_only_dnd_server_scheme") === null) {
				url.searchParams.append("_aimms_only_dnd_server_scheme", dndServer.scheme);
			}
		}
		return url;
	},

	function appendDnDPort(url) {
		if (isDndSpec) {
			if (url.searchParams.get("_aimms_only_dnd_server_port") === null) {
				url.searchParams.append("_aimms_only_dnd_server_port", dndServer.port);
			}
		}
		return url;
	},
];

module.exports = appenders;
