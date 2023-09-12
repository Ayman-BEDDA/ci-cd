// Filename : education.ts
import type { IEducation } from '$lib/component/education.svelte';

export const education: IEducation[] = [
	// {
	// 	level: 'DUT',
	// 	title: 'DUT GEII (Electrical Engineering and Industrial Informatics)',
	// 	school: 'IUT Lyon 1',
	// 	startDate: new Date('2013-09-01'),
	// 	endDate: new Date('2015-07-01'),
	// 	description: `Acquisition of knowledge in math, physics, electricity, electronics, and robotics.`,
	// 	skills: [
	// 		{ name: 'math', category: 'science', color: 'gray' },
	// 		{ name: 'physics', category: 'science', color: 'gray' },
	// 		{ name: 'electricity', category: 'science', color: 'gray' },
	// 		{ name: 'electronics', category: 'science', color: 'gray' },
	// 		{ name: 'robotics', category: 'science', color: 'gray' }
	// 	]
	// },
	// {
	// 	startDate: new Date('2016-09-01'),
	// 	endDate: new Date('2017-07-01'),
	// 	level: '',
	// 	title: 'Casual Jobs',
	// 	school: '',
	// 	description: `Held various positions: waiter, IT technician, building and construction worker. Gained a work ethic, customer relationship skills, and rigor.`,
	// 	skills: [
	// 		{ name: 'customer relationship', category: 'other', color: 'gray' },
	// 		{ name: 'rigor', category: 'other', color: 'gray' }
	// 	]
	// },
	{
		level: 'License',
		title: 'RNCP Level II',
		school: 'My Digital School - Paris',
		startDate: new Date('2017-09-01'),
		endDate: new Date('2018-07-01'),
		description: `Intensive training in NodeJS, React, Python, Flutter, and Kotlin. Learned databases management SQL and NoSQL and Agile methodology.`,
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
		title: 'RNCP Level I',
		school: 'ESGI - Paris',
		startDate: new Date('2019-09-01'),
		endDate: new Date('2021-07-01'),
		description: `Advanced training in GoLang, Python, NodeJS, React, Docker, Linux, Terraform, and Kubernetes. Explored cloud technologies and Agile methodology.`,
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
