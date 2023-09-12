<script context="module" lang="ts">
	export interface IBadge {
		content: string;
		color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'none';
	}
</script>

<script lang="ts">
	export let content: string;
	export let color: IBadge['color'] = 'none';
	export let selected = false;
</script>

<span
	class="inline-flex items-center rounded-md {color} px-2 py-1 text-xs ring-1 ring-inset hover:skew-y-2 transition"
	>{content.toLocaleUpperCase()}</span
>

<style lang="postcss">
	.none {
		@apply ring-base-200 dark:ring-gray-500;
	}
	.gray {
		@apply ring-gray-500/10;
	}
	.red {
		@apply bg-red-200 dark:bg-red-800 ring-red-500/10;
	}
	.yellow {
		@apply bg-yellow-200 dark:bg-yellow-800 ring-yellow-500/10;
	}
	.green {
		@apply bg-green-200 dark:bg-green-800 ring-green-500/10;
	}
	.blue {
		@apply bg-blue-200 dark:bg-blue-800 ring-blue-500/10;
	}
	.indigo {
		@apply bg-indigo-200 dark:bg-indigo-800 ring-indigo-500/10;
	}
	.purple {
		@apply bg-purple-200 dark:bg-purple-800 ring-purple-500/10;
	}
	.pink {
		@apply bg-pink-200 dark:bg-pink-800 ring-pink-500/10;
	}
</style>
