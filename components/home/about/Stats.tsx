import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillCode size="2.4rem" color="var(--brand)" />
						<span>Skills</span>
					</h4>
					<div className={styles.statGrid}>
						<span className="chip">JavaScript</span>
						<span className="chip">Python</span>
						<span className="chip">TypeScript</span>
						<span className="chip">HTML</span>
						<span className="chip">CSS</span>
						<span className="chip">React</span>
						<span className="chip">GitHub</span>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillSmile size="2.4rem" color="var(--brand)" />
						<span>Hobbies</span>
					</h4>
					<div className={styles.statGrid}>
						<span className="chip">Running</span>
						<span className="chip">Guitar</span>
						<span className="chip">Photography</span>
						<span className="chip">Rock Climbing</span>
						<span className="chip">Gaming</span>
					</div>
				</div>
			</Reveal>
		</div>
	);
};
