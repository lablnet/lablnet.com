export const meta = {
    company: {
        title: "Where I’ve worked.",
        description: "",
    },
    topProjects: {
        title: "Top Projects.",
        description: ""
    },
    projects:  {
        title: "Things I've been worki`ng on.",
        description: ""
    },
    skills: {
        title: 'Skills.',
        description: 'As a student, I am constantly learning and expanding my knowledge. Some of the skills \n I have developed include:',
    },
    certificate: {
        title: 'Certificates.',
        description: 'I enjoy facing challenges that are given by my teachers. Here is my educational background',
    },
    education: {
        title: 'Education.',
        description: 'I enjoy facing challenges that are given by my teachers. Here is my educational background.',
    },
}

export const data = [
	[
		{
			id: "workexp",
			key: 'work',
			title: 'Work Experience',
			component: 'Companies'
		},
		{
			id: "workexp",
			key: 'skills',
			title: 'Skills',
			component: 'Skills'
		}
	],
	[
		{
			id: "projects",
			key: "recent",
			title: "Recent Projects",
			component: "RecentProjects"
		},
		{
			id: "projects",
			key: "top",
			title: "Top Projects",
			component: "Projects"
		}
	],
	[
		{
			id: "educert",
			key: "education",
			title: "Education",
			component: "Education"
		},
		{
			id: "educert",
			key: "certifications",
			title: "Certifications",
			component: "Certificate"
		}
	]
]
