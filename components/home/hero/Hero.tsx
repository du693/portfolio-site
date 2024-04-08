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
						<span>
							<Typewriter
								loop={true}
								words={[
									"An SDR at ZoomInfo",
									"A Web Developer",
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
						<b>
							Currently helping companies Go-To-Market at ZoomInfo
							as an SDR while continuing my education as a web
							developer.
						</b>
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
