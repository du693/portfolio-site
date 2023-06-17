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
		skills: ["Python", "Web Scraping", "OOP", "Databases"],
	},
	{
		title: "Sin a Loa",
		position: "Resturaunt Server",
		time: "2023",
		location: "Salisbury, MA",
		description:
			"Currently working at Sin A Loa on Salisbury Beach as a server. Stop by for some great tacos and tequila :)",
		skills: ["Customer Service", "Serving"],
	},
];
