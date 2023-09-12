import * as data from '$lib/data';
import type { PageLoad } from './$types';

export const load = (async () => {
	return { ...data };
}) satisfies PageLoad;
