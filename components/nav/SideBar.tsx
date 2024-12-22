import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
	const [selected, setSelected] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll(".section-wrapper");

		const options = {
			threshold: 0.3,
		};

		const callback = (entries: any) => {
			entries.forEach((entry: any) => {
				if (entry.isIntersecting) {
					setSelected(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);

		sections.forEach((section) => observer.observe(section));
	}, []);

	return (
		<motion.nav
			initial={{ x: -70 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.5 }}
			className={styles.sideBar}
		></motion.nav>
	);
};
