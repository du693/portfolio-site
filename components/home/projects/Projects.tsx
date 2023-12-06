import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Projects" />

			<div className={styles.projects}>
				{projects.map((project) => {
					return <Project key={project.title} {...project} />;
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: "Cheep Bird Watching",
		imgSrc: "project-imgs/backgroundImage.png",
		code: "https://github.com/du693/cheep",
		projectLink: "https://github.com/du693/cheep",
		tech: ["Python, Flask, HTML, CSS"],
		description:
			"With Cheep, you can document your sightings and view a detailed map filled with contributions from users all over New England. Ideal for both casual bird enthusiasts and serious birdwatchers, our app offers a clear and concise platform for tracking and sharing avian sightings. Dive in and enrich our collective understanding of local bird populations. Join today and contribute to a comprehensive bird spotting network.",
		modalContent: (
			<>
				<p>
					With Cheep, you can document your sightings and view a
					detailed map filled with contributions from users all over
					New England. Ideal for both casual bird enthusiasts and
					serious birdwatchers, our app offers a clear and concise
					platform for tracking and sharing avian sightings. Dive in
					and enrich our collective understanding of local bird
					populations. Join today and contribute to a comprehensive
					bird spotting network.
				</p>
			</>
		),
	},
	{
		title: "Bellabeat Case Study",
		imgSrc: "project-imgs/bellabeat.jpg",
		code: "https://github.com/du693/bellabeat-case-study",
		projectLink: "https://du693.github.io/bellabeat-case-study/",
		tech: ["R, Rmarkdown, HTML"],
		description:
			"Mock case study for Bellabeat, a women's smart product company. ",
		modalContent: (
			<>
				<p>
					Using the dataset 'FitBit Fitness Tracker Data' provided by
					MÖBIUS on Kaggle I created a mock case-study where I
					searched for user patterns of usage in their smart device
					data in order to gain insights that would later better
					orientate marketing decisions for Bellabeat, a tech company
					with a focus in women's smart products.
				</p>
				<p>
					This was the final assignment for the Google Analytics
					Certification.
				</p>
			</>
		),
	},
	{
		title: "Portfolio Site",
		imgSrc: "project-imgs/portfolio11.jpeg",
		code: "https://github.com/du693/portfolio-site",
		projectLink: "https://jackcarleo.vercel.app/",
		tech: [
			"React, HTML, Typescript, Javascript, Sass, CSS/JS animations, Framer Motion, Next.js, Vercel",
		],
		description: "And here is the source code for this porfolio website...",
		modalContent: (
			<>
				<p>
					Here is the source code for this porfolio website. This
					portfolio website is my first deployed React project
					incorporating Typescript, Javascript, Scss, Next.js, and
					vercel.
				</p>
			</>
		),
	},
];
