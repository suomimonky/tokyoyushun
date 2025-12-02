import { html } from "preact";
import Admin from "./admin.js";
import HorseBetCard from "./horsebetcard.js";

function Submission({ name, email, phone, horses }){
  return html `
  <section>
  <h1>${name}'s Bets</h1>
  <section id="info">
  <p><b>Email</b>: ${email}</p>
  <p><b>Phone number</b>: ${phone} </p>
  </section>
  </section>
  <section id="bets-placed">
  <h1>Bets placed</h1>
  <div class="betSubmission">
  <section class="betSubmission">
  ${horses.map(horse => html`
    <${HorseBetCard}
    name=${horse.name} 
    betType=${horse.betType}
    image=${horse.image}/>
    `
  )}
  </section>
  </div>
  </section>`;
}
export default Submission;