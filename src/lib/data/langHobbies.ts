import type { IHobby } from '$lib/component/hobby.svelte';
import type { ILang } from '$lib/component/lang.svelte';

export const langs: ILang[] = [
	{
		name: 'français',
		codes: [
			'bi',
			'bf',
			'bj',
			'bl',
			'ca',
			'cd',
			'cf',
			'cg',
			'ch',
			'ci',
			'cm',
			'dj',
			'fr',
			'ga',
			'gf',
			'gn',
			'gp',
			'gq',
			'ht',
			'km',
			'lu',
			'mc',
			'mg',
			'ml',
			'mq',
			'nc',
			'ne',
			'pf',
			'pm',
			're',
			'rw',
			'sc',
			'sn',
			'td',
			'tg',
			'vu',
			'wf',
			'yt'
		],
		comment: 'Langue maternelle'
	},
	{
		name: 'anglais',
		codes: [
			'ag',
			'ai',
			'au',
			'bb',
			'bd',
			'bs',
			'bz',
			'ca',
			'dm',
			'fj',
			'gb',
			'gd',
			'gh',
			'gm',
			'gy',
			'ie',
			'in',
			'jm',
			'ke',
			'ki',
			'kn',
			'lc',
			'lr',
			'ls',
			'mg',
			'mh',
			'mt',
			'mu',
			'mw',
			'na',
			'ng',
			'nr',
			'nz',
			'pg',
			'ph',
			'pk',
			'sb',
			'sc',
			'sg',
			'sl',
			'ss',
			'sz',
			'tc',
			'to',
			'tt',
			'tv',
			'tz',
			'ug',
			'us',
			'vc',
			'vg',
			'vi',
			'vu',
			'ws',
			'za',
			'zm',
			'zw'
		],
		comment: 'bilingue'
	},
	{
		name: 'persian',
		codes: ['af', 'ir', 'tj'],
		comment: 'parlé'
	}
];

export const hobbies: IHobby[] = [
	{
		name: 'boxe',
		comment: 'anglaise & thaïlandaise',
		svg: '/boxing-glove.svg'
	},
	{
		name: 'lecture',
		comment: 'Weber, Maupassant',
		svg: '/reading.svg'
	}
];