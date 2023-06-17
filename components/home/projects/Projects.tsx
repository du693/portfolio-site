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
		description: "",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
	{
		title: "Project-Name",
		imgSrc: "project-imgs/bellabeat.jpg",
		code: "https://github.com/du693/bellabeat-case-study",
		projectLink: "https://du693.github.io/bellabeat-case-study/",
		tech: ["R, Rmarkdown, HTML"],
		description: "",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
	{
		title: "Project-Name",
		imgSrc: "",
		code: "https://www.github.com",
		projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		tech: ["Tech-Here"],
		description: "",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
	{
		title: "Project-Name",
		imgSrc: "",
		code: "https://www.github.com",
		projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		tech: ["Tech-Here"],
		description: "",
		modalContent: (
			<>
				<p></p>
			</>
		),
	},
];
