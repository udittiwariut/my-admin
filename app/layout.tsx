import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import PageLayout from "./component/template/pageLayout/PageLayout";
import Auth_Zero from "./utlis/auth0/Auth_Zero";
import "./globals.scss";

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
	return (
		<html lang="en">
			<body className={inter.className}>
				<UserProvider>
					<Auth_Zero>
						<PageLayout>{children}</PageLayout>
					</Auth_Zero>
				</UserProvider>
				<div id="portal"></div>
			</body>
		</html>
	);
}
