import { html } from "preact";

function BetPlacer({name, children}){
  return html `
  <section id="betPlacerInfo">
  <section id="h1section">
  <h1> ${name}'s bets</h3>
  </section>
  <section>
  ${children}
  </section>
  </section>`;
}
export default BetPlacer;