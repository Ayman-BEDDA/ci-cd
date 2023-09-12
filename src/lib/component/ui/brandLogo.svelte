<script lang="ts">
	import type { IContactInfo } from '../contact.svelte';
	import Github from './svg/github.svelte';
	import Linkedin from './svg/linkedin.svelte';

	export let type: IContactInfo['links'][0]['type'];

	export let width: number | undefined;
</script>

{#if type === 'github'}
	<Github {width} />
{/if}
{#if type === 'linkedin'}
	<Linkedin {width} />
{/if}
