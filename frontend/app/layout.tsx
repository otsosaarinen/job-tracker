import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Button } from "@/components/ui/button";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Github } from "lucide-react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Job Tracker",
	description: "Track your job applications!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<div className="absolute top-3 right-3 flex flex-row gap-3">
						<Button variant="outline" size="icon">
							<a
								href="https://github.com/otsosaarinen/job-tracker"
								target="_blank"
							>
								<Github />
							</a>
						</Button>
						<ModeToggle />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
