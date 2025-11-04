"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
	// environment check
	const API_URL =
		process.env.ENVIRONMENT == "PRODUCTION"
			? process.env.NEXT_PUBLIC_PRODUCTION_BACKEND_URL
			: process.env.NEXT_PUBLIC_DEVELOPMENT_BACKEND_URL;

	const ApiTest = async () => {
		const response = await fetch(`${API_URL}/weatherforecast`);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-1 bg-zinc-50 p-3 text-center font-sans dark:bg-black">
			<h1 className="text-7xl font-bold">
				<span className="text-orange-500">Job</span> Tracker
			</h1>
			<h2 className="text-lg font-medium">
				<span className="underline decoration-orange-500">Manage</span>
				{", "}
				<span className="underline decoration-orange-500">
					organize
				</span>{" "}
				and{" "}
				<span className="underline decoration-orange-500">track</span>{" "}
				your job applications with{" "}
				<span className="underline decoration-orange-500">
					job tracker
				</span>
			</h2>
			<h3 className="mt-10 text-lg font-medium">
				Click{" "}
				<span className="text-orange-500 underline">
					<a href="/signup">here</a>
				</span>{" "}
				to sign up
			</h3>
			<div className="absolute top-3 left-3 flex flex-row gap-3 font-medium">
				<a href="/login">Login</a>
				<a href="/signup">Signup</a>
			</div>
		</div>
	);
}
