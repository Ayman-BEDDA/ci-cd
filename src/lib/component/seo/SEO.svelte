<script lang="ts">
	import type { IMetaTagProperties } from '$lib/seo';

	/**
	 * @type {IMetaTagProperties}
	 */
	export let metaData: Partial<IMetaTagProperties> = {
		logoUrl: 'https://voconsteroid.com/favicon.ico',
		sitemapUrl: 'https://voconsteroid.com/sitemap.xml'
	};

	metaData = {
		robots: 'index,follow',
		openGraph: {
			title: metaData.title,
			description: metaData.description,
			url: metaData.url,
			locale: 'fr_FR',
			...metaData.openGraph
		},
		twitter: {
			title: metaData.title,
			description: metaData.description,
			...metaData.twitter
		},
		...metaData
	};

	const jsonLd = (content: unknown) =>
		`<${'script'} type="application/ld+json">${JSON.stringify(content)}</${'script'}>`;

	$: {
		if (!!metaData.image && typeof metaData.image === 'string') {
			metaData.openGraph = {
				image: metaData.image,
				...metaData.openGraph
			};
			metaData.twitter = {
				image: metaData.image,
				...metaData.twitter
			};
		}
		if (typeof metaData.image === 'object') {
			metaData.openGraph = {
				image: metaData.url,
				'image:width': metaData.image.width,
				'image:height': metaData.image.height,
				'image:alt': metaData.image.alt || metaData.title,
				...metaData.openGraph
			};
			metaData.twitter = {
				image: metaData.url,
				'image:alt': metaData.image.alt || metaData.title,
				...metaData.twitter
			};
		}
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta name="robots" content={metaData.robots} />
	<meta name="googlebot" content={metaData.robots} />

	{#if metaData?.title}
		<title>{metaData.title}</title>
		<meta name="title" content={metaData.title} />
	{/if}

	{#if metaData?.description}
		<meta name="description" content={metaData.description} />
	{/if}

	{#if metaData?.keywords}
		<meta name="keywords" content={metaData.keywords.join(', ')} />
	{/if}

	{#if metaData?.url}
		<link rel="canonical" href={metaData.url} />
	{/if}

	{#if metaData?.sitemapUrl}
		<link rel="sitemap" type="application/xml" title="Sitemap" href={metaData.sitemapUrl} />
	{/if}

	{#if metaData?.rss}
		<link rel="alternate" type="application/rss+xml" title="RSS Feed" href={metaData.rss} />
	{/if}

	{#if metaData?.atom}
		<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href={metaData.atom} />
	{/if}

	{#if metaData?.twitter}
		<meta name="twitter:card" content="summary_large_image" />

		{#each Object.keys(metaData.twitter) as tag}
			<meta name="twitter:{tag}" content={metaData.twitter[tag]} />
		{/each}
	{/if}

	{#if metaData?.openGraph}
		{#each Object.keys(metaData.twitter) as tag}
			<meta name="og:{tag}" content={metaData.openGraph[tag]} />
		{/each}
	{/if}

	{#if metaData?.article}
		{#each Object.keys(metaData.article) as tag}
			<meta name="article:{tag}" content={metaData.article[tag]} />
		{/each}
	{/if}

	{#if metaData?.url}
		{@html jsonLd({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			url: metaData.url,
			logo: metaData.logoUrl
		})}
	{/if}

	{#if metaData?.url && metaData.searchUrl}
		{@html jsonLd({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			url: metaData.url,
			potentialAction: {
				'@type': 'SearchAction',
				target: metaData.searchUrl,
				'query-input': 'required name=search_term_string'
			}
		})}
	{/if}
</svelte:head>
