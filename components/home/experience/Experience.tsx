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
		title: `SDR I\n`,
		company: "ZoomInfo",
		time: " Currently Employed",
		location: "",
		description:
			"Engaging with prospective clients through phone calls to qualify and nurture leads.",
		skills: ["Value Propping", "Communication", "Sales", "Salesforce"],
	},
	{
		title: "Customer Service Representative",
		company: "Analog Devices",
		time: "2022-2023",
		location: "",
		description:
			"Admin work confirming/analyzing PO's and EDI transfers with clients.",
		skills: [
			"Customer Service",
			"Serving",
			"Sales",
			"Communication",
			"Organization",
		],
	},
	{
		title: "Certifications",
		company: "",
		time: "",
		location: "",
		description: ``,
		skills: [
			"Python for Everybody: University of Michigan\n",
			"Google Data Analytics Certification",
		],
	},
];
