import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export const About = () => {
	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" />
			<div className={styles.about}>
				<div>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							Since graduating Providence College (2021) as a D1
							athlete with a degree in Sociology, I have been
							developing my experience as a salesman and web
							developer. Check out some of my projects and
							experience below.
						</p>
					</Reveal>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							My most recent project is{" "}
							<Link
								href="https://github.com/du693/cheep"
								target="_blank"
								rel="nofollow"
								className={`${styles.highlight}`}
							>
								Titanic - Machine Learning from Disaster
							</Link>{" "}
							A project to display a understanding of data
							pipelining and basic machine learning concepts.
							creating both a RFC and Logistic Regression model,
							then comparing performance.
						</p>
					</Reveal>
					<br></br>
					<Reveal>
						<div className={styles.links}>
							<div className={styles.linksText}>
								<span>My links</span>
								<AiOutlineArrowRight />
							</div>
							<MyLinks />
						</div>
					</Reveal>
				</div>
				<Stats />
			</div>
		</section>
	);
};
