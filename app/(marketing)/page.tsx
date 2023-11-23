import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const MarketingPage = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-pink-500">
			<div className="flex flex-row items-center justify-around">
				<div
					className={cn(
						"flex flex-col items-center justify-center w-1/3 px-8 text-white",
						headingFont.className
					)}>
					<h1 className="mb-4 text-5xl font-medium">
						Trello brings all your tasks, teammates, and tools together
					</h1>
					<p className="mb-6 text-xl text-left">
						Keep everything in the same place—even if your team isn’t.
					</p>
					<Button
						className="mt-6 bg-blue-700 hover:bg-blue-900"
						size="lg"
						asChild>
						<Link href="/sign-up">Sign up - it's free!</Link>
					</Button>
				</div>
				<Image
					alt="Trello UI"
					src="/TrelloUI.png"
					width={1052}
					height={786}
					className="w-1/3"
				/>
			</div>
		</div>
	);
};

export default MarketingPage;
