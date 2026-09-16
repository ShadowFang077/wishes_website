import React, { useEffect, useState } from "react";

export default function Countdown() {
	const [remaining, setRemaining] = useState(11 * 60 * 60 + 59 * 60 + 57);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining((value) => Math.min(12 * 60 * 60, value + 1));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
	const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
	const seconds = String(remaining % 60).padStart(2, "0");

	return (
		<section className="countdown-card glass-card">
			<p className="script-label">Something special is waiting for you...</p>
			<div className="timer" aria-label={`${hours} hours ${minutes} minutes ${seconds} seconds`}>
				{hours} : {minutes} : {seconds}
			</div>
			<p className="tiny-label">Stay here until midnight <span>♥</span></p>
		</section>
	);
}