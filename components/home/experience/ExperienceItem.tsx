import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

interface Props {
	title: string;
	company: string;
	time: string;
	location: string;
	description: string;
	skills: string[];
}

export const ExperienceItem = ({
	title,
	company,
	time,
	location,
	description,
	skills,
}: Props) => {
	return (
		<div className={styles.experience}>
			<div className={styles.heading}>
				<Reveal>
					<span className={styles.title}>{title}&nbsp;</span>
				</Reveal>
				<Reveal>
					<span className={styles.company}>{company}</span>
				</Reveal>
			</div>

			<div className={styles.heading}>
				<Reveal>
					<span>{location}</span>
				</Reveal>
			</div>
			<Reveal>
				<p className={styles.description}>{description}</p>
			</Reveal>
			<Reveal>
				<div className={styles.skills}>
					{skills.map((item) => (
						<span key={item} className="chip">
							{item}
						</span>
					))}
				</div>
			</Reveal>
		</div>
	);
};
