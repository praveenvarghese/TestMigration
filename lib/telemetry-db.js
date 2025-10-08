/*
DB: webui
+-------+---------------------------------------------------------------------+
| Table | Create Table                                                        |
+-------+---------------------------------------------------------------------+
| perf  | CREATE TABLE `perf` (                                               |
|       |   `id` bigint(20) NOT NULL AUTO_INCREMENT,                          |
|       |   `pipeline_id` bigint(20) NOT NULL,                                |
|       |   `job_id` bigint(20) NOT NULL,                                     |
|       |   `aimms_version` varchar(255) NOT NULL,                            |
|       |   `duration_ms` bigint(20) NOT NULL,                                |
|       |   `model_name` varchar(255) NOT NULL,                               |
|       |   `commit_sha` varchar(255) NOT NULL,                               |
|       |   `current_page` varchar(255) NOT NULL,                             |
|       |   `previous_page` varchar(255) NOT NULL,                            |
|       |   `ref_name` varchar(255) NOT NULL,                            |
|       |   `created_at` datetime NOT NULL,                                   |
|       |   `updated_at` datetime NOT NULL,                                   |
|       |   PRIMARY KEY (`id`),                                               |
|       |   KEY `index_aimms_version` (`aimms_version`),                      |
|       |   KEY `index_model_name` (`model_name`),                            |
|       |   KEY `index_current_page` (`current_page`),                        |
|       |   KEY `index_ref_name` (`ref_name`),                                |
|       |   KEY `index_model_name_current_page` (`model_name`,`current_page`) |
|       | ) ENGINE=InnoDB DEFAULT CHARSET=utf8                                |
+-------+---------------------------------------------------------------------+
*/

const mysql = require("mysql2/promise");

module.exports = async function logToDb(logs) {
	let isSuccessful = true;
	const connection = await mysql.createConnection({
		host: process.env.TELEMETRY_DB_HOST,
		user: process.env.TELEMETRY_DB_USER,
		password: process.env.TELEMETRY_DB_PASS,
		database: process.env.TELEMETRY_DB_NAME,
		connectTimeout: 30 * 1000, // 20 seconds timeout
	});

	const colNames = [
		"pipeline_id",
		"job_id",
		"aimms_version",
		"webui_version",
		"duration_ms",
		"model_name",
		"commit_sha",
		"current_page",
		"ref_name",
		"created_at",
		"updated_at",
		"previous_page",
	];

	const valuesText = logs.map((valuesList) => `(${valuesList.map((x) => `"${x}"`)})`);
	const sql = `INSERT INTO perf (${colNames.join(",")}) VALUES ${valuesText}`;

	// eslint-disable-next-line no-console
	console.log(sql);

	try {
		const [result] = await connection.query(sql);

		if (result.affectedRows !== logs.length) {
			// eslint-disable-next-line no-console
			console.log("Failed to insert all rows in db");
			isSuccessful = false;
		}
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log(e);
		isSuccessful = false;
	} finally {
		await connection.end();
	}

	return isSuccessful;
};
