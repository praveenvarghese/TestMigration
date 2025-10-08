const { Widget } = require("../../widgets/widget");
const { mixable, mixin } = require("../../mixin");

const { WithDisplayDomainOptionEditor } = require("./displaydomain");
const { WithSlicesOptionEditor } = require("./slices");

const WithIdentifierSettingsOptionEditor = mixable(Widget, (_) =>
	mixin(_, WithDisplayDomainOptionEditor, WithSlicesOptionEditor)
);

module.exports = {
	WithIdentifierSettingsOptionEditor,
};
