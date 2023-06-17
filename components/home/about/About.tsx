import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" />
			<div className={styles.about}>
				<div>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							As a recent graduate of Providence College (2021)
							with a degree in Sociology, my exposure to
							programming was limited to SQL. Though I recognized
							my interest in this field and have focused on
							expanding my knowledge in the years since. SQL
							served as my initial stepping stone, and I am
							grateful for the opportunity to have learned about
							it as a Sociology major (thanks Dr. Chelly).
						</p>
					</Reveal>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							Over the past two years, I have continued to learn
							CS in my free time while working as a server and
							shoe salesmen. during this time, I began by working
							with SQL and R, where I improved my skills in
							cleaning, organizing, and analyzing extensive
							datasets. My next focus was Python where I continued
							to learn about database structuring, along with web
							scraping, data collection, and Flask app
							development. This experience ignited my interest in
							app development, Which lead me to React.
						</p>
					</Reveal>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							This website acts as my first ever hosted react
							application. Below you will see my other projects I
							have worked on which I am proud to share.
						</p>
					</Reveal>
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
