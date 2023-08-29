"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Loader from "@/app/component/atom/loader/Loader";
import { redirect } from "next/navigation";
import React from "react";

const Auth_Zero = ({ children }: { children: React.ReactNode }) => {
	const { user, isLoading, error } = useUser();

	if (isLoading) {
		return <Loader />;
	}

	if (!user) {
		redirect("/api/auth/login");
	}

	return children;
};

export default Auth_Zero;
