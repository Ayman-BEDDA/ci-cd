import type { IContactInfo } from '$lib/component/contact.svelte';
import type { ISkill } from '$lib/component/skill.svelte';
import type { ITitle } from '$lib/component/title.svelte';
import { education } from './education';
import { experience } from './experiences';
import { hobbies, langs } from './langHobbies';

export { experience, education, langs, hobbies };

export const title: ITitle = {
	jobDesc: 'Web Engineer'
};

export const contactInfo: IContactInfo = {
	name: 'Mohammad-Amine BANAEI',
	nationality: 'French Nationality',
	phone: '+33 6 61 93 90 82',
	email: 'mohammadamine.banaei@pm.me',
	links: [
		{
			url: 'https://bnei.dev',
			type: 'other'
		},
		{
			name: 'Github',
			url: 'https://github.com/mohammadbnei',
			type: 'github'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/mbnei',
			type: 'linkedin'
		}
	]
};

export const skills: ISkill[] = [
	{
		name: 'golang',
		category: 'backend'
	},
	{
		name: 'nodejs',
		category: 'backend'
	},
	{
		name: 'reactjs',
		category: 'frontend'
	},
	{
		name: 'sveltekit',
		category: 'frontend'
	},
	{
		name: 'sql',
		category: 'data'
	},
	{
		name: 'mongodb',
		category: 'data'
	},
	{
		name: 'kubernetes',
		category: 'devops'
	},
	{
		name: 'docker',
		category: 'devops'
	},
	{
		name: 'gcp',
		category: 'system'
	},
	{
		name: 'linux',
		category: 'system'
	}
];
