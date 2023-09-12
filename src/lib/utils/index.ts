import type { IBadge } from '$lib/component/ui/badge.svelte';
import dayjs from 'dayjs';

export const formatDate = (date: Date): string =>
	dayjs(date).format('MMM YYYY').charAt(0).toUpperCase() + dayjs(date).format('MMM YYYY').slice(1);

export const reduceSkills = (acc: IBadge[], cur: IBadge[]) => {
	for (const skill of cur) {
		if (!acc.find((a) => a.content === skill.content)) acc.push(skill);
	}

	return acc;
};
