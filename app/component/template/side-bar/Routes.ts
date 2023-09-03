export const ACTION = {
	NOTIFICATION: "NOTIFICATION",
	PROFILE: "PROFILE",
	THEME: "THEME",
};
const MAIN_SUB_ROUTE = [
	{
		text: "Users",
		link: "/users",
		iconName: "USER",
	},

	{
		text: "Products",
		link: "/product",
		iconName: "SHOP",
	},
	{
		text: "Orders",
		link: "/orders",
		iconName: "CART",
	},
];

const ROUTES = [
	{
		text: "Dashboard",
		link: "/",
		iconName: "BAR_GRAPH",
	},
	{
		text: "Main",
		iconName: "JOURNALS",
		subRoutes: MAIN_SUB_ROUTE,
	},

	{
		text: "Notification",
		iconName: "BELL",
		action: ACTION.NOTIFICATION,
	},
	{
		text: "Profile",
		iconName: "ADMIN",
		action: ACTION.PROFILE,
	},
];

export interface Route {
	text: string;
	link?: string;
	iconName: string;
	action?: string;
	subRoutes?: Route[];
}

export default ROUTES;
