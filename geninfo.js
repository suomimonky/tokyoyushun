import { html, render } from "preact";
import Radio from "./radio.js";
import Form from "./form.js";


function GenInfo({ name, email, phone, setName, setEmail, setPhone, horseCount, onHorseCountChange}) {
  return html`<section id="betSelect">
				<h1>Personal &bet information</h1>
				<label for="name">Name:</label>
		 		<input type="text" name="name" id="name" required max=255 value=${name} onInput=${(e) => setName(e.target.value)}/>
				<label for="email">Email:</label>
				<input type="email" name="email" id="email" required value=${email} onInput=${(e) => setEmail(e.target.value)}/>
				<label for="phone">Phone:</label>
				<input type="tel" name="phone" id="phone" required value=${phone} onInput=${(e) => setPhone(e.target.value)}/>
				<label for="horseCount">How many horses do you wish to bet on(1-3)?</label>
				<input type="number" id="horseCount" name="horseCount" min="1" max="3" value=${horseCount}
      onInput=${onHorseCountChange}/>
				<${Radio}>
				<p>How did you hear about this race?</p>
				<input type="radio" name="moreinfo" id="socialmedia" checked/>
				<label for="socialmedia">Social Media</label>
				<input type="radio" name="moreinfo" id="flyer"/>
				<label for="flyer">Flyer</label>
				<input type="radio" name="moreinfo" id="daria"/>
				<label for="daria">Daria informed me</label>
				<//>
	</section>`;
  }
  export default GenInfo;