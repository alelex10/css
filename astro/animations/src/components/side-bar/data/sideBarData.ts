import type { menu } from "../types/sideBarTypes";

export const sideBarData: menu[] = [
	{
		title: "markdown",
		options: [
			{
				name: "ejemplos",
				link: "/marckdown/MarkDownSection",
			},
			{
				name: "text",
				link: "/ux-ui/text/TextSection",
			},
		],
	},
	{
		title: "rutas",
		options: [
			{
				name: "configuration",
				link: "/routing/configured/Comfiguration",
			},
			{
				name: "About",
				link: "/about",
			},
		],
	},
	{
		title: "ux-ui",
		options: [
			{
				name: "color",
				link: "/ux-ui/color/ColorSection",
			},
			{
				name: "text",
				link: "/ux-ui/text/TextSection",
			},
			{
				name: "view-transition-a",
				link: "/ux-ui/view-transition/section/ViewTransitionA",
			},
			{
				name: "view-transition-b",
				link: "/ux-ui/view-transition/section/ViewTransitionB",
			},
		],
	},
];
