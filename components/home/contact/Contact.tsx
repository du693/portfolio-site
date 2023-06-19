import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
	return (
		<section className="section-wrapper" id="contact">
			<div className={styles.contactWrapper}>
				<Reveal width="100%">
					<h4 className={styles.contactTitle}>
						Contact<span>.</span>
					</h4>
				</Reveal>
				<Reveal width="100%">
					<p className={styles.contactCopy}>
						Feel free to contact me with any inquires on{" "}
						<Link
							href="https://www.linkedin.com/in/jack-carleo-41695423b/"
							target="_blank"
							rel="nofollow"
						>
							Linkedin
						</Link>{" "}
						or{" "}
						<Link
							href="https://www.instagram.com/jackcarleo/"
							target="_blank"
							rel="nofollow"
						>
							Instagram
						</Link>{" "}
					</p>
				</Reveal>
				<Reveal width="100%">
					<Link href="mailto:jackcarleo1@gmail.com">
						<div className={styles.contactEmail}>
							<AiFillMail size="2.4rem" />
							<span>jackcarleo1@gmail.com</span>
						</div>
					</Link>
				</Reveal>
			</div>
		</section>
	);
};
