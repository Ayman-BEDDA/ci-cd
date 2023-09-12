import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: { include: ['dayjs/plugin/relativeTime.js'] }
};

export default config;
