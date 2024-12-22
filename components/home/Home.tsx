import React from "react";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";

export const Home = () => {
	return (
		<>
			<div>
				<main>
					<Heading />

					<Hero />
				</main>
			</div>
		</>
	);
};
