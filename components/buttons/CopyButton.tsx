import { MouseEventHandler } from "react";
import styles from "./copybutton.module.scss";

interface Props {
	children: string | JSX.Element;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CopyButton = ({ children, onClick }: Props) => {
	const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (typeof children === "string") {
			navigator.clipboard.writeText(children);
		}
	};

	return (
		<div>
			<button onClick={handleCopy} className={styles.buttonstyle}>
				{children}
			</button>
		</div>
	);
};
