import React from "react";

const elements = ["🦋", "♡", "✦", "✿", "🦋", "♥", "✧", "🦋", "♡", "✿", "🦋", "✦"];

export default function FloatingElements() {
	return (
		<div className="floating-elements" aria-hidden="true">
			{elements.map((element, index) => (
				<span key={`${element}-${index}`} style={{ "--i": index }}>{element}</span>
			))}
		</div>
	);
}
