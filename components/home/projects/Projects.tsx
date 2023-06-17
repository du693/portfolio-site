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
		title: "Job Scraper",
		imgSrc: "project-imgs/logo.jpg",
		code: "https://github.com/du693/job-scraper",
		projectLink: "",
		tech: ["Python, Flask, HTML, CSS"],
		description:
			"Currently, the job scraper is local python web scraper that compiles results from popular job boards and displays them in a Flask application. I made this project because navigating through each individual job board was taking up loads of time that I could be using to apply to positions and studying. I figured that this project would not only make the job searching process more efficient but also further develop my skills with Python and app development. While the app is still a work in progress I have already started using and loving it. ",
		modalContent: (
			<>
				<p></p>
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
			"Using the dataset 'FitBit Fitness Tracker Data' provided by MÖBIUS on Kaggle I created a mock case-study where I searched for user patterns of usage in their smart device data in order to gain insights that would later better orientate marketing decisions for Bellabeat, a tech company with a focus in women's smart products.",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
	{
		title: "Portfolio Site",
		imgSrc: "project-imgs/portfolio.jpg",
		code: "https://github.com/du693/portfolio-site",
		projectLink: "https://jackcarleo.vercel.app/",
		tech: [
			"React, HTML, Typescript, Javascript, Sass, CSS/JS animations, Framer Motion, Next.js, Vercel",
		],
		description:
			"Inspired by the website created by Tom is loading on youtube, this portfolio website was a my first deployed React project incorporating Typescript, Javascript, Scss, Next.js, and vercel.",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
];
