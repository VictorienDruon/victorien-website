import type { icons } from "lucide";

type SocialLink = {
	icon: keyof typeof icons;
	href: string;
};

export const pageLinks = [
	{ label: "Home", href: "/#" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/#projects" },
];

export const socialLinks: SocialLink[] = [
	{
		icon: "Github",
		href: "https://github.com/VictorienDruon",
	},
	{
		icon: "Twitter",
		href: "https://twitter.com/druon_victorien",
	},
	{
		icon: "Linkedin",
		href: "https://www.linkedin.com/in/victorien-druon-756991294/",
	},
];
