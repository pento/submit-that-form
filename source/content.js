import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener(request => {
	if (request.action !== 'check-unsubmitted-forms') {
		return;
	}

	const textareas = document.querySelectorAll('textarea');

	for (const textarea of textareas) {
		if (textarea.value !== textarea.defaultValue) {
			return Promise.resolve({unsubmitted: true});
		}
	}

	return Promise.resolve({unsubmitted: false});
});
