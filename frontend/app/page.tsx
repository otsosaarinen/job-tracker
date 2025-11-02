"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
	const ApiTest = async () => {
		const response = await fetch("");
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Button onClick={ApiTest}>API</Button>
		</div>
	);
}
