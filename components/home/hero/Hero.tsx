import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
	return (
		<section className={`section-wrapper ${styles.hero}`}>
			<div className={styles.copyWrapper}>
				<Reveal>
					<h1 className={styles.title}>
						Hey, I&apos;m Jack<span>.</span>
					</h1>
				</Reveal>
				<Reveal>
					<h2 className={styles.subTitle}>
						I&apos;m a{" "}
						<span>
							<Typewriter
								loop={true}
								words={[
									"Developer",
									"Web Designer",
									"Data Analyst",
								]}
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</h2>
				</Reveal>
				<Reveal>
					<p className={styles.aboutCopy}>
						I&apos;ve spent the last 2 years teaching myself how to
						program. This website acts as both a portfolio and
						project. Please feel free to look around and make sure
						to contact me with any questions!
					</p>
				</Reveal>
				<Reveal>
					<StandardButton
						onClick={() =>
							document.getElementById("contact")?.scrollIntoView()
						}
					>
						Contact me
					</StandardButton>
				</Reveal>
			</div>
			<DotGrid />
		</section>
	);
};
