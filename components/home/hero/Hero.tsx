import { StandardButton } from "@/components/buttons/StandardButton";
import { CopyButton } from "@/components/buttons/CopyButton";
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
								typeSpeed={100}
								deleteSpeed={100}
								delaySpeed={1000}
							/>
						</span>
					</h2>
				</Reveal>
				<br></br>
				<div className={styles.buttonbox}>
					<Reveal>
						<StandardButton>
							<a href="mailto:jackcarleo1@gmail.com">Email me</a>
						</StandardButton>
					</Reveal>
				</div>
			</div>
			<DotGrid />
		</section>
	);
};
