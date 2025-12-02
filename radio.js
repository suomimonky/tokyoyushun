import { html } from "preact";

function Radio( { children}){
  return html `<section class="radioContainer">
  ${children}
  </section>`;
}
export default Radio;