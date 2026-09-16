import React from "react";
import FloatingElements from "../common/FloatingElements";

export default function Envelope({ onComplete }) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="main-bg">
			<FloatingElements />
			<div className="glass-card envelope-card">
				{open ? (
					<div className="jar-letter">
						<h3>For my Pavani ♥</h3>
						<div className="jar-letter-copy">
							<p>Time means nothing ...!</p>
							<p>Time ante ento anukuntam kadha panda…<br />kaani konni feelings mundu…<br />time ki value ledu anipisthundi.</p>
							<p>Konnisarlu…<br />jeevitham motham gadichina…<br />manam vetikina anandam dorakadu…</p>
							<p>Kaani…<br />kondaru manushulu matram…<br />mana jeevitham lo konni rojulu matrame untaru…<br />kaani aa konni rojulu lo ne…<br />jeevithaniki saripoye anandam ichestharu.</p>
							<p>Years kalisi undadam kaadu…<br />aa moments lo manam ela feel ayyamo…<br />adhi gurthundi pothundi.</p>
							<p>Konni samayalu chinna vi…<br />kaani avi ichina gyapakalu pedda vi…<br />jeevitham motham marchipoleni vi.</p>
							<p>Anduke…<br />time entha undi ani kaadhu panda…<br />evaritho gadipam… ela gadipam ane di mukhyam.</p>
							<p>Endhukante…<br />konni rojulu saripothayi…<br />oka jeevitham motham gurthunchadaniki.</p>
						</div>
						<button onClick={onComplete}>Next  ♥</button>
					</div>
				) : (
					<>
						<h2>A little letter for you...</h2>
						<button className="jar" onClick={() => setOpen(true)} aria-label="Open the letter jar">
							<span>♥</span>
						</button>
						<p className="tiny-label">Tap the cap to open your letter <span>♥</span></p>
					</>
				)}
			</div>
		</div>
	);
}