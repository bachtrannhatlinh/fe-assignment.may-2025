import { IUser } from "@/types/users";

export const workPackages = [
	{
		title: "Work package 1",
		desc: "Define system structure, technology stack, and integration flow. Includes do...",
	},
	{
		title: "Work package 2",
		desc: "Build a modern single-page application (SPA) using SvelteKit, integrated with ...",
	},
	{
		title: "Work package 3",
		desc: "Set up continuous integration and deployment pipeline using GitHub acti...",
	},
	{
		title: "Work package 4",
		desc: "Identify and document business processes, user roles, and key feature...",
	},
	{
		title: "Work package 5",
		desc: "Define overall architecture, services layout, tech stack, and database strate ...",
	},
	{
		title: "Work package 6",
		desc: "Design complex data relationships, event flows (CQRS/Event Sourcing), and ...",
	},
	{
		title: "Work package 7",
		desc: "Deliver wireframes and high-fidelity designs for key screens using Figma ...",
	},
	{
		title: "Work package 8",
		desc: "Develop frontend using SvelteKit integrated with a CMS like Directus or ...",
	},
	{
		title: "Work package 9",
		desc: "Implement domain-driven backend API with authentication, user roles, and ...",
	},
];

export const categories = [
	{ label: "All Work Packages", active: true },
	{ label: "Architectural WPs" },
	{ label: "Development WPs" },
	{ label: "Operation WPs" },
	{ label: "Basic" },
	{ label: "Comprehensive" },
	{ label: "Advanced" },
];

export const users: IUser[] = [
	{
		avatar: "/avatars/image-user-1.png",
		name: "Mr. David Nguyen",
		id: "LOO0001",
		phone: "(322) 243-3452",
		email: "david.nguyen@gmail.com",
		type: "Loan Officer",
		experience: "5 years",
		status: "ACTIVE",
	},
	{
		avatar: "/avatars/image-user-2.png",
		name: "Ms. Jennie Pink",
		id: "UW00001",
		phone: "(322) 243-3452",
		email: "jenniepink@gmail.com",
		type: "Underwriter",
		experience: "5 years",
		status: "ACTIVE",
	},
	{
		avatar: "/avatars/image-user-3.png",
		name: "Mr. Pep Guardiola",
		id: "LP00001",
		phone: "(322) 243-3452",
		email: "pepguardiola@gmail.com",
		type: "Loan Processor",
		experience: "5 years",
		status: "ACTIVE",
	},
	{
		avatar: "/avatars/image-user-4.png",
		name: "Mr. Bruno Mar",
		id: "AD00001",
		phone: "(322) 243-3452",
		email: "brunomors@gmail.com",
		type: "Admin",
		experience: "5 years",
		status: "ACTIVE",
	},
	{
		avatar: "/avatars/image-user-5.png",
		name: "Mr. David Beckham",
		id: "ME00001",
		phone: "(322) 243-3452",
		email: "davidbeckham@gmail.com",
		type: "Member",
		experience: "5 years",
		status: "ACTIVE",
	},
];