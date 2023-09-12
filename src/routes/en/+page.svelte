<script lang="ts">
	import Home from '$lib/component/home.svelte';
	import HeadTags from '$lib/component/seo/HeadTags.svelte';
	import type { IMetaTagProperties } from '$lib/seo';
	
	export let data: import('./$types').PageData;

	let metaData: Partial<IMetaTagProperties> = {
		title: data.contactInfo.name + ' - Resume',
		description:
			'Welcome to my online resume. Here you will find all the information regarding my experiences, skills, training and contact details. Feel free to contact me for any offers or for more information.',
		url: `https://cv.bnei.dev/en`,
		logoUrl: 'https://cv.bnei.dev/favicon-32x32.png',
		keywords: ['CV', data.contactInfo.name, ...data.skills.map((skill) => skill.name)],
		searchUrl: `https://cv.bnei.dev`,
		image: 'https://cv.bnei.dev/android-chrome-192x192.png',
		sitemapUrl: 'https://cv.bnei.dev/sitemap.xml'
	};
</script>

<HeadTags {metaData} />

<Home {...data} />

