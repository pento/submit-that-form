import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
		reminderTimes: ''
	},
	migrations: [
		OptionsSync.migrations.removeUnused
	],
	logging: true
});
