import browser from 'webextension-polyfill';

const findTabs = browser.tabs.query({});
findTabs.then(listTabs);

function listTabs(tabs) {
	const container = document.querySelector('#container');
	container.innerHTML = '';

	for (const tab of tabs) {
		browser.tabs.sendMessage(
			tab.id,
			{action: 'check-unsubmitted-forms'}
		).then(response => {
			if (response.unsubmitted) {
				container.innerHTML += tab.title + '<br>';
			}
		}).catch(() => {});
	}
}
