import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import PageLayout from "./component/template/pageLayout/PageLayout";
import Auth_Zero from "./utlis/auth0/Auth_Zero";
import "./globals.scss";
import Preloader from "./globalRedux/Preloader";
import Providers from "./globalRedux/provider";
import {
	getGlobalData_Order,
	getGlobalData_Users,
	getGlobalData_Products,
} from "./utlis/hooks/getGlobalData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Admin Plus",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const orders = await getGlobalData_Order();
	const users = await getGlobalData_Users();
	const products = await getGlobalData_Products();

	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={inter.className}>
				<UserProvider>
					<Auth_Zero>
						<Preloader order={orders} users={users} products={products} />
						<Providers>
							<PageLayout>{children}</PageLayout>
						</Providers>
					</Auth_Zero>
				</UserProvider>
				<div id="portal"></div>
			</body>
		</html>
	);
}
