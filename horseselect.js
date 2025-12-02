import { html, render } from "preact";

const data = {
		croixdunord: {id: "croixdunord", name: "Croix du Nord", image: "assets/croixdunord.jpg"},
		museummile: {id: "museummile", name: "Museum Mile", image: "assets/museummile.jpg"},
		masqueradeball: {id: "masqueradeball", name: "Masquerade Ball", image: "assets/masqueradeball.jpg"},
		fandom: {id: "fandom", name: "Fandom", image:"assets/fandom.jpg"},
		satonoshining: {id: "satonoshining", name: "Satono Shining", image:"assets/satonoshining.jpg"},
		shohei: {id: "shohei", name: "Shohei", image:"assets/shohei.jpg"},
		giovanni: {id: "giovanni", name: "Giovanni", image:"assets/giovanni.jpg"},
		eriking: {id:"eriking", name: "Eri King", image:"assets/eriking.jpg"},
		readiness: {id: "readiness", name: "Readiness", image:"assets/readiness.jpg"},
		lilaemblem: {id:"lilaemblem", name: "Lila Emblem", image:"assets/lilaemblem.jpg"},
		ms: {id:"ms", name: "M's", image:"assets/ms.jpg"},
		toppiborn: {id: "toppiborn", name: "Toppi Born", image:"assets/toppiborn.jpg"},
		faustrasen: {id:"faustrasen", name: "Faust Rasen", image:"assets/faustrasen.jpg"},
		feiernkranz: {id:"feiernkranz", name: "Feiern Kranz", image:"assets/feiernkranz.jpg"},
		kalamatianos: {id: "kalamatianos", name: "Kalamatianos", image:"assets/kalamatianos.jpg"},
		hooatman: {id: "hooatman", name: "Ho O Atman", image:"assets/hooatman.jpg"},
		nishinoagent: {id: "nishinoagent", name: "Nishino Agent", image:"assets/nishinoagent.jpg"},
		dragonboost: {id: "dragonboost", name: "Dragon Boost", image:"assets/dragonboost.jpg"}
	};
function HorseSelect({ selectedHorses, onHorseCheckbox }){
	const handleChange = (e) => {
		const id = e.target.id;
    const isChecked = e.target.checked;
    const horseObj = data[id];

		onHorseCheckbox(horseObj, isChecked);
	}
	
return html `
<section id="horseSelect">
<h1>Select which horse you wish to bet on.</h1>
${Object.entries(data).map(([id, horse]) => html`
  <input type="checkbox"
  id=${id}
  name="horseSelected"
  checked=${selectedHorses.some(h => h.name === horse.name)}
  onChange=${handleChange}
  />
  <label for=${id}>${horse.name}</label>
	`)}
	</section>`;
  }
  export default HorseSelect;
	// <input type="checkbox" name="horseSelected" id="croixdunord" onChange=${onHorseCheckbox}/>
	// 		<label for="croixdunord">Croix du Nord</label>
	// 		<input type="checkbox" name="horseSelected" id="museummile" onChange=${onHorseCheckbox}/>
	// 		<label for="museummile">Museum Mile</label>
	// 		<input type="checkbox" name="horseSelected" id="masqueradeball" onChange=${onHorseCheckbox}/>
	// 		<label for="masqueradeball">Masquerade Ball</label>
	// 		<input type="checkbox" name="horseSelected" id="fandom" onChange=${onHorseCheckbox}/>
	// 		<label for="fandom">Fandom</label>
	// 		<input type="checkbox" name="horseSelected" id="satonoshining" onChange=${onHorseCheckbox}/>
	// 		<label for="satonoshining">Satono Shining</label>
	// 		<input type="checkbox" name="horseSelected" id="shohei" onChange=${onHorseCheckbox}/>
	// 		<label for="shohei">Shohei</label>
	// 		<input type="checkbox" name="horseSelected" id="giovanni" onChange=${onHorseCheckbox}/>
	// 		<label for="giovanni">Giovanni</label>
	// 		<input type="checkbox" name="horseSelected" id="eriking" onChange=${onHorseCheckbox}/>
	// 		<label for="eriking">Eri King</label>
	// 		<input type="checkbox" name="horseSelected" id="readiness" onChange=${onHorseCheckbox}/>
	// 		<label for="readiness">Readiness</label>
	// 		<input type="checkbox" name="horseSelected" id="lilaemblem" onChange=${onHorseCheckbox}/>
	// 		<label for="lilaemblem">Lila Emblem</label>
	// 		<input type="checkbox" name="horseSelected" id="ms" onChange=${onHorseCheckbox}/>
	// 		<label for="ms">M's</label>
	// 		<input type="checkbox" name="horseSelected" id="toppiborn" onChange=${onHorseCheckbox}/>
	// 		<label for="toppiborn">Toppi Born</label>
	// 		<input type="checkbox" name="horseSelected" id="faustrasen" onChange=${onHorseCheckbox}/>
	// 		<label for="faustrasen">Faust Rasen</label>
	// 		<input type="checkbox" name="horseSelected" id="feiernkranz" onChange=${onHorseCheckbox}/>
	// 		<label for="feiernkranz">Feiern Kranz</label>
	// 		<input type="checkbox" name="horseSelected" id="kalamatianos" onChange=${onHorseCheckbox}/>
	// 		<label for="kalamatianos">Kalamatianos</label>
	// 		<input type="checkbox" name="horseSelected" id="hooatman" onChange=${onHorseCheckbox}/>
	// 		<label for="hooatman">Ho O Atman</label>
	// 		<input type="checkbox" name="horseSelected" id="nishinoagent" onChange=${onHorseCheckbox}/>
	// 		<label for="nishinoagent">Nishino Agent</label>
	// 		<input type="checkbox" name="horseSelected" id="dragonboost" onChange=${onHorseCheckbox}/>
	// 		<label for="dragonboost">Dragon Boost</label>