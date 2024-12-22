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
								typeSpeed={100}
								deleteSpeed={100}
								delaySpeed={1000}
							/>
						</span>
					</h2>
				</Reveal>
				<Reveal>
					<div className={styles.aboutCopy}>
						<b>
							If you are a small business owner looking to grow -
							book a time with me below to see how ZoomInfo can
							help.
							<br></br>
							<br></br>
							<div className={styles.box}>
								<div className={styles.highlight}>
									Work Email:
								</div>

								<div className={styles.marginL}>
									jack.carleo@zoominfo.com
								</div>
							</div>
							<div className={`${styles.box}`}>
								<div className={`${styles.highlight}`}>
									Personal Email:
								</div>

								<div className={styles.marginL}>
									jackcarleo1@gmail.com
								</div>
							</div>
						</b>
					</div>
				</Reveal>
				<div className={styles.buttonbox}>
					<Reveal>
						<StandardButton>
							<a href="https://zoominfo.chilipiper.com/book/me/jack-carleo">
								Book a time with me
							</a>
						</StandardButton>
					</Reveal>
				</div>
			</div>
			<DotGrid />
		</section>
	);
};
