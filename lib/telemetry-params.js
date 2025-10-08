const path = require("path");

// In the pipeline, the job id may look like this:
// webui_perf_test_6_8-65857plid-3452041pjid-2753874ppid-1583223529rnd
// We need to parse it this string to get gitlab job id.
const jobIdRe = /(\d+)pjid/;

function parseJobId(jobId) {
	// jobId should not be zero, null or undefined
	if (!jobId) throw new Error(`Invalid job id ${jobId}`);

	let parsedId = Number.parseInt(jobId, 10);
	if (`${parsedId}` !== `${jobId}`) {
		const matches = jobId.match(jobIdRe);
		if (!matches?.[1]) throw new Error(`Invalid job id ${jobId}`);
		parsedId = matches[1];
	}

	return parsedId;
}
module.exports = {
	pipelineId: process.env.CI_PIPELINE_ID,
	jobId: parseJobId(process.env.CI_JOB_ID),
	commitSHA: process.env.CI_COMMIT_SHA,
	aimmsVersion: ((process.env.AIMMS_VERSION || "").split("-") || [])[1] || "",
	modelName: path.basename(process.env.AIMMS_FILE_RELATIVE_PATH),
};
