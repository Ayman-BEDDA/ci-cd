<script context="module" lang="ts">
	export interface ITitle {
		jobDesc: string;
	}
</script>

<script lang="ts">
	export let title: ITitle = {
		jobDesc: 'Ingénieur web'
	};
</script>

<div class="text-center">
	<h1 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">{title.jobDesc}</h1>
</div>
