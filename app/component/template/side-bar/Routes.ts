const MAIN_SUB_ROUTE = [
	{
		text: "Users",
		link: "/",
		iconName: "USER",
	},

	{
		text: "Products",
		link: "/",
		iconName: "SHOP",
	},
	{
		text: "Orders",
		link: "/",
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
		link: "/",
		iconName: "JOURNALS",
		subRoutes: MAIN_SUB_ROUTE,
	},

	{
		text: "Notification",
		link: "/",
		iconName: "BELL",
	},
	{
		text: "Profile",
		link: "/",
		iconName: "ADMIN",
	},
	{
		text: "Logout",
		link: "/",
		iconName: "LOGOUT",
	},
];

export interface Route {
	text: string;
	link: string;
	iconName: string;
	subRoutes?: Route[];
}
export default ROUTES;
