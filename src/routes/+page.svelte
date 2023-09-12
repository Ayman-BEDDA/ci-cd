<script lang="ts">
	import Home from '$lib/component/home.svelte';
	import HeadTags from '$lib/component/seo/HeadTags.svelte';
	import type { IMetaTagProperties } from '$lib/seo';

	export let data: import('./$types').PageData;

	let metaData: Partial<IMetaTagProperties> = {
		title: 'CV - ' + data.contactInfo.name,
		description:
			'Bienvenue sur mon CV en ligne. Vous trouverez ici toutes les informations concernant mes expériences, compétences, formations et coordonnées. N’hésitez pas à me contacter pour toute proposition ou pour plus d’informations.',
		url: `https://cv.bnei.dev`,
		logoUrl: 'https://cv.bnei.dev/favicon-32x32.png',
		keywords: ['CV', data.contactInfo.name, ...data.skills.map((skill) => skill.name)],
		searchUrl: `https://cv.bnei.dev`,
		image: 'https://cv.bnei.dev/android-chrome-192x192.png',
		sitemapUrl: 'https://cv.bnei.dev/sitemap.xml'
	};
</script>

<HeadTags {metaData} />

<Home {...data} />
