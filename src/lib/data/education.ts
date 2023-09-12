import type { IEducation } from '$lib/component/education.svelte';

export const education: IEducation[] = [
	// {
	// 	level: 'DUT',
	// 	title: 'DUT GEII (Génie électrique et informatique industrielle)',
	// 	school: 'IUT Lyon 1',
	// 	startDate: new Date('2013-09-01'),
	// 	endDate: new Date('2015-07-01'),
	// 	description: `Acquisition de connaissances en mathématiques, physique, électricité, électronique et robotique.`,
	// 	skills: [
	// 		{ name: 'mathématiques', category: 'science', color: 'gray' },
	// 		{ name: 'physique', category: 'science', color: 'gray' },
	// 		{ name: 'électricité', category: 'science', color: 'gray' },
	// 		{ name: 'électronique', category: 'science', color: 'gray' },
	// 		{ name: 'robotique', category: 'science', color: 'gray' }
	// 	]
	// },
	// {
	// 	startDate: new Date('2016-09-01'),
	// 	endDate: new Date('2017-07-01'),
	// 	level: '',
	// 	title: 'Flânerie',
	// 	school: '',
	// 	description: `Occupation de divers postes : serveur, technicien informatique, ouvrier dans le BTP. Acquisition d'une éthique du travail, de compétences en relation client et de rigueur.`,
	// 	skills: [
	// 		{ name: 'relation client', category: 'other', color: 'gray' },
	// 		{ name: 'rigeur', category: 'other', color: 'gray' }
	// 	]
	// },
	{
		level: 'Licence',
		title: 'RNCP niveau II ',
		school: 'My Digital School - Paris',
		startDate: new Date('2017-09-01'),
		endDate: new Date('2018-07-01'),
		description: `Formation intensive en NodeJS, React, Python, Flutter et Kotlin. Apprentissage de la gestion de bases de données SQL et NoSQL et de la méthodologie Agile.`,
		skills: [
			{ name: 'nodejs', category: 'frontend' },
			{ name: 'python', category: 'backend' },
			{ name: 'kotlin', category: 'backend' },
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'flutter', category: 'frontend' },
			{ name: 'sql', category: 'data' },
			{ name: 'nosql', category: 'data' },
			{ name: 'git', category: 'other' },
			{ name: 'agile', category: 'other' }
		]
	},
	{
		level: 'Master',
		title: 'RNCP niveau I ',
		school: 'ESGI - Paris',
		startDate: new Date('2019-09-01'),
		endDate: new Date('2021-07-01'),
		description: `Formation avancée en GoLang, Python, NodeJS, React, Docker, Linux, Terraform et Kubernetes. Exploration des technologies cloud et méthodologie Agile.`,
		skills: [
			{ name: 'golang', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'nodejs', category: 'frontend' },
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'vuejs', category: 'frontend' },
			{ name: 'docker', category: 'devops' },
			{ name: 'terraform', category: 'devops' },
			{ name: 'kubernetes', category: 'devops' },
			{ name: 'google cloud', category: 'devops' },
			{ name: 'aws', category: 'devops' },
			{ name: 'azure', category: 'devops' },
			{ name: 'git', category: 'other' },
			{ name: 'sql', category: 'data' },
			{ name: 'mongodb', category: 'data' },
			{ name: 'linux', category: 'devops' },
			{ name: 'agile', category: 'other' }
		]
	}
];
