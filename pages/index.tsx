import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
	return (
		<>
			<Head>
				<title>Jack Carleo | Web Developer</title>
				<meta name="description" content="Portfolio" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home />
		</>
	);
}
