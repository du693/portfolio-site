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
							As a recent graduate of Providence College (2021)
							with a degree in Sociology, I had little knowledge
							of anything programming related outside of SQL. SQL
							was introduced to me in my Social Research Methods
							class my senior year (thanks Dr. Chelly) and though
							I had very limited understanding of the topic
							outside of very basic syntax I was interested in
							learning more.
						</p>
					</Reveal>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							SQL was the beginning of my journey that led me to
							where I am now. To simplify it, my path looked like
							this: SQL &#8594; R &#8594; Python(Flask) &#8594;
							ReactJS. I have very much enjoyed learning about
							each of these languages and their capabilities, but
							Python and ReactJS have most definitely become my
							largest focus in the past year.
						</p>
					</Reveal>
					<p className={`${styles.aboutText}`}>
						While I am currently working as a retail sales associate
						at Marathon Sports and a server at Sin A Loa on
						Salisbury Beach, I continue to work on projects in my
						free time.
					</p>
					<Reveal>
						<p className={`${styles.aboutText}`}>
							My most recent project is this very website. This
							represents my first ever deployed React application,
							if you continue to scroll you will find the other
							projects I have worked on and take pride in sharing
							with you.
						</p>
					</Reveal>
					<Reveal>
						<div>
							<p className={`${styles.aboutText}`}>Cheers,</p>
							<p>-Jack</p>
						</div>
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
