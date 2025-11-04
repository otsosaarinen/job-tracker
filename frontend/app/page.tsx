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
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Button onClick={ApiTest}>API</Button>
		</div>
	);
}
