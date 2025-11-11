"use client";

import Link from "next/link";

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
			<h2 className="text-xl font-medium max-w-125">
				Manage, organize and track your job applications with job tracker
			</h2>
			<div className="flex flex-row gap-3 text-xl font-medium mt-10">
				<Link className="rounded-sm duration-200 transition-color hover:bg-neutral-900 hover:text-orange-500 w-25 bg-orange-500 px-3 py-1" href="/login">Login</Link>
				<Link className="rounded-sm duration-200 transition-color hover:bg-neutral-900 hover:text-orange-500 w-25 bg-orange-500 px-3 py-1" href="/signup">Signup</Link>
			</div>
		</div>
	);
}
