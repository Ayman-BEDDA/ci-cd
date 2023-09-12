import * as data from '$lib/data/en';
import type { PageLoad } from './$types';

export const load = (async () => {
	return { ...data };
}) satisfies PageLoad;
