import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
	return (
		<section className="section-wrapper" id="experience">
			<SectionHeader title="Experience" />
			{experience.map((item) => (
				<ExperienceItem key={item.title} {...item} />
			))}
		</section>
	);
};

const experience = [
	{
		title: "Google Data Analytics Certification",
		position: "",
		time: "2022",
		location: "",
		description:
			"Learned the basics of data analysis using R, SQL, and Tableau.",
		skills: ["R", "SQL", "Data-Driven Decision Making", "Tableau"],
	},
	{
		title: "Python for Everybody: University of Michigan",
		position: "",
		time: "2023",
		location: "",
		description:
			"Gained proficiency in Python, object oriented programming, and Database structuring.",
		skills: ["Python", "Web Scraping", "OOP", "Databases", "API's"],
	},
	{
		title: "Sin a Loa & Marathon Sports",
		position: "Resturaunt Server & Retail Sales Associate",
		time: "Currently Employed",
		location: "",
		description:
			"Currently working at Sin A Loa on Salisbury Beach as a server & Marathon Sports downtown Newburyport as a retail sales associate. If you are looking for good tacos and margaritas, stop by Sin a Loa :) While Marathon Sports does not sell margaritas we will gladly get you fitted in some great new running/walking shoes.",
		skills: [
			"Customer Service",
			"Serving",
			"Sales",
			"Communication",
			"Organization",
		],
	},
];
