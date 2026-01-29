"use strict";

function redirect(requestDetails) {
	const originalUrl = new URL(requestDetails.url);
	const redirectUrl =
		"https://x.com" +
		originalUrl.pathname +
		originalUrl.search; // preserve query string for x.com
	console.log(`redirect from ${originalUrl} to ${redirectUrl}`);
	return { redirectUrl: redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{
		urls: ["*://*.xcancel.com/*"],
		types: ["main_frame"],
	},
	["blocking"],
);
