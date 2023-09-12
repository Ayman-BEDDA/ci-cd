// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import puppeteer, { Page } from 'puppeteer';
// import fs from 'fs';
const url = process.argv[1] || 'https://cv.bnei.dev';
const path = process.argv[2] || './gen';

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	// Launch the browser and open a new blank page
	const browser = await puppeteer.launch({
		headless: 'new',
		args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox']
	});

	await Promise.all([
		saveToPdf(await browser.newPage()),
		saveToPdf(await browser.newPage(), true),
		saveToMhtml(await browser.newPage()),
		saveToMhtml(await browser.newPage(), true)
	]);

	console.log('Created PDFs and MHTMLs!');

	await browser.close();
})();

/**
 * Saves the current page as a PDF.
 *
 * @param {Page} page - The page to save as a PDF.
 * @param {boolean} en - Whether to save the PDF in English.
 * @return {Promise<void>} - A promise that resolves when the PDF is saved.
 */
const saveToPdf = async (page, en = false) => {
	await page.goto(`${url}/${en ? 'en' : ''}?snapshot`);
	await page.setViewport({ width: 1080, height: 1024 });
	await page.pdf({
		path: `${path}/${en ? 'cv-en.pdf' : 'cv.pdf'}`,
		scale: 0.5,
		landscape: false,
		pageRanges: '1',
		printBackground: true
	});
};

/**
 * Saves the current page as an MHTML file.
 *
 * @param {Page} page - The page to save as MHTML.
 * @param {boolean} en - Determines if the page is in English (default: false).
 * @return {Promise<void>} - A promise that resolves when the save is complete.
 */
const saveToMhtml = async (page, en = false) => {
	await page.goto(`${url}/${en ? 'en' : ''}?snapshot`);
	const session = await page.target().createCDPSession();
	await session.send('Page.enable');
	const { data } = await session.send('Page.captureSnapshot', { format: 'mhtml' });
	await fs.writeFile(`${path}/${en ? 'cv-en.mhtml' : 'cv.mhtml'}`, data, 'utf8', (err) => {
		if (err) console.error({ err });
	});
};
