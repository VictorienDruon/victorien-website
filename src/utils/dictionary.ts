import type { icons } from "lucide";

type Link = {
	label: string;
	href: string;
	icon: keyof typeof icons;
	isExternal?: boolean;
};

export const pageLinks: Link[] = [
	{
		label: "Home",
		href: "/#",
		icon: "Home",
	},
	{
		label: "About",
		href: "/#about",
		icon: "User",
	},
	{
		label: "Projects",
		href: "/#projects",
		icon: "Code",
	},
];

export const socialLinks: Link[] = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/victorien-druon",
		icon: "Linkedin",
		isExternal: true,
	},
	{
		label: "GitHub",
		href: "https://github.com/VictorienDruon",
		icon: "Github",
		isExternal: true,
	},
	{
		label: "Twitter",
		href: "https://twitter.com/druon_victorien",
		icon: "Twitter",
		isExternal: true,
	},
];
