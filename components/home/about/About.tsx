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
							D1 track athlete, 6 months in customer service, 1
							year in sales at ZoomInfo. If you are a small
							business looking to grow and want to see how
							ZoomInfo can help you do it book a time with me{" "}
							<a
								href="https://zoominfo.chilipiper.com/book/me/jack-carleo"
								className={`${styles.highlight}`}
							>
								Here.
							</a>
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
			</div>
		</section>
	);
};
